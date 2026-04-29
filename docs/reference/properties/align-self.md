# align-self

align-self 属性定义单个 Flex 项目在交叉轴方向上的对齐方式。

## 语法

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 继承父容器的 align-items | `align-self: auto` |
| `flex-start` | 起始对齐 | `align-self: flex-start` |
| `flex-end` | 结束对齐 | `align-self: flex-end` |
| `center` | 居中对齐 | `align-self: center` |
| `baseline` | 基线对齐 | `align-self: baseline` |
| `stretch` | 拉伸对齐 | `align-self: stretch` |

## 示例

### 基础用法

```css
/* 起始对齐 */
.flex-start {
  align-self: flex-start;
}

/* 结束对齐 */
.flex-end {
  align-self: flex-end;
}

/* 居中对齐 */
.center {
  align-self: center;
}

/* 基线对齐 */
.baseline {
  align-self: baseline;
}

/* 拉伸对齐 */
.stretch {
  align-self: stretch;
}
```

### 高级用法

```css
/* Flex 容器 */
.flex-container {
  display: flex;
  align-items: center;
}

/* 项目单独对齐 */
.item-1 {
  align-self: flex-start;
}

.item-2 {
  align-self: center;
}

.item-3 {
  align-self: flex-end;
}

/* 响应式布局 */
@media (min-width: 768px) {
  .item {
    align-self: center;
  }
}

/* 卡片布局 */
.card {
  display: flex;
  align-items: center;
}

.card-header {
  align-self: flex-start;
}

.card-body {
  align-self: center;
}

.card-footer {
  align-self: flex-end;
}

/* 表单布局 */
.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  align-items: center;
}

.form-label {
  align-self: center;
}

.form-input {
  align-self: stretch;
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

- `align-self` 只在 Flex 容器中有效
- `align-self` 定义单个 Flex 项目在交叉轴方向上的对齐方式
- `auto` 是默认值，表示继承父容器的 align-items
- `stretch` 表示拉伸对齐

## 相关属性

- [`flex`](./flex)
- [`justify-content`](./justify-content)
- [`align-items`](./align-items)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: align-self](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)
- [CSS-Tricks: align-self](https://css-tricks.com/almanac/properties/a/align-self/)
- [W3C CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)