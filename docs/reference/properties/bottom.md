# bottom

bottom 属性定义元素的底部偏移量。

## 语法

```css
bottom: auto | <length-percentage> | inherit;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `bottom: auto` |
| `<length-percentage>` | 长度或百分比 | `bottom: 10px` |
| `inherit` | 继承 | `bottom: inherit` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  bottom: auto;
}

/* 长度或百分比 */
.length {
  bottom: 10px;
}

/* 继承 */
.inherit {
  bottom: inherit;
}
```

### 高级用法

```css
/* 容器 */
.container {
  bottom: auto;
}

/* 静态 */
.static {
  bottom: auto;
}

/* 相对 */
.relative {
  bottom: 10px;
}

/* 绝对 */
.absolute {
  bottom: 20px;
}

/* 固定 */
.fixed {
  bottom: 30px;
}

/* 粘性 */
.sticky {
  bottom: 10px;
}

/* 响应式布局 */
.responsive {
  bottom: auto;
}

/* 卡片布局 */
.card {
  bottom: 10px;
}

/* 表单布局 */
.form {
  bottom: auto;
}

/* 图片画廊 */
.gallery {
  bottom: auto;
}

/* 混合单位 */
.mixed-units {
  bottom: auto;
}

/* 带命名的项目 */
.named-items {
  bottom: auto;
}

/* 悬停效果 */
.card {
  transition: bottom 0.3s ease-in-out;
}

.card:hover {
  bottom: 20px;
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

- `bottom` 可以用于任何元素
- `bottom` 定义元素的底部偏移量
- `auto` 是默认值，表示自动

## 相关属性

- [`position`](./position)
- [`top`](./top)
- [`right`](./right)
- [`left`](./left)

## 相关资源

- [MDN Web Docs: bottom](https://developer.mozilla.org/zh-CN/docs/Web/CSS/bottom)
- [CSS-Tricks: bottom](https://css-tricks.com/almanac/properties/b/bottom/)
- [W3C CSS Positioning](https://www.w3.org/TR/css-position-4/)