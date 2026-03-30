# width

该属性设置元素的宽度。

## 语法

```css
width: auto | <length> | <percentage> | min-content | max-content | fit-content | inherit
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 非行内非替换元素 |
| 动画 | 是 |

## 值

### `auto`
默认值，宽度由内容或其他属性决定。

### `<length>`
固定宽度值。

### `<percentage>`
相对于包含块宽度的百分比。

### `min-content`
内容最小所需宽度。

### `max-content`
内容最大所需宽度。

### `fit-content`
在 `min-content` 和 `max-content` 之间。

## 注意

- 百分比值相对于父元素宽度计算
- 受 `box-sizing` 属性影响
- 与 `min-width`、`max-width` 配合使用

## 示例

```css
/* CSS 示例 */
.fixed-width {
  width: 300px;
}

.percentage-width {
  width: 50%;
}
```

```html
<!-- HTML 示例 -->
<div class="fixed-width">固定宽度 300px</div>
<div class="percentage-width">宽度为父元素的 50%</div>
```

## 使用场景

```css
/* 1. 固定宽度 - 卡片 */
.card {
  width: 300px;
}

/* 2. 响应式宽度 - 容器 */
.container {
  width: 90%;
  max-width: 1200px;
}

/* 3. 全宽 - 横幅 */
.banner {
  width: 100%;
}

/* 4. 自适应内容 - 按钮 */
.button {
  width: fit-content;
}

/* 5. 等分布局 - 列 */
.column {
  width: 33.33%;
}
