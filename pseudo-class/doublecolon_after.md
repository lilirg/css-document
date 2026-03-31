# ::after

`::after` 伪元素用于匹配出现在原有元素的实际内容之后的一个可样式化元素。

## 语法

```css
::after {
  /* CSS properties */
}
```

## 描述

`::after` 伪元素匹配出现在原有元素的实际内容之后的一个可样式化元素。它通常与 `content` 属性一起使用，用于在元素内容后插入内容。

## 示例

```css
/* 在链接后添加图标 */
a::after {
  content: " →";
}

/* 在段落后添加引用符号 */
p::after {
  content: "”";
  font-size: 2em;
  color: gray;
}

/* 在元素后添加装饰 */
div::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 8+ |

## 相关链接

- [MDN: ::after](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)
- [CSS Generated Content Module Level 3 - ::after](https://www.w3.org/TR/css-content-3/#after-before)