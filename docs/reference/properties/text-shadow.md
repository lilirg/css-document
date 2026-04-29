# text-shadow

text-shadow 属性定义元素文本的阴影。

## 语法

```css
text-shadow: none | <shadow-t>#;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无阴影 | `text-shadow: none` |
| `<shadow-t>` | 阴影 | `text-shadow: 2px 2px 5px #888` |

## 示例

### 基础用法

```css
/* 无阴影 */
.none {
  text-shadow: none;
}

/* 阴影 */
.shadow {
  text-shadow: 2px 2px 5px #888;
}

/* 多阴影 */
.multi {
  text-shadow: 2px 2px 5px #888, -2px -2px 5px #ccc;
}
```

### 高级用法

```css
/* 容器 */
.container {
  text-shadow: 2px 2px 5px #888;
}

/* 静态 */
.static {
  text-shadow: 2px 2px 5px #888;
}

/* 相对 */
.relative {
  text-shadow: 2px 2px 5px #888;
}

/* 绝对 */
.absolute {
  text-shadow: 4px 4px 10px #888;
}

/* 固定 */
.fixed {
  text-shadow: 6px 6px 15px #888;
}

/* 粘性 */
.sticky {
  text-shadow: 2px 2px 5px #888;
}

/* 响应式布局 */
.responsive {
  text-shadow: 2px 2px 5px #888;
}

/* 卡片布局 */
.card {
  text-shadow: 2px 2px 5px #888;
}

/* 表单布局 */
.form {
  text-shadow: 2px 2px 5px #888;
}

/* 图片画廊 */
.gallery {
  text-shadow: 2px 2px 5px #888;
}

/* 混合单位 */
.mixed-units {
  text-shadow: 2px 2px 5px #888;
}

/* 带命名的项目 */
.named-items {
  text-shadow: 2px 2px 5px #888;
}

/* 悬停效果 */
.card {
  transition: text-shadow 0.3s ease-in-out;
}

.card:hover {
  text-shadow: 4px 4px 10px #888;
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

- `text-shadow` 可以用于任何元素
- `text-shadow` 定义元素文本的阴影
- 可以使用阴影值

## 相关属性

- [`box-shadow`](./box-shadow)
- [`filter`](./filter)

## 相关资源

- [MDN Web Docs: text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)
- [CSS-Tricks: text-shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)
- [W3C CSS Text](https://www.w3.org/TR/css-text-4/)