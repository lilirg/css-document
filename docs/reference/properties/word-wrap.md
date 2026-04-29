# word-wrap

word-wrap 属性定义元素内单词的换行方式。

## 语法

```css
word-wrap: normal | break-word;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `normal` | 正常 | `word-wrap: normal` |
| `break-word` | 断词 | `word-wrap: break-word` |

## 示例

### 基础用法

```css
/* 正常 */
.normal {
  word-wrap: normal;
}

/* 断词 */
.break-word {
  word-wrap: break-word;
}
```

### 高级用法

```css
/* 容器 */
.container {
  word-wrap: normal;
}

/* 静态 */
.static {
  word-wrap: normal;
}

/* 相对 */
.relative {
  word-wrap: normal;
}

/* 绝对 */
.absolute {
  word-wrap: normal;
}

/* 固定 */
.fixed {
  word-wrap: normal;
}

/* 粘性 */
.sticky {
  word-wrap: normal;
}

/* 响应式布局 */
.responsive {
  word-wrap: normal;
}

/* 卡片布局 */
.card {
  word-wrap: normal;
}

/* 表单布局 */
.form {
  word-wrap: normal;
}

/* 图片画廊 */
.gallery {
  word-wrap: normal;
}

/* 混合单位 */
.mixed-units {
  word-wrap: normal;
}

/* 带命名的项目 */
.named-items {
  word-wrap: normal;
}

/* 悬停效果 */
.card {
  transition: word-wrap 0.3s ease-in-out;
}

.card:hover {
  word-wrap: break-word;
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

- `word-wrap` 可以用于任何元素
- `word-wrap` 定义元素内单词的换行方式
- `normal` 是默认值，表示正常

## 相关属性

- [`white-space`](./white-space)
- [`word-break`](./word-break)
- [`hyphens`](./hyphens)

## 相关资源

- [MDN Web Docs: word-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-wrap)
- [CSS-Tricks: word-wrap](https://css-tricks.com/almanac/properties/w/word-wrap/)
- [W3C CSS Text](https://www.w3.org/TR/css-text-4/)