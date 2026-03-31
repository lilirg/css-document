# :lang()

`:lang()` 伪类用于基于语言（HTML `lang` 属性的值）匹配元素。

## 语法

```css
:lang(language) {
  /* CSS properties */
}
```

## 描述

`:lang()` 伪类匹配基于语言的元素。`language` 参数是语言代码，如 `en`（英语）、`zh`（中文）等。

## 示例

```css
/* 英文元素 */
:lang(en) {
  quotes: '"' '"' "'" "'";
}

/* 中文元素 */
:lang(zh) {
  font-family: "Microsoft YaHei", sans-serif;
}

/* 法语元素 */
:lang(fr) {
  quotes: "« " " »";
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

- [MDN: :lang()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang)
- [CSS Selectors Level 3 - :lang()](https://www.w3.org/TR/CSS21/selector.html#lang-pseudo)