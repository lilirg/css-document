# :only-of-type

:only-of-type 伪类匹配其父元素中唯一同类型的子元素。

## 语法

```css
selector:only-of-type {
  property: value;
}
```

## 示例

```css
/* 匹配唯一的段落 */
p:only-of-type {
  margin: 0;
}

/* 匹配唯一的 div */
div:only-of-type {
  width: 100%;
}

/* 匹配唯一的列表项 */
li:only-of-type {
  list-style: none;
}

/* 匹配唯一的同类型元素（带特殊样式） */
h2:only-of-type {
  text-align: center;
}
```

## 相关资源

- [MDN Web Docs: :only-of-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type)
- [CSS-Tricks: :only-of-type](https://css-tricks.com/almanac/selectors/o/only-of-type/)