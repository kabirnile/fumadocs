import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-zinc-900 transition-colors duration-300 dark:bg-[#09090b] dark:text-zinc-100">
      
      {/* Background Ambient Mesh Gradients (Light & Dark Compatible) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18)_0%,transparent_70%)] blur-[120px] dark:bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.35)_0%,transparent_70%)]" />
        <div className="absolute top-96 -left-48 h-[500px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)] blur-[130px] dark:bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.18)_0%,transparent_70%)]" />
        <div className="absolute top-[800px] -right-48 h-[600px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] blur-[140px] dark:bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2)_0%,transparent_70%)]" />
        {/* Subtle dot overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] dark:opacity-30" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8 lg:pt-28">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50/80 px-3.5 py-1 text-xs font-medium text-amber-800 shadow-sm backdrop-blur-md dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-300">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          Deducia Next-Gen Tech Architecture
        </div>

        {/* Main Title */}
        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          Build excellent documentation,{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 bg-clip-text text-transparent dark:from-yellow-200 dark:via-amber-300 dark:to-yellow-500">
            your style.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg lg:text-xl dark:text-zinc-400">
          The unified developer platform by <strong>Deducia Inc.</strong> Powering high-performance knowledge hubs, AI synthesis, and scalable engineering systems.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-zinc-950 shadow-md transition-all hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98] dark:bg-[#fff0a8] dark:hover:bg-yellow-200"
          >
            Getting Started
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/docs/amu/btech"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/60 px-7 py-3 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur-md transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Explore AMU Modules
          </Link>
        </div>

        {/* Live System Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8 border-y border-zinc-200/80 py-6 dark:border-zinc-800/80">
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">99.99%</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Platform Uptime</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">&lt;15ms</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">AI Vector Retrieval</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">100%</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Type-Safe MDX</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">Edge</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Global Deployment</p>
          </div>
        </div>

        {/* Interactive Dashboard Preview */}
        <div className="relative mt-16 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100/50 p-2 shadow-2xl backdrop-blur-xl sm:p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
          
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3 px-2 dark:border-zinc-800">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-red-400 dark:bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400 dark:bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400 dark:bg-emerald-500/80" />
            </div>
            <div className="hidden sm:flex items-center rounded-md bg-white px-4 py-1 text-xs font-mono text-zinc-500 shadow-sm border border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400">
              https://deducia.com/dashboard/analytics
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">System Healthy</span>
            </div>
          </div>

          {/* Inner Dashboard Layout */}
          <div className="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-12">
            
            {/* Sidebar Mock */}
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-1 rounded-xl border border-zinc-200 bg-white/70 p-3 text-left dark:border-zinc-800/80 dark:bg-zinc-950/70">
              <div className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Core Console
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Overview Metrics
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Documentation Repo
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Gemini AI Engine
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Cloud Configurations
              </div>
            </div>

            {/* Main Center Stats */}
            <div className="col-span-1 lg:col-span-9 flex flex-col gap-4 text-left">
              
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/70">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Total Indexed Pages</span>
                  <div className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">12,480+</div>
                  <span className="mt-1 inline-block text-[11px] font-medium text-emerald-600 dark:text-emerald-400">↑ 18% from last build</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/70">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Vector Search Queries</span>
                  <div className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">984.2K</div>
                  <span className="mt-1 inline-block text-[11px] font-medium text-emerald-600 dark:text-emerald-400">↑ 99.8% precision</span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/70">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Edge Network Cache</span>
                  <div className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">99.4%</div>
                  <span className="mt-1 inline-block text-[11px] font-medium text-amber-600 dark:text-amber-400">Global zero-lag</span>
                </div>
              </div>

              {/* Activity Chart Bar Visualization */}
              <div className="rounded-xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-950/70">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-900">
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Real-Time Traffic & Semantic Queries</span>
                  <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-mono text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">Live 60s</span>
                </div>
                <div className="mt-4 flex h-28 items-end gap-1.5 sm:gap-2">
                  {[40, 65, 30, 80, 95, 70, 85, 45, 60, 75, 90, 100, 85, 70, 95, 60, 80, 90, 75, 88].map((val, idx) => (
                    <div key={idx} className="group relative flex-1 bg-zinc-200 hover:bg-amber-400 transition-all rounded-t-sm dark:bg-zinc-800 dark:hover:bg-amber-400" style={{ height: `${val}%` }}>
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 hidden group-hover:block rounded bg-zinc-900 px-1.5 py-0.5 text-[9px] text-white shadow dark:bg-zinc-100 dark:text-zinc-900">
                        {val}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Bento Grid Feature Showcase */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Enterprise Capabilities</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            Engineered for Modern Scale
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Bento Card 1 */}
          <div className="group rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur-md transition hover:border-amber-500/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-amber-400/40">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Instant Vector Search</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Flexsearch and hybrid indexing enable sub-millisecond document retrieval across thousands of categorized files.
            </p>
          </div>

          {/* Bento Card 2 */}
          <div className="group rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur-md transition hover:border-amber-500/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-amber-400/40">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Gemini 1.5 Synthesis</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Integrated real-time streaming AI answers your questions accurately with page-level context grounding.
            </p>
          </div>

          {/* Bento Card 3 */}
          <div className="group rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur-md transition hover:border-amber-500/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-amber-400/40">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">Isolated Directory Roots</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Clean sidebar scoping via <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs font-mono dark:bg-zinc-800">meta.json</code> ensures zero menu clutter across massive directories.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-amber-50/50 to-white/90 p-8 shadow-xl backdrop-blur-md sm:p-12 dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-950/80">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Ready to explore Deducia Inc.?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
            Access organized engineering roadmaps, question banks, and AI documentation right now.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/docs"
              className="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-zinc-950 shadow-md transition hover:bg-amber-300 dark:bg-[#fff0a8]"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200/80 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-500">
        © {new Date().getFullYear()} Deducia Inc. All rights reserved. Built with Next.js & Fumadocs.
      </footer>

    </div>
  );
}
