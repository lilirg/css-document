# 属性选择器 (Attribute Selectors)

属性选择器允许基于元素的属性及其值来选择元素。

## 语法

```css
/* 基本属性选择器 */
[attr]                    /* 具有 attr 属性的元素 */
[attr=value]             /* attr 属性值等于 value 的元素 */
[attr~=value]            /* attr 属性值包含 value 词的元素 */
[attr|=value]            /* attr 属性值等于 value 或以 value- 开头的元素 */
[attr^=value]            /* attr 属性值以 value 开头的元素 */
[attr$=value]            /* attr 属性值以 value 结尾的元素 */
[attr*=value]            /* attr 属性值包含 value 子字符串的元素 */

/* 大小写敏感匹配 */
[attr=value i]           /* 匹配 value，忽略大小写 */
[attr=value s]           /* 匹配 value，区分大小写（默认） */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 属性值

| 选择器 | 描述 | 示例 |
| :--- | :--- | :--- |
| `[attr]` | 选择具有指定属性的元素 | `a[title]` 选择所有具有 title 属性的 `<a>` 元素 |
| `[attr=value]` | 选择属性值等于指定值的元素 | `input[type="text"]` 选择所有 type="text" 的 `<input>` 元素 |
| `[attr~=value]` | 选择属性值包含指定词的元素（词以空格分隔） | `p[class~="highlight"]` 选择 class 包含 "highlight" 的 `<p>` 元素 |
| `[attr\|=value]` | 选择属性值等于指定值或以指定值加连字符开头的元素 | `div[lang\|=zh]` 选择 lang="zh" 或 lang="zh-CN" 的 `<div>` 元素 |
| `[attr^=value]` | 选择属性值以指定值开头的元素 | `a[href^="https"]` 选择 href 以 "https" 开头的 `<a>` 元素 |
| `[attr$=value]` | 选择属性值以指定值结尾的元素 | `img[src$=".png"]` 选择 src 以 ".png" 结尾的 `<img>` 元素 |
| `[attr*=value]` | 选择属性值包含指定子字符串的元素 | `a[href*="example"]` 选择 href 包含 "example" 的 `<a>` 元素 |

## 示例

### 基本属性选择器

```html
<!-- HTML -->
<input type="text" name="username">
<input type="password" name="password">
<input type="email" name="email">
```

```css
/* 选择所有 type 属性的 input 元素 */
input[type] {
  border: 1px solid #ccc;
}

/* 选择 type="text" 的 input 元素 */
input[type="text"] {
  background-color: #f0f0f0;
}
```

### 使用属性选择器进行表单样式化

```html
<!-- HTML -->
<form>
  <input type="text" required>
  <input type="email" required>
  <input type="url">
  <button type="submit">提交</button>
</form>
```

```css
/* 必填字段添加星号 */
input[required]::before {
  content: "* ";
  color: red;
}

/* URL 输入框样式 */
input[type="url"] {
  background-image: url(url-icon.png);
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 30px;
}
```

### 链接样式化

```html
<!-- HTML -->
<a href="https://example.com">外部链接</a>
<a href="/internal/page">内部链接</a>
<a href="document.pdf">PDF 文档</a>
<a href="image.jpg">图片</a>
```

```css
/* 外部链接添加图标 */
a[href^="https"]::after {
  content: " ↗";
}

/* PDF 链接样式 */
a[href$=".pdf"]::after {
  content: " [PDF]";
  font-size: 0.8em;
  color: #666;
}
```

### CSS 选择器优先级

属性选择器的特异性（specificity）如下：
- `[attr]` - (0, 1, 0)
- `[attr=value]` - (0, 1, 0)
- `[attr~=value]` - (0, 1, 0)
- `[attr\|=value]` - (0, 1, 0)
- `[attr^=value]` - (0, 1, 0)
- `[attr$=value]` - (0, 1, 0)
- `[attr*=value]` - (0, 1, 0)

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 7+ |

## 相关链接

- [MDN Web Docs: 属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)
- [CSS Selectors Level 3](https://www.w3.org/TR/CSS2/selector.html#attribute-selectors)
- [CSS Selectors Level 4](https://www.w3.org/TR/selectors-4/#attribute-selectors)
