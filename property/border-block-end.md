# border-block-end

`border-block-end` 属性用于设置块方向结束边的边框。

## 语法

```css
border-block-end: <line-width> || <line-style> || <color>
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

- 块结束边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块结束边是下边框
- 在垂直书写模式中，块结束边是左边框（`direction: ltr`）或右边框（`direction: rtl`）

## 示例

```css
/* 设置块结束边框 */
.element {
  border-block-end: 1px solid #333;
}

/* 不同宽度 */
.element {
  border-block-end: 2px dashed blue;
}

/* 仅设置样式 */
.element {
  border-block-end: none;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片底部边框 */
.card {
  border-block-end: 1px solid #e0e0e0;
  padding: 16px;
}

/* 2. 列表项底部分隔 */
.list-item {
  border-block-end: 1px solid #ddd;
  padding: 10px;
}

/* 3. 段落底部间距 */
.paragraph {
  border-block-end: 1px dashed #ccc;
  padding-block-end: 12px;
  margin-block-end: 12px;
}

/* 4. 表格行分隔 */
.table-row {
  border-block-end: 1px solid #eee;
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
- [`border-block`](border-block.md) - 块边框简写
- [`border-bottom`](border-bottom.md) - 下边框
- [`border-inline-end`](border-inline-end.md) - 行内结束边框

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)