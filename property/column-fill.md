# column-fill

该属性控制多列布局中内容的填充方式。

## 语法

```css
column-fill: auto | balance
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `balance`（在多列容器中） |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `auto`
列高可以不均衡。内容按顺序填充，可能产生高度不同的列。

### `balance`
平衡所有列的高度。内容会均匀分布在所有列中。

## 注意

- 只在多列容器中生效（设置了 `column-count` 或 `column-width`）
- 在分页媒体中，默认值为 `auto`
- 在连续媒体（如屏幕）中，默认值为 `balance`

## 示例

```css
/* CSS 示例 */
.balance-columns {
  column-count: 3;
  column-fill: balance;
}

.auto-columns {
  column-count: 3;
  column-fill: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="balance-columns">
  <p>内容会均匀分布在所有列中...</p>
</div>
<div class="auto-columns">
  <p>内容会按顺序填充，列高可能不同...</p>
</div>
```

## 使用场景

```css
/* 1. 平衡列高（默认） */
.balanced {
  column-count: 3;
  column-fill: balance;
}

/* 2. 按顺序填充 */
.sequential {
  column-count: 3;
  column-fill: auto;
  height: 300px; /* 固定高度时生效 */
}

/* 3. 报纸布局 */
.newspaper {
  column-count: 2;
  column-fill: balance;
  column-gap: 30px;
}

/* 4. 固定高度多列 */
.fixed-height {
  column-count: 3;
  column-fill: auto;
  height: 400px;
}
