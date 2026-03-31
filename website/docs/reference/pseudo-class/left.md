---
sidebar_position: 163
---

# :left

:left 伪类匹配分页媒体中的左侧页面。

## 语法

```css
selector:left {
  property: value;
}
```

## 示例

```css
/* 匹配左侧页面 */
@page :left {
  margin-right: 20mm;
}

/* 匹配左侧页面（特殊样式） */
@page :left {
  background-color: #f5f5f5;
}

/* 匹配左侧页面（边框） */
@page :left {
  border: 1px solid #ccc;
}

/* 匹配左侧页面（页眉） */
@page :left {
  @top-left {
    content: "左侧页眉";
  }
}
```

## 相关资源

- [MDN Web Docs: :left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left)
- [CSS-Tricks: :left](https://css-tricks.com/almanac/selectors/l/left/)