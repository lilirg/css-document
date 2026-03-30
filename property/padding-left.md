# padding-left

该属性设置元素的左内边距。

## 语法

```css
padding-left: <length> | <percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<length>`
固定内边距值。

### `<percentage>`
相对于父元素宽度的百分比。

## 注意

- 百分比值相对于父元素宽度计算
- 不能设置负值
- 内边距会增加元素的总尺寸

## 示例

```css
/* CSS 示例 */
.box {
  padding-left: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容左侧有 20px 内边距
</div>
```

## 使用场景

```css
/* 1. 固定左内边距 */
.fixed {
  padding-left: 15px;
}

/* 2. 列表项缩进 */
.list-item {
  padding-left: 20px;
}

/* 3. 响应式左内边距 */
.responsive {
  padding-left: 10px;
}
@media (min-width: 768px) {
  .responsive {
    padding-left: 30px;
  }
}

/* 4. 按钮左内边距 */
.button {
  padding-left: 20px;
}

/* 5. 导航项左内边距 */
.nav-item {
  padding-left: 15px;
}
