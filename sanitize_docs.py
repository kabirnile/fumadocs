import os
import re
from pathlib import Path

DOCS_DIR = Path(r"content/docs")

def clean_file(file_path: Path):
    try:
        content = file_path.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return

    # 1. Preserve or inject valid frontmatter
    fm_match = re.match(r"^---\n(.*?)\n---\n", content, re.DOTALL)
    if fm_match:
        frontmatter = fm_match.group(0)
        body = content[len(frontmatter):]
    else:
        clean_title = file_path.stem.replace('-', ' ').title()
        frontmatter = f"---\ntitle: \"{clean_title}\"\n---\n\n"
        body = content

    # 2. Convert HTML comments <!-- --> to JSX comments {/* */}
    body = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body, flags=re.DOTALL)

    # 3. Self-close <br> and <hr> tags
    body = re.sub(r'<br\s*>', '<br />', body, flags=re.I)
    body = re.sub(r'<hr\s*>', '<hr />', body, flags=re.I)

    # 4. Strip unsafe raw HTML tags
    body = re.sub(r'</?(?:u|font|center|span|div|table|tr|td|th|tbody|thead)[^>]*>', '', body, flags=re.I)

    # 5. Temporarily protect code blocks from escaping
    code_blocks = []
    def save_code(m):
        code_blocks.append(m.group(0))
        return f"__CODE_BLOCK_{len(code_blocks)-1}__"

    body = re.sub(r'```[\s\S]*?```', save_code, body)
    body = re.sub(r'`[^`\n]+`', save_code, body)

    # 6. Escape JSX expressions ({ and }) in plain text
    body = body.replace('{', '&#123;').replace('}', '&#125;')

    # 7. Escape stray '<' comparison operators
    body = re.sub(r'<(?![a-zA-Z/!])', '&lt;', body)

    # 8. Restore protected code blocks
    for idx, block in enumerate(code_blocks):
        body = body.replace(f"__CODE_BLOCK_{idx}__", block)

    # 9. Verify and remove broken image imports
    def check_image(m):
        alt = m.group(1)
        src = m.group(2)
        # If absolute URL (http/https), keep it
        if src.startswith("http://") or src.startswith("https://"):
            return m.group(0)
        # Check if local file exists
        img_resolved = (file_path.parent / src).resolve()
        if img_resolved.exists():
            return m.group(0)
        return "" # Remove broken image reference so Webpack does not fail

    body = re.sub(r'!\[(.*?)\]\((.*?)\)', check_image, body)

    file_path.write_text(frontmatter + body, encoding="utf-8")

# Run cleanup across all documentation files
count = 0
for ext in ("*.mdx", "*.md"):
    for doc in DOCS_DIR.rglob(ext):
        clean_file(doc)
        count += 1

print(f"[✓] Successfully sanitized {count} documentation files.")
