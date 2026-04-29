# max-height

max-height 属性定义元素的最大高度。

## 语法

```css
max-height: none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无限制 | `max-height: none` |
| `<length-percentage>` | 长度或百分比 | `max-height: 100px` |
| `min-content` | 最小内容 | `max-height: min-content` |
| `max-content` | 最大内容 | `max-height: max-content` |
| `fit-content` | 适应内容 | `max-height: fit-content` |
| `fit-content(<length-percentage>)` | 适应内容（带限制） | `max-height: fit-content(200px)` |

## 示例

### 基础用法

```css
/* 无限制 */
.none {
  max-height: none;
}

/* 长度 */
.length {
  max-height: 100px;
}

/* 百分比 */
.percentage {
  max-height: 50%;
}

/* 最小内容 */
.min-content {
  max-height: min-content;
}

/* 最大内容 */
.max-content {
  max-height: max-content;
}

/* 适应内容 */
.fit-content {
  max-height: fit-content;
}

/* 适应内容（带限制） */
.fit-content-limit {
  max-height: fit-content(200px);
}
```

### 高级用法

```css
/* 容器 */
.container {
  max-height: none;
}

/* 静态 */
.static {
  max-height: none;
}

/* 相对 */
.relative {
  max-height: none;
}

/* 绝对 */
.absolute {
  max-height: none;
}

/* 固定 */
.fixed {
  max-height: none;
}

/* 粘性 */
.sticky {
  max-height: none;
}

/* 响应式布局 */
.responsive {
  max-height: none;
}

/* 卡片布局 */
.card {
  max-height: none;
}

/* 表单布局 */
.form {
  max-height: none;
}

/* 图片画廊 */
.gallery {
  max-height: none;
}

/* 混合单位 */
.mixed-units {
  max-height: none;
}

/* 带命名的项目 */
.named-items {
  max-height: none;
}

/* 悬停效果 */
.card {
  transition: max-height 0.3s ease-in-out;
}

.card:hover {
  max-height: 200px;
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

- `max-height` 可以用于任何元素
- `max-height` 定义元素的最大高度
- `none` 是默认值，表示无限制

## 相关属性

- [`height`](./height)
- [`min-height`](./min-height)
- [`max-width`](./max-width)

## 相关资源

- [MDN Web Docs: max-height](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-height)
- [CSS-Tricks: max-height](https://css-tricks.com/almanac/properties/m/max-height/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)