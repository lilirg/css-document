# border-collapse

该属性设置表格边框的折叠方式。

## 语法

```css
border-collapse: collapse | separate
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `separate`     |
| 适用 HTML 元素 | `table` 元素   |
| 动画         | 否             |

## 值

### `collapse`

将表格边框折叠为单一边框。单元格之间的边框被合并，形成统一的表格边框。

### `separate`

将表格边框分离。每个单元格都有独立的边框，这是默认值。

## 注意

- 该属性仅适用于 `table` 和 `tbody`、`thead`、`tfoot`、`tr`、`td`、`th` 元素
- 在 `separate` 模式下，可以使用 `border-spacing` 属性设置单元格间距
- 在 `collapse` 模式下，`border-spacing` 和 `empty-cells` 属性被忽略

## 示例

```css
/* 折叠边框 */
table.collapse {
  border-collapse: collapse;
  border: 2px solid #333;
}

table.collapse th,
table.collapse td {
  border: 1px solid #333;
  padding: 10px;
}

/* 分离边框 */
table.separate {
  border-collapse: separate;
  border-spacing: 5px;
  border: 2px solid #333;
}

table.separate th,
table.separate td {
  border: 1px solid #333;
  padding: 10px;
}
```

```html
<!-- 折叠边框表格 -->
<table class="collapse">
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>城市</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
      <td>北京</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>30</td>
      <td>上海</td>
    </tr>
  </tbody>
</table>

<!-- 分离边框表格 -->
<table class="separate">
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>城市</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
      <td>北京</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>30</td>
      <td>上海</td>
    </tr>
  </tbody>
</table>
```

## 使用场景

```css
/* 简洁表格 - 折叠边框 */
.simple-table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #dee2e6;
}

.simple-table th,
.simple-table td {
  border: 1px solid #dee2e6;
  padding: 12px;
  text-align: left;
}

.simple-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

/* 现代表格 - 分离边框 */
.modern-table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
}

.modern-table th,
.modern-table td {
  border-bottom: 1px solid #dee2e6;
  padding: 12px;
  text-align: left;
}

.modern-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.modern-table tr:last-child td {
  border-bottom: none;
}

/* 带间距的表格 */
.spaced-table {
  border-collapse: separate;
  border-spacing: 8px;
}

.spaced-table th,
.spaced-table td {
  border: 1px solid #dee2e6;
  padding: 10px;
  background-color: white;
}

/* 斑马纹表格 */
.stripe-table {
  border-collapse: collapse;
  width: 100%;
}

.stripe-table th,
.stripe-table td {
  border: 1px solid #dee2e6;
  padding: 12px;
}

.stripe-table tr:nth-child(even) {
  background-color: #f8f9fa;
}

/* 悬停效果表格 */
.hover-table {
  border-collapse: collapse;
  width: 100%;
}

.hover-table th,
.hover-table td {
  border: 1px solid #dee2e6;
  padding: 12px;
  transition: background-color 0.3s;
}

.hover-table tr:hover {
  background-color: #e9ecef;
}

/* 响应式表格 */
.responsive-table {
  border-collapse: collapse;
  width: 100%;
}

.responsive-table th,
.responsive-table td {
  border: 1px solid #dee2e6;
  padding: 12px;
}

@media (max-width: 768px) {
  .responsive-table {
    border-collapse: separate;
    border-spacing: 4px;
    display: block;
  }
  
  .responsive-table thead {
    display: none;
  }
  
  .responsive-table tr {
    display: block;
    margin-bottom: 16px;
  }
  
  .responsive-table td {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;
  }
  
  .responsive-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    font-weight: bold;
    text-align: left;
  }
}
