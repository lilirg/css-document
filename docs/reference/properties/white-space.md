# white-space

white-space 属性定义元素内空白的处理方式。

## 语法

```css
white-space: normal | nowrap | pre | pre-wrap | pre-line | break-spaces;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `normal` | 正常 | `white-space: normal` |
| `nowrap` | 不换行 | `white-space: nowrap` |
| `pre` | 预格式化 | `white-space: pre` |
| `pre-wrap` | 预格式化换行 | `white-space: pre-wrap` |
| `pre-line` | 预格式化换行（合并空白） | `white-space: pre-line` |
| `break-spaces` | 换行空格 | `white-space: break-spaces` |

## 示例

### 基础用法

```css
/* 正常 */
.normal {
  white-space: normal;
}

/* 不换行 */
.nowrap {
  white-space: nowrap;
}

/* 预格式化 */
.pre {
  white-space: pre;
}

/* 预格式化换行 */
.pre-wrap {
  white-space: pre-wrap;
}

/* 预格式化换行（合并空白） */
.pre-line {
  white-space: pre-line;
}

/* 换行空格 */
.break-spaces {
  white-space: break-spaces;
}
```

### 高级用法

```css
/* 容器 */
.container {
  white-space: normal;
}

/* 静态 */
.static {
  white-space: normal;
}

/* 相对 */
.relative {
  white-space: normal;
}

/* 绝对 */
.absolute {
  white-space: normal;
}

/* 固定 */
.fixed {
  white-space: normal;
}

/* 粘性 */
.sticky {
  white-space: normal;
}

/* 响应式布局 */
.responsive {
  white-space: normal;
}

/* 卡片布局 */
.card {
  white-space: normal;
}

/* 表单布局 */
.form {
  white-space: normal;
}

/* 图片画廊 */
.gallery {
  white-space: normal;
}

/* 混合单位 */
.mixed-units {
  white-space: normal;
}

/* 带命名的项目 */
.named-items {
  white-space: normal;
}

/* 悬停效果 */
.card {
  transition: white-space 0.3s ease-in-out;
}

.card:hover {
  white-space: nowrap;
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

- `white-space` 可以用于任何元素
- `white-space` 定义元素内空白的处理方式
- `normal` 是默认值，表示正常

## 相关属性

- [`word-wrap`](./word-wrap)
- [`word-break`](./word-break)
- [`hyphens`](./hyphens)

## 相关资源

- [MDN Web Docs: white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)
- [CSS-Tricks: white-space](https://css-tricks.com/almanac/properties/w/white-space/)
- [W3C CSS Text](https://www.w3.org/TR/css-text-4/)