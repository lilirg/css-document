# width

width 属性定义元素的宽度。

## 语法

```css
width: auto | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `width: auto` |
| `<length-percentage>` | 长度或百分比 | `width: 100px` |
| `min-content` | 最小内容 | `width: min-content` |
| `max-content` | 最大内容 | `width: max-content` |
| `fit-content` | 适应内容 | `width: fit-content` |
| `fit-content(<length-percentage>)` | 适应内容（带限制） | `width: fit-content(200px)` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  width: auto;
}

/* 长度 */
.length {
  width: 100px;
}

/* 百分比 */
.percentage {
  width: 50%;
}

/* 最小内容 */
.min-content {
  width: min-content;
}

/* 最大内容 */
.max-content {
  width: max-content;
}

/* 适应内容 */
.fit-content {
  width: fit-content;
}

/* 适应内容（带限制） */
.fit-content-limit {
  width: fit-content(200px);
}
```

### 高级用法

```css
/* 容器 */
.container {
  width: auto;
}

/* 静态 */
.static {
  width: auto;
}

/* 相对 */
.relative {
  width: auto;
}

/* 绝对 */
.absolute {
  width: auto;
}

/* 固定 */
.fixed {
  width: auto;
}

/* 粘性 */
.sticky {
  width: auto;
}

/* 响应式布局 */
.responsive {
  width: auto;
}

/* 卡片布局 */
.card {
  width: auto;
}

/* 表单布局 */
.form {
  width: auto;
}

/* 图片画廊 */
.gallery {
  width: auto;
}

/* 混合单位 */
.mixed-units {
  width: auto;
}

/* 带命名的项目 */
.named-items {
  width: auto;
}

/* 悬停效果 */
.card {
  transition: width 0.3s ease-in-out;
}

.card:hover {
  width: 200px;
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

- `width` 可以用于任何元素
- `width` 定义元素的宽度
- `auto` 是默认值，表示自动宽度

## 相关属性

- [`height`](./height)
- [`min-width`](./min-width)
- [`max-width`](./max-width)

## 相关资源

- [MDN Web Docs: width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)
- [CSS-Tricks: width](https://css-tricks.com/almanac/properties/w/width/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)