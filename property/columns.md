# columns

该属性是多列布局中列数和列宽的速记属性。

## 语法

```css
columns: <column-width> || <column-count>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各子属性的初始值 |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 子属性

| 属性 | 说明 |
| :--- | :--- |
| `column-width` | 列宽 |
| `column-count` | 列数 |

## 值

### `<column-width>`
指定列的最佳宽度。

### `<column-count>`
指定列的数量。

## 注意

- 可以只设置其中一个值
- 顺序不重要，浏览器会自动识别
- 优先使用 `column-width` 计算列数

## 示例

```css
/* CSS 示例 */
.columns {
  columns: 200px 3;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>每列 200px 宽，最多 3 列...</p>
</div>
```

## 使用场景

```css
/* 1. 指定列宽和列数 */
.fixed {
  columns: 150px 3;
}

/* 2. 只指定列宽 */
.width-only {
  columns: 200px;
}

/* 3. 只指定列数 */
.count-only {
  columns: 2;
}

/* 4. 响应式多列 */
.responsive {
  columns: 100px;
}
@media (min-width: 768px) {
  .responsive {
    columns: 200px 3;
  }
}
