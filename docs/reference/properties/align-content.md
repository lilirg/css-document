# align-content

align-content 属性定义多行 Flex 项目在交叉轴方向上的对齐方式。

## 语法

```css
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | stretch | safe | unsafe;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `flex-start` | 起始对齐 | `align-content: flex-start` |
| `flex-end` | 结束对齐 | `align-content: flex-end` |
| `center` | 居中对齐 | `align-content: center` |
| `space-between` | 两端对齐 | `align-content: space-between` |
| `space-around` | 周围对齐 | `align-content: space-around` |
| `space-evenly` | 均匀对齐 | `align-content: space-evenly` |
| `stretch` | 拉伸对齐 | `align-content: stretch` |

## 示例

### 基础用法

```css
/* 起始对齐 */
.flex-start {
  align-content: flex-start;
}

/* 结束对齐 */
.flex-end {
  align-content: flex-end;
}

/* 居中对齐 */
.center {
  align-content: center;
}

/* 两端对齐 */
.space-between {
  align-content: space-between;
}

/* 周围对齐 */
.space-around {
  align-content: space-around;
}

/* 均匀对齐 */
.space-evenly {
  align-content: space-evenly;
}

/* 拉伸对齐 */
.stretch {
  align-content: stretch;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  align-content: flex-start;
}

/* 起始对齐 */
.flex-start {
  align-content: flex-start;
}

/* 结束对齐 */
.flex-end {
  align-content: flex-end;
}

/* 居中对齐 */
.center {
  align-content: center;
}

/* 两端对齐 */
.space-between {
  align-content: space-between;
}

/* 周围对齐 */
.space-around {
  align-content: space-around;
}

/* 均匀对齐 */
.space-evenly {
  align-content: space-evenly;
}

/* 拉伸对齐 */
.stretch {
  align-content: stretch;
}

/* 响应式布局 */
.responsive {
  display: flex;
  align-content: center;
}

/* 卡片布局 */
.card {
  display: flex;
  align-content: center;
}

/* 表单布局 */
.form {
  display: flex;
  align-content: flex-start;
}

/* 图片画廊 */
.gallery {
  display: flex;
  align-content: space-between;
}

/* 混合单位 */
.mixed-units {
  display: flex;
  align-content: center;
}

/* 带命名的项目 */
.named-items {
  display: flex;
  align-content: space-around;
}

/* 悬停效果 */
.card {
  transition: align-content 0.3s ease-in-out;
}

.card:hover {
  align-content: space-between;
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

- `align-content` 只在多行 Flex 容器中有效
- `align-content` 定义多行 Flex 项目在交叉轴方向上的对齐方式
- `stretch` 是默认值，表示拉伸对齐
- `space-between` 表示两端对齐，行之间间距相等

## 相关属性

- [`flex`](./flex)
- [`justify-content`](./justify-content)
- [`align-items`](./align-items)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: align-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content)
- [CSS-Tricks: align-content](https://css-tricks.com/almanac/properties/a/align-content/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)