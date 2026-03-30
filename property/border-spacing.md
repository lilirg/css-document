# border-spacing

该属性用于设置表格单元格边框之间的间距，仅适用于 `border-collapse` 为 `separate` 的表格。

## 语法

```css
border-spacing: <length> <length>?
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | `table` 元素 |
| 动画 | 是（可动画） |

## 值

### length
长度值：
- 绝对单位（如 `4px`, `8pt`, `0.5in`）
- 相对单位（如 `0.5em`, `1rem`）
- 必须为正值

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 水平和垂直间距相同 |
| 2 个值 | 第一个值为水平间距，第二个值为垂直间距 |

## 注意
- 仅当 `border-collapse` 为 `separate` 时生效（默认值）
- 如果 `border-collapse` 为 `collapse`，此属性无效
- 该属性不能继承
- 可以使用负值（但某些浏览器可能不支持）

## 示例

```css
/* 1 个值 - 水平和垂直间距相同 */
table {
  border-spacing: 8px;
  border-collapse: separate;
}

/* 2 个值 - 水平间距 / 垂直间距 */
table {
  border-spacing: 12px 8px;
  border-collapse: separate;
}

/* 默认值（0） */
table {
  border-spacing: 0;
}
```

```html
<!-- HTML 示例 -->
<table>
  <tr>
    <td>单元格 1</td>
    <td>单元格 2</td>
  </tr>
  <tr>
    <td>单元格 3</td>
    <td>单元格 4</td>
  </tr>
</table>
```

## 使用场景

```css
/* 1. 标准表格间距 */
.standard-table {
  border-spacing: 4px;
  border-collapse: separate;
}

/* 2. 水平间距大于垂直间距 */
.horizontal-table {
  border-spacing: 12px 4px;
  border-collapse: separate;
}

/* 3. 紧凑表格（无间距） */
.compact-table {
  border-spacing: 0;
  border-collapse: separate;
}

/* 4. 宽松表格（大间距） */
.spacious-table {
  border-spacing: 16px;
  border-collapse: separate;
}

/* 5. 配合单元格样式 */
.styled-table {
  border-spacing: 8px;
  border-collapse: separate;
}
.styled-table td,
.styled-table th {
  background-color: #fff;
  padding: 12px;
  border: 1px solid #ddd;
}
