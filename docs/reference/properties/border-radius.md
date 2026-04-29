# border-radius

border-radius 属性定义元素的边框圆角。

## 语法

```css
border-radius: <length-percentage> | <length-percentage> <length-percentage> | <length-percentage> <length-percentage> <length-percentage> | <length-percentage> <length-percentage> <length-percentage> <length-percentage>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length-percentage>` | 长度或百分比 | `border-radius: 10px` |
| `<length-percentage> <length-percentage>` | 左上右下 | `border-radius: 10px 20px` |
| `<length-percentage> <length-percentage> <length-percentage>` | 左上右下左下 | `border-radius: 10px 20px 30px` |
| `<length-percentage> <length-percentage> <length-percentage> <length-percentage>` | 左上右上右下左下 | `border-radius: 10px 20px 30px 40px` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  border-radius: 10px;
}

/* 两值 */
.two {
  border-radius: 10px 20px;
}

/* 三值 */
.three {
  border-radius: 10px 20px 30px;
}

/* 四值 */
.four {
  border-radius: 10px 20px 30px 40px;
}

/* 百分比 */
.percentage {
  border-radius: 50%;
}
```

### 高级用法

```css
/* 容器 */
.container {
  border-radius: 10px;
}

/* 静态 */
.static {
  border-radius: 10px;
}

/* 相对 */
.relative {
  border-radius: 10px;
}

/* 绝对 */
.absolute {
  border-radius: 20px;
}

/* 固定 */
.fixed {
  border-radius: 30px;
}

/* 粘性 */
.sticky {
  border-radius: 10px;
}

/* 响应式布局 */
.responsive {
  border-radius: 10px;
}

/* 卡片布局 */
.card {
  border-radius: 10px;
}

/* 表单布局 */
.form {
  border-radius: 10px;
}

/* 图片画廊 */
.gallery {
  border-radius: 10px;
}

/* 混合单位 */
.mixed-units {
  border-radius: 10px;
}

/* 带命名的项目 */
.named-items {
  border-radius: 10px;
}

/* 悬停效果 */
.card {
  transition: border-radius 0.3s ease-in-out;
}

.card:hover {
  border-radius: 20px;
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

- `border-radius` 可以用于任何元素
- `border-radius` 定义元素的边框圆角
- 可以使用长度或百分比值

## 相关属性

- [`border`](./border)
- [`border-width`](./border-width)
- [`border-style`](./border-style)
- [`border-color`](./border-color)

## 相关资源

- [MDN Web Docs: border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)
- [CSS-Tricks: border-radius](https://css-tricks.com/almanac/properties/b/border-radius/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)