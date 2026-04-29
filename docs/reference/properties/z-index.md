# z-index

z-index 属性定义元素的堆叠顺序。

## 语法

```css
z-index: auto | <integer> | inherit;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `z-index: auto` |
| `<integer>` | 整数 | `z-index: 1` |
| `inherit` | 继承 | `z-index: inherit` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  z-index: auto;
}

/* 整数 */
.integer {
  z-index: 1;
}

/* 继承 */
.inherit {
  z-index: inherit;
}
```

### 高级用法

```css
/* 容器 */
.container {
  z-index: auto;
}

/* 静态 */
.static {
  z-index: auto;
}

/* 相对 */
.relative {
  z-index: 1;
}

/* 绝对 */
.absolute {
  z-index: 2;
}

/* 固定 */
.fixed {
  z-index: 3;
}

/* 粘性 */
.sticky {
  z-index: 4;
}

/* 响应式布局 */
.responsive {
  z-index: auto;
}

/* 卡片布局 */
.card {
  z-index: 5;
}

/* 表单布局 */
.form {
  z-index: auto;
}

/* 图片画廊 */
.gallery {
  z-index: auto;
}

/* 混合单位 */
.mixed-units {
  z-index: auto;
}

/* 带命名的项目 */
.named-items {
  z-index: auto;
}

/* 悬停效果 */
.card {
  transition: z-index 0.3s ease-in-out;
}

.card:hover {
  z-index: 10;
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

- `z-index` 只能用于定位元素（position 不为 static）
- `z-index` 定义元素的堆叠顺序
- `auto` 是默认值，表示自动

## 相关属性

- [`position`](./position)
- [`top`](./top)
- [`right`](./right)
- [`bottom`](./bottom)
- [`left`](./left)

## 相关资源

- [MDN Web Docs: z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)
- [CSS-Tricks: z-index](https://css-tricks.com/almanac/properties/z/z-index/)
- [W3C CSS Positioning](https://www.w3.org/TR/css-position-4/)