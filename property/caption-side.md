# caption-side

该属性设置表格标题（`<caption>`）的位置。

## 语法

```css
caption-side: top | bottom | block-start | block-end | inline-start | inline-end
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `top`          |
| 适用 HTML 元素 | `<caption>`   |
| 动画         | 是             |

## 值

### `top`

标题显示在表格顶部（默认）。

### `bottom`

标题显示在表格底部。

### `block-start`

标题显示在块级起始位置。

### `block-end`

标题显示在块级结束位置。

### `inline-start`

标题显示在行内起始位置。

### `inline-end`

标题显示在行内结束位置。

## 注意

- 仅对 `<caption>` 元素有效
- 与 `direction` 和 `writing-mode` 配合使用
- 支持逻辑值以适应不同书写模式

## 示例

```css
/* 标题在顶部 */
.top-caption {
  caption-side: top;
}

/* 标题在底部 */
.bottom-caption {
  caption-side: bottom;
}
```

```html
<!-- 表格标题位置示例 -->
<table class="bottom-caption">
  <caption>表格标题</caption>
  <tr><td>内容</td></tr>
</table>
```

## 使用场景

```css
/* 表格标题在底部 */
.table {
  caption-side: bottom;
}

/* 响应式标题位置 */
.responsive-table {
  caption-side: top;
}

@media (min-width: 768px) {
  .responsive-table {
    caption-side: bottom;
  }
}
