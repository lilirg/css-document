# contain

contain 属性定义元素的内容是否独立于文档的其余部分。

## 语法

```css
contain: none | strict | content | size | layout | style | paint;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `contain: none` |
| `strict` | 严格 | `contain: strict` |
| `content` | 内容 | `contain: content` |
| `size` | 大小 | `contain: size` |
| `layout` | 布局 | `contain: layout` |
| `style` | 样式 | `contain: style` |
| `paint` | 绘制 | `contain: paint` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  contain: none;
}

/* 严格 */
.strict {
  contain: strict;
}

/* 内容 */
.content {
  contain: content;
}

/* 大小 */
.size {
  contain: size;
}

/* 布局 */
.layout {
  contain: layout;
}

/* 样式 */
.style {
  contain: style;
}

/* 绘制 */
.paint {
  contain: paint;
}
```

### 高级用法

```css
/* 容器 */
.container {
  contain: none;
}

/* 静态 */
.static {
  contain: none;
}

/* 相对 */
.relative {
  contain: none;
}

/* 绝对 */
.absolute {
  contain: none;
}

/* 固定 */
.fixed {
  contain: none;
}

/* 粘性 */
.sticky {
  contain: none;
}

/* 响应式布局 */
.responsive {
  contain: none;
}

/* 卡片布局 */
.card {
  contain: none;
}

/* 表单布局 */
.form {
  contain: none;
}

/* 图片画廊 */
.gallery {
  contain: none;
}

/* 混合单位 */
.mixed-units {
  contain: none;
}

/* 带命名的项目 */
.named-items {
  contain: none;
}

/* 悬停效果 */
.card {
  transition: contain 0.3s ease-in-out;
}

.card:hover {
  contain: strict;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 52+ |
| Firefox | 68+ |
| Safari | 15+ |
| Edge | 79+ |
| iOS Safari | 15+ |
| Android Browser | 52+ |
| Chrome for Android | 52+ |

## 注意事项

- `contain` 可以用于任何元素
- `contain` 定义元素的内容是否独立于文档的其余部分
- `none` 是默认值，表示无

## 相关属性

- [`content-visibility`](./content-visibility)
- [`overflow`](./overflow)

## 相关资源

- [MDN Web Docs: contain](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain)
- [CSS-Tricks: contain](https://css-tricks.com/almanac/properties/c/contain/)
- [W3C CSS Containment](https://www.w3.org/TR/css-contain-2/)