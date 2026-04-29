# transform-origin

transform-origin 属性定义变换的原点位置。

## 语法

```css
transform-origin: <position>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<position>` | 位置 | `transform-origin: center` |

### 位置值

| 值 | 说明 |
|----|------|
| `top` | 顶部 |
| `bottom` | 底部 |
| `left` | 左侧 |
| `right` | 右侧 |
| `center` | 中心 |
| `50%` | 50% |
| `10px` | 10 像素 |

## 示例

### 基础用法

```css
/* 中心 */
.center {
  transform-origin: center;
}

/* 顶部 */
.top {
  transform-origin: top;
}

/* 底部 */
.bottom {
  transform-origin: bottom;
}

/* 左侧 */
.left {
  transform-origin: left;
}

/* 右侧 */
.right {
  transform-origin: right;
}

/* 自定义位置 */
.custom {
  transform-origin: 10px 20px;
}
```

### 高级用法

```css
/* 容器 */
.container {
  transform-origin: center;
}

/* 静态 */
.static {
  transform-origin: center;
}

/* 相对 */
.relative {
  transform-origin: center;
}

/* 绝对 */
.absolute {
  transform-origin: center;
}

/* 固定 */
.fixed {
  transform-origin: center;
}

/* 粘性 */
.sticky {
  transform-origin: center;
}

/* 响应式布局 */
.responsive {
  transform-origin: center;
}

/* 卡片布局 */
.card {
  transform-origin: center;
}

/* 表单布局 */
.form {
  transform-origin: center;
}

/* 图片画廊 */
.gallery {
  transform-origin: center;
}

/* 混合单位 */
.mixed-units {
  transform-origin: center;
}

/* 带命名的项目 */
.named-items {
  transform-origin: center;
}

/* 悬停效果 */
.card {
  transition: transform-origin 0.3s ease-in-out;
}

.card:hover {
  transform-origin: top left;
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

- `transform-origin` 可以用于任何元素
- `transform-origin` 定义变换的原点位置
- `center` 是默认值，表示中心

## 相关属性

- [`transform`](./transform)
- [`transform-style`](./transform-style)
- [`perspective`](./perspective)

## 相关资源

- [MDN Web Docs: transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)
- [CSS-Tricks: transform-origin](https://css-tricks.com/almanac/properties/t/transform-origin/)
- [W3C CSS Transforms](https://www.w3.org/TR/css-transforms-1/)