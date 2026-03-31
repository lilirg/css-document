# :only-child

`:only-child` 伪类用于选择没有兄弟元素的元素。

## 语法

```css
:only-child {
  /* CSS properties */
}
```

## 描述

`:only-child` 伪类匹配没有兄弟元素的元素。当元素是其父元素的唯一子元素时，它处于 `:only-child` 状态。

## 示例

```css
/* 唯一的列表项 */
li:only-child {
  font-weight: bold;
}

/* 唯一的段落 */
p:only-child {
  text-align: center;
}

/* 唯一的 div */
div:only-child {
  margin: 0 auto;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 7+ |

## 相关链接

- [MDN: :only-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child)
- [CSS Selectors Level 3 - :only-child](https://www.w3.org/TR/CSS21/selector.html#only-child)