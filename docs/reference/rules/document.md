# @document

@document 规则定义文档条件规则。

## 语法

```css
@document <url> | <url-prefix> | <domain> | <regexp> {
  /* 样式 */
}
```

## 常见值

```css
@document url("https://example.com/") {
  /* 样式 */
}

@document url-prefix("https://example.com/") {
  /* 样式 */
}

@document domain("example.com") {
  /* 样式 */
}

@document regexp("https://example\.com/.*") {
  /* 样式 */
}
```

## 示例

```css
@document url("https://example.com/") {
  body {
    background: #f0f0f0;
  }
}
```

## 注意事项

- @document 规则目前只在 Firefox 中支持
- @document 规则不能在样式表的最外层使用

## 相关资源

- [MDN Web Docs: @document](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@document)
- [CSS-Tricks: @document](https://css-tricks.com/almanac/properties/d/document/)