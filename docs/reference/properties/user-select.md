# user-select

user-select 属性定义用户是否可以选中文本。

## 语法

```css
user-select: auto | none | text | all | contain;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `user-select: auto` |
| `none` | 无 | `user-select: none` |
| `text` | 文本 | `user-select: text` |
| `all` | 所有 | `user-select: all` |
| `contain` | 包含 | `user-select: contain` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  user-select: auto;
}

/* 无 */
.none {
  user-select: none;
}

/* 文本 */
.text {
  user-select: text;
}

/* 所有 */
.all {
  user-select: all;
}

/* 包含 */
.contain {
  user-select: contain;
}
```

### 高级用法

```css
/* 容器 */
.container {
  user-select: auto;
}

/* 静态 */
.static {
  user-select: auto;
}

/* 相对 */
.relative {
  user-select: auto;
}

/* 绝对 */
.absolute {
  user-select: auto;
}

/* 固定 */
.fixed {
  user-select: auto;
}

/* 粘性 */
.sticky {
  user-select: auto;
}

/* 响应式布局 */
.responsive {
  user-select: auto;
}

/* 卡片布局 */
.card {
  user-select: auto;
}

/* 表单布局 */
.form {
  user-select: auto;
}

/* 图片画廊 */
.gallery {
  user-select: auto;
}

/* 混合单位 */
.mixed-units {
  user-select: auto;
}

/* 带命名的项目 */
.named-items {
  user-select: auto;
}

/* 悬停效果 */
.card {
  transition: user-select 0.3s ease-in-out;
}

.card:hover {
  user-select: none;
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

- `user-select` 可以用于任何元素
- `user-select` 定义用户是否可以选中文本
- `auto` 是默认值，表示自动

## 相关属性

- [`pointer-events`](./pointer-events)
- [`visibility`](./visibility)
- [`opacity`](./opacity)

## 相关资源

- [MDN Web Docs: user-select](https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select)
- [CSS-Tricks: user-select](https://css-tricks.com/almanac/properties/u/user-select/)
- [W3C CSS UI](https://www.w3.org/TR/css-ui-4/)