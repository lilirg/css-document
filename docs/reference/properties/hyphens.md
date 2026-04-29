# hyphens

hyphens 属性定义元素内单词的连字符使用方式。

## 语法

```css
hyphens: none | manual | auto;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `hyphens: none` |
| `manual` | 手动 | `hyphens: manual` |
| `auto` | 自动 | `hyphens: auto` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  hyphens: none;
}

/* 手动 */
.manual {
  hyphens: manual;
}

/* 自动 */
.auto {
  hyphens: auto;
}
```

### 高级用法

```css
/* 容器 */
.container {
  hyphens: none;
}

/* 静态 */
.static {
  hyphens: none;
}

/* 相对 */
.relative {
  hyphens: none;
}

/* 绝对 */
.absolute {
  hyphens: none;
}

/* 固定 */
.fixed {
  hyphens: none;
}

/* 粘性 */
.sticky {
  hyphens: none;
}

/* 响应式布局 */
.responsive {
  hyphens: none;
}

/* 卡片布局 */
.card {
  hyphens: none;
}

/* 表单布局 */
.form {
  hyphens: none;
}

/* 图片画廊 */
.gallery {
  hyphens: none;
}

/* 混合单位 */
.mixed-units {
  hyphens: none;
}

/* 带命名的项目 */
.named-items {
  hyphens: none;
}

/* 悬停效果 */
.card {
  transition: hyphens 0.3s ease-in-out;
}

.card:hover {
  hyphens: auto;
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

- `hyphens` 可以用于任何元素
- `hyphens` 定义元素内单词的连字符使用方式
- `manual` 是默认值，表示手动

## 相关属性

- [`white-space`](./white-space)
- [`word-wrap`](./word-wrap)
- [`word-break`](./word-break)

## 相关资源

- [MDN Web Docs: hyphens](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens)
- [CSS-Tricks: hyphens](https://css-tricks.com/almanac/properties/h/hyphens/)
- [W3C CSS Text](https://www.w3.org/TR/css-text-4/)