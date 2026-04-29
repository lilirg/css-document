# align-items

align-items 属性定义 Flex 项目在交叉轴方向上的对齐方式。

## 语法

```css
align-items: flex-start | flex-end | center | baseline | stretch | start | end | self-start | self-end | safe | unsafe;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `flex-start` | 起始对齐 | `align-items: flex-start` |
| `flex-end` | 结束对齐 | `align-items: flex-end` |
| `center` | 居中对齐 | `align-items: center` |
| `baseline` | 基线对齐 | `align-items: baseline` |
| `stretch` | 拉伸对齐 | `align-items: stretch` |

## 示例

### 基础用法

```css
/* 起始对齐 */
.flex-start {
  align-items: flex-start;
}

/* 结束对齐 */
.flex-end {
  align-items: flex-end;
}

/* 居中对齐 */
.center {
  align-items: center;
}

/* 基线对齐 */
.baseline {
  align-items: baseline;
}

/* 拉伸对齐 */
.stretch {
  align-items: stretch;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  align-items: flex-start;
}

/* 起始对齐 */
.flex-start {
  align-items: flex-start;
}

/* 结束对齐 */
.flex-end {
  align-items: flex-end;
}

/* 居中对齐 */
.center {
  align-items: center;
}

/* 基线对齐 */
.baseline {
  align-items: baseline;
}

/* 拉伸对齐 */
.stretch {
  align-items: stretch;
}

/* 响应式布局 */
.responsive {
  display: flex;
  align-items: center;
}

/* 卡片布局 */
.card {
  display: flex;
  align-items: center;
}

/* 表单布局 */
.form {
  display: flex;
  align-items: flex-start;
}

/* 图片画廊 */
.gallery {
  display: flex;
  align-items: baseline;
}

/* 混合单位 */
.mixed-units {
  display: flex;
  align-items: center;
}

/* 带命名的项目 */
.named-items {
  display: flex;
  align-items: stretch;
}

/* 悬停效果 */
.card {
  transition: align-items 0.3s ease-in-out;
}

.card:hover {
  align-items: baseline;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| iOS Safari | 9.2+ |
| Android Browser | 4.4+ |
| Chrome for Android | 57+ |

## 注意事项

- `align-items` 只在 Flex 容器中有效
- `align-items` 定义 Flex 项目在交叉轴方向上的对齐方式
- `stretch` 是默认值，表示拉伸对齐
- `baseline` 表示基线对齐

## 相关属性

- [`flex`](./flex)
- [`justify-content`](./justify-content)
- [`align-content`](./align-content)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)
- [CSS-Tricks: align-items](https://css-tricks.com/almanac/properties/a/align-items/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)