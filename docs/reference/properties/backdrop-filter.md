# backdrop-filter

backdrop-filter 属性定义元素背后内容的滤镜效果。

## 语法

```css
backdrop-filter: none | <filter-function> | <url>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `backdrop-filter: none` |
| `<filter-function>` | 滤镜函数 | `backdrop-filter: blur(5px)` |
| `<url>` | URL | `backdrop-filter: url(filters.svg#filter)` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  backdrop-filter: none;
}

/* 模糊 */
.blur {
  backdrop-filter: blur(5px);
}

/* 亮度 */
.brightness {
  backdrop-filter: brightness(1.5);
}

/* 对比度 */
.contrast {
  backdrop-filter: contrast(200%);
}

/* 饱和度 */
.saturate {
  backdrop-filter: saturate(200%);
}

/* 色相旋转 */
.hue-rotate {
  backdrop-filter: hue-rotate(90deg);
}

/* 反色 */
.invert {
  backdrop-filter: invert(100%);
}

/* 灰度 */
.grayscale {
  backdrop-filter: grayscale(100%);
}

/* sepia */
.sepia {
  backdrop-filter: sepia(100%);
}

/* 阴影 */
.drop-shadow {
  backdrop-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
}
```

### 高级用法

```css
/* 容器 */
.container {
  backdrop-filter: none;
}

/* 静态 */
.static {
  backdrop-filter: none;
}

/* 相对 */
.relative {
  backdrop-filter: none;
}

/* 绝对 */
.absolute {
  backdrop-filter: none;
}

/* 固定 */
.fixed {
  backdrop-filter: none;
}

/* 粘性 */
.sticky {
  backdrop-filter: none;
}

/* 响应式布局 */
.responsive {
  backdrop-filter: none;
}

/* 卡片布局 */
.card {
  backdrop-filter: none;
}

/* 表单布局 */
.form {
  backdrop-filter: none;
}

/* 图片画廊 */
.gallery {
  backdrop-filter: none;
}

/* 混合单位 */
.mixed-units {
  backdrop-filter: none;
}

/* 带命名的项目 */
.named-items {
  backdrop-filter: none;
}

/* 悬停效果 */
.card {
  transition: backdrop-filter 0.3s ease-in-out;
}

.card:hover {
  backdrop-filter: blur(5px);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 76+ |
| Firefox | 103+ |
| Safari | 9+ |
| Edge | 79+ |
| iOS Safari | 9+ |
| Android Browser | 76+ |
| Chrome for Android | 76+ |

## 注意事项

- `backdrop-filter` 可以用于任何元素
- `backdrop-filter` 定义元素背后内容的滤镜效果
- `none` 是默认值，表示无

## 相关属性

- [`filter`](./filter)
- [`mix-blend-mode`](./mix-blend-mode)
- [`background-blend-mode`](./background-blend-mode)

## 相关资源

- [MDN Web Docs: backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)
- [CSS-Tricks: backdrop-filter](https://css-tricks.com/almanac/properties/b/backdrop-filter/)
- [W3C CSS Filters](https://www.w3.org/TR/filter-effects-1/)