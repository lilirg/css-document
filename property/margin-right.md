# margin-right

该属性设置元素的右外边距。

## 语法

```css
margin-right: <length> | <percentage> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<length>`
固定外边距值。

### `<percentage>`
相对于父元素宽度的百分比。

### `auto`
自动计算外边距。

## 注意

- 百分比值相对于父元素宽度计算
- 外边距可能会与相邻元素的外边距折叠
- 在 RTL（从右到左）布局中行为可能不同

## 示例

```css
/* CSS 示例 */
.box {
  margin-right: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">右侧有 20px 外边距</div>
```

## 使用场景

```css
/* 1. 固定右外边距 */
.fixed {
  margin-right: 15px;
}

/* 2. 行内元素间距 */
.inline-item {
  margin-right: 10px;
}

/* 3. 网格项间距 */
.grid-item {
  margin-right: 20px;
}

/* 4. 响应式右外边距 */
.responsive {
  margin-right: 10px;
}
@media (min-width: 768px) {
  .responsive {
    margin-right: 30px;
  }
}

/* 5. 负右外边距 */
.negative {
  margin-right: -10px;
}
