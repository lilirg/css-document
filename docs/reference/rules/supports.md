# @supports

@supports 规则定义特性检测。

## 语法

```css
@supports (<condition>) {
  /* 样式 */
}
```

## 常见值

```css
@supports (display: flex) {
  /* 样式 */
}

@supports (display: grid) {
  /* 样式 */
}

@supports not (display: flex) {
  /* 样式 */
}

@supports (display: flex) and (display: grid) {
  /* 样式 */
}

@supports (display: flex) or (display: grid) {
  /* 样式 */
}
```

## 示例

```css
@supports (display: flex) {
  .container {
    display: flex;
  }
}

@supports not (display: flex) {
  .container {
    float: left;
  }
}
```

## 相关资源

- [MDN Web Docs: @supports](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@supports)
- [CSS-Tricks: @supports](https://css-tricks.com/almanac/properties/s/supports/)