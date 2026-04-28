# :root

:root 伪类匹配文档的根元素（HTML 文档中是 `<html>` 元素）。

## 语法

```css
selector:root {
  property: value;
}
```

## 示例

```css
/* 匹配根元素 */
:root {
  --main-color: #333;
  --secondary-color: #666;
}

/* 匹配根元素（等价于 html） */
:root {
  font-size: 16px;
}

/* 匹配根元素（设置全局样式） */
:root {
  scroll-behavior: smooth;
}

/* 匹配根元素（主题变量） */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

## 相关资源

- [MDN Web Docs: :root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
- [CSS-Tricks: :root](https://css-tricks.com/almanac/selectors/r/root/)