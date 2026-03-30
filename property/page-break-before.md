# page-break-before

该属性设置元素前是否开始新页面（用于打印）。

## 语法

```css
page-break-before: auto | always | avoid | left | right | recto | verso
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 否             |

## 值

### `auto`

默认值。由浏览器自动决定。

### `always`

强制在元素前开始新页面。

### `avoid`

避免在元素前分页。

### `left`

在元素前开始新页面，并强制空白页（左页）。

### `right`

在元素前开始新页面，并强制空白页（右页）。

### `recto`

在元素前开始新页面，并强制空白页（右页/正面）。

### `verso`

在元素前开始新页面，并强制空白页（左页/背面）。

## 注意

- 该属性主要用于打印样式
- 现代浏览器推荐使用 `break-before` 属性
- 不能应用于空元素或 `display: none` 的元素
- 不能应用于 `table`、`tr`、`td` 等表格元素

## 示例

```css
/* 强制分页 */
.chapter {
  page-break-before: always;
}

/* 避免分页 */
.content {
  page-break-before: avoid;
}

/* 右页开始 */
.section {
  page-break-before: right;
}
```

```html
<!-- 章节分页 -->
<article>
  <div class="chapter">
    <h1>第一章</h1>
    <p>内容...</p>
  </div>
  <div class="chapter">
    <h1>第二章</h1>
    <p>内容...</p>
  </div>
</article>
```

## 使用场景

```css
/* 每章新页面 */
.chapter {
  page-break-before: always;
}

/* 避免段落分页 */
.paragraph {
  page-break-before: avoid;
}

/* 右页开始（书籍） */
.book-section {
  page-break-before: right;
}

/* 左页开始 */
.left-page {
  page-break-before: left;
}

/* 现代替代方案 */
.modern-break {
  break-before: page;
}

/* 避免分页 */
.no-break {
  break-before: avoid;
}

/* 打印样式 */
@media print {
  .print-break {
    page-break-before: always;
  }
  
  .print-avoid {
    page-break-before: avoid;
  }
}

/* 报告分页 */
.report-section {
  page-break-before: always;
}

/* 图表分页 */
.figure {
  page-break-before: avoid;
}

/* 表格分页 */
.table-container {
  page-break-before: always;
}

/* 简历分页 */
.resume-section {
  page-break-before: always;
}

/* 目录后分页 */
.toc {
  page-break-before: always;
}

/* 附录分页 */
.appendix {
  page-break-before: always;
}
