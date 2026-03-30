# page-break-inside

该属性设置元素内部是否允许分页（用于打印）。

## 语法

```css
page-break-inside: auto | avoid
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 否             |

## 值

### `auto`

默认值。允许在元素内部分页。

### `avoid`

避免在元素内部分页。

## 注意

- 该属性主要用于打印样式
- 现代浏览器推荐使用 `break-inside` 属性
- 常用于避免段落、列表项在中间分页
- 与 `page-break-before` 和 `page-break-after` 配合使用

## 示例

```css
/* 避免内部分页 */
.paragraph {
  page-break-inside: avoid;
}

/* 允许内部分页 */
.content {
  page-break-inside: auto;
}
```

```html
<!-- 避免分页的段落 -->
<article>
  <div class="paragraph">
    <h2>标题</h2>
    <p>这是一个完整的段落，不会在中间分页。</p>
  </div>
  <div class="paragraph">
    <h2>另一个标题</h2>
    <p>这是另一个完整的段落。</p>
  </div>
</article>
```

## 使用场景

```css
/* 避免段落分页 */
.paragraph {
  page-break-inside: avoid;
}

/* 避免列表项分页 */
li {
  page-break-inside: avoid;
}

/* 避免卡片分页 */
.card {
  page-break-inside: avoid;
}

/* 避免图片分页 */
figure {
  page-break-inside: avoid;
}

/* 现代替代方案 */
.modern-break {
  break-inside: avoid;
}

/* 打印样式 */
@media print {
  .print-avoid {
    page-break-inside: avoid;
  }
  
  .print-allow {
    page-break-inside: auto;
  }
}

/* 报告章节 */
.report-section {
  page-break-inside: avoid;
}

/* 简历项目 */
.resume-item {
  page-break-inside: avoid;
}

/* 表格行 */
tr {
  page-break-inside: avoid;
}

/* 代码块 */
pre {
  page-break-inside: avoid;
}

/* 引用块 */
blockquote {
  page-break-inside: avoid;
}

/* 避免表格分页 */
table {
  page-break-inside: avoid;
}

/* 避免摘要分页 */
.summary {
  page-break-inside: avoid;
}

/* 避免脚注分页 */
.footnote {
  page-break-inside: avoid;
}
