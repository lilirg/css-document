# column-width

该属性指定多列布局中列的最佳宽度。

## 语法

```css
column-width: auto | <length>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `auto`
默认值。列宽由 `column-count` 或其他因素决定。

### `<length>`
指定列的最佳宽度。浏览器会根据容器宽度自动计算列数。

## 注意

- 与 `column-count` 配合使用
- 列宽是"最佳"宽度，实际宽度可能略有不同
- 值越小，列数越多

## 示例

```css
/* CSS 示例 */
.columns {
  column-width: 200px;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>每列约 200px 宽，自动计算列数...</p>
</div>
```

## 使用场景

```css
/* 1. 固定列宽 */
.fixed-width {
  column-width: 150px;
}

/* 2. 响应式列宽 */
.responsive {
  column-width: 200px;
  column-gap: 20px;
}

/* 3. 窄列布局 */
.narrow {
  column-width: 100px;
}

/* 4. 宽列布局 */
.wide {
  column-width: 300px;
}
