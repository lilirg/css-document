# perspective

perspective 属性定义 3D 元素的透视效果。

## 语法

```css
perspective: none | <length>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `perspective: none` |
| `<length>` | 长度 | `perspective: 1000px` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  perspective: none;
}

/* 长度 */
.length {
  perspective: 1000px;
}
```

### 高级用法

```css
/* 容器 */
.container {
  perspective: none;
}

/* 静态 */
.static {
  perspective: none;
}

/* 相对 */
.relative {
  perspective: none;
}

/* 绝对 */
.absolute {
  perspective: none;
}

/* 固定 */
.fixed {
  perspective: none;
}

/* 粘性 */
.sticky {
  perspective: none;
}

/* 响应式布局 */
.responsive {
  perspective: none;
}

/* 卡片布局 */
.card {
  perspective: none;
}

/* 表单布局 */
.form {
  perspective: none;
}

/* 图片画廊 */
.gallery {
  perspective: none;
}

/* 混合单位 */
.mixed-units {
  perspective: none;
}

/* 带命名的项目 */
.named-items {
  perspective: none;
}

/* 悬停效果 */
.card {
  transition: perspective 0.3s ease-in-out;
}

.card:hover {
  perspective: 1000px;
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

- `perspective` 只能用于 3D 变换元素
- `perspective` 定义 3D 元素的透视效果
- `none` 是默认值，表示无

## 相关属性

- [`transform`](./transform)
- [`transform-style`](./transform-style)
- [`perspective-origin`](./perspective-origin)

## 相关资源

- [MDN Web Docs: perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)
- [CSS-Tricks: perspective](https://css-tricks.com/almanac/properties/p/perspective/)
- [W3C CSS Transforms](https://www.w3.org/TR/css-transforms-1/)