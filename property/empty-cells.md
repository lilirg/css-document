# empty-cells

该属性控制表格单元格中无内容时边框和背景是否显示。

## 语法

```css
empty-cells: show | hide
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `show` |
| 适用 HTML 元素 | `td` 和 `th` 元素 |
| 动画 | 否 |

## 值

### `show`
显示空单元格的边框和背景（默认）。

### `hide`
隐藏空单元格的边框和背景。

## 注意

- 仅适用于 `border-collapse` 为 `separate` 的表格
- 对 `border-collapse: collapse` 的表格无效
- 不影响单元格内的空白字符

## 示例

```css
/* CSS 示例 */
.show-empty {
  empty-cells: show;
}

.hide-empty {
  empty-cells: hide;
}
```

```html
<!-- HTML 示例 -->
<table class="hide-empty">
  <tr>
    <td>有内容</td>
    <td></td>
  </tr>
</table>
```

## 使用场景

```css
/* 1. 隐藏空单元格 - 简洁表格 */
.clean-table td {
  empty-cells: hide;
}

/* 2. 显示空单元格 - 完整边框 */
.complete-table td {
  empty-cells: show;
}

/* 3. 数据表格 - 隐藏空白 */
.data-table {
  empty-cells: hide;
}

/* 4. 报表表格 - 显示结构 */
.report-table {
  empty-cells: show;
}

/* 5. 动态内容表格 */
.dynamic-table td {
  empty-cells: hide;
}
