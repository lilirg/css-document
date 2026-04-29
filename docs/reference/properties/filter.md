# filter

filter 属性定义元素的滤镜效果。

## 语法

```css
filter: none | <filter-function> | <url>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `filter: none` |
| `<filter-function>` | 滤镜函数 | `filter: blur(5px)` |
| `<url>` | URL | `filter: url(filters.svg#filter)` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  filter: none;
}

/* 模糊 */
.blur {
  filter: blur(5px);
}

/* 亮度 */
.brightness {
  filter: brightness(1.5);
}

/* 对比度 */
.contrast {
  filter: contrast(200%);
}

/* 饱和度 */
.saturate {
  filter: saturate(200%);
}

/* 色相旋转 */
.hue-rotate {
  filter: hue-rotate(90deg);
}

/* 反色 */
.invert {
  filter: invert(100%);
}

/* 灰度 */
.grayscale {
  filter: grayscale(100%);
}

/* sepia */
.sepia {
  filter: sepia(100%);
}

/* 阴影 */
.drop-shadow {
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
}
```

### 高级用法

```css
/* 容器 */
.container {
  filter: none;
}

/* 静态 */
.static {
  filter: none;
}

/* 相对 */
.relative {
  filter: none;
}

/* 绝对 */
.absolute {
  filter: none;
}

/* 固定 */
.fixed {
  filter: none;
}

/* 粘性 */
.sticky {
  filter: none;
}

/* 响应式布局 */
.responsive {
  filter: none;
}

/* 卡片布局 */
.card {
  filter: none;
}

/* 表单布局 */
.form {
  filter: none;
}

/* 图片画廊 */
.gallery {
  filter: none;
}

/* 混合单位 */
.mixed-units {
  filter: none;
}

/* 带命名的项目 */
.named-items {
  filter: none;
}

/* 悬停效果 */
.card {
  transition: filter 0.3s ease-in-out;
}

.card:hover {
  filter: blur(5px);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 18+ |
| Firefox | 35+ |
| Safari | 6+ |
| Edge | 12+ |
| iOS Safari | 6+ |
| Android Browser | 4.4+ |
| Chrome for Android | 18+ |

## 注意事项

- `filter` 可以用于任何元素
- `filter` 定义元素的滤镜效果
- `none` 是默认值，表示无

## 相关属性

- [`backdrop-filter`](./backdrop-filter)
- [`mix-blend-mode`](./mix-blend-mode)
- [`background-blend-mode`](./background-blend-mode)

## 相关资源

- [MDN Web Docs: filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
- [CSS-Tricks: filter](https://css-tricks.com/almanac/properties/f/filter/)
- [W3C CSS Filters](https://www.w3.org/TR/filter-effects-1/)