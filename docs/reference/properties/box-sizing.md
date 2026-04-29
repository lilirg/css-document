# box-sizing

box-sizing 属性定义元素的盒模型计算方式。

## 语法

```css
box-sizing: content-box | border-box | padding-box;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `content-box` | 内容盒 | `box-sizing: content-box` |
| `border-box` | 边框盒 | `box-sizing: border-box` |
| `padding-box` | 内边距盒 | `box-sizing: padding-box` |

## 示例

### 基础用法

```css
/* 内容盒 */
.content-box {
  box-sizing: content-box;
}

/* 边框盒 */
.border-box {
  box-sizing: border-box;
}

/* 内边距盒 */
.padding-box {
  box-sizing: padding-box;
}
```

### 高级用法

```css
/* 容器 */
.container {
  box-sizing: border-box;
}

/* 静态 */
.static {
  box-sizing: content-box;
}

/* 相对 */
.relative {
  box-sizing: content-box;
}

/* 绝对 */
.absolute {
  box-sizing: content-box;
}

/* 固定 */
.fixed {
  box-sizing: content-box;
}

/* 粘性 */
.sticky {
  box-sizing: content-box;
}

/* 响应式布局 */
.responsive {
  box-sizing: border-box;
}

/* 卡片布局 */
.card {
  box-sizing: border-box;
}

/* 表单布局 */
.form {
  box-sizing: border-box;
}

/* 图片画廊 */
.gallery {
  box-sizing: border-box;
}

/* 混合单位 */
.mixed-units {
  box-sizing: content-box;
}

/* 带命名的项目 */
.named-items {
  box-sizing: content-box;
}

/* 全局设置 */
*,
*::before,
*::after {
  box-sizing: border-box;
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

- `box-sizing` 可以用于任何元素
- `box-sizing` 定义元素的盒模型计算方式
- `content-box` 是默认值，表示内容盒
- `border-box` 包括边框和内边距

## 相关属性

- [`margin`](./margin)
- [`padding`](./padding)
- [`border`](./border)

## 相关资源

- [MDN Web Docs: box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)
- [CSS-Tricks: box-sizing](https://css-tricks.com/almanac/properties/b/box-sizing/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)