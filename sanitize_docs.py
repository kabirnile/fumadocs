import os
import re
from pathlib import Path

DOCS_DIR = Path(r"content/docs")

def sanitize_content(content: str) -> str:
    # 1. Separate Frontmatter
    fm_match = re.match(r"^---\n(.*?)\n---\n", content, re.DOTALL)
    if fm_match:
        frontmatter = fm_match.group(0)
        body = content[len(frontmatter):]
    else:
        frontmatter = "---\ntitle: Document\n---\n\n"
        body = content

    # 2. Convert HTML comments to JSX comments
    body = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body, flags=re.DOTALL)

    # 3. Protect Code Blocks and inline code
    code_blocks = []
    def save_code(m):
        code_blocks.append(m.group(0))
        return f"__SAFE_CODE_{len(code_blocks)-1}__"

    body = re.sub(r'```[\s\S]*?```', save_code, body)
    body = re.sub(r'`[^`\n]+`', save_code, body)

    # 4. Remove unsupported / broken raw HTML tags while keeping valid self-closing ones
    body = re.sub(r'<br\s*/?>', '<br />', body, flags=re.I)
    body = re.sub(r'<hr\s*/?>', '<hr />', body, flags=re.I)
    
    # 5. Replace any '<' or '>' that is NOT a clean Markdown header or math block with HTML entities
    # Escapes things like <r18>, < 5, <], <<, etc.
    def escape_tags(match):
        tag = match.group(0)
        if tag in ['<br />', '<hr />']:
            return tag
        return tag.replace('<', '&lt;').replace('>', '&gt;')

    body = re.sub(r'<[^>]*>', escape_tags, body)
    body = body.replace('<', '&lt;').replace('>', '&gt;')
    # Restore valid self-closing tags
    body = body.replace('&lt;br /&gt;', '<br />').replace('&lt;hr /&gt;', '<hr />')

    # 6. Escape JSX expressions ({ and }) in plain text
    body = body.replace('{', '&#123;').replace('}', '&#125;')

    # 7. Restore protected code blocks
    for idx, block in enumerate(code_blocks):
        body = body.replace(f"__SAFE_CODE_{idx}__", block)

    # 8. Clean broken local image imports
    def filter_images(m):
        src = m.group(2)
        if src.startswith('http://') or src.startswith('https://'):
            return m.group(0)
        return "" # Strip broken image relative links

    body = re.sub(r'!\[(.*?)\]\((.*?)\)', filter_images, body)

    return frontmatter + body

def main():
    count = 0
    for ext in ("*.mdx", "*.md"):
        for file_path in DOCS_DIR.rglob(ext):
            try:
                raw_text = file_path.read_text(encoding="utf-8", errors="ignore")
                clean_text = sanitize_content(raw_text)
                file_path.write_text(clean_text, encoding="utf-8")
                count += 1
            except Exception as e:
                print(f"Error cleaning {file_path.name}: {e}")
                
    print(f"[✓] Successfully sanitized {count} documentation files.")

if __name__ == "__main__":
    main()
    