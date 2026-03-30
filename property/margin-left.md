# margin-left

该属性设置元素的左外边距。

## 语法

```css
margin-left: <length> | <percentage> | auto
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
自动计算外边距，常用于水平居中。

## 注意

- 百分比值相对于父元素宽度计算
- 外边距可能会与相邻元素的外边距折叠
- `auto` 值常用于水平居中元素

## 示例

```css
/* CSS 示例 */
.box {
  margin-left: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">左侧有 20px 外边距</div>
```

## 使用场景

```css
/* 1. 固定左外边距 */
.fixed {
  margin-left: 15px;
}

/* 2. 水平居中元素 */
.centered {
  margin-left: auto;
  margin-right: auto;
}

/* 3. 缩进效果 */
.indented {
  margin-left: 2em;
}

/* 4. 响应式左外边距 */
.responsive {
  margin-left: 10px;
}
@media (min-width: 768px) {
  .responsive {
    margin-left: 30px;
  }
}

/* 5. 负左外边距 */
.negative {
  margin-left: -10px;
}
