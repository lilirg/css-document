# left

left 属性定义元素的左侧偏移量。

## 语法

```css
left: auto | <length-percentage> | inherit;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `left: auto` |
| `<length-percentage>` | 长度或百分比 | `left: 10px` |
| `inherit` | 继承 | `left: inherit` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  left: auto;
}

/* 长度或百分比 */
.length {
  left: 10px;
}

/* 继承 */
.inherit {
  left: inherit;
}
```

### 高级用法

```css
/* 容器 */
.container {
  left: auto;
}

/* 静态 */
.static {
  left: auto;
}

/* 相对 */
.relative {
  left: 10px;
}

/* 绝对 */
.absolute {
  left: 20px;
}

/* 固定 */
.fixed {
  left: 30px;
}

/* 粘性 */
.sticky {
  left: 10px;
}

/* 响应式布局 */
.responsive {
  left: auto;
}

/* 卡片布局 */
.card {
  left: 10px;
}

/* 表单布局 */
.form {
  left: auto;
}

/* 图片画廊 */
.gallery {
  left: auto;
}

/* 混合单位 */
.mixed-units {
  left: auto;
}

/* 带命名的项目 */
.named-items {
  left: auto;
}

/* 悬停效果 */
.card {
  transition: left 0.3s ease-in-out;
}

.card:hover {
  left: 20px;
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

- `left` 可以用于任何元素
- `left` 定义元素的左侧偏移量
- `auto` 是默认值，表示自动

## 相关属性

- [`position`](./position)
- [`top`](./top)
- [`right`](./right)
- [`bottom`](./bottom)

## 相关资源

- [MDN Web Docs: left](https://developer.mozilla.org/zh-CN/docs/Web/CSS/left)
- [CSS-Tricks: left](https://css-tricks.com/almanac/properties/l/left/)
- [W3C CSS Positioning](https://www.w3.org/TR/css-position-4/)