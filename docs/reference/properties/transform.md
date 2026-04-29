# transform

transform 属性定义元素的变换效果。

## 语法

```css
transform: none | <transform-function> | <transform-list>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `transform: none` |
| `<transform-function>` | 变换函数 | `transform: rotate(45deg)` |
| `<transform-list>` | 变换列表 | `transform: rotate(45deg) scale(2)` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  transform: none;
}

/* 旋转 */
.rotate {
  transform: rotate(45deg);
}

/* 缩放 */
.scale {
  transform: scale(2);
}

/* 平移 */
.translate {
  transform: translate(10px, 20px);
}

/* 倾斜 */
.skew {
  transform: skew(10deg, 20deg);
}

/* 矩阵 */
.matrix {
  transform: matrix(1, 0, 0, 1, 0, 0);
}

/* 3D 旋转 */
.rotateX {
  transform: rotateX(45deg);
}

.rotateY {
  transform: rotateY(45deg);
}

.rotateZ {
  transform: rotateZ(45deg);
}

/* 3D 缩放 */
.scale3d {
  transform: scale3d(2, 2, 2);
}

/* 3D 平移 */
.translate3d {
  transform: translate3d(10px, 20px, 30px);
}

/* 3D 倾斜 */
.skewX {
  transform: skewX(10deg);
}

.skewY {
  transform: skewY(10deg);
}

/* 3D 矩阵 */
.matrix3d {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
```

### 高级用法

```css
/* 容器 */
.container {
  transform: none;
}

/* 静态 */
.static {
  transform: none;
}

/* 相对 */
.relative {
  transform: none;
}

/* 绝对 */
.absolute {
  transform: none;
}

/* 固定 */
.fixed {
  transform: none;
}

/* 粘性 */
.sticky {
  transform: none;
}

/* 响应式布局 */
.responsive {
  transform: none;
}

/* 卡片布局 */
.card {
  transform: none;
}

/* 表单布局 */
.form {
  transform: none;
}

/* 图片画廊 */
.gallery {
  transform: none;
}

/* 混合单位 */
.mixed-units {
  transform: none;
}

/* 带命名的项目 */
.named-items {
  transform: none;
}

/* 悬停效果 */
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: rotate(45deg);
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

- `transform` 可以用于任何元素
- `transform` 定义元素的变换效果
- `none` 是默认值，表示无

## 相关属性

- [`transform-origin`](./transform-origin)
- [`transform-style`](./transform-style)
- [`perspective`](./perspective)
- [`backface-visibility`](./backface-visibility)

## 相关资源

- [MDN Web Docs: transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
- [CSS-Tricks: transform](https://css-tricks.com/almanac/properties/t/transform/)
- [W3C CSS Transforms](https://www.w3.org/TR/css-transforms-1/)