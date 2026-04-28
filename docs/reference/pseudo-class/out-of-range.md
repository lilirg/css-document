# :out-of-range

:out-of-range 伪类匹配值超出指定范围的表单元素（如 input[type="number"] 或 input[type="range"]）。

## 语法

```css
selector:out-of-range {
  property: value;
}
```

## 示例

```css
/* 匹配超出范围的数字输入 */
input[type="number"]:out-of-range {
  border-color: red;
}

/* 匹配超出范围的滑块 */
input[type="range"]:out-of-range {
  background-color: red;
}

/* 匹配超出最小值和最大值之间的输入 */
input:out-of-range {
  background-color: #ffebee;
}

/* 匹配超出日期范围的日期输入 */
input[type="date"]:out-of-range {
  border-color: red;
}
```

## 相关资源

- [MDN Web Docs: :out-of-range](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range)
- [CSS-Tricks: :out-of-range](https://css-tricks.com/almanac/selectors/o/out-of-range/)