# column-gap

该属性设置多列布局中列之间的间距。

## 语法

```css
column-gap: normal | <length> | <percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal`（相当于 `1em`） |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `normal`
默认值。相当于 `1em`。

### `<length>`
指定列之间的固定间距。

### `<percentage>`
相对于容器宽度的百分比。

## 注意

- 也适用于 Grid 布局和 Flexbox 布局
- 在 Grid 中等同于 `grid-column-gap`
- 在 Flexbox 中控制主轴间距

## 示例

```css
/* CSS 示例 */
.columns {
  column-count: 3;
  column-gap: 40px;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>列之间有 40px 的间距...</p>
</div>
```

## 使用场景

```css
/* 1. 固定列间距 */
.fixed-gap {
  column-count: 3;
  column-gap: 30px;
}

/* 2. 响应式列间距 */
.responsive-gap {
  column-count: 2;
  column-gap: 20px;
}
@media (min-width: 768px) {
  .responsive-gap {
    column-count: 3;
    column-gap: 40px;
  }
}

/* 3. 窄间距画廊 */
.gallery {
  column-count: 4;
  column-gap: 10px;
}

/* 4. 宽间距文章 */
.article {
  column-count: 2;
  column-gap: 60px;
}
