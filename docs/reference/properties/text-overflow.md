# text-overflow

text-overflow 属性定义元素内文本溢出时的处理方式。

## 语法

```css
text-overflow: clip | ellipsis | string;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `clip` | 裁剪 | `text-overflow: clip` |
| `ellipsis` | 省略号 | `text-overflow: ellipsis` |
| `string` | 自定义字符串 | `text-overflow: "..."` |

## 示例

### 基础用法

```css
/* 裁剪 */
.clip {
  text-overflow: clip;
}

/* 省略号 */
.ellipsis {
  text-overflow: ellipsis;
}

/* 自定义字符串 */
.string {
  text-overflow: "...";
}
```

### 高级用法

```css
/* 容器 */
.container {
  text-overflow: ellipsis;
}

/* 静态 */
.static {
  text-overflow: clip;
}

/* 相对 */
.relative {
  text-overflow: clip;
}

/* 绝对 */
.absolute {
  text-overflow: clip;
}

/* 固定 */
.fixed {
  text-overflow: clip;
}

/* 粘性 */
.sticky {
  text-overflow: clip;
}

/* 响应式布局 */
.responsive {
  text-overflow: ellipsis;
}

/* 卡片布局 */
.card {
  text-overflow: ellipsis;
}

/* 表单布局 */
.form {
  text-overflow: ellipsis;
}

/* 图片画廊 */
.gallery {
  text-overflow: ellipsis;
}

/* 混合单位 */
.mixed-units {
  text-overflow: clip;
}

/* 带命名的项目 */
.named-items {
  text-overflow: clip;
}

/* 悬停效果 */
.card {
  transition: text-overflow 0.3s ease-in-out;
}

.card:hover {
  text-overflow: ellipsis;
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

- `text-overflow` 只能用于块级元素
- `text-overflow` 定义元素内文本溢出时的处理方式
- `clip` 是默认值，表示裁剪

## 相关属性

- [`white-space`](./white-space)
- [`overflow`](./overflow)
- [`word-wrap`](./word-wrap)
- [`word-break`](./word-break)

## 相关资源

- [MDN Web Docs: text-overflow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)
- [CSS-Tricks: text-overflow](https://css-tricks.com/almanac/properties/t/text-overflow/)
- [W3C CSS Text](https://www.w3.org/TR/css-text-4/)