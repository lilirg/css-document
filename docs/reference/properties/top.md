# top

top 属性定义元素的顶部偏移量。

## 语法

```css
top: auto | <length-percentage> | inherit;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `top: auto` |
| `<length-percentage>` | 长度或百分比 | `top: 10px` |
| `inherit` | 继承 | `top: inherit` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  top: auto;
}

/* 长度或百分比 */
.length {
  top: 10px;
}

/* 继承 */
.inherit {
  top: inherit;
}
```

### 高级用法

```css
/* 容器 */
.container {
  top: auto;
}

/* 静态 */
.static {
  top: auto;
}

/* 相对 */
.relative {
  top: 10px;
}

/* 绝对 */
.absolute {
  top: 20px;
}

/* 固定 */
.fixed {
  top: 30px;
}

/* 粘性 */
.sticky {
  top: 10px;
}

/* 响应式布局 */
.responsive {
  top: auto;
}

/* 卡片布局 */
.card {
  top: 10px;
}

/* 表单布局 */
.form {
  top: auto;
}

/* 图片画廊 */
.gallery {
  top: auto;
}

/* 混合单位 */
.mixed-units {
  top: auto;
}

/* 带命名的项目 */
.named-items {
  top: auto;
}

/* 悬停效果 */
.card {
  transition: top 0.3s ease-in-out;
}

.card:hover {
  top: 20px;
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

- `top` 可以用于任何元素
- `top` 定义元素的顶部偏移量
- `auto` 是默认值，表示自动

## 相关属性

- [`position`](./position)
- [`right`](./right)
- [`bottom`](./bottom)
- [`left`](./left)

## 相关资源

- [MDN Web Docs: top](https://developer.mozilla.org/zh-CN/docs/Web/CSS/top)
- [CSS-Tricks: top](https://css-tricks.com/almanac/properties/t/top/)
- [W3C CSS Positioning](https://www.w3.org/TR/css-position-4/)