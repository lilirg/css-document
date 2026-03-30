# margin-bottom

该属性设置元素的下外边距。

## 语法

```css
margin-bottom: <length> | <percentage> | auto
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
- 外边距可能会与相邻元素的外边距折叠
- 负值可以创建元素重叠效果

## 示例

```css
/* CSS 示例 */
.box {
  margin-bottom: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">下方有 20px 外边距</div>
```

## 使用场景

```css
/* 1. 固定下外边距 */
.fixed {
  margin-bottom: 15px;
}

/* 2. 段落间距 */
p {
  margin-bottom: 1em;
}

/* 3. 卡片间距 */
.card {
  margin-bottom: 20px;
}

/* 4. 响应式下外边距 */
.responsive {
  margin-bottom: 10px;
}
@media (min-width: 768px) {
  .responsive {
    margin-bottom: 30px;
  }
}

/* 5. 负下外边距 */
.negative {
  margin-bottom: -10px;
}
