# column-count

该属性指定多列布局中的列数。

## 语法

```css
column-count: auto | <integer>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `auto`
默认值。列数由 `column-width` 属性决定。

### `<integer>`
指定列数。必须大于 0。

## 注意

- 与 `column-width` 配合使用效果最佳
- 列数不能为 0 或负数
- 内容会自动在列之间流动
- 最后一列可能内容不足

## 示例

```css
/* CSS 示例 */
.multicolumn {
  column-count: 3;
}
```

```html
<!-- HTML 示例 -->
<div class="multicolumn">
  <p>这是一段多列布局的文本，会自动在列之间流动...</p>
</div>
```

## 使用场景

```css
/* 1. 三列布局 */
.three-columns {
  column-count: 3;
  column-gap: 20px;
}

/* 2. 响应式列数 */
.responsive-columns {
  column-count: 1;
}
@media (min-width: 600px) {
  .responsive-columns {
    column-count: 2;
  }
}
@media (min-width: 900px) {
  .responsive-columns {
    column-count: 3;
  }
}

/* 3. 两列文章布局 */
.article {
  column-count: 2;
  column-gap: 40px;
  column-rule: 1px solid #ccc;
}

/* 4. 四列图片画廊 */
.gallery {
  column-count: 4;
  column-gap: 10px;
}
.gallery img {
  width: 100%;
}
