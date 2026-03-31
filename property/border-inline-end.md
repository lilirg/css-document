# border-inline-end

`border-inline-end` 属性用于设置行内方向结束边的边框。

## 语法

```css
border-inline-end: <line-width> || <line-style> || <color>
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

- 行内结束边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，行内结束边是右边框（`direction: ltr`）或左边框（`direction: rtl`）
- 在垂直书写模式中，行内结束边是下边框

## 示例

```css
/* 设置行内结束边框 */
.element {
  border-inline-end: 1px solid #333;
}

/* 不同宽度 */
.element {
  border-inline-end: 2px dashed blue;
}

/* 仅设置样式 */
.element {
  border-inline-end: none;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 导航项右侧分隔 */
.nav-item {
  border-inline-end: 1px solid #ddd;
  padding-inline-end: 12px;
}

/* 2. 卡片右侧边框 */
.card {
  border-inline-end: 1px solid #e0e0e0;
  padding-inline-end: 16px;
}

/* 3. 表格单元格 */
.table-cell {
  border-inline-end: 1px solid #eee;
  padding: 8px 12px;
}

/* 4. 多列布局分隔 */
.multi-column {
  column-count: 3;
  column-rule: 1px solid #ddd;
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
- [`border-inline`](border-inline.md) - 行内边框简写
- [`border-right`](border-right.md) - 右边框
- [`border-block-end`](border-block-end.md) - 块结束边框

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)