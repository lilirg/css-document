# @font-face

@font-face 规则定义自定义字体。

## 语法

```css
@font-face {
  font-family: <family-name>;
  src: <src>;
  font-weight: <weight>;
  font-style: <style>;
  font-stretch: <stretch>;
  unicode-range: <range>;
  font-variant: <variant>;
  font-feature-settings: <settings>;
}
```

## 常见值

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
```

## 示例

```css
@font-face {
  font-family: "Roboto";
  src: url("roboto.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: "Roboto", sans-serif;
}
```

## 注意事项

- @font-face 规则可以定义字体的权重和样式
- @font-face 规则可以定义 unicode-range 来限制字体的使用范围

## 相关资源

- [MDN Web Docs: @font-face](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)
- [CSS-Tricks: @font-face](https://css-tricks.com/almanac/properties/f/font-face/)