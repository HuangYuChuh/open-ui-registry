# Flight Status Card（航班状态卡片）

航班状态卡片是一款响应式旅行状态组件，适用于行程页面、航空公司看板、预订产品和旅行助手。它在一张紧凑卡片中呈现航线、时刻、预计到达时间、下一事件、进度和剩余时间。

## 安装

```bash
pnpm dlx shadcn@latest add https://ui.kelin.center/r/flight-status-card.json
```

安装器会把可编辑源码添加到 `components/ui/flight-status-card.tsx`，安装 `motion`、`clsx` 和 `tailwind-merge`，并将上游 MIT 声明放在组件旁边。

## 用法

```tsx
import { FlightStatusCard } from "@/components/ui/flight-status-card";

export function TripOverview() {
  return <FlightStatusCard arrivalCity="香港" arrivalCode="HKG" departureCity="上海" departureCode="PVG" progress={62} remainingTime="1H 12M" />;
}
```

## 公开 API

| 属性 | 类型 | 默认值 |
| --- | --- | --- |
| `departureCode` | `string` | `YYZ` |
| `arrivalCode` | `string` | `HND` |
| `departureCity` | `string` | `多伦多` |
| `arrivalCity` | `string` | `东京` |
| `departureTime` | `string` | `周一 18:14` |
| `arrivalTime` | `string` | `周二 07:14` |
| `eta` | `string` | `预计 14:15 到达` |
| `timezone` | `string` | `东京时间` |
| `nextEvent` | `string` | `距离用餐` |
| `nextEventTime` | `string` | `2:34H` |
| `progress` | `number` | `45` |
| `remainingTime` | `string` | `7H 01M` |
| `className` | `string` | 无 |
| `style` | `FlightStatusCardStyle` | 无 |

机场代码会转换为大写并限制为三个字符。进度值会被限制在闭区间 `0-100` 内。

## 主题契约

组件包含作用域隔离的深色航班显示配色，因此使用方项目采用不同或不完整的 shadcn 主题变量时仍然清晰可读。可以通过 `className` 或具有类型的 `style` 属性覆盖组件令牌，无需修改内部代码。

可用令牌：

- `--flight-card-accent` 和 `--flight-card-accent-foreground`
- `--flight-card-background` 和 `--flight-card-foreground`
- `--flight-card-muted` 和 `--flight-card-muted-foreground`
- `--flight-card-border`

## 响应式行为

- 在窄屏下，预计到达时间面板移到航线下方，保证机场代码可读。
- 在 `sm` 及以上宽度，航线与预计到达时间共用一行。
- 组件宽度流式变化，最大宽度为 `520px`。
- 城市名称会截断，不会造成横向溢出。

## 无障碍

- 卡片使用 `article`，并提供供屏幕阅读器读取的航线标题。
- 进度轨道使用 `role="progressbar"` 并公开数值。
- 点阵 SVG 仅作装饰，机场代码文本会单独播报。
- 动效通过 Motion 的 `useReducedMotion` 遵循 `prefers-reduced-motion`。
- 组件不包含伪交互控件。

## 来源与许可证

- 原作者：Harsh Jadhav
- 原始演示：<https://componentry.dev/docs/components/flight-status-card>
- 源码仓库：<https://github.com/harshjdhv/componentry>
- 已审查提交：`0c90c9b9e624c483d434cdb85df084fd399f24c3`
- 许可证：MIT
- 获取日期：2026-07-21

适配组件沿用上游 MIT 条款再分发。参见 `packages/registry/licenses/flight-status-card.MIT` 和 `THIRD_PARTY_NOTICES.md`。
