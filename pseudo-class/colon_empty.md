# :empty

`:empty` 伪类用于选择没有任何子元素的元素。

## 语法

```css
:empty {
  /* CSS properties */
}
```

## 描述

`:empty` 伪类匹配除了可能存在的空格外，没有子元素的元素。子元素包括元素节点、文本节点、注释节点等。仅包含空白字符（空格、制表符、换行符）的元素被视为 `:empty`。

## 示例

```css
/* 空的 div */
div:empty {
  border: 1px dashed #ccc;
  min-height: 50px;
}

/* 空的段落 */
p:empty {
  display: none;
}

/* 空的列表项 */
li:empty::before {
  content: "空项";
  color: gray;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 不支持 | IE 11 及更早版本不支持 |

## 相关链接

- [MDN: :empty](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty)
- [CSS Selectors Level 3 - :empty](https://www.w3.org/TR/css3-selectors/#empty-pseudo)