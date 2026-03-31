---
sidebar_position: 164
---

# :right

:right 伪类匹配分页媒体中的右侧页面。

## 语法

```css
selector:right {
  property: value;
}
```

## 示例

```css
/* 匹配右侧页面 */
@page :right {
  margin-left: 20mm;
}

/* 匹配右侧页面（特殊样式） */
@page :right {
  background-color: #fff;
}

/* 匹配右侧页面（边框） */
@page :right {
  border: 1px solid #ccc;
}

/* 匹配右侧页面（页眉） */
@page :right {
  @top-right {
    content: "右侧页眉";
  }
}
```

## 相关资源

- [MDN Web Docs: :right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right)
- [CSS-Tricks: :right](https://css-tricks.com/almanac/selectors/r/right/)