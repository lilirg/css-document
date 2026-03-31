# content

`content` 属性用于在元素前后插入内容。

## 语法

```css
content: value;
```

## 描述

`content` 属性与 `::before` 和 `::after` 伪元素一起使用，用于在元素前后插入内容。它可以接受字符串、URL、计数器等值。

## 示例

```css
/* 插入字符串 */
a::before {
  content: "→ ";
}

/* 插入图片 */
.icon::after {
  content: url("icon.png");
}

/* 插入计数器 */
section::before {
  content: "Section " counter(section) ": ";
  counter-increment: section;
}

/* 插入属性值 */
a::after {
  content: " (" attr(href) ")";
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

- [MDN: content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)
- [CSS Generated Content Module Level 3 - content](https://www.w3.org/TR/css-content-3/#content)