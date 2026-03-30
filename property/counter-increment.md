# counter-increment

该属性用于递增或递减 CSS 计数器的值。

## 语法

```css
counter-increment: name value
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 无 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### name
计数器名称，可以是任何有效的 CSS 标识符。

### value
递增或递减的值：
- 整数（如 `1`, `2`, `-1`）
- 默认值为 `1`

### none
不递增任何计数器。

## 注意
- 计数器必须先使用 `counter-reset` 初始化
- 计数器值在元素内容生成后递增
- 使用 `counter()` 或 `counters()` 函数在 `content` 属性中显示计数器值
- 负值可以递减计数器

## 示例

```css
/* 初始化计数器并递增 */
body {
  counter-reset: section;
}

section {
  counter-increment: section;
}

section::before {
  content: "第 " counter(section) " 节";
}
```

```html
<!-- HTML 示例 -->
<section>第一章内容</section>
<section>第二章内容</section>
<section>第三章内容</section>
```

## 使用场景

```css
/* 1. 章节编号 */
body {
  counter-reset: chapter;
}

.chapter {
  counter-increment: chapter;
}

.chapter::before {
  content: "第 " counter(chapter) "章 ";
  font-weight: bold;
}

/* 2. 多级编号（章节和子章节） */
body {
  counter-reset: chapter section;
}

.chapter {
  counter-increment: chapter;
  counter-reset: section;
}

.chapter::before {
  content: "第 " counter(chapter) "章 ";
}

.section {
  counter-increment: section;
}

.section::before {
  content: counter(chapter) "." counter(section) " ";
}

/* 3. 递减计数器 */
.countdown {
  counter-increment: countdown -1;
}

/* 4. 多个计数器同时递增 */
.multi {
  counter-increment: alpha beta 2;
}

.multi::before {
  content: counter(alpha) "-" counter(beta);
}
