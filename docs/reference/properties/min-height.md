# min-height

min-height 属性定义元素的最小高度。

## 语法

```css
min-height: auto | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `min-height: auto` |
| `<length-percentage>` | 长度或百分比 | `min-height: 100px` |
| `min-content` | 最小内容 | `min-height: min-content` |
| `max-content` | 最大内容 | `min-height: max-content` |
| `fit-content` | 适应内容 | `min-height: fit-content` |
| `fit-content(<length-percentage>)` | 适应内容（带限制） | `min-height: fit-content(200px)` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  min-height: auto;
}

/* 长度 */
.length {
  min-height: 100px;
}

/* 百分比 */
.percentage {
  min-height: 50%;
}

/* 最小内容 */
.min-content {
  min-height: min-content;
}

/* 最大内容 */
.max-content {
  min-height: max-content;
}

/* 适应内容 */
.fit-content {
  min-height: fit-content;
}

/* 适应内容（带限制） */
.fit-content-limit {
  min-height: fit-content(200px);
}
```

### 高级用法

```css
/* 容器 */
.container {
  min-height: auto;
}

/* 静态 */
.static {
  min-height: auto;
}

/* 相对 */
.relative {
  min-height: auto;
}

/* 绝对 */
.absolute {
  min-height: auto;
}

/* 固定 */
.fixed {
  min-height: auto;
}

/* 粘性 */
.sticky {
  min-height: auto;
}

/* 响应式布局 */
.responsive {
  min-height: auto;
}

/* 卡片布局 */
.card {
  min-height: auto;
}

/* 表单布局 */
.form {
  min-height: auto;
}

/* 图片画廊 */
.gallery {
  min-height: auto;
}

/* 混合单位 */
.mixed-units {
  min-height: auto;
}

/* 带命名的项目 */
.named-items {
  min-height: auto;
}

/* 悬停效果 */
.card {
  transition: min-height 0.3s ease-in-out;
}

.card:hover {
  min-height: 200px;
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

- `min-height` 可以用于任何元素
- `min-height` 定义元素的最小高度
- `auto` 是默认值，表示自动最小高度

## 相关属性

- [`height`](./height)
- [`max-height`](./max-height)
- [`min-width`](./min-width)

## 相关资源

- [MDN Web Docs: min-height](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)
- [CSS-Tricks: min-height](https://css-tricks.com/almanac/properties/m/min-height/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)