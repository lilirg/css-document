# break-after

该属性设置在元素后是否强制进行分页、列或区域断点。

## 语法

```css
break-after: auto | always | avoid | left | right | page | column | avoid-page | avoid-column | avoid-region
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 否             |

## 值

### `auto`

默认行为，由浏览器决定。

### `always`

在元素后强制分页。

### `avoid`

避免在元素后分页。

### `left` / `right`

在元素后强制分页，并使下一页在左侧或右侧页面开始。

### `page`

在元素后强制分页。

### `column`

在元素后强制分列。

### `avoid-page`

避免在元素后分页。

### `avoid-column`

避免在元素后分列。

### `avoid-region`

避免在元素后分区域。

## 注意

- 主要用于打印和多列布局
- 与 `break-before` 和 `break-inside` 配合使用
- 在分页媒体中效果最明显

## 示例

```css
/* 分页后强制分页 */
.page-break {
  break-after: page;
}

/* 分页后避免分页 */
.no-break {
  break-after: avoid;
}

/* 列后强制分列 */
.column-break {
  break-after: column;
}
```

```html
<!-- 分页示例 -->
<div class="content">内容 1</div>
<div class="page-break"></div>
<div class="content">内容 2</div>
```

## 使用场景

```css
/* 打印时章节分页 */
.chapter {
  break-after: page;
}

/* 避免段落分页 */
.paragraph {
  break-after: avoid;
}

/* 多列布局 */
.multicolumn {
  column-count: 3;
}

.item {
  break-after: column;
}
