# transform-style

transform-style 属性定义元素的子元素是否保留 3D 变换。

## 语法

```css
transform-style: flat | preserve-3d;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `flat` | 平面 | `transform-style: flat` |
| `preserve-3d` | 保留 3D | `transform-style: preserve-3d` |

## 示例

### 基础用法

```css
/* 平面 */
.flat {
  transform-style: flat;
}

/* 保留 3D */
.preserve-3d {
  transform-style: preserve-3d;
}
```

### 高级用法

```css
/* 容器 */
.container {
  transform-style: flat;
}

/* 静态 */
.static {
  transform-style: flat;
}

/* 相对 */
.relative {
  transform-style: flat;
}

/* 绝对 */
.absolute {
  transform-style: flat;
}

/* 固定 */
.fixed {
  transform-style: flat;
}

/* 粘性 */
.sticky {
  transform-style: flat;
}

/* 响应式布局 */
.responsive {
  transform-style: flat;
}

/* 卡片布局 */
.card {
  transform-style: flat;
}

/* 表单布局 */
.form {
  transform-style: flat;
}

/* 图片画廊 */
.gallery {
  transform-style: flat;
}

/* 混合单位 */
.mixed-units {
  transform-style: flat;
}

/* 带命名的项目 */
.named-items {
  transform-style: flat;
}

/* 悬停效果 */
.card {
  transition: transform-style 0.3s ease-in-out;
}

.card:hover {
  transform-style: preserve-3d;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 12+ |
| Firefox | 10+ |
| Safari | 4+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `transform-style` 只能用于 3D 变换元素
- `transform-style` 定义元素的子元素是否保留 3D 变换
- `flat` 是默认值，表示平面

## 相关属性

- [`transform`](./transform)
- [`perspective`](./perspective)
- [`backface-visibility`](./backface-visibility)

## 相关资源

- [MDN Web Docs: transform-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style)
- [CSS-Tricks: transform-style](https://css-tricks.com/almanac/properties/t/transform-style/)
- [W3C CSS Transforms](https://www.w3.org/TR/css-transforms-1/)