# content

`content` CSS 属性用于在元素的 `::before` 和 `::after` 伪元素中插入内容。

## 语法

```css
/* 无内容 */
content: none;
content: normal;

/* 字符串 */
content: "Hello, world!";

/* 图像 */
content: url("image.png");

/* 计数器 */
content: counter(chapter);
content: counters(section, ".");

/* 引号 */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* 属性值 */
content: attr(data-value);

/* 混合值 */
content: "Chapter " counter(chapter) ": " attr(title);

/* 内联块 */
content: url("icon.svg") attr(alt);
```

## 值

### `normal` / `none`

不生成伪元素内容。

```css
content: none;
content: normal;
```

### 字符串

插入文本字符串。

```css
content: "Hello, world!";
content: "→ ";
```

### 图像

插入图像。

```css
content: url("icon.png");
content: url("icon.svg") attr(alt);
```

### 计数器

使用计数器值。

```css
/* 单个计数器 */
content: counter(chapter);

/* 多个计数器 */
content: counters(section, ".");

/* 自定义格式 */
content: "Chapter " counter(chapter);
```

### 引号

插入引号字符。

```css
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;
```

### 属性值

插入元素属性值。

```css
content: attr(data-value);
content: attr(href url);
```

### `url()`

插入外部资源。

```css
content: url("image.png");
```

## 示例

### 基本用法

```css
/* 在元素前添加内容 */
.icon::before {
  content: "→ ";
}

/* 在元素后添加内容 */
.link::after {
  content: " ↗";
}
```

### 添加图标

```css
/* 使用 Unicode 字符 */
.check::before {
  content: "✓";
}

/* 使用图像 */
.logo::before {
  content: url("logo.svg");
}

/* 使用 CSS 变量 */
.icon::before {
  content: var(--icon-content);
}
```

### 计数器

```css
/* 章节计数 */
.chapter {
  counter-increment: chapter;
}

.chapter::before {
  content: "Chapter " counter(chapter) ": ";
}

/* 嵌套计数 */
section {
  counter-increment: section;
}

section::before {
  content: counters(section, ".") " ";
}
```

### 引用

```css
/* 自动引号 */
blockquote {
  quotes: "«" "»";
}

blockquote::before {
  content: open-quote;
}

blockquote::after {
  content: close-quote;
}
```

### 显示属性值

```css
/* 显示链接地址 */
a::after {
  content: " (" attr(href) ")";
}

/* 显示数据属性 */
[data-tooltip]::after {
  content: attr(data-tooltip);
}
```

### 实际应用

```css
/* 必填字段标记 */
.required::after {
  content: "*";
  color: red;
}

/* 外部链接标记 */
a.external::after {
  content: " ↗";
}

/* 下载链接 */
a.download::before {
  content: "↓ ";
}

/* 新标签提示 */
a[target="_blank"]::after {
  content: " (新窗口)";
  font-size: 0.8em;
  color: #666;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Edge | 12+ |
| Firefox | 1+ |
| Safari | 1+ |
| Opera | 9+ |

## 注意事项

1. **伪元素**：`content` 只能在 `::before` 和 `::after` 伪元素中使用。

2. **可访问性**：使用 `content` 添加的内容对屏幕阅读器可见，需谨慎使用。

3. **SEO**：`content` 中的内容对搜索引擎可见。

4. **计数器**：需要配合 `counter-increment` 和 `counter-reset` 使用。

5. **引号**：引号字符由 `quotes` 属性定义。

6. **不要用于重要内容**：重要内容应直接在 HTML 中，而不是通过 CSS 添加。

## 相关属性

- [`::before`](../pseudo-class/doublecolon_before.md) - 伪元素
- [`::after`](../pseudo-class/doublecolon_after.md) - 伪元素
- [`counter-increment`](counter-increment.md) - 计数器递增
- [`counter-reset`](counter-reset.md) - 计数器重置
- [`quotes`](quotes.md) - 引用符号

## 规范

- [CSS Generated and Replaced Content Module Level 3](https://www.w3.org/TR/css-content-3/)