# margin

margin 属性定义元素的外边距。

## 语法

```css
margin: auto | <length-percentage> | <length> <length-percentage> | <length-percentage> <length> <length-percentage> | <length> <length-percentage> <length> <length-percentage>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `margin: auto` |
| `<length-percentage>` | 长度或百分比 | `margin: 10px` |
| `<length> <length-percentage>` | 上下左右 | `margin: 10px 20px` |
| `<length-percentage> <length> <length-percentage>` | 上左右下 | `margin: 10px 20px 30px` |
| `<length> <length-percentage> <length> <length-percentage>` | 上右下左 | `margin: 10px 20px 30px 40px` |

## 示例

### 基础用法

```css
/* 单值 */
.single {
  margin: 10px;
}

/* 两值 */
.two {
  margin: 10px 20px;
}

/* 三值 */
.three {
  margin: 10px 20px 30px;
}

/* 四值 */
.four {
  margin: 10px 20px 30px 40px;
}

/* 自动 */
.auto {
  margin: auto;
}
```

### 高级用法

```css
/* 容器 */
.container {
  margin: auto;
}

/* 静态 */
.static {
  margin: auto;
}

/* 相对 */
.relative {
  margin: 10px;
}

/* 绝对 */
.absolute {
  margin: 20px;
}

/* 固定 */
.fixed {
  margin: 30px;
}

/* 粘性 */
.sticky {
  margin: auto;
}

/* 响应式布局 */
.responsive {
  margin: auto;
}

/* 卡片布局 */
.card {
  margin: 10px;
}

/* 表单布局 */
.form {
  margin: auto;
}

/* 图片画廊 */
.gallery {
  margin: auto;
}

/* 混合单位 */
.mixed-units {
  margin: auto;
}

/* 带命名的项目 */
.named-items {
  margin: auto;
}

/* 悬停效果 */
.card {
  transition: margin 0.3s ease-in-out;
}

.card:hover {
  margin: 20px;
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

- `margin` 可以用于任何元素
- `margin` 定义元素的外边距
- `auto` 是默认值，表示自动外边距
- 可以使用长度、百分比或关键字值

## 相关属性

- [`padding`](./padding)
- [`border`](./border)
- [`box-sizing`](./box-sizing)

## 相关资源

- [MDN Web Docs: margin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)
- [CSS-Tricks: margin](https://css-tricks.com/almanac/properties/m/margin/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)