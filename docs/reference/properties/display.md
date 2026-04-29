# display

display 属性定义元素的显示方式。

## 语法

```css
display: none | inline | block | inline-block | flex | inline-flex | grid | inline-grid | flow-root | list-item | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | flow;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 不显示 | `display: none` |
| `inline` | 内联 | `display: inline` |
| `block` | 块级 | `display: block` |
| `inline-block` | 内联块级 | `display: inline-block` |
| `flex` | 弹性布局 | `display: flex` |
| `inline-flex` | 内联弹性布局 | `display: inline-flex` |
| `grid` | 网格布局 | `display: grid` |
| `inline-grid` | 内联网格布局 | `display: inline-grid` |
| `flow-root` | 流根 | `display: flow-root` |
| `list-item` | 列表项 | `display: list-item` |
| `table` | 表格 | `display: table` |
| `inline-table` | 内联表格 | `display: inline-table` |
| `table-row-group` | 表格行组 | `display: table-row-group` |
| `table-header-group` | 表格头组 | `display: table-header-group` |
| `table-footer-group` | 表格脚组 | `display: table-footer-group` |
| `table-row` | 表格行 | `display: table-row` |
| `table-column-group` | 表格列组 | `display: table-column-group` |
| `table-column` | 表格列 | `display: table-column` |
| `table-cell` | 表格单元格 | `display: table-cell` |
| `table-caption` | 表格标题 | `display: table-caption` |
| `ruby` | 簌 | `display: ruby` |
| `ruby-base` | 簌基 | `display: ruby-base` |
| `ruby-text` | 簌文 | `display: ruby-text` |
| `ruby-base-container` | 簌基容器 | `display: ruby-base-container` |
| `ruby-text-container` | 簌文容器 | `display: ruby-text-container` |
| `contents` | 内容 | `display: contents` |
| `flow` | 流 | `display: flow` |

## 示例

### 基础用法

```css
/* 不显示 */
.none {
  display: none;
}

/* 内联 */
.inline {
  display: inline;
}

/* 块级 */
.block {
  display: block;
}

/* 内联块级 */
.inline-block {
  display: inline-block;
}

/* 弹性布局 */
.flex {
  display: flex;
}

/* 内联弹性布局 */
.inline-flex {
  display: inline-flex;
}

/* 网格布局 */
.grid {
  display: grid;
}

/* 内联网格布局 */
.inline-grid {
  display: inline-grid;
}

/* 流根 */
.flow-root {
  display: flow-root;
}

/* 列表项 */
.list-item {
  display: list-item;
}

/* 表格 */
.table {
  display: table;
}

/* 内联表格 */
.inline-table {
  display: inline-table;
}

/* 表格行组 */
.table-row-group {
  display: table-row-group;
}

/* 表格头组 */
.table-header-group {
  display: table-header-group;
}

/* 表格脚组 */
.table-footer-group {
  display: table-footer-group;
}

/* 表格行 */
.table-row {
  display: table-row;
}

/* 表格列组 */
.table-column-group {
  display: table-column-group;
}

/* 表格列 */
.table-column {
  display: table-column;
}

/* 表格单元格 */
.table-cell {
  display: table-cell;
}

/* 表格标题 */
.table-caption {
  display: table-caption;
}

/* 簌 */
.ruby {
  display: ruby;
}

/* 簌基 */
.ruby-base {
  display: ruby-base;
}

/* 簌文 */
.ruby-text {
  display: ruby-text;
}

/* 簌基容器 */
.ruby-base-container {
  display: ruby-base-container;
}

/* 簌文容器 */
.ruby-text-container {
  display: ruby-text-container;
}

/* 内容 */
.contents {
  display: contents;
}

/* 流 */
.flow {
  display: flow;
}
```

### 高级用法

```css
/* 容器 */
.container {
  display: flex;
}

/* 静态 */
.static {
  display: block;
}

/* 相对 */
.relative {
  display: block;
}

/* 绝对 */
.absolute {
  display: block;
}

/* 固定 */
.fixed {
  display: block;
}

/* 粘性 */
.sticky {
  display: block;
}

/* 响应式布局 */
.responsive {
  display: flex;
}

/* 卡片布局 */
.card {
  display: flex;
}

/* 表单布局 */
.form {
  display: block;
}

/* 图片画廊 */
.gallery {
  display: grid;
}

/* 混合单位 */
.mixed-units {
  display: block;
}

/* 带命名的项目 */
.named-items {
  display: block;
}

/* 悬停效果 */
.card {
  transition: display 0.3s ease-in-out;
}

.card:hover {
  display: flex;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `display` 可以用于任何元素
- `display` 定义元素的显示方式
- `inline` 是默认值，表示内联

## 相关属性

- [`visibility`](./visibility)
- [`opacity`](./opacity)
- [`pointer-events`](./pointer-events)

## 相关资源

- [MDN Web Docs: display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)
- [CSS-Tricks: display](https://css-tricks.com/almanac/properties/d/display/)
- [W3C CSS Display](https://www.w3.org/TR/css-display-3/)