# page-break-inside

该属性用于设置元素内部是否允许插入分页符（用于打印时的分页控制）。

## 语法

```css
page-break-inside: auto | avoid | page | column | avoid-page | avoid-column
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### auto
自动分页（默认值）：
- 由浏览器决定是否在元素内部分页

### avoid
避免分页：
- 尽量避免在元素内部分页
- 如果可能，将整个元素保持在同一页面

### page
在元素内部允许分页

### column
在元素内部允许列分

### avoid-page
避免页面内分页（与 `avoid` 相同）

### avoid-column
避免列内分页

## 注意
- 该属性主要用于打印样式（`@media print`）
- 在现代 CSS 中，推荐使用 `break-inside` 属性
- 该属性是旧版规范，但仍被广泛支持
- 常用于防止卡片、段落等元素被分页切断
- 不能应用于空元素或 `display: none` 的元素

## 示例

```css
/* 自动分页（默认） */
.box {
  page-break-inside: auto;
}

/* 避免内部分页 */
.no-break-inside {
  page-break-inside: avoid;
}

/* 允许内部分页 */
.allow-break {
  page-break-inside: page;
}
```

```html
<!-- HTML 示例 -->
<div class="box">内容 1</div>
<div class="no-break-inside">完整内容（不会被分页切断）</div>
<div class="box">内容 2</div>
```

## 使用场景

```css
/* 1. 卡片避免分页 */
.card {
  page-break-inside: avoid;
}

/* 2. 段落避免分页 */
.paragraph {
  page-break-inside: avoid;
}

/* 3. 列表项避免分页 */
.list-item {
  page-break-inside: avoid;
}

/* 4. 表格避免分页 */
.table {
  page-break-inside: avoid;
}

/* 5. 图片容器避免分页 */
.image-container {
  page-break-inside: avoid;
}

/* 6. 代码块避免分页 */
.code-block {
  page-break-inside: avoid;
}

/* 7. 引用块避免分页 */
.blockquote {
  page-break-inside: avoid;
}

/* 8. 打印样式 */
@media print {
  .keep-together {
    page-break-inside: avoid;
  }
}
