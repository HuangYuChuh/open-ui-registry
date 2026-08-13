# 第三方代码声明

本文件记录 Open UI Registry 再分发的第三方代码。

## Flight Status Card（航班状态卡片）

- 组件：Flight Status Card
- 原作者：Harsh Jadhav
- 上游仓库：<https://github.com/harshjdhv/componentry>
- 原始演示：<https://componentry.dev/docs/components/flight-status-card>
- 已审查的上游提交：`0c90c9b9e624c483d434cdb85df084fd399f24c3`
- 已审查源码：<https://github.com/harshjdhv/componentry/blob/0c90c9b9e624c483d434cdb85df084fd399f24c3/apps/web/public/r/flight-status-card.json>
- 许可证：MIT
- 随附许可证：`packages/registry/licenses/flight-status-card.MIT`
- 是否修改：是

Open UI Registry 将动画导入迁移至 `motion/react`，用 CSS 设计令牌替换固定产品颜色，合并主题变体，改进移动端布局，加入减少动态效果行为和无障碍语义，生成唯一 SVG ID，将进度值限制在有效范围内，修正默认剩余时间标签，并将面向使用者的默认内容和进度无障碍文本本地化为简体中文。

上游作者不代表其认可或支持本适配版本。

## 条目模板

每个收录组件都必须添加一条记录，包含：

- 组件名称；
- 原作者或组织；
- 上游仓库和源码 URL；
- 上游版本或提交；
- SPDX 许可证标识；
- 必要时提供完整许可证文本的链接或路径；
- 源码是否经过修改；
- 对修改内容的简要说明。

仓库级 MIT 许可证仅适用于项目原创代码和明确以 MIT 许可提供的文件，不能替代第三方许可证。
