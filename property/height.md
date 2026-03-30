# height

该属性设置元素的高度。

## 语法

```css
height: auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length>)
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `auto`
默认值。高度由内容决定。

### `<length>`
固定高度值。

### `<percentage>`
相对于父元素高度的百分比。

### `min-content`
内容最小所需高度。

### `max-content`
内容最大所需高度。

### `fit-content()`
适应内容高度，最大不超过指定值。

## 注意

- 百分比高度需要父元素有明确高度
- 内联元素的高度设置无效
- 可以使用 `min-height` 和 `max-height` 限制高度范围

## 示例

```css
/* CSS 示例 */
.fixed-height {
  height: 200px;
}

.percentage-height {
  height: 50%;
}
```

```html
<!-- HTML 示例 -->
<div class="fixed-height">固定高度 200px</div>
<div class="percentage-height">父元素高度的 50%</div>
```

## 使用场景

```css
/* 1. 固定高度 */
.box {
  height: 300px;
}

/* 2. 视口高度 */
.full-height {
  height: 100vh;
}

/* 3. 百分比高度 */
.half-height {
  height: 50%;
}

/* 4. 自适应内容 */
.auto-height {
  height: auto;
}

/* 5. 最小高度限制 */
.min-box {
  min-height: 100px;
  height: auto;
}

/* 6. 响应式高度 */
.responsive {
  height: 200px;
}
@media (min-width: 768px) {
  .responsive {
    height: 400px;
  }
}
