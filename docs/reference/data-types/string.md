# string

string 数据类型表示字符串值。

## 示例

```css
/* content 属性 */
.element::before {
  content: "Hello";
}

/* attr() 函数 */
.element::before {
  content: attr(data-label);
}

/* url() 函数 */
.element {
  background-image: url('image.png');
}
```

## 相关资源

- [MDN Web Docs: string](https://developer.mozilla.org/zh-CN/docs/Web/CSS/string)
- [CSS-Tricks: string](https://css-tricks.com/almanac/properties/c/content/)