# :first

`:first` 伪类用于选择分页媒体的第一页。

## 语法

```css
:first {
  /* CSS properties */
}
```

## 描述

`:first` 伪类匹配分页媒体的第一页。它通常与 `@page` 规则一起使用，用于设置打印样式。

## 示例

```css
/* 打印时第一页的样式 */
@page :first {
  margin-top: 5cm;
}

/* 第一页的页眉 */
@page :first {
  @top-center {
    content: "第一页";
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

- [MDN: :first](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first)
- [CSS Paged Media Module Level 3 - :first](https://www.w3.org/TR/css-page-3/#first-pseudo)