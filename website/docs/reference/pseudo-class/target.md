---
sidebar_position: 176
---

# :target

:target 伪类匹配当前 URL 锚点指向的元素。

## 语法

```css
selector:target {
  property: value;
}
```

## 示例

```css
/* 匹配当前锚点指向的元素 */
#section:target {
  background-color: yellow;
  border: 2px solid orange;
}

/* 匹配锚点标题 */
:target {
  scroll-margin-top: 60px;
}

/* 匹配锚点段落 */
p:target {
  background-color: #ffffcc;
}

/* 匹配锚点导航项 */
.nav-item:target {
  background-color: #333;
  color: white;
}
```

## 相关资源

- [MDN Web Docs: :target](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target)
- [CSS-Tricks: :target](https://css-tricks.com/almanac/selectors/t/target/)