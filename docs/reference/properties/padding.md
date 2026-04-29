# padding

padding 属性定义元素的内边距。

## 语法

```css
padding: <length-percentage> | <length> <length-percentage> | <length-percentage> <length> <length-percentage> | <length> <length-percentage> <length> <length-percentage>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length-percentage>` | 长度或百分比 | `padding: 10px` |
| `<length> <length-percentage>` | 上下左右 | `padding: 10px 20px` |
| `<length-percentage> <length> <length-percentage>` | 上左右下 | `padding: 10px 20px 30px` |
| `<length> <length-percentage> <length> <length-percentage>` | 上右下左 | `padding: 10px 20px 30px 40px` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  padding: 10px;
}

/* 两值 */
.two {
  padding: 10px 20px;
}

/* 三值 */
.three {
  padding: 10px 20px 30px;
}

/* 四值 */
.four {
  padding: 10px 20px 30px 40px;
}
```

### 高级用法

```css
/* 容器 */
.container {
  padding: 10px;
}

/* 静态 */
.static {
  padding: 10px;
}

/* 相对 */
.relative {
  padding: 10px;
}

/* 绝对 */
.absolute {
  padding: 20px;
}

/* 固定 */
.fixed {
  padding: 30px;
}

/* 粘性 */
.sticky {
  padding: 10px;
}

/* 响应式布局 */
.responsive {
  padding: 10px;
}

/* 卡片布局 */
.card {
  padding: 10px;
}

/* 表单布局 */
.form {
  padding: 10px;
}

/* 图片画廊 */
.gallery {
  padding: 10px;
}

/* 混合单位 */
.mixed-units {
  padding: 10px;
}

/* 带命名的项目 */
.named-items {
  padding: 10px;
}

/* 悬停效果 */
.card {
  transition: padding 0.3s ease-in-out;
}

.card:hover {
  padding: 20px;
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

- `padding` 可以用于任何元素
- `padding` 定义元素的内边距
- 可以使用长度、百分比或关键字值

## 相关属性

- [`margin`](./margin)
- [`border`](./border)
- [`box-sizing`](./box-sizing)

## 相关资源

- [MDN Web Docs: padding](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)
- [CSS-Tricks: padding](https://css-tricks.com/almanac/properties/p/padding/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)