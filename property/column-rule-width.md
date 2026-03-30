# column-rule-width

该属性设置多列布局中列分隔线的宽度。

## 语法

```css
column-rule-width: thin | medium | thick | <length>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `medium` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `thin`
细分隔线。

### `medium`
默认值。中等宽度分隔线。

### `thick`
粗分隔线。

### `<length>`
指定分隔线的固定宽度。

## 注意

- 需要配合 `column-rule-style` 使用才能显示
- 分隔线宽度不影响列宽
- 支持动画效果

## 示例

```css
/* CSS 示例 */
.columns {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: 2px;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>列之间有 2px 宽的分隔线...</p>
</div>
```

## 使用场景

```css
/* 1. 细分隔线 */
.thin-rule {
  column-count: 2;
  column-rule-style: solid;
  column-rule-width: thin;
}

/* 2. 粗分隔线 */
.thick-rule {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: thick;
}

/* 3. 固定宽度分隔线 */
.fixed-rule {
  column-count: 2;
  column-rule-style: solid;
  column-rule-width: 3px;
}

/* 4. 中等宽度分隔线 */
.medium-rule {
  column-count: 3;
  column-rule-style: solid;
  column-rule-width: medium;
}
