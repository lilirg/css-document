# :root

`:root` 伪类用于匹配文档的根元素。

## 语法

```css
:root {
  /* CSS properties */
}
```

## 描述

`:root` 伪类匹配文档的根元素。在 HTML 文档中，根元素是 `<html>` 元素。

## 示例

```css
/* HTML 文档的根元素 */
:root {
  --main-color: #333;
  --accent-color: #007bff;
}

/* 全局样式变量 */
:root {
  font-size: 16px;
  line-height: 1.5;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 9+ |

## 相关链接

- [MDN: :root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
- [CSS Selectors Level 3 - :root](https://www.w3.org/TR/CSS21/selector.html#root-pseudo)