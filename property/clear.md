# clear

该属性指定元素是否必须浮动在之前的浮动元素下方。

## 语法

```css
clear: none | left | right | both | inline-start | inline-end
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 非浮动元素 |
| 动画 | 否 |

## 值

### `none`
默认值。元素可以浮动在之前的浮动元素旁边。

### `left`
元素不能浮动在左侧浮动元素的旁边。

### `right`
元素不能浮动在右侧浮动元素的旁边。

### `both`
元素不能浮动在左侧或右侧浮动元素的旁边。

### `inline-start`
根据书写模式，相当于 `left`（水平书写模式）或 `top`（垂直书写模式）。

### `inline-end`
根据书写模式，相当于 `right`（水平书写模式）或 `top`（垂直书写模式）。

## 注意

- `clear` 属性只影响浮动元素，对非浮动元素无效
- 常用于清除浮动，防止后续元素受到浮动影响
- 现代布局中，通常使用 Flexbox 或 Grid 替代浮动布局

## 示例

```css
/* CSS 示例 */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

```html
<!-- HTML 示例 -->
<div class="clearfix">
  <div style="float: left;">浮动元素</div>
  <div style="float: right;">浮动元素</div>
</div>
```

## 使用场景

```css
/* 1. 清除左右浮动 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/* 2. 清除左侧浮动 */
.clear-left {
  clear: left;
}

/* 3. 清除右侧浮动 */
.clear-right {
  clear: right;
}

/* 4. 传统清除浮动方法 */
.clearfix {
  zoom: 1; /* IE6/7 */
}
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
