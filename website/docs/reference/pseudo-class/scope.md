---
sidebar_position: 158
---

# :scope

:scope 伪类匹配当前作用域的元素。在没有使用 `:scope` 时，它默认匹配根元素（HTML 文档中是 `<html>` 元素）。

## 语法

```css
selector:scope {
  property: value;
}
```

## 示例

```css
/* 匹配当前作用域的元素 */
:scope {
  --main-color: #333;
}

/* 匹配当前作用域的元素（等价于 :root） */
:scope {
  font-size: 16px;
}

/* 匹配当前作用域的元素（设置全局样式） */
:scope {
  scroll-behavior: smooth;
}

/* 匹配当前作用域的元素（主题变量） */
:scope {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

## 相关资源

- [MDN Web Docs: :scope](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope)
- [CSS-Tricks: :scope](https://css-tricks.com/almanac/selectors/s/scope/)