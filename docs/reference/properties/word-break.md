# word-break

word-break 属性定义元素内单词的断行方式。

## 语法

```css
word-break: normal | break-all | keep-all | break-word;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `normal` | 正常 | `word-break: normal` |
| `break-all` | 所有字符断行 | `word-break: break-all` |
| `keep-all` | 保持所有 | `word-break: keep-all` |
| `break-word` | 断词 | `word-break: break-word` |

## 示例

### 基础用法

```css
/* 正常 */
.normal {
  word-break: normal;
}

/* 所有字符断行 */
.break-all {
  word-break: break-all;
}

/* 保持所有 */
.keep-all {
  word-break: keep-all;
}

/* 断词 */
.break-word {
  word-break: break-word;
}
```

### 高级用法

```css
/* 容器 */
.container {
  word-break: normal;
}

/* 静态 */
.static {
  word-break: normal;
}

/* 相对 */
.relative {
  word-break: normal;
}

/* 绝对 */
.absolute {
  word-break: normal;
}

/* 固定 */
.fixed {
  word-break: normal;
}

/* 粘性 */
.sticky {
  word-break: normal;
}

/* 响应式布局 */
.responsive {
  word-break: normal;
}

/* 卡片布局 */
.card {
  word-break: normal;
}

/* 表单布局 */
.form {
  word-break: normal;
}

/* 图片画廊 */
.gallery {
  word-break: normal;
}

/* 混合单位 */
.mixed-units {
  word-break: normal;
}

/* 带命名的项目 */
.named-items {
  word-break: normal;
}

/* 悬停效果 */
.card {
  transition: word-break 0.3s ease-in-out;
}

.card:hover {
  word-break: break-all;
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

- `word-break` 可以用于任何元素
- `word-break` 定义元素内单词的断行方式
- `normal` 是默认值，表示正常

## 相关属性

- [`white-space`](./white-space)
- [`word-wrap`](./word-wrap)
- [`hyphens`](./hyphens)

## 相关资源

- [MDN Web Docs: word-break](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break)
- [CSS-Tricks: word-break](https://css-tricks.com/almanac/properties/w/word-break/)
- [W3C CSS Text](https://www.w3.org/TR/css-text-4/)