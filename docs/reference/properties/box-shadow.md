# box-shadow

box-shadow 属性定义元素的盒阴影。

## 语法

```css
box-shadow: none | <shadow-t>#;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无阴影 | `box-shadow: none` |
| `<shadow-t>` | 阴影 | `box-shadow: 10px 10px 5px #888` |

## 示例

### 基础用法

```css
/* 无阴影 */
.none {
  box-shadow: none;
}

/* 阴影 */
.shadow {
  box-shadow: 10px 10px 5px #888;
}

/* 多阴影 */
.multi {
  box-shadow: 10px 10px 5px #888, -10px -10px 5px #ccc;
}
```

### 高级用法

```css
/* 容器 */
.container {
  box-shadow: 10px 10px 5px #888;
}

/* 静态 */
.static {
  box-shadow: 10px 10px 5px #888;
}

/* 相对 */
.relative {
  box-shadow: 10px 10px 5px #888;
}

/* 绝对 */
.absolute {
  box-shadow: 20px 20px 10px #888;
}

/* 固定 */
.fixed {
  box-shadow: 30px 30px 15px #888;
}

/* 粘性 */
.sticky {
  box-shadow: 10px 10px 5px #888;
}

/* 响应式布局 */
.responsive {
  box-shadow: 10px 10px 5px #888;
}

/* 卡片布局 */
.card {
  box-shadow: 10px 10px 5px #888;
}

/* 表单布局 */
.form {
  box-shadow: 10px 10px 5px #888;
}

/* 图片画廊 */
.gallery {
  box-shadow: 10px 10px 5px #888;
}

/* 混合单位 */
.mixed-units {
  box-shadow: 10px 10px 5px #888;
}

/* 带命名的项目 */
.named-items {
  box-shadow: 10px 10px 5px #888;
}

/* 悬停效果 */
.card {
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 20px 20px 10px #888;
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

- `box-shadow` 可以用于任何元素
- `box-shadow` 定义元素的盒阴影
- 可以使用阴影值

## 相关属性

- [`text-shadow`](./text-shadow)
- [`filter`](./filter)

## 相关资源

- [MDN Web Docs: box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
- [CSS-Tricks: box-shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)