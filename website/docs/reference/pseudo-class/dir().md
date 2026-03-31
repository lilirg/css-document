---
sidebar_position: 159
---

# :dir()

:dir() 伪类匹配具有指定文本方向的元素。

## 语法

```css
selector:dir(direction) {
  property: value;
}
```

## 示例

```css
/* 匹配从左到右的元素 */
:dir(ltr) {
  text-align: left;
}

/* 匹配从右到左的元素 */
:dir(rtl) {
  text-align: right;
}

/* 匹配从左到右的段落 */
p:dir(ltr) {
  direction: ltr;
}

/* 匹配从右到左的段落 */
p:dir(rtl) {
  direction: rtl;
}
```

## 相关资源

- [MDN Web Docs: :dir](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir)
- [CSS-Tricks: :dir](https://css-tricks.com/almanac/selectors/d/dir/)