---
sidebar_position: 160
---

# :lang()

:lang() 伪类匹配具有指定语言的元素。

## 语法

```css
selector:lang(language) {
  property: value;
}
```

## 示例

```css
/* 匹配中文元素 */
:lang(zh) {
  font-family: "Microsoft YaHei", sans-serif;
}

/* 匹配英文元素 */
:lang(en) {
  font-family: Arial, sans-serif;
}

/* 匹配中文段落 */
p:lang(zh) {
  line-height: 1.6;
}

/* 匹配英文段落 */
p:lang(en) {
  line-height: 1.5;
}
```

## 相关资源

- [MDN Web Docs: :lang](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang)
- [CSS-Tricks: :lang](https://css-tricks.com/almanac/selectors/l/lang/)