# @document

`@document` 规则用于根据文档的 URL 来应用 CSS 样式。这是一个实验性功能，主要用于用户样式表。

## 语法

```css
@document <url-function> [, <url-function>]* {
  /* CSS rules */
}

/* URL 函数 */
@document url("https://example.com") {
  /* CSS rules */
}

@document url-prefix("https://example.com") {
  /* CSS rules */
}

@document domain("example.com") {
  /* CSS rules */
}

@document regexp("https://example\\.com/.*") {
  /* CSS rules */
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 不适用（样式表规则） |
| 动画 | 不适用 |

## 属性值

### URL 函数

- `url("URL")`：匹配精确的 URL
- `url-prefix("URL")`：匹配 URL 前缀
- `domain("domain")`：匹配域名
- `regexp("regex")`：使用正则表达式匹配 URL

## 示例

### 精确 URL 匹配

```css
@document url("https://example.com/page.html") {
  body {
    background-color: lightblue;
  }
}
```

### URL 前缀匹配

```css
@document url-prefix("https://example.com/admin") {
  .admin-panel {
    border: 2px solid red;
  }
}
```

### 域名匹配

```css
@document domain("example.com") {
  body {
    font-family: Arial, sans-serif;
  }
}
```

### 正则表达式匹配

```css
@document regexp("https://example\\.com/.*") {
  body {
    background-color: lightgray;
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 不支持 | 无 |
| Firefox | 12+ | 仅用户样式表 |
| Safari | 不支持 | 无 |
| Edge | 不支持 | 无 |
| IE | 不支持 | 无 |

## 相关链接

- [MDN: @document](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@document)
- [W3C: CSS Conditional Rules Module Level 3 - @document](https://www.w3.org/TR/css-conditional-3/#document-rule)
