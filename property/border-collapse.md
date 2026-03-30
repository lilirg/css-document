# border-collapse

该属性用于设置表格单元格边框是否合并，控制表格边框的显示方式。

## 语法

```css
border-collapse: collapse | separate
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `separate` |
| 适用 HTML 元素 | `table` 元素 |
| 动画 | 否 |

## 值

### separate
分离边框模型（默认值）：
- 每个单元格有独立的边框
- 可以使用 `border-spacing` 设置单元格间距
- 边框不会重叠

### collapse
合并边框模型：
- 相邻单元格的边框合并为一条
- `border-spacing` 无效
- 边框冲突解决规则决定最终边框样式

## 注意
- 仅适用于 `table` 和 `tbody`、`thead`、`tfoot`、`tr`、`td`、`th` 等表格元素
- `collapse` 值在 Internet Explorer 9 及以下版本不支持
- 使用 `collapse` 时，边框冲突解决规则：
  1. `hidden` > `none`
  2. 边框宽度：宽 > 窄
  3. 边框样式：`double` > `solid` > `dashed` > `dotted` > `inset` > `outset` > `groove` > `ridge` > `dashed` > `dotted`
  4. 边框颜色：相同样式下，颜色不同则取第一个

## 示例

```css
/* 分离边框（默认） */
.separate-table {
  border-collapse: separate;
  border-spacing: 4px;
}

/* 合并边框 */
.collapse-table {
  border-collapse: collapse;
}

/* 配合单元格边框 */
.collapse-table td,
.collapse-table th {
  border: 1px solid #ddd;
  padding: 8px;
}
```

```html
<!-- HTML 示例 - 分离边框 -->
<table class="separate-table">
  <tr>
    <td>单元格 1</td>
    <td>单元格 2</td>
  </tr>
</table>

<!-- HTML 示例 - 合并边框 -->
<table class="collapse-table">
  <tr>
    <td>单元格 1</td>
    <td>单元格 2</td>
  </tr>
</table>
```

## 使用场景

```css
/* 1. 标准合并边框表格 */
.standard-table {
  border-collapse: collapse;
  width: 100%;
}
.standard-table td,
.standard-table th {
  border: 1px solid #ddd;
  padding: 12px;
}

/* 2. 分离边框表格（带间距） */
.spaced-table {
  border-collapse: separate;
  border-spacing: 8px;
}
.spaced-table td,
.spaced-table th {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 12px;
}

/* 3. 简洁表格（无外边框） */
.simple-table {
  border-collapse: collapse;
}
.simple-table td,
.simple-table th {
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 12px;
}

/* 4. 网格表格 */
.grid-table {
  border-collapse: collapse;
}
.grid-table td,
.grid-table th {
  border: 1px solid #eee;
  padding: 12px;
}

/* 5. 带表头样式的表格 */
.styled-table {
  border-collapse: collapse;
}
.styled-table thead th {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 12px;
}
.styled-table tbody td {
  border: 1px solid #ddd;
  padding: 12px;
}
