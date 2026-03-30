# table-layout

该属性设置表格的布局算法。

## 语法

```css
table-layout: auto | fixed
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | `table` 元素 |
| 动画 | 否 |

## 值

### `auto`
列宽根据单元格内容自动计算（默认）。

### `fixed`
列宽由表格宽度和列宽设置决定，不根据内容计算。

## 注意

- `fixed` 布局渲染速度更快
- `fixed` 布局需要明确设置列宽
- 影响表格整体渲染性能

## 示例

```css
/* CSS 示例 */
.fixed-table {
  table-layout: fixed;
  width: 100%;
}

.fixed-table th,
.fixed-table td {
  width: 25%;
}
```

```html
<!-- HTML 示例 -->
<table class="fixed-table">
  <tr>
    <th>列 1</th>
    <th>列 2</th>
    <th>列 3</th>
    <th>列 4</th>
  </tr>
  <tr>
    <td>内容 1</td>
    <td>内容 2</td>
    <td>内容 3</td>
    <td>内容 4</td>
  </tr>
</table>
```

## 使用场景

```css
/* 1. 固定布局 - 均匀列宽 */
.uniform-columns {
  table-layout: fixed;
  width: 100%;
}

/* 2. 自动布局 - 内容自适应 */
.auto-columns {
  table-layout: auto;
}

/* 3. 固定布局 - 性能优化 */
.performance-table {
  table-layout: fixed;
  width: 100%;
}

/* 4. 数据表格 - 固定列宽 */
.data-table {
  table-layout: fixed;
}

/* 5. 响应式表格 */
.responsive-table {
  table-layout: fixed;
  width: 100%;
}
