# border-block-start

`border-block-start` 属性用于设置块方向起始边的边框。

## 语法

```css
border-block-start: <line-width> || <line-style> || <color>
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

- 块起始边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块起始边是上边框
- 在垂直书写模式中，块起始边是右边框（`direction: ltr`）或左边框（`direction: rtl`）

## 示例

```css
/* 设置块起始边框 */
.element {
  border-block-start: 1px solid #333;
}

/* 不同宽度 */
.element {
  border-block-start: 2px dashed blue;
}

/* 仅设置样式 */
.element {
  border-block-start: none;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片顶部边框 */
.card {
  border-block-start: 3px solid #007bff;
  padding: 16px;
}

/* 2. 列表项顶部分隔 */
.list-item {
  border-block-start: 1px solid #ddd;
  padding: 10px;
}

/* 3. 标题下划线 */
.section-title {
  border-block-start: 2px solid #333;
  padding-block-start: 8px;
}

/* 4. 引用块顶部 */
blockquote {
  border-block-start: 4px solid #ccc;
  padding-block-start: 12px;
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

- [`border-block-end`](border-block-end.md) - 块结束边框
- [`border-block`](border-block.md) - 块边框简写
- [`border-top`](border-top.md) - 上边框
- [`border-inline-start`](border-inline-start.md) - 行内起始边框

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)