# :in-range

:in-range 伪类匹配值在指定范围内的表单元素（如 input[type="number"] 或 input[type="range"]）。

## 语法

```css
selector:in-range {
  property: value;
}
```

## 示例

```css
/* 匹配在范围内的数字输入 */
input[type="number"]:in-range {
  border-color: green;
}

/* 匹配在范围内的滑块 */
input[type="range"]:in-range {
  background-color: green;
}

/* 匹配在最小值和最大值之间的输入 */
input:in-range {
  background-color: #e8f5e9;
}

/* 匹配日期范围内的日期输入 */
input[type="date"]:in-range {
  border-color: blue;
}
```

## 相关资源

- [MDN Web Docs: :in-range](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range)
- [CSS-Tricks: :in-range](https://css-tricks.com/almanac/selectors/i/in-range/)