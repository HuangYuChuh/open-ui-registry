# Open UI Registry（开源 UI 组件库）

> 当前为暂定名称，首次公开发布前仍可能调整。

Open UI Registry 是一个开源的源码组件库，用于收录从互联网中精选的前端组件。

它不只是收藏组件，而是让每个收录的组件都可安装、可编辑、可追溯至上游来源，并能安全地用于真实前端项目。

## 项目状态

公开仓库和框架基础已经就绪。产品范围、许可证政策、Registry 元数据、Next.js 展示站、响应式基础页面、验证脚本和 CI 工作流均已建立。

当前已验证组件数：**1**。航班状态卡片是首个完成完整流程的基准组件。

代码仓库：[github.com/HuangYuChuh/open-ui-registry](https://github.com/HuangYuChuh/open-ui-registry)

线上站点：[ui.kelin.center](https://ui.kelin.center/)

线上 Registry 索引：[ui.kelin.center/r/registry.json](https://ui.kelin.center/r/registry.json)

## 使用方式

Registry 提供与 shadcn 兼容的组件数据。安装航班状态卡片：

```bash
pnpm dlx shadcn@latest add https://ui.kelin.center/r/flight-status-card.json
```

安装后，源码归你的应用所有：

```tsx
import { FlightStatusCard } from "@/components/ui/flight-status-card";

export function ProductScreen() {
  return <FlightStatusCard />;
}
```

## 第一版技术标准

- React
- TypeScript
- Tailwind CSS
- 使用 CSS 变量承载设计令牌
- 需要动画时默认使用 Motion
- 安装源码，而不是依赖封闭的运行时包

使用其他框架或不兼容样式系统的组件，必须先完成适配才能进入已验证 Registry。

## 组件发布标准

每个已验证组件都必须：

- 成功通过编译和构建；
- 提供可运行的预览和使用示例；
- 声明全部依赖；
- 支持外部 `className` 自定义；
- 避免硬编码产品颜色和字体；
- 同时适配移动端与桌面端；
- 记录无障碍行为；
- 记录原作者、来源、版本或提交、修改内容和许可证；
- 通过 [许可证政策](docs/licensing-policy.md) 审查。

## 开源与第三方代码

除非文件另有说明，本仓库的原创代码采用 MIT 许可证。

第三方组件**不会**自动变为 MIT 许可。每个组件都保留上游许可证和署名信息。公开源码仓库或可下载组件本身，不能证明允许再分发。

相关文档：

- [项目章程](PROJECT.md)
- [架构说明](docs/architecture.md)
- [许可证政策](docs/licensing-policy.md)
- [贡献指南](CONTRIBUTING.md)
- [第三方声明](THIRD_PARTY_NOTICES.md)
- [部署说明](docs/deployment.md)
- [首批组件路线图](docs/component-roadmap.md)
- [文件上传队列候选审查](docs/candidates/file-upload-queue.md)

## 技术框架

- Next.js 16 App Router：公开组件库与工作台
- React 19 和 TypeScript 5：组件源码
- Tailwind CSS 4 和 CSS 变量：样式与设计令牌
- pnpm workspaces：Web 应用、Registry、未来的 CLI 和 MCP 服务
- 兼容 shadcn 的分发契约
- GitHub Actions：Registry 验证、代码检查、类型检查和生产构建
- 静态 Docker 部署：候选版本验证与回滚

## 本地开发

要求：Node.js 22 或更高版本，以及 pnpm 11。

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

运行完整质量检查：

```bash
pnpm check
```

## 仓库结构

```text
apps/
  web/                     # 组件库与组件工作台
packages/
  registry/                # 可安装组件源码和元数据
  cli/                     # 面向用户的安装命令
  mcp/                     # 面向智能体的搜索和安装工具
registry/
  schema/                  # Registry 元数据契约
docs/                      # 架构、政策与决策文档
```

## 当前里程碑

以已验证的航班状态卡片完整流程为基准扩充 Registry，并确保每个收录组件都遵循同样的许可证、溯源、预览、安装、响应式、无障碍和质量要求。
