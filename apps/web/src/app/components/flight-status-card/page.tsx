import {
  FlightStatusCard,
  type FlightStatusCardProps,
} from "@open-ui-registry/registry/flight-status-card";
import { SiteHeader } from "@/app/_components/site-header";
import {
  catalogItems,
  catalogTaxonomy,
  getCatalogCapabilities,
  humanizeSlug,
} from "@/lib/catalog-data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "航班状态卡片｜Open UI Registry",
  description:
    "预览并安装一个响应式、支持无障碍且以可编辑 React 源码分发的航班状态组件。",
};

const installCommand =
  "pnpm dlx shadcn@latest add https://ui.kelin.center/r/flight-status-card.json";

const catalogItem =
  catalogItems.find((item) => item.name === "flight-status-card") ??
  (() => {
    throw new Error("Missing catalog metadata for flight-status-card");
  })();

const category = catalogTaxonomy.categories.find(
  (item) => item.id === catalogItem.classification.category,
);
const productContexts = catalogItem.classification.domains.map(
  (domain) => ({
    id: domain,
    label:
      catalogTaxonomy.domains.find((item) => item.id === domain)?.label ??
      humanizeSlug(domain),
  }),
);
const capabilities = getCatalogCapabilities(catalogItem);

const customRoute: FlightStatusCardProps = {
  departureCode: "PVG",
  arrivalCode: "HKG",
  departureCity: "上海",
  arrivalCity: "香港",
  departureTime: "周二 06:50",
  arrivalTime: "周二 09:35",
  eta: "预计 09:35 到达",
  timezone: "香港时间",
  nextEvent: "距离着陆",
  nextEventTime: "1:12H",
  progress: 62,
  remainingTime: "1H 12M",
};

const apiRows = [
  ["departureCode", "string", "YYZ"],
  ["arrivalCode", "string", "HND"],
  ["departureCity", "string", "多伦多"],
  ["arrivalCity", "string", "东京"],
  ["departureTime", "string", "周一 18:14"],
  ["arrivalTime", "string", "周二 07:14"],
  ["eta", "string", "预计 14:15 到达"],
  ["timezone", "string", "东京时间"],
  ["nextEvent", "string", "距离用餐"],
  ["nextEventTime", "string", "2:34H"],
  ["progress", "number", "45"],
  ["remainingTime", "string", "7H 01M"],
  ["style", "FlightStatusCardStyle", "none"],
  ["className", "string", "—"],
];

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

