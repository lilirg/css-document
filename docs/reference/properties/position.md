# position

position 属性定义元素的定位方式。

## 语法

```css
position: static | relative | absolute | fixed | sticky;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `static` | 静态 | `position: static` |
| `relative` | 相对 | `position: relative` |
| `absolute` | 绝对 | `position: absolute` |
| `fixed` | 固定 | `position: fixed` |
| `sticky` | 粘性 | `position: sticky` |

## 示例

### 基础用法

```css
/* 静态 */
.static {
  position: static;
}

/* 相对 */
.relative {
  position: relative;
}

/* 绝对 */
.absolute {
  position: absolute;
}

/* 固定 */
.fixed {
  position: fixed;
}

/* 粘性 */
.sticky {
  position: sticky;
}
```

### 高级用法

```css
/* 容器 */
.container {
  position: static;
}

/* 静态 */
.static {
  position: static;
}

/* 相对 */
.relative {
  position: relative;
}

/* 绝对 */
.absolute {
  position: absolute;
}

/* 固定 */
.fixed {
  position: fixed;
}

/* 粘性 */
.sticky {
  position: sticky;
}

/* 响应式布局 */
.responsive {
  position: static;
}

/* 卡片布局 */
.card {
  position: relative;
}

/* 表单布局 */
.form {
  position: static;
}

/* 图片画廊 */
.gallery {
  position: static;
}

/* 混合单位 */
.mixed-units {
  position: static;
}

/* 带命名的项目 */
.named-items {
  position: static;
}

/* 悬停效果 */
.card {
  transition: position 0.3s ease-in-out;
}

.card:hover {
  position: absolute;
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

- `position` 可以用于任何元素
- `position` 定义元素的定位方式
- `static` 是默认值，表示静态

## 相关属性

- [`top`](./top)
- [`right`](./right)
- [`bottom`](./bottom)
- [`left`](./left)
- [`z-index`](./z-index)

## 相关资源

- [MDN Web Docs: position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
- [CSS-Tricks: position](https://css-tricks.com/almanac/properties/p/position/)
- [W3C CSS Positioning](https://www.w3.org/TR/css-position-4/)