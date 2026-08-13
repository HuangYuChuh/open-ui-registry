# 设计系统总则

> **使用逻辑：**构建具体页面时，先检查 `design-system/pages/[page-name].md`。
> 如果该文件存在，其中的规则**优先于**本总则。
> 如果不存在，则严格遵循以下规则。

---

**项目：** Open UI Registry
**生成时间：** 2026-07-21 16:40:43
**类别：** 设计系统/组件库

---

## 全局规则

### 色板

| 用途 | Hex | CSS 变量 |
|------|-----|--------------|
| 主色 | `#1E293B` | `--color-primary` |
| 主色上的内容 | `#FFFFFF` | `--color-on-primary` |
| 次色 | `#334155` | `--color-secondary` |
| 强调色/行动按钮 | `#22C55E` | `--color-accent` |
| 背景 | `#0F172A` | `--color-background` |
| 前景 | `#F8FAFC` | `--color-foreground` |
| 弱化色 | `#272F42` | `--color-muted` |
| 边框 | `#475569` | `--color-border` |
| 危险操作 | `#EF4444` | `--color-destructive` |
| 焦点环 | `#1E293B` | `--color-ring` |

**颜色说明：**代码深色 + 运行绿色

### 字体排版

- **标题字体：** Space Mono
- **正文字体：** Space Mono
- **氛围：**粗野主义、原始、技术感、等宽、极简、鲜明
- **Google Fonts:** [Space Mono + Space Mono](https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap)

**CSS 导入：**
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
```

### 间距变量

| 令牌 | 值 | 用途 |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | 紧凑间距 |
| `--space-sm` | `8px` / `0.5rem` | 图标间距、行内间距 |
| `--space-md` | `16px` / `1rem` | 标准内边距 |
| `--space-lg` | `24px` / `1.5rem` | 区块内边距 |
| `--space-xl` | `32px` / `2rem` | 大间距 |
| `--space-2xl` | `48px` / `3rem` | 区块外边距 |
| `--space-3xl` | `64px` / `4rem` | 首屏内边距 |

### 阴影层级

| 层级 | 值 | 用途 |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | 轻微抬升 |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | 卡片、按钮 |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | 模态框、下拉菜单 |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | 首屏图片、精选卡片 |

---

## 组件规范

### 按钮

```css
/* Primary Button */
.btn-primary {
  background: #22C55E;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #1E293B;
  border: 2px solid #1E293B;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### 卡片

```css
.card {
  background: #0F172A;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### 输入框

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #1E293B;
  outline: none;
  box-shadow: 0 0 0 3px #1E293B20;
}
```

### 模态框

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## 风格指南

**风格：**夸张极简主义

**关键词：**大胆极简、超大字号、高对比度、留白、强势极简、宣言式设计

**适合：**时尚、建筑、作品集、代理机构落地页、奢侈品牌、编辑内容

**关键效果：**`font-size: clamp(3rem 10vw 12rem)`、`font-weight: 900`、`letter-spacing: -0.05em`、大量留白

### 页面模式

**模式名称：**极简单栏

- **转化策略：**聚焦单一行动按钮；大字号；大量留白；避免导航干扰；移动优先。
- **行动按钮位置：**居中放置大型按钮
- **区块顺序：**1. 首屏标题，2. 简短描述，3. 优势要点（最多 3 条），4. 行动按钮，5. 页脚

---

## 禁止模式

- ❌ 文档质量差
- ❌ 没有实时预览

### 其他禁止模式

- ❌ **用 Emoji 充当图标**——使用 SVG 图标（Heroicons、Lucide、Simple Icons）
- ❌ **缺少 `cursor:pointer`**——所有可点击元素都必须设置
- ❌ **悬停导致布局偏移**——避免会移动布局的缩放变换
- ❌ **文字对比度过低**——最低保持 4.5:1
- ❌ **状态瞬间变化**——始终使用 150–300ms 过渡
- ❌ **焦点状态不可见**——键盘焦点必须清晰可见

---

## 交付前检查清单

交付任何 UI 代码前，请确认：

- [ ] 不使用 Emoji 充当图标（改用 SVG）
- [ ] 所有图标来自一致的图标集（Heroicons/Lucide）
- [ ] 所有可点击元素都有 `cursor-pointer`
- [ ] 悬停状态具有平滑过渡（150–300ms）
- [ ] 浅色模式文字对比度至少为 4.5:1
- [ ] 键盘导航的焦点状态可见
- [ ] 遵循 `prefers-reduced-motion`
- [ ] 检查 375px、768px、1024px、1440px 响应式布局
- [ ] 固定导航栏不遮挡内容
- [ ] 移动端没有横向滚动
