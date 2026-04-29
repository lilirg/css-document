# right

right 属性定义元素的右侧偏移量。

## 语法

```css
right: auto | <length-percentage> | inherit;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `right: auto` |
| `<length-percentage>` | 长度或百分比 | `right: 10px` |
| `inherit` | 继承 | `right: inherit` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  right: auto;
}

/* 长度或百分比 */
.length {
  right: 10px;
}

/* 继承 */
.inherit {
  right: inherit;
}
```

### 高级用法

```css
/* 容器 */
.container {
  right: auto;
}

/* 静态 */
.static {
  right: auto;
}

/* 相对 */
.relative {
  right: 10px;
}

/* 绝对 */
.absolute {
  right: 20px;
}

/* 固定 */
.fixed {
  right: 30px;
}

/* 粘性 */
.sticky {
  right: 10px;
}

/* 响应式布局 */
.responsive {
  right: auto;
}

/* 卡片布局 */
.card {
  right: 10px;
}

/* 表单布局 */
.form {
  right: auto;
}

/* 图片画廊 */
.gallery {
  right: auto;
}

/* 混合单位 */
.mixed-units {
  right: auto;
}

/* 带命名的项目 */
.named-items {
  right: auto;
}

/* 悬停效果 */
.card {
  transition: right 0.3s ease-in-out;
}

.card:hover {
  right: 20px;
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

- `right` 可以用于任何元素
- `right` 定义元素的右侧偏移量
- `auto` 是默认值，表示自动

## 相关属性

- [`position`](./position)
- [`top`](./top)
- [`bottom`](./bottom)
- [`left`](./left)

## 相关资源

- [MDN Web Docs: right](https://developer.mozilla.org/zh-CN/docs/Web/CSS/right)
- [CSS-Tricks: right](https://css-tricks.com/almanac/properties/r/right/)
- [W3C CSS Positioning](https://www.w3.org/TR/css-position-4/)