export default function FlightStatusCardPage() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <main id="main-content">
        <section className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <nav aria-label="面包屑导航">
              <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <li>
                  <Link className="transition-colors hover:text-foreground" href="/#catalog">
                    组件
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    className="transition-colors hover:text-foreground"
                    href={`/?category=${catalogItem.classification.category}#catalog`}
                  >
                    {category?.label ?? humanizeSlug(catalogItem.classification.category)}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {catalogItem.title}
                </li>
              </ol>
            </nav>
            <h1 className="mt-6 text-[clamp(3.3rem,8vw,7rem)] font-bold leading-[0.88] tracking-[-0.08em] text-balance">
              航班状态卡片
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              适用于行程产品、航空公司看板、预订流程和旅行助手的紧凑状态界面。
              安装后的源码支持响应式布局、设计令牌和无障碍能力，并可自由编辑。
            </p>

            <div className="mt-10 grid gap-5 rounded-xl border border-border bg-surface p-5 sm:p-6">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  组件类别
                </p>
                <p className="mt-2 text-sm text-foreground">
                  <Link
                    className="rounded-sm text-accent outline-none hover:underline focus-visible:ring-2 focus-visible:ring-accent"
                    href={`/?category=${catalogItem.classification.category}#catalog`}
                  >
                    {category?.label ?? humanizeSlug(catalogItem.classification.category)}
                  </Link>
                  <span className="text-muted-foreground">
                    {" "}/ {humanizeSlug(catalogItem.classification.subcategory)}
                  </span>
                </p>
              </div>

              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  产品场景
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {productContexts.map((context) => (
                    <Link
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground outline-none transition-colors duration-200 hover:border-accent/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
                      href={`/?domain=${context.id}#catalog`}
                      key={context.id}
                    >
                      {context.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                  已验证能力
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
                    已验证
                  </span>
                  {capabilities.map((capability) => (
                    <span
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      key={capability}
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <p className="border-t border-border pt-4 text-xs text-muted-foreground">
                React · TypeScript · Tailwind CSS · {catalogItem.license.spdx} 许可证
              </p>
            </div>
          </div>

          <div className="flex min-h-[440px] items-center justify-center rounded-2xl border border-border bg-surface p-4 sm:p-8">
            <FlightStatusCard {...customRoute} />
          </div>
        </section>

        <section className="border-y border-border/70 bg-surface">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:py-20">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-accent">安装</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] sm:text-5xl">
                一条命令，源码归你所有。
              </h2>
            </div>
            <div className="self-end overflow-x-auto rounded-xl border border-border bg-background p-5 sm:p-6">
              <code className="whitespace-nowrap text-sm text-foreground">
                <span className="select-none text-accent">$</span> {installCommand}
              </code>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">用法</p>
            <pre className="mt-5 overflow-x-auto rounded-xl border border-border bg-surface p-5 text-sm leading-7 text-foreground">
              <code>{`import { FlightStatusCard } from "@/components/ui/flight-status-card";

export function TripOverview() {
  return (
    <FlightStatusCard
      departureCode="PVG"
      arrivalCode="HKG"
      progress={62}
      remainingTime="1H 12M"
    />
  );
}`}</code>
            </pre>
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              适用场景
            </p>
            <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {[
                ["旅行行程", "在行程详情页中快速浏览状态。"],
                ["航空公司看板", "为运营界面提供紧凑的航线与进度摘要。"],
                ["预订后续", "在购买后的确认页中展示航班状态。"],
                ["旅行助手", "作为 AI 旅行助手的可视化回答界面。"],
              ].map(([title, description]) => (
                <article className="bg-surface p-5" key={title}>
                  <h3 className="font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-surface">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              API 参考
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead className="bg-background text-muted-foreground">
                  <tr>
                    <th className="px-5 py-4 font-normal">属性</th>
                    <th className="px-5 py-4 font-normal">类型</th>
                    <th className="px-5 py-4 font-normal">默认值</th>
                  </tr>
                </thead>
                <tbody>
                  {apiRows.map(([property, type, defaultValue]) => (
                    <tr className="border-t border-border" key={property}>
                      <td className="px-5 py-4 text-accent">{property}</td>
                      <td className="px-5 py-4 text-muted-foreground">{type}</td>
                      <td className="px-5 py-4">{defaultValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <article>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              集成说明
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
              <li>
                自带组件级颜色令牌，即使宿主项目使用不同的 shadcn 主题也能保持清晰可读。
              </li>
              <li>
                可通过 <code className="text-foreground">className</code> 或
                {" "}<code className="text-foreground">style</code> 覆盖
                {" "}<code className="text-foreground">--flight-card-accent</code>，无需修改组件内部代码。
              </li>
              <li>在窄屏上将预计到达时间面板移到航线下方。</li>
              <li>为进度提供语义信息，并向屏幕阅读器说明航线内容。</li>
              <li>遵循用户的“减少动态效果”偏好。</li>
            </ul>
          </article>
          <article>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              来源与溯源
            </p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              改编自 Harsh Jadhav 为 Componentry 创作的 Flight Status Card，
              已基于提交 <code className="text-foreground">0c90c9b9</code> 完成审查。
              组件沿用上游 MIT 许可证，许可证声明会与组件源码一同安装。
            </p>
            <a
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-bold outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent"
              href="https://componentry.dev/docs/components/flight-status-card"
              rel="noreferrer"
              target="_blank"
            >
              查看上游项目
              <ArrowIcon />
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}
