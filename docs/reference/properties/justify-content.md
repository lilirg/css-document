# justify-content

justify-content 属性定义 Flex 项目在主轴方向上的对齐方式。

## 语法

```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right | safe | unsafe;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `flex-start` | 起始对齐 | `justify-content: flex-start` |
| `flex-end` | 结束对齐 | `justify-content: flex-end` |
| `center` | 居中对齐 | `justify-content: center` |
| `space-between` | 两端对齐 | `justify-content: space-between` |
| `space-around` | 周围对齐 | `justify-content: space-around` |
| `space-evenly` | 均匀对齐 | `justify-content: space-evenly` |

## 示例

### 基础用法

```css
/* 起始对齐 */
.flex-start {
  justify-content: flex-start;
}

/* 结束对齐 */
.flex-end {
  justify-content: flex-end;
}

/* 居中对齐 */
.center {
  justify-content: center;
}

/* 两端对齐 */
.space-between {
  justify-content: space-between;
}

/* 周围对齐 */
.space-around {
  justify-content: space-around;
}

/* 均匀对齐 */
.space-evenly {
  justify-content: space-evenly;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  justify-content: flex-start;
}

/* 起始对齐 */
.flex-start {
  justify-content: flex-start;
}

/* 结束对齐 */
.flex-end {
  justify-content: flex-end;
}

/* 居中对齐 */
.center {
  justify-content: center;
}

/* 两端对齐 */
.space-between {
  justify-content: space-between;
}

/* 周围对齐 */
.space-around {
  justify-content: space-around;
}

/* 均匀对齐 */
.space-evenly {
  justify-content: space-evenly;
}

/* 响应式布局 */
.responsive {
  display: flex;
  justify-content: center;
}

/* 卡片布局 */
.card {
  display: flex;
  justify-content: center;
}

/* 表单布局 */
.form {
  display: flex;
  justify-content: flex-start;
}

/* 图片画廊 */
.gallery {
  display: flex;
  justify-content: space-between;
}

/* 混合单位 */
.mixed-units {
  display: flex;
  justify-content: center;
}

/* 带命名的项目 */
.named-items {
  display: flex;
  justify-content: space-around;
}

/* 悬停效果 */
.card {
  transition: justify-content 0.3s ease-in-out;
}

.card:hover {
  justify-content: space-between;
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

- `justify-content` 只在 Flex 容器中有效
- `justify-content` 定义 Flex 项目在主轴方向上的对齐方式
- `flex-start` 是默认值，表示起始对齐
- `space-between` 表示两端对齐，项目之间间距相等

## 相关属性

- [`flex`](./flex)
- [`align-items`](./align-items)
- [`align-content`](./align-content)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)
- [CSS-Tricks: justify-content](https://css-tricks.com/almanac/properties/j/justify-content/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)