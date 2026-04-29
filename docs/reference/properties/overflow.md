# overflow

overflow 属性定义元素内容溢出时的处理方式。

## 语法

```css
overflow: visible | hidden | clip | scroll | auto | overlay;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `visible` | 可见 | `overflow: visible` |
| `hidden` | 隐藏 | `overflow: hidden` |
| `clip` | 裁剪 | `overflow: clip` |
| `scroll` | 滚动 | `overflow: scroll` |
| `auto` | 自动 | `overflow: auto` |
| `overlay` | 叠加 | `overflow: overlay` |

## 示例

### 基础用法

```css
/* 可见 */
.visible {
  overflow: visible;
}

/* 隐藏 */
.hidden {
  overflow: hidden;
}

/* 裁剪 */
.clip {
  overflow: clip;
}

/* 滚动 */
.scroll {
  overflow: scroll;
}

/* 自动 */
.auto {
  overflow: auto;
}

/* 叠加 */
.overlay {
  overflow: overlay;
}
```

### 高级用法

```css
/* 容器 */
.container {
  overflow: auto;
}

/* 静态 */
.static {
  overflow: visible;
}

/* 相对 */
.relative {
  overflow: visible;
}

/* 绝对 */
.absolute {
  overflow: visible;
}

/* 固定 */
.fixed {
  overflow: visible;
}

/* 粘性 */
.sticky {
  overflow: visible;
}

/* 响应式布局 */
.responsive {
  overflow: auto;
}

/* 卡片布局 */
.card {
  overflow: auto;
}

/* 表单布局 */
.form {
  overflow: auto;
}

/* 图片画廊 */
.gallery {
  overflow: auto;
}

/* 混合单位 */
.mixed-units {
  overflow: visible;
}

/* 带命名的项目 */
.named-items {
  overflow: visible;
}

/* 悬停效果 */
.card {
  transition: overflow 0.3s ease-in-out;
}

.card:hover {
  overflow: scroll;
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

- `overflow` 可以用于任何元素
- `overflow` 定义元素内容溢出时的处理方式
- `visible` 是默认值，表示可见

## 相关属性

- [`overflow-x`](./overflow-x)
- [`overflow-y`](./overflow-y)

## 相关资源

- [MDN Web Docs: overflow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)
- [CSS-Tricks: overflow](https://css-tricks.com/almanac/properties/o/overflow/)
- [W3C CSS Overflow](https://www.w3.org/TR/css-overflow-3/)