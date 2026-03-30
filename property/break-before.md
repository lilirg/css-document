# break-before

该属性设置在元素前是否强制进行分页、列或区域断点。

## 语法

```css
break-before: auto | always | avoid | left | right | page | column | avoid-page | avoid-column | avoid-region
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

在元素前强制分页。

### `avoid`

避免在元素前分页。

### `left` / `right`

在元素前强制分页，并使当前页在左侧或右侧页面开始。

### `page`

在元素前强制分页。

### `column`

在元素前强制分列。

### `avoid-page`

避免在元素前分页。

### `avoid-column`

避免在元素前分列。

### `avoid-region`

避免在元素前分区域。

## 注意

- 主要用于打印和多列布局
- 与 `break-after` 和 `break-inside` 配合使用
- 在分页媒体中效果最明显

## 示例

```css
/* 分页前强制分页 */
.page-break {
  break-before: page;
}

/* 分页前避免分页 */
.no-break {
  break-before: avoid;
}

/* 列前强制分列 */
.column-break {
  break-before: column;
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
  break-before: page;
}

/* 避免段落分页 */
.paragraph {
  break-before: avoid;
}

/* 多列布局 */
.multicolumn {
  column-count: 3;
}

.item {
  break-before: column;
}
