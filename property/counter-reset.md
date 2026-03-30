# counter-reset

该属性用于创建或重置 CSS 计数器。

## 语法

```css
counter-reset: name value
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
初始值：
- 整数（如 `0`, `1`, `-1`）
- 默认值为 `0`

### none
不创建或重置任何计数器。

## 注意
- 计数器在元素内容生成后重置
- 计数器值在子元素中继承
- 使用 `counter-increment` 递增计数器
- 使用 `counter()` 或 `counters()` 函数在 `content` 属性中显示计数器值
- 可以一次性重置多个计数器

## 示例

```css
/* 创建并初始化计数器 */
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
<section>第一节内容</section>
<section>第二节内容</section>
<section>第三节内容</section>
```

## 使用场景

```css
/* 1. 初始化章节计数器 */
body {
  counter-reset: chapter;
}

.chapter {
  counter-increment: chapter;
}

.chapter::before {
  content: "第 " counter(chapter) "章 ";
}

/* 2. 多级计数器（章节和子章节） */
body {
  counter-reset: chapter section;
}

.chapter {
  counter-increment: chapter;
  counter-reset: section; /* 每个新章节重置子章节计数器 */
}

.section {
  counter-increment: section;
}

.section::before {
  content: counter(chapter) "." counter(section) " ";
}

/* 3. 从特定值开始计数 */
.start-at-5 {
  counter-reset: my-counter 4; /* 从 5 开始（4+1） */
}

/* 4. 重置多个计数器 */
.reset-all {
  counter-reset: chapter section subsection;
}

/* 5. 负值计数器 */
.negative {
  counter-reset: countdown 10;
}

.countdown-item {
  counter-increment: countdown -1;
}
