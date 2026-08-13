import { CatalogExplorer } from "./_components/catalog-explorer";
import { SiteHeader } from "./_components/site-header";
import { catalogItems, catalogTaxonomy } from "@/lib/catalog-data";

const classificationLayers = [
  {
    index: "01",
    title: "组件类别",
    description:
      "稳定的导航层：组件在界面中承担什么功能，例如数据展示、输入或导航。",
  },
  {
    index: "02",
    title: "产品场景",
    description:
      "组件适合用在哪里，例如旅行、商业、AI 产品或开发者工具。",
  },
  {
    index: "03",
    title: "已验证能力",
    description:
      "实际完成了哪些检查：响应式、无障碍、深色模式、SSR 兼容性和动效。",
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <main id="main-content">
        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-8 sm:px-8 sm:py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] md:items-end lg:gap-10 lg:py-14">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="size-2 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" />
              源码组件目录
            </div>
            <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.075em] text-balance">
              按用途，找到真正能用的组件。
            </h1>
          </div>

          <div className="border-l border-border pl-6 sm:pl-8">
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              精选值得长期使用的开源组件。按界面功能搜索、按产品场景筛选，
              将可编辑的源码直接安装到你的项目中。
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.12em] text-muted-foreground sm:hidden">
              01 个已验证组件 · 09 个类别 · 源码可编辑
            </p>
            <div className="mt-8 hidden grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border text-center sm:grid">
              <div className="bg-surface px-3 py-4">
                <p className="text-2xl font-bold tracking-[-0.05em]">
                  {String(catalogItems.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  已验证
                </p>
              </div>
              <div className="bg-surface px-3 py-4">
                <p className="text-2xl font-bold tracking-[-0.05em]">
                  {String(catalogTaxonomy.categories.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  组件类别
                </p>
              </div>
              <div className="bg-surface px-3 py-4">
                <p className="text-2xl font-bold tracking-[-0.05em]">CODE</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-muted-foreground">
                  源码可编辑
                </p>
              </div>
            </div>
          </div>
        </section>

        <CatalogExplorer />

        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                分类体系
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] sm:text-5xl">
                一个组件，三个理解维度。
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {classificationLayers.map((layer) => (
                <article className="bg-surface p-6 sm:p-7" key={layer.index}>
                  <p className="text-xs text-accent">/{layer.index}</p>
                  <h3 className="mt-10 text-lg font-bold tracking-[-0.04em]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {layer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>平台原创代码采用 MIT 许可证。</p>
          <p>第三方组件保留其上游许可证与来源信息。</p>
        </div>
      </footer>
    </div>
  );
}
