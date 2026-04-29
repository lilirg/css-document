# flex-flow

flex-flow 属性是 flex-direction 和 flex-wrap 的简写属性。

## 语法

```css
flex-flow: <flex-direction> || <flex-wrap>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<flex-direction>` | 方向 | `flex-flow: row wrap` |
| `<flex-wrap>` | 换行 | `flex-flow: row wrap` |

## 示例

### 基础用法

```css
/* 水平不换行 */
.flex-row-nowrap {
  flex-flow: row nowrap;
}

/* 水平换行 */
.flex-row-wrap {
  flex-flow: row wrap;
}

/* 垂直不换行 */
.flex-column-nowrap {
  flex-flow: column nowrap;
}

/* 垂直换行 */
.flex-column-wrap {
  flex-flow: column wrap;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  flex-flow: row nowrap;
}

/* 水平不换行 */
.flex-row-nowrap {
  flex-flow: row nowrap;
}

/* 水平换行 */
.flex-row-wrap {
  flex-flow: row wrap;
}

/* 垂直不换行 */
.flex-column-nowrap {
  flex-flow: column nowrap;
}

/* 垂直换行 */
.flex-column-wrap {
  flex-flow: column wrap;
}

/* 响应式布局 */
.responsive {
  display: flex;
  flex-flow: column wrap;
}

@media (min-width: 768px) {
  .responsive {
    flex-flow: row wrap;
  }
}

/* 卡片布局 */
.card {
  display: flex;
  flex-flow: column wrap;
}

/* 表单布局 */
.form {
  display: flex;
  flex-flow: row nowrap;
}

/* 图片画廊 */
.gallery {
  display: flex;
  flex-flow: row wrap;
}

/* 混合单位 */
.mixed-units {
  display: flex;
  flex-flow: row nowrap;
}

/* 带命名的项目 */
.named-items {
  display: flex;
  flex-flow: column wrap;
}

/* 悬停效果 */
.card {
  transition: flex-flow 0.3s ease-in-out;
}

.card:hover {
  flex-flow: row wrap;
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

- `flex-flow` 只在 Flex 容器中有效
- `flex-flow` 是 flex-direction 和 flex-wrap 的简写属性
- 默认值为 `row nowrap`
- 方向和换行可以按任意顺序指定

## 相关属性

- [`flex`](./flex)
- [`flex-direction`](./flex-direction)
- [`flex-wrap`](./flex-wrap)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)
- [CSS-Tricks: flex-flow](https://css-tricks.com/almanac/properties/f/flex-flow/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)