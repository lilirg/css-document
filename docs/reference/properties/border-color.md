# border-color

border-color 属性定义元素的边框颜色。

## 语法

```css
border-color: <color> | <color> <color> | <color> <color> <color> | <color> <color> <color> <color>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<color>` | 颜色 | `border-color: #000` |
| `<color> <color>` | 上下左右 | `border-color: #000 #fff` |
| `<color> <color> <color>` | 上下左右下 | `border-color: #000 #fff #ccc` |
| `<color> <color> <color> <color>` | 上右下左 | `border-color: #000 #fff #ccc #ddd` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  border-color: #000;
}

/* 两值 */
.two {
  border-color: #000 #fff;
}

/* 三值 */
.three {
  border-color: #000 #fff #ccc;
}

/* 四值 */
.four {
  border-color: #000 #fff #ccc #ddd;
}
```

### 高级用法

```css
/* 容器 */
.container {
  border-color: #000;
}

/* 静态 */
.static {
  border-color: #000;
}

/* 相对 */
.relative {
  border-color: #000;
}

/* 绝对 */
.absolute {
  border-color: #fff;
}

/* 固定 */
.fixed {
  border-color: #ccc;
}

/* 粘性 */
.sticky {
  border-color: #000;
}

/* 响应式布局 */
.responsive {
  border-color: #000;
}

/* 卡片布局 */
.card {
  border-color: #000;
}

/* 表单布局 */
.form {
  border-color: #000;
}

/* 图片画廊 */
.gallery {
  border-color: #000;
}

/* 混合单位 */
.mixed-units {
  border-color: #000;
}

/* 带命名的项目 */
.named-items {
  border-color: #000;
}

/* 悬停效果 */
.card {
  transition: border-color 0.3s ease-in-out;
}

.card:hover {
  border-color: #fff;
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

- `border-color` 可以用于任何元素
- `border-color` 定义元素的边框颜色
- 可以使用颜色值

## 相关属性

- [`border`](./border)
- [`border-width`](./border-width)
- [`border-style`](./border-style)
- [`border-radius`](./border-radius)

## 相关资源

- [MDN Web Docs: border-color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color)
- [CSS-Tricks: border-color](https://css-tricks.com/almanac/properties/b/border-color/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)