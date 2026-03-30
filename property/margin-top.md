# margin-top

该属性设置元素的上外边距。

## 语法

```css
margin-top: <length> | <percentage> | auto
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

- 百分比值相对于父元素宽度计算，而非高度
- 外边距可能会与相邻元素的外边距折叠（外边距折叠）
- 第一个块级元素的上外边距可能会与父元素的上外边距折叠

## 示例

```css
/* CSS 示例 */
.box {
  margin-top: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">上方有 20px 外边距</div>
```

## 使用场景

```css
/* 1. 固定上外边距 */
.fixed {
  margin-top: 15px;
}

/* 2. 段落间距 */
p {
  margin-top: 1em;
}

/* 3. 卡片间距 */
.card {
  margin-top: 20px;
}

/* 4. 响应式上外边距 */
.responsive {
  margin-top: 10px;
}
@media (min-width: 768px) {
  .responsive {
    margin-top: 30px;
  }
}

/* 5. 负上外边距 */
.negative {
  margin-top: -10px;
}
