# border

border 属性定义元素的边框。

## 语法

```css
border: <border-width> || <border-style> || <border-color>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<border-width>` | 边框宽度 | `border: 1px` |
| `<border-style>` | 边框样式 | `border: solid` |
| `<border-color>` | 边框颜色 | `border: red` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  border: 1px solid red;
}

/* 多值 */
.multi {
  border: 2px dashed blue;
}

/* 无边框 */
.none {
  border: none;
}

/* 透明边框 */
.transparent {
  border: 1px solid transparent;
}
```

### 高级用法

```css
/* 容器 */
.container {
  border: 1px solid #ccc;
}

/* 静态 */
.static {
  border: 1px solid #ccc;
}

/* 相对 */
.relative {
  border: 1px solid #ccc;
}

/* 绝对 */
.absolute {
  border: 1px solid #ccc;
}

/* 固定 */
.fixed {
  border: 1px solid #ccc;
}

/* 粘性 */
.sticky {
  border: 1px solid #ccc;
}

/* 响应式布局 */
.responsive {
  border: 1px solid #ccc;
}

/* 卡片布局 */
.card {
  border: 1px solid #ccc;
}

/* 表单布局 */
.form {
  border: 1px solid #ccc;
}

/* 图片画廊 */
.gallery {
  border: 1px solid #ccc;
}

/* 混合单位 */
.mixed-units {
  border: 1px solid #ccc;
}

/* 带命名的项目 */
.named-items {
  border: 1px solid #ccc;
}

/* 悬停效果 */
.card {
  transition: border 0.3s ease-in-out;
}

.card:hover {
  border: 2px solid #333;
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

- `border` 可以用于任何元素
- `border` 定义元素的边框
- 可以使用宽度、样式和颜色值

## 相关属性

- [`border-width`](./border-width)
- [`border-style`](./border-style)
- [`border-color`](./border-color)

## 相关资源

- [MDN Web Docs: border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)
- [CSS-Tricks: border](https://css-tricks.com/almanac/properties/b/border/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)