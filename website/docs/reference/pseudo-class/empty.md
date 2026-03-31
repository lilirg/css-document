---
sidebar_position: 148
---

# :empty

:empty 伪类匹配没有任何子元素（包括文本节点）的元素。

## 语法

```css
selector:empty {
  property: value;
}
```

## 示例

```css
/* 匹配空的 div */
div:empty {
  border: 1px dashed #ccc;
}

/* 匹配空的段落 */
p:empty {
  display: none;
}

/* 匹配空的列表项 */
li:empty {
  display: none;
}

/* 匹配空的容器（用于占位符） */
.container:empty::before {
  content: "暂无数据";
  color: #999;
}
```

## 相关资源

- [MDN Web Docs: :empty](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)
- [CSS-Tricks: :empty](https://css-tricks.com/almanac/selectors/e/empty/)