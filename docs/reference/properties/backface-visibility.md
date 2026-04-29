# backface-visibility

backface-visibility 属性定义元素的背面是否可见。

## 语法

```css
backface-visibility: visible | hidden;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `visible` | 可见 | `backface-visibility: visible` |
| `hidden` | 隐藏 | `backface-visibility: hidden` |

## 示例

### 基础用法

```css
/* 可见 */
.visible {
  backface-visibility: visible;
}

/* 隐藏 */
.hidden {
  backface-visibility: hidden;
}
```

### 高级用法

```css
/* 容器 */
.container {
  backface-visibility: visible;
}

/* 静态 */
.static {
  backface-visibility: visible;
}

/* 相对 */
.relative {
  backface-visibility: visible;
}

/* 绝对 */
.absolute {
  backface-visibility: visible;
}

/* 固定 */
.fixed {
  backface-visibility: visible;
}

/* 粘性 */
.sticky {
  backface-visibility: visible;
}

/* 响应式布局 */
.responsive {
  backface-visibility: visible;
}

/* 卡片布局 */
.card {
  backface-visibility: visible;
}

/* 表单布局 */
.form {
  backface-visibility: visible;
}

/* 图片画廊 */
.gallery {
  backface-visibility: visible;
}

/* 混合单位 */
.mixed-units {
  backface-visibility: visible;
}

/* 带命名的项目 */
.named-items {
  backface-visibility: visible;
}

/* 悬停效果 */
.card {
  transition: backface-visibility 0.3s ease-in-out;
}

.card:hover {
  backface-visibility: hidden;
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

- `backface-visibility` 只能用于 3D 变换元素
- `backface-visibility` 定义元素的背面是否可见
- `visible` 是默认值，表示可见

## 相关属性

- [`transform`](./transform)
- [`transform-style`](./transform-style)
- [`perspective`](./perspective)

## 相关资源

- [MDN Web Docs: backface-visibility](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility)
- [CSS-Tricks: backface-visibility](https://css-tricks.com/almanac/properties/b/backface-visibility/)
- [W3C CSS Transforms](https://www.w3.org/TR/css-transforms-1/)