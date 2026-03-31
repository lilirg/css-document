# counter-set

`counter-set` 属性用于设置或重置 CSS 计数器。

## 语法

```css
counter-set: none | <identifier> <integer>?
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 不设置计数器 |
| `<identifier>` | 计数器名称 |
| `<integer>` | 初始值（默认为 0） |

## 注意

- 此属性与 `counter-increment` 和 `content()` 配合使用
- 用于创建自定义编号系统
- 可以设置多个计数器

## 示例

```css
/* 重置计数器 */
.section {
  counter-set: section;
}

/* 设置初始值 */
.chapter {
  counter-set: chapter 1;
}

/* 设置多个计数器 */
.item {
  counter-set: chapter 1 section 0;
}
```

```css
/* 使用计数器显示编号 */
.section::before {
  content: "第 " counter(section) " 节";
  counter-increment: section;
}
```

```html
<!-- HTML 示例 -->
<div class="chapter">
  <div class="section">第一节</div>
  <div class="section">第二节</div>
</div>
```

## 使用场景

```css
/* 1. 章节编号 */
.chapter {
  counter-set: chapter;
}

.chapter h1 {
  counter-increment: chapter;
}

.chapter h1::before {
  content: "第 " counter(chapter) "章 ";
}

/* 2. 嵌套编号 */
.item {
  counter-set: item;
}

.item::before {
  counter-increment: item;
  content: counter(item) ". ";
}

/* 3. 多级编号 */
.chapter {
  counter-set: chapter;
}

.section {
  counter-set: section;
}

.chapter h1 {
  counter-increment: chapter;
}

.section h2 {
  counter-increment: section;
}

.section h2::before {
  content: counter(chapter) "." counter(section) " ";
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 前缀 |
|--------|------|------|
| Chrome | 84+ | 无 |
| Edge | 84+ | 无 |
| Firefox | 68+ | 无 |
| Safari | 15+ | 无 |
| Opera | 70+ | 无 |

## 相关属性

- [`counter-increment`](counter-increment.md) - 计数器递增
- [`content()`](content.md) - 内容函数
- [`counters()`](counters.md) - 多级计数器函数

## 规范

- [CSS Generated Content Module Level 3](https://drafts.csswg.org/css-content-3/)