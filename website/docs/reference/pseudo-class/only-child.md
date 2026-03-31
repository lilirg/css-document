---
sidebar_position: 157
---

# :only-child

:only-child 伪类匹配其父元素中唯一的子元素（且该子元素没有兄弟元素）。

## 语法

```css
selector:only-child {
  property: value;
}
```

## 示例

```css
/* 匹配唯一的子元素 */
li:only-child {
  list-style: none;
}

/* 匹配唯一的段落 */
p:only-child {
  margin: 0;
}

/* 匹配唯一的 div */
div:only-child {
  width: 100%;
}

/* 匹配唯一的子元素（带特殊样式） */
span:only-child {
  font-weight: bold;
}
```

## 相关资源

- [MDN Web Docs: :only-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child)
- [CSS-Tricks: :only-child](https://css-tricks.com/almanac/selectors/o/only-child/)