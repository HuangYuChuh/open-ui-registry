# Registry 包

该包负责可安装组件的构建和验证流程。

以下两个相关清单有意分开维护：

- `/registry.json` 是公开且兼容 shadcn 的分发清单。
- `/registry/index.json` 和 `/registry/schema` 包含 Open UI Registry 治理所需的扩展溯源、许可证和质量元数据。

这样既能让标准 shadcn 客户端安装组件，又不会丢失本项目要求的额外证据。

第一个已验证组件发布于：

```text
https://ui.kelin.center/r/flight-status-card.json
```

规范源码位于 `src/components/flight-status-card.tsx`。构建脚本读取 `/registry.json` 编写清单，嵌入规范源码与随附许可证，并将兼容 shadcn 的公开数据写入 `apps/web/public/r/`。
