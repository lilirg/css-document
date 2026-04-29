# max-width

max-width 属性定义元素的最大宽度。

## 语法

```css
max-width: none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>);
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无限制 | `max-width: none` |
| `<length-percentage>` | 长度或百分比 | `max-width: 100px` |
| `min-content` | 最小内容 | `max-width: min-content` |
| `max-content` | 最大内容 | `max-width: max-content` |
| `fit-content` | 适应内容 | `max-width: fit-content` |
| `fit-content(<length-percentage>)` | 适应内容（带限制） | `max-width: fit-content(200px)` |

## 示例

### 基础用法

```css
/* 无限制 */
.none {
  max-width: none;
}

/* 长度 */
.length {
  max-width: 100px;
}

/* 百分比 */
.percentage {
  max-width: 50%;
}

/* 最小内容 */
.min-content {
  max-width: min-content;
}

/* 最大内容 */
.max-content {
  max-width: max-content;
}

/* 适应内容 */
.fit-content {
  max-width: fit-content;
}

/* 适应内容（带限制） */
.fit-content-limit {
  max-width: fit-content(200px);
}
```

### 高级用法

```css
/* 容器 */
.container {
  max-width: none;
}

/* 静态 */
.static {
  max-width: none;
}

/* 相对 */
.relative {
  max-width: none;
}

/* 绝对 */
.absolute {
  max-width: none;
}

/* 固定 */
.fixed {
  max-width: none;
}

/* 粘性 */
.sticky {
  max-width: none;
}

/* 响应式布局 */
.responsive {
  max-width: none;
}

/* 卡片布局 */
.card {
  max-width: none;
}

/* 表单布局 */
.form {
  max-width: none;
}

/* 图片画廊 */
.gallery {
  max-width: none;
}

/* 混合单位 */
.mixed-units {
  max-width: none;
}

/* 带命名的项目 */
.named-items {
  max-width: none;
}

/* 悬停效果 */
.card {
  transition: max-width 0.3s ease-in-out;
}

.card:hover {
  max-width: 200px;
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

- `max-width` 可以用于任何元素
- `max-width` 定义元素的最大宽度
- `none` 是默认值，表示无限制

## 相关属性

- [`width`](./width)
- [`min-width`](./min-width)
- [`max-height`](./max-height)

## 相关资源

- [MDN Web Docs: max-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/max-width)
- [CSS-Tricks: max-width](https://css-tricks.com/almanac/properties/m/max-width/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)