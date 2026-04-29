# border-width

border-width 属性定义元素的边框宽度。

## 语法

```css
border-width: <line-width> | <line-width> <line-width> | <line-width> <line-width> <line-width> | <line-width> <line-width> <line-width> <line-width>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<line-width>` | 线宽 | `border-width: 1px` |
| `<line-width> <line-width>` | 上下左右 | `border-width: 1px 2px` |
| `<line-width> <line-width> <line-width>` | 上下左右下 | `border-width: 1px 2px 3px` |
| `<line-width> <line-width> <line-width> <line-width>` | 上右下左 | `border-width: 1px 2px 3px 4px` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  border-width: 1px;
}

/* 两值 */
.two {
  border-width: 1px 2px;
}

/* 三值 */
.three {
  border-width: 1px 2px 3px;
}

/* 四值 */
.four {
  border-width: 1px 2px 3px 4px;
}
```

### 高级用法

```css
/* 容器 */
.container {
  border-width: 1px;
}

/* 静态 */
.static {
  border-width: 1px;
}

/* 相对 */
.relative {
  border-width: 1px;
}

/* 绝对 */
.absolute {
  border-width: 2px;
}

/* 固定 */
.fixed {
  border-width: 3px;
}

/* 粘性 */
.sticky {
  border-width: 1px;
}

/* 响应式布局 */
.responsive {
  border-width: 1px;
}

/* 卡片布局 */
.card {
  border-width: 1px;
}

/* 表单布局 */
.form {
  border-width: 1px;
}

/* 图片画廊 */
.gallery {
  border-width: 1px;
}

/* 混合单位 */
.mixed-units {
  border-width: 1px;
}

/* 带命名的项目 */
.named-items {
  border-width: 1px;
}

/* 悬停效果 */
.card {
  transition: border-width 0.3s ease-in-out;
}

.card:hover {
  border-width: 2px;
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

- `border-width` 可以用于任何元素
- `border-width` 定义元素的边框宽度
- 可以使用线宽值

## 相关属性

- [`border`](./border)
- [`border-style`](./border-style)
- [`border-color`](./border-color)
- [`border-radius`](./border-radius)

## 相关资源

- [MDN Web Docs: border-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width)
- [CSS-Tricks: border-width](https://css-tricks.com/almanac/properties/b/border-width/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)