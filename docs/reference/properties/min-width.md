# min-width

min-width 属性定义元素的最小宽度。

## 语法

```css
min-width: auto | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `min-width: auto` |
| `<length-percentage>` | 长度或百分比 | `min-width: 100px` |
| `min-content` | 最小内容 | `min-width: min-content` |
| `max-content` | 最大内容 | `min-width: max-content` |
| `fit-content` | 适应内容 | `min-width: fit-content` |
| `fit-content(<length-percentage>)` | 适应内容（带限制） | `min-width: fit-content(200px)` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  min-width: auto;
}

/* 长度 */
.length {
  min-width: 100px;
}

/* 百分比 */
.percentage {
  min-width: 50%;
}

/* 最小内容 */
.min-content {
  min-width: min-content;
}

/* 最大内容 */
.max-content {
  min-width: max-content;
}

/* 适应内容 */
.fit-content {
  min-width: fit-content;
}

/* 适应内容（带限制） */
.fit-content-limit {
  min-width: fit-content(200px);
}
```

### 高级用法

```css
/* 容器 */
.container {
  min-width: auto;
}

/* 静态 */
.static {
  min-width: auto;
}

/* 相对 */
.relative {
  min-width: auto;
}

/* 绝对 */
.absolute {
  min-width: auto;
}

/* 固定 */
.fixed {
  min-width: auto;
}

/* 粘性 */
.sticky {
  min-width: auto;
}

/* 响应式布局 */
.responsive {
  min-width: auto;
}

/* 卡片布局 */
.card {
  min-width: auto;
}

/* 表单布局 */
.form {
  min-width: auto;
}

/* 图片画廊 */
.gallery {
  min-width: auto;
}

/* 混合单位 */
.mixed-units {
  min-width: auto;
}

/* 带命名的项目 */
.named-items {
  min-width: auto;
}

/* 悬停效果 */
.card {
  transition: min-width 0.3s ease-in-out;
}

.card:hover {
  min-width: 200px;
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

- `min-width` 可以用于任何元素
- `min-width` 定义元素的最小宽度
- `auto` 是默认值，表示自动最小宽度

## 相关属性

- [`width`](./width)
- [`max-width`](./max-width)
- [`min-height`](./min-height)

## 相关资源

- [MDN Web Docs: min-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-width)
- [CSS-Tricks: min-width](https://css-tricks.com/almanac/properties/m/min-width/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)