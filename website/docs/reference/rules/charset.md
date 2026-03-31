---
sidebar_position: 2
---

# @charset

@charset 规则定义样式表的字符编码。

## 语法

```css
@charset "charset";
```

## 常见值

```css
@charset "UTF-8";
@charset "ISO-8859-1";
@charset "Shift_JIS";
```

## 示例

```css
@charset "UTF-8";

/* 样式 */
body {
  color: #333;
}
```

## 注意事项

- @charset 规则必须是样式表的第一条规则
- @charset 规则只能在样式表的最外层使用
- @charset 规则不能在 @media、@supports 等条件规则中使用

## 相关资源

- [MDN Web Docs: @charset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@charset)
- [CSS-Tricks: @charset](https://css-tricks.com/almanac/properties/c/charset/)