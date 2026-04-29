# visibility

visibility 属性定义元素是否可见。

## 语法

```css
visibility: visible | hidden | collapse;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `visible` | 可见 | `visibility: visible` |
| `hidden` | 隐藏 | `visibility: hidden` |
| `collapse` | 折叠 | `visibility: collapse` |

## 示例

### 基础用法

```css
/* 可见 */
.visible {
  visibility: visible;
}

/* 隐藏 */
.hidden {
  visibility: hidden;
}

/* 折叠 */
.collapse {
  visibility: collapse;
}
```

### 高级用法

```css
/* 容器 */
.container {
  visibility: visible;
}

/* 静态 */
.static {
  visibility: visible;
}

/* 相对 */
.relative {
  visibility: visible;
}

/* 绝对 */
.absolute {
  visibility: visible;
}

/* 固定 */
.fixed {
  visibility: visible;
}

/* 粘性 */
.sticky {
  visibility: visible;
}

/* 响应式布局 */
.responsive {
  visibility: visible;
}

/* 卡片布局 */
.card {
  visibility: visible;
}

/* 表单布局 */
.form {
  visibility: visible;
}

/* 图片画廊 */
.gallery {
  visibility: visible;
}

/* 混合单位 */
.mixed-units {
  visibility: visible;
}

/* 带命名的项目 */
.named-items {
  visibility: visible;
}

/* 悬停效果 */
.card {
  transition: visibility 0.3s ease-in-out;
}

.card:hover {
  visibility: hidden;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `visibility` 可以用于任何元素
- `visibility` 定义元素是否可见
- `visible` 是默认值，表示可见

## 相关属性

- [`opacity`](./opacity)
- [`display`](./display)
- [`pointer-events`](./pointer-events)

## 相关资源

- [MDN Web Docs: visibility](https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility)
- [CSS-Tricks: visibility](https://css-tricks.com/almanac/properties/v/visibility/)
- [W3C CSS Display](https://www.w3.org/TR/css-display-4/)