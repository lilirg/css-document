# height

height 属性定义元素的高度。

## 语法

```css
height: auto | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `height: auto` |
| `<length-percentage>` | 长度或百分比 | `height: 100px` |
| `min-content` | 最小内容 | `height: min-content` |
| `max-content` | 最大内容 | `height: max-content` |
| `fit-content` | 适应内容 | `height: fit-content` |
| `fit-content(<length-percentage>)` | 适应内容（带限制） | `height: fit-content(200px)` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  height: auto;
}

/* 长度 */
.length {
  height: 100px;
}

/* 百分比 */
.percentage {
  height: 50%;
}

/* 最小内容 */
.min-content {
  height: min-content;
}

/* 最大内容 */
.max-content {
  height: max-content;
}

/* 适应内容 */
.fit-content {
  height: fit-content;
}

/* 适应内容（带限制） */
.fit-content-limit {
  height: fit-content(200px);
}
```

### 高级用法

```css
/* 容器 */
.container {
  height: auto;
}

/* 静态 */
.static {
  height: auto;
}

/* 相对 */
.relative {
  height: auto;
}

/* 绝对 */
.absolute {
  height: auto;
}

/* 固定 */
.fixed {
  height: auto;
}

/* 粘性 */
.sticky {
  height: auto;
}

/* 响应式布局 */
.responsive {
  height: auto;
}

/* 卡片布局 */
.card {
  height: auto;
}

/* 表单布局 */
.form {
  height: auto;
}

/* 图片画廊 */
.gallery {
  height: auto;
}

/* 混合单位 */
.mixed-units {
  height: auto;
}

/* 带命名的项目 */
.named-items {
  height: auto;
}

/* 悬停效果 */
.card {
  transition: height 0.3s ease-in-out;
}

.card:hover {
  height: 200px;
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

- `height` 可以用于任何元素
- `height` 定义元素的高度
- `auto` 是默认值，表示自动高度

## 相关属性

- [`width`](./width)
- [`min-height`](./min-height)
- [`max-height`](./max-height)

## 相关资源

- [MDN Web Docs: height](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)
- [CSS-Tricks: height](https://css-tricks.com/almanac/properties/h/height/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)