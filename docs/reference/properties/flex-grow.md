# flex-grow

flex-grow 属性定义 Flex 项目在主轴方向上的增长比例。

## 语法

```css
flex-grow: <number>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<number>` | 增长比例 | `flex-grow: 1` |

## 示例

### 基础用法

```css
/* 相同增长比例 */
.flex-item {
  flex-grow: 1;
}

/* 不同增长比例 */
.item-1 {
  flex-grow: 1;
}

.item-2 {
  flex-grow: 2;
}

.item-3 {
  flex-grow: 1;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
}

/* 相同增长比例 */
.flex-item {
  flex-grow: 1;
}

/* 不同增长比例 */
.item-1 {
  flex-grow: 1;
}

.item-2 {
  flex-grow: 2;
}

.item-3 {
  flex-grow: 1;
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
  transition: flex-grow 0.3s ease-in-out;
}

.card:hover {
  flex-grow: 2;
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

- `flex-grow` 只在 Flex 容器中有效
- `flex-grow` 定义 Flex 项目在主轴方向上的增长比例
- 值越大，增长比例越高
- 默认值为 0，表示不增长

## 相关属性

- [`flex`](./flex)
- [`flex-shrink`](./flex-shrink)
- [`flex-basis`](./flex-basis)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)
- [CSS-Tricks: flex-grow](https://css-tricks.com/almanac/properties/f/flex-grow/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)