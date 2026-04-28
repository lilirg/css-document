# :optional

:optional 伪类选择没有 required 属性的表单元素。

## 语法

```css
selector:optional {
  property: value;
}
```

## 示例

```css
/* 可选输入框 */
input:optional {
  border-color: #ccc;
}

/* 可选字段 */
input:optional::after {
  content: " (可选)";
  color: #666;
}

/* 可选选择框 */
select:optional {
  background-color: white;
}
```

## 相关资源

- [MDN Web Docs: :optional](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional)
- [CSS-Tricks: :optional](https://css-tricks.com/almanac/selectors/o/optional/)