# counter-reset

该属性创建或重置计数器。

## 语法

```css
counter-reset: none | <identifier> [<integer>]?
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `none`

不创建或重置任何计数器。

### `<identifier>`

指定计数器名称。

### `<integer>`

指定计数器的初始值。默认为 `0`。

## 注意

- 计数器在 `::before` 和 `::after` 伪元素中使用 `content` 属性显示
- 子元素继承计数器
- 使用 `counter-increment` 增加计数器值
- 可以创建多个计数器

## 示例

```css
/* 基本计数器 */
body {
  counter-reset: section;
}

section {
  counter-increment: section;
}

section::before {
  content: "第 " counter(section) " 节";
}

/* 多级计数器 */
body {
  counter-reset: chapter;
}

.chapter {
  counter-increment: chapter;
  counter-reset: section;
}

.section {
  counter-increment: section;
}

/* 自定义初始值 */
.custom-reset {
  counter-reset: item 5;
}

/* 多个计数器 */
.multi-reset {
  counter-reset: chapter section subsection;
}
```

```html
<!-- 章节编号 -->
<article>
  <section>
    <h1>第一节</h1>
  </section>
  <section>
    <h1>第二节</h1>
  </section>
</article>

<!-- 多级编号 -->
<div class="chapter">
  <div class="section">
    <h2>1.1 节</h2>
  </div>
  <div class="section">
    <h2>1.2 节</h2>
  </div>
</div>
```

## 使用场景

```css
/* 有序列表 */
ol {
  counter-reset: item;
}

ol > li {
  counter-increment: item;
}

ol > li::before {
  content: counter(item) ". ";
}

/* 目录编号 */
.toc {
  counter-reset: chapter;
}

.toc .chapter {
  counter-increment: chapter;
}

.toc .chapter::before {
  content: counter(chapter) ". ";
}

/* 图表编号 */
.figure {
  counter-reset: figure;
}

.figure::after {
  content: " (图 " counter(figure) ")";
}

/* 表格编号 */
table {
  counter-reset: table;
}

table::before {
  content: "表 " counter(table) ": ";
}

/* 代码块编号 */
pre {
  counter-reset: code;
}

pre::before {
  content: "代码 " counter(code) ": ";
}

/* 自定义初始值 */
.start-at-10 {
  counter-reset: item 10;
}

/* 嵌套计数器 */
.nested {
  counter-reset: level1;
}

.nested .level1 {
  counter-increment: level1;
  counter-reset: level2;
}

.nested .level1 .level2 {
  counter-increment: level2;
}

/* 自定义编号格式 */
.custom-format {
  counter-reset: custom;
}

.custom-format::before {
  content: "[" counter(custom, upper-alpha) "] ";
}

/* 页脚编号 */
.footer {
  counter-reset: page;
}

.footer::after {
  content: "第 " counter(page) " 页";
}

/* 多级目录 */
.multi-level-toc {
  counter-reset: part chapter section;
}

.part {
  counter-increment: part;
  counter-reset: chapter;
}

.chapter {
  counter-increment: chapter;
  counter-reset: section;
}

.section {
  counter-increment: section;
}
