# flex-wrap

flex-wrap 属性定义 Flex 容器中 Flex 项目是否换行。

## 语法

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `nowrap` | 不换行 | `flex-wrap: nowrap` |
| `wrap` | 换行 | `flex-wrap: wrap` |
| `wrap-reverse` | 反向换行 | `flex-wrap: wrap-reverse` |

## 示例

### 基础用法

```css
/* 不换行 */
.flex-nowrap {
  flex-wrap: nowrap;
}

/* 换行 */
.flex-wrap {
  flex-wrap: wrap;
}

/* 反向换行 */
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

/* 不换行 */
.flex-nowrap {
  flex-wrap: nowrap;
}

/* 换行 */
.flex-wrap {
  flex-wrap: wrap;
}

/* 反向换行 */
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

/* 响应式布局 */
.responsive {
  display: flex;
  flex-wrap: wrap;
}

/* 卡片布局 */
.card {
  display: flex;
  flex-wrap: wrap;
}

/* 表单布局 */
.form {
  display: flex;
  flex-wrap: nowrap;
}

/* 图片画廊 */
.gallery {
  display: flex;
  flex-wrap: wrap;
}

/* 混合单位 */
.mixed-units {
  display: flex;
  flex-wrap: nowrap;
}

/* 带命名的项目 */
.named-items {
  display: flex;
  flex-wrap: wrap;
}

/* 悬停效果 */
.card {
  transition: flex-wrap 0.3s ease-in-out;
}

.card:hover {
  flex-wrap: wrap;
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

- `flex-wrap` 只在 Flex 容器中有效
- `flex-wrap` 定义 Flex 容器中 Flex 项目是否换行
- `nowrap` 是默认值，表示不换行
- `wrap` 表示换行

## 相关属性

- [`flex`](./flex)
- [`flex-direction`](./flex-direction)
- [`flex-flow`](./flex-flow)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)
- [CSS-Tricks: flex-wrap](https://css-tricks.com/almanac/properties/f/flex-wrap/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)