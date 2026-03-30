# border-spacing

该属性设置表格单元格之间的间距。

## 语法

```css
border-spacing: <length> | <length> <length>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | `table` 元素（仅当 `border-collapse` 为 `separate` 时） |
| 动画         | 是             |

## 值

### `<length>`

定义单元格之间的间距。可以使用任何有效的 CSS 长度值。

### 单值语法

```css
border-spacing: 10px;  /* 水平和垂直间距相同 */
```

### 双值语法

```css
border-spacing: 10px 5px;  /* 水平间距 垂直间距 */
```

| 值 | 说明 |
|------|------|
| 第一个值 | 水平间距（左右） |
| 第二个值 | 垂直间距（上下） |

## 注意

- 该属性仅在 `border-collapse: separate` 时生效
- 当 `border-collapse: collapse` 时，该属性被忽略
- 值不能为负数

## 示例

```css
/* 单值 - 相同间距 */
table.equal-spacing {
  border-collapse: separate;
  border-spacing: 10px;
}

table.equal-spacing th,
table.equal-spacing td {
  border: 1px solid #333;
  padding: 10px;
}

/* 双值 - 不同间距 */
table.different-spacing {
  border-collapse: separate;
  border-spacing: 15px 5px;
}

table.different-spacing th,
table.different-spacing td {
  border: 1px solid #333;
  padding: 10px;
}

/* 零间距 */
table.no-spacing {
  border-collapse: separate;
  border-spacing: 0;
}

table.no-spacing th,
table.no-spacing td {
  border: 1px solid #333;
  padding: 10px;
}

/* 使用 em 单位 */
table.em-spacing {
  border-collapse: separate;
  border-spacing: 0.5em 0.25em;
}

table.em-spacing th,
table.em-spacing td {
  border: 1px solid #333;
  padding: 10px;
}
```

```html
<!-- 相同间距表格 -->
<table class="equal-spacing">
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

<!-- 不同间距表格 -->
<table class="different-spacing">
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

<!-- 零间距表格 -->
<table class="no-spacing">
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
/* 紧凑表格 - 小间距 */
.compact-table {
  border-collapse: separate;
  border-spacing: 2px;
  width: 100%;
}

.compact-table th,
.compact-table td {
  border: 1px solid #dee2e6;
  padding: 8px;
  background-color: white;
}

/* 宽松表格 - 大间距 */
.relaxed-table {
  border-collapse: separate;
  border-spacing: 12px;
  width: 100%;
}

.relaxed-table th,
.relaxed-table td {
  border: 1px solid #dee2e6;
  padding: 12px;
  background-color: white;
  border-radius: 4px;
}

/* 水平间距大于垂直间距 */
.horizontal-spacing {
  border-collapse: separate;
  border-spacing: 20px 5px;
}

.horizontal-spacing th,
.horizontal-spacing td {
  border: 1px solid #dee2e6;
  padding: 10px;
  background-color: white;
}

/* 垂直间距大于水平间距 */
.vertical-spacing {
  border-collapse: separate;
  border-spacing: 5px 15px;
}

.vertical-spacing th,
.vertical-spacing td {
  border: 1px solid #dee2e6;
  padding: 10px;
  background-color: white;
}

/* 卡片式表格 */
.card-table {
  border-collapse: separate;
  border-spacing: 8px;
}

.card-table th,
.card-table td {
  border: none;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 阴影表格 */
.shadow-table {
  border-collapse: separate;
  border-spacing: 10px;
}

.shadow-table th,
.shadow-table td {
  border: none;
  padding: 12px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* 动态间距（配合动画） */
.animated-table {
  border-collapse: separate;
  border-spacing: 5px;
  animation: spacingChange 3s infinite;
}

.animated-table th,
.animated-table td {
  border: 1px solid #dee2e6;
  padding: 10px;
}

@keyframes spacingChange {
  0%, 100% { border-spacing: 5px; }
  50% { border-spacing: 15px; }
}

/* 响应式表格间距 */
.responsive-spacing {
  border-collapse: separate;
  border-spacing: 4px;
}

@media (min-width: 768px) {
  .responsive-spacing {
    border-spacing: 8px;
  }
}

@media (min-width: 1024px) {
  .responsive-spacing {
    border-spacing: 12px;
  }
}

.responsive-spacing th,
.responsive-spacing td {
  border: 1px solid #dee2e6;
  padding: 10px;
  background-color: white;
}
