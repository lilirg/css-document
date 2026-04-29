# flex-shrink

flex-shrink 属性定义 Flex 项目在主轴方向上的收缩比例。

## 语法

```css
flex-shrink: <number>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<number>` | 收缩比例 | `flex-shrink: 1` |

## 示例

### 基础用法

```css
/* 相同收缩比例 */
.flex-item {
  flex-shrink: 1;
}

/* 不同收缩比例 */
.item-1 {
  flex-shrink: 1;
}

.item-2 {
  flex-shrink: 2;
}

.item-3 {
  flex-shrink: 1;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
}

/* 相同收缩比例 */
.flex-item {
  flex-shrink: 1;
}

/* 不同收缩比例 */
.item-1 {
  flex-shrink: 1;
}

.item-2 {
  flex-shrink: 2;
}

.item-3 {
  flex-shrink: 1;
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
  transition: flex-shrink 0.3s ease-in-out;
}

.card:hover {
  flex-shrink: 2;
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

- `flex-shrink` 只在 Flex 容器中有效
- `flex-shrink` 定义 Flex 项目在主轴方向上的收缩比例
- 值越大，收缩比例越高
- 默认值为 1，表示可以收缩
- 如果设置为 0，表示不收缩

## 相关属性

- [`flex`](./flex)
- [`flex-grow`](./flex-grow)
- [`flex-basis`](./flex-basis)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)
- [CSS-Tricks: flex-shrink](https://css-tricks.com/almanac/properties/f/flex-shrink/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)