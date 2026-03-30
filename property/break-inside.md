# break-inside

该属性设置在元素内部是否允许进行分页、列或区域断点。

## 语法

```css
break-inside: auto | avoid | avoid-page | avoid-column | avoid-region
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 否             |

## 值

### `auto`

默认行为，由浏览器决定。

### `avoid`

避免在元素内部分页。

### `avoid-page`

避免在元素内部分页。

### `avoid-column`

避免在元素内部分列。

### `avoid-region`

避免在元素内部分区域。

## 注意

- 主要用于打印和多列布局
- 与 `break-before` 和 `break-after` 配合使用
- 在分页媒体中效果最明显

## 示例

```css
/* 避免内部分页 */
.no-break-inside {
  break-inside: avoid;
}

/* 避免内部列断 */
.no-column-break {
  break-inside: avoid-column;
}
```

```html
<!-- 分页内断点示例 -->
<div class="content">
  <div class="no-break-inside">不会分页的内容</div>
</div>
```

## 使用场景

```css
/* 卡片避免分页 */
.card {
  break-inside: avoid;
}

/* 图片避免分页 */
.image {
  break-inside: avoid-page;
}

/* 多列布局 */
.multicolumn {
  column-count: 3;
}

.item {
  break-inside: avoid-column;
}
