# :dir()

`:dir()` 伪类用于基于元素的方向性（HTML `dir` 属性或 CSS `direction` 属性的值）匹配元素。

## 语法

```css
:dir(direction) {
  /* CSS properties */
}
```

## 描述

`:dir()` 伪类匹配基于其方向性的元素。`direction` 参数可以是 `ltr`（从左到右）或 `rtl`（从右到左）。

## 示例

```css
/* 从左到右的元素 */
:dir(ltr) {
  text-align: left;
}

/* 从右到左的元素 */
:dir(rtl) {
  text-align: right;
}

/* 段落中的从左到右文本 */
p:dir(ltr) {
  direction: ltr;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 不支持 | IE 不支持 |

## 相关链接

- [MDN: :dir()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir)
- [CSS Selectors Level 4 - :dir()](https://www.w3.org/TR/css-selectors-4/#dir-pseudo)