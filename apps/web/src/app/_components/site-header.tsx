import Link from "next/link";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M4 12 12 4m0 0H5m7 0v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
      <a
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground outline-none transition-transform duration-200 focus:translate-y-0 focus:ring-2 focus:ring-foreground"
        href="#main-content"
      >
        跳到主要内容
      </a>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            className="rounded-sm text-sm font-bold tracking-[-0.04em] outline-none transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            href="/"
          >
            OPEN UI REGISTRY
          </Link>

          <nav aria-label="主导航" className="flex items-center gap-1 sm:gap-2">
            <Link
              className="flex min-h-11 items-center rounded-md px-3 text-xs font-bold text-foreground outline-none transition-colors duration-200 hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent"
              href="/#catalog"
            >
              组件目录
            </Link>
            <a
              className="hidden min-h-11 items-center rounded-md px-3 text-xs text-muted-foreground outline-none transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent sm:flex"
              href="/r/registry.json"
            >
              Registry JSON
            </a>
            <a
              className="flex min-h-11 items-center gap-2 rounded-md px-3 text-xs text-muted-foreground outline-none transition-colors duration-200 hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
              href="https://github.com/HuangYuChuh/open-ui-registry"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
              <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
