# :left

`:left` 伪类用于选择分页媒体的左手边的页。

## 语法

```css
:left {
  /* CSS properties */
}
```

## 描述

`:left` 伪类匹配分页媒体的左手边的页。它通常与 `@page` 规则一起使用，用于设置打印样式。

## 示例

```css
/* 打印时左手边页的样式 */
@page :left {
  margin-right: 2cm;
}

/* 左手边页的页眉 */
@page :left {
  @top-left {
    content: "左手边页";
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | |

## 相关链接

- [MDN: :left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left)
- [CSS Paged Media Module Level 3 - :left](https://www.w3.org/TR/css-page-3/#left-pseudo)