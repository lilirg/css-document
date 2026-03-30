# page-break-before

该属性用于设置元素前是否插入分页符（用于打印时的分页控制）。

## 语法

```css
page-break-before: auto | always | avoid | left | right | page | column | avoid-page | avoid-column
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### auto
自动分页（默认值）：
- 由浏览器决定是否在元素前分页

### always
强制分页：
- 在元素前始终插入分页符
- 元素总是从新页面开始

### avoid
避免分页：
- 尽量避免在元素前分页
- 如果可能，将元素保持在同一页面

### left
在元素前插入分页符，直到下一个左页：
- 用于双面打印
- 可能插入两个分页符

### right
在元素前插入分页符，直到下一个右页：
- 用于双面打印
- 可能插入两个分页符

### page
强制分页（与 `always` 相同）

### column
在元素前插入列分符

### avoid-page
避免分页（与 `avoid` 相同）

### avoid-column
避免列分

## 注意
- 该属性主要用于打印样式（`@media print`）
- 在现代 CSS 中，推荐使用 `break-before` 属性
- 该属性是旧版规范，但仍被广泛支持
- 不能应用于空元素或 `display: none` 的元素
- 不能应用于 `display: table-row`, `table-row-group`, `table-header-group`, `table-footer-group`, `table-column`, `table-column-group`

## 示例

```css
/* 自动分页（默认） */
.box {
  page-break-before: auto;
}

/* 强制分页 */
.page-break {
  page-break-before: always;
}

/* 避免分页 */
.no-break {
  page-break-before: avoid;
}

/* 左页 */
.left-page {
  page-break-before: left;
}

/* 右页 */
.right-page {
  page-break-before: right;
}
```

```html
<!-- HTML 示例 -->
<div class="box">内容 1</div>
<div class="page-break">内容 2（新页面）</div>
<div class="box">内容 3</div>
```

## 使用场景

```css
/* 1. 章节分页 */
.chapter {
  page-break-before: always;
}

/* 2. 避免段落分页 */
.paragraph {
  page-break-before: avoid;
}

/* 3. 双面打印 - 左页 */
.left-side {
  page-break-before: left;
}

/* 4. 双面打印 - 右页 */
.right-side {
  page-break-before: right;
}

/* 5. 报告分页 */
.report-section {
  page-break-before: always;
}

/* 6. 表格避免分页 */
.table-container {
  page-break-before: avoid;
}

/* 7. 图片避免分页 */
.image-container {
  page-break-before: avoid;
}

/* 8. 打印样式 */
@media print {
  .new-page {
    page-break-before: always;
  }
}
