# opacity

opacity 属性定义元素的透明度。

## 语法

```css
opacity: <number>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<number>` | 数字 | `opacity: 0.5` |

## 示例

### 基础用法

```css
/* 完全不透明 */
.opaque {
  opacity: 1;
}

/* 半透明 */
.transparent {
  opacity: 0.5;
}

/* 完全透明 */
.invisible {
  opacity: 0;
}
```

### 高级用法

```css
/* 容器 */
.container {
  opacity: 1;
}

/* 静态 */
.static {
  opacity: 1;
}

/* 相对 */
.relative {
  opacity: 1;
}

/* 绝对 */
.absolute {
  opacity: 1;
}

/* 固定 */
.fixed {
  opacity: 1;
}

/* 粘性 */
.sticky {
  opacity: 1;
}

/* 响应式布局 */
.responsive {
  opacity: 1;
}

/* 卡片布局 */
.card {
  opacity: 1;
}

/* 表单布局 */
.form {
  opacity: 1;
}

/* 图片画廊 */
.gallery {
  opacity: 1;
}

/* 混合单位 */
.mixed-units {
  opacity: 1;
}

/* 带命名的项目 */
.named-items {
  opacity: 1;
}

/* 悬停效果 */
.card {
  transition: opacity 0.3s ease-in-out;
}

.card:hover {
  opacity: 0.5;
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

- `opacity` 可以用于任何元素
- `opacity` 定义元素的透明度
- `1` 是默认值，表示完全不透明

## 相关属性

- [`visibility`](./visibility)
- [`display`](./display)
- [`pointer-events`](./pointer-events)

## 相关资源

- [MDN Web Docs: opacity](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity)
- [CSS-Tricks: opacity](https://css-tricks.com/almanac/properties/o/opacity/)
- [W3C CSS Color](https://www.w3.org/TR/css-color-4/)