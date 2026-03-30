# counter-increment

该属性增加或减少计数器的值。

## 语法

```css
counter-increment: none | <identifier> [<integer>]?
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `none`

计数器不增加或减少。

### `<identifier>`

指定计数器名称。

### `<integer>`

指定增加或减少的值。默认为 `1`。可以是负数。

## 注意

- 计数器必须先使用 `counter-reset` 初始化
- 计数器值在 `::before` 和 `::after` 伪元素中使用 `content` 属性显示
- 多个计数器可以用空格分隔
- 子元素继承计数器值

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

.chapter::before {
  content: "第 " counter(chapter) " 章 ";
}

.section {
  counter-increment: section;
}

.section::before {
  content: counter(chapter) "." counter(section) " ";
}

/* 负数增量 */
.reverse {
  counter-increment: item -1;
}

/* 多个计数器 */
.multi {
  counter-increment: chapter section;
}
```

```html
<!-- 章节编号 -->
<article>
  <section>
    <h1>第一章</h1>
    <p>内容...</p>
  </section>
  <section>
    <h1>第二章</h1>
    <p>内容...</p>
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
  counter-increment: figure;
}

.figure::before {
  content: "图 " counter(figure) ": ";
}

/* 表格编号 */
table {
  counter-increment: table;
}

table::before {
  content: "表 " counter(table) ": ";
}

/* 代码块编号 */
pre {
  counter-increment: code;
}

pre::before {
  content: "代码 " counter(code) ": ";
}

/* 反向编号 */
.reverse-list {
  counter-reset: item 10;
}

.reverse-list li {
  counter-increment: item -1;
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
.custom-number {
  counter-increment: custom;
}

.custom-number::before {
  content: "[" counter(custom, upper-alpha) "] ";
}

/* 页脚编号 */
.footer {
  counter-increment: page;
}

.footer::after {
  content: "第 " counter(page) " 页";
}
