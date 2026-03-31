# border-block

`border-block` 属性是 `border-block-start` 和 `border-block-end` 的简写属性，用于设置块方向边框的样式。

## 语法

```css
border-block: <line-width> || <line-style> || <color>
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

- 块方向取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块方向是垂直的（上边框和下边框）
- 在垂直书写模式中，块方向是水平的（左边框和右边框）

## 示例

```css
/* 设置块方向边框 */
.element {
  border-block: 1px solid #333;
}

/* 不同宽度的边框 */
.element {
  border-block: 2px dashed blue;
}

/* 仅设置样式 */
.element {
  border-block: none;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片上下边框 */
.card {
  border-block: 1px solid #e0e0e0;
  padding-block: 16px;
}

/* 2. 列表项分隔 */
.list-item {
  border-block: 1px solid #ddd;
  padding: 10px 0;
}

/* 3. 垂直书写模式 */
.vertical-text {
  writing-mode: vertical-rl;
  border-block: 2px solid red;
}

/* 4. 不同样式 */
.divided-section {
  border-block: 1px dashed #ccc;
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

- [`border-block-start`](border-block-start.md) - 块起始边框
- [`border-block-end`](border-block-end.md) - 块结束边框
- [`border-inline`](border-inline.md) - 行内边框
- [`border`](border.md) - 边框简写

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)