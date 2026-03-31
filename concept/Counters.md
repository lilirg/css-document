# 计数器 (Counters)

CSS 计数器允许根据文档结构自动调整内容的编号，常用于章节标题、列表等。

## 语法

```css
/* 重置计数器 */
counter-reset: name number;

/* 增加计数器 */
counter-increment: name number;

/* 显示计数器 */
content: counter(name, style);
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `counter-reset: none; counter-increment: none;` |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 计数器属性

| 属性 | 描述 |
| :--- | :--- |
| `counter-reset` | 重置计数器的值，可以指定多个计数器和初始值 |
| `counter-increment` | 增加计数器的值，可以指定多个计数器和增量 |
| `content` | 使用 `counter()` 或 `counters()` 函数显示计数器 |

## 计数器样式

| 样式 | 描述 |
| :--- | :--- |
| `none` | 不显示计数器 |
| `decimal` | 十进制数字 (1, 2, 3, ...) |
| `decimal-leading-zero` | 十进制数字，带前导零 (01, 02, 03, ...) |
| `lower-roman` | 小写罗马数字 (i, ii, iii, iv, ...) |
| `upper-roman` | 大写罗马数字 (I, II, III, IV, ...) |
| `lower-greek` | 小写希腊字母 (α, β, γ, ...) |
| `lower-latin` | 小写拉丁字母 (a, b, c, ...) |
| `upper-latin` | 大写拉丁字母 (A, B, C, ...) |
| `armenian` | 亚美尼亚数字 |
| `georgian` | 格鲁吉亚数字 |
| `lower-alpha` | 小写字母 (同 lower-latin) |
| `upper-alpha` | 大写字母 (同 upper-latin) |

## 示例

### 基本计数器

```html
<!-- HTML -->
<div class="article">
  <h2>第一章</h2>
  <p>内容</p>
  <h2>第二章</h2>
  <p>内容</p>
  <h2>第三章</h2>
  <p>内容</p>
</div>
```

```css
/* 重置计数器 */
.article {
  counter-reset: section;
}

/* 增加计数器并显示 */
h2::before {
  counter-increment: section;
  content: "第" counter(section) "章 ";
}

/* 结果：
  第一章
  第二章
  第三章
*/
```

### 多级计数器

```html
<!-- HTML -->
<div class="document">
  <h2>第一章</h2>
  <h3>1.1 节</h3>
  <h3>1.2 节</h3>
  <h2>第二章</h2>
  <h3>2.1 节</h3>
</div>
```

```css
.document {
  counter-reset: chapter section;
}

h2 {
  counter-reset: section;
}

h2::before {
  counter-increment: chapter;
  content: counter(chapter) ". ";
}

h3::before {
  counter-increment: section;
  content: counter(chapter) "." counter(section) " ";
}

/* 结果：
  1. 第一章
  1.1 节
  1.2 节
  2. 第二章
  2.1 节
*/
```

### 使用 counters() 函数

```html
<!-- HTML -->
<ul class="toc">
  <li>第一章
    <ul>
      <li>1.1 节</li>
      <li>1.2 节</li>
    </ul>
  </li>
  <li>第二章
    <ul>
      <li>2.1 节</li>
    </ul>
  </li>
</ul>
```

```css
.toc {
  counter-reset: chapter section;
}

.toc > li {
  counter-reset: section;
}

.toc > li::before {
  counter-increment: chapter;
  content: counter(chapter) ". ";
}

.toc li {
  counter-increment: section;
}

.toc li::before {
  content: counters(section, ".") " ";
}

/* 结果：
  1. 第一章
    1.1 节
    1.2 节
  2. 第二章
    2.1 节
*/
```

### 自定义计数器样式

```css
/* 罗马数字 */
.chapter::before {
  counter-increment: chapter;
  content: counter(chapter, upper-roman) ". ";
}

/* 小写拉丁字母 */
.section::before {
  counter-increment: section;
  content: counter(section, lower-latin) ") ";
}

/* 带前导零 */
.item::before {
  counter-increment: item;
  content: counter(item, decimal-leading-zero) ". ";
}
```

### 重置计数器

```css
/* 在每个新章节重置子章节计数器 */
h2 {
  counter-reset: section;
}

/* 在每个新小节重置段落计数器 */
h3 {
  counter-reset: paragraph;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 2+ |
| Firefox | 1+ |
| Safari | 1.3+ |
| Edge | 12+ |
| IE | 8+ |

## 相关链接

- [MDN Web Docs: CSS 计数器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
- [CSS Lists and Counters Module Level 3](https://www.w3.org/TR/css-lists-3/)
