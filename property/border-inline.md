# border-inline

`border-inline` 属性是 `border-inline-start` 和 `border-inline-end` 的简写属性，用于设置行内方向边框的样式。

## 语法

```css
border-inline: <line-width> || <line-style> || <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 详见各简写属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<line-width>` | 边框宽度（如 `1px`, `thin`, `medium`, `thick`） |
| `<line-style>` | 边框样式（如 `solid`, `dashed`, `dotted`, `double`） |
| `<color>` | 边框颜色 |

## 注意

- 行内方向取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，行内方向是水平的（左边框和右边框）
- 在垂直书写模式中，行内方向是垂直的（上边框和下边框）

## 示例

```css
/* 设置行内方向边框 */
.element {
  border-inline: 1px solid #333;
}

/* 不同宽度的边框 */
.element {
  border-inline: 2px dashed blue;
}

/* 仅设置样式 */
.element {
  border-inline: none;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片左右边框 */
.card {
  border-inline: 1px solid #e0e0e0;
  padding-inline: 16px;
}

/* 2. 引用块左侧边框 */
blockquote {
  border-inline-start: 4px solid #ccc;
  padding-inline-start: 16px;
}

/* 3. 垂直书写模式 */
.vertical-text {
  writing-mode: vertical-rl;
  border-inline: 2px solid red;
}

/* 4. 导航项分隔 */
.nav-item {
  border-inline: 1px solid #ddd;
  padding-inline: 12px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 87+ |
| Edge | 87+ |
| Firefox | 66+ |
| Safari | 14.1+ |
| Opera | 73+ |

## 相关属性

- [`border-inline-start`](border-inline-start.md) - 行内起始边框
- [`border-inline-end`](border-inline-end.md) - 行内结束边框
- [`border-block`](border-block.md) - 块边框
- [`border`](border.md) - 边框简写

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)