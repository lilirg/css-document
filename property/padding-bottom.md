# padding-bottom

该属性设置元素的下内边距。

## 语法

```css
padding-bottom: <length> | <percentage>
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

- 百分比值相对于父元素宽度计算，而非高度
- 不能设置负值
- 内边距会增加元素的总尺寸

## 示例

```css
/* CSS 示例 */
.box {
  padding-bottom: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容下方有 20px 内边距
</div>
```

## 使用场景

```css
/* 1. 固定下内边距 */
.fixed {
  padding-bottom: 15px;
}

/* 2. 卡片下内边距 */
.card {
  padding-bottom: 20px;
}

/* 3. 响应式下内边距 */
.responsive {
  padding-bottom: 10px;
}
@media (min-width: 768px) {
  .responsive {
    padding-bottom: 30px;
  }
}

/* 4. 按钮下内边距 */
.button {
  padding-bottom: 10px;
}

/* 5. 内容区域下内边距 */
.content {
  padding-bottom: 40px;
}
