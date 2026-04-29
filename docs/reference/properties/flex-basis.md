# flex-basis

flex-basis 属性定义 Flex 项目在主轴方向上的初始大小。

## 语法

```css
flex-basis: <length> | auto | content;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<length>` | 初始大小 | `flex-basis: 100px` |
| `auto` | 自动 | `flex-basis: auto` |
| `content` | 内容大小 | `flex-basis: content` |

## 示例

### 基础用法

```css
/* 固定初始大小 */
.flex-item {
  flex-basis: 100px;
}

/* 自动初始大小 */
.flex-item {
  flex-basis: auto;
}

/* 内容初始大小 */
.flex-item {
  flex-basis: content;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
}

/* 固定初始大小 */
.flex-item {
  flex-basis: 100px;
}

/* 自动初始大小 */
.flex-item {
  flex-basis: auto;
}

/* 内容初始大小 */
.flex-item {
  flex-basis: content;
}

/* 响应式布局 */
.responsive {
  display: flex;
  flex-direction: column;
}

/* 卡片布局 */
.card {
  display: flex;
  flex-direction: column;
}

/* 表单布局 */
.form {
  display: flex;
  flex-direction: column;
}

/* 图片画廊 */
.gallery {
  display: flex;
  flex-wrap: wrap;
}

/* 混合单位 */
.mixed-units {
  display: flex;
}

/* 带命名的项目 */
.named-items {
  display: flex;
}

/* 悬停效果 */
.card {
  transition: flex-basis 0.3s ease-in-out;
}

.card:hover {
  flex-basis: 200px;
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

- `flex-basis` 只在 Flex 容器中有效
- `flex-basis` 定义 Flex 项目在主轴方向上的初始大小
- `auto` 值表示使用 `width` 或 `height` 属性
- `content` 值表示根据内容自动调整大小

## 相关属性

- [`flex`](./flex)
- [`flex-grow`](./flex-grow)
- [`flex-shrink`](./flex-shrink)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)
- [CSS-Tricks: flex-basis](https://css-tricks.com/almanac/properties/f/flex-basis/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)