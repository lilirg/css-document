# gap

`gap` CSS 属性是一个简写属性，用于设置 `row-gap` 和 `column-gap`，定义网格或弹性布局中项目之间的间距。

## 语法

```css
/* 一个值 - 应用于行和列 */
gap: 20px;

/* 两个值 - 行间距 | 列间距 */
gap: 20px 30px;

/* 关键字值 */
gap: normal;
```

## 值

### 长度值

任何有效的 CSS 长度单位（`px`、`em`、`rem`、`%`、`vw`、`vh` 等）。

```css
gap: 10px;
gap: 2rem;
gap: 5%;
gap: 1vh;
```

### `normal`

使用默认的间距值。

```css
gap: normal;
```

## 简写规则

`gap` 的简写规则：

| 值数量 | 含义 |
|--------|------|
| 1 个值 | 应用于行和列 |
| 2 个值 | 第一个：行间距，第二个：列间距 |

### 示例

```css
/* 行和列都是 20px */
.gap-1 {
  gap: 20px;
  /* 等同于 */
  row-gap: 20px;
  column-gap: 20px;
}

/* 行间距 20px，列间距 30px */
.gap-2 {
  gap: 20px 30px;
  /* 等同于 */
  row-gap: 20px;
  column-gap: 30px;
}
```

## 示例

### Grid 布局

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* 不同的行和列间距 */
.grid-container-2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 30px;
  /* 行间距 20px，列间距 30px */
}
```

### Flexbox 布局

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

/* 垂直方向的 flex 容器 */
.flex-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
```

### 多列布局

```css
.multi-column {
  column-count: 3;
  column-gap: 20px;
  /* 注意：gap 在多列布局中只设置列间距 */
}
```

### 响应式间距

```css
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(10px, 2vw, 30px);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 57+ (Grid), 84+ (Flex) |
| Edge | 57+ (Grid), 84+ (Flex) |
| Firefox | 52+ (Grid), 63+ (Flex) |
| Safari | 10.1+ (Grid), 14+ (Flex) |
| Opera | 44+ (Grid), 70+ (Flex) |

## 注意事项

1. **Flexbox 支持**：`gap` 在 Flexbox 中的支持较晚（Chrome 84+、Firefox 63+、Safari 14+）。

2. **多列布局**：在多列布局中，`gap` 只设置列间距，等同于 `column-gap`。

3. **与 margin 的区别**：`gap` 只在项目之间创建间距，不会在容器边缘创建间距。

4. **百分比值**：在 Grid 布局中，百分比值相对于容器的内容区域计算。

5. **负值**：`gap` 不支持负值。

## 相关属性

- [`row-gap`](row-gap.md) - 行间距
- [`column-gap`](column-gap.md) - 列间距
- [`grid-gap`](grid-gap.md) - Grid 间距（旧）
- [`margin`](margin.md) - 外边距

## 规范

- [CSS Box Alignment Module Level 3](https://www.w3.org/TR/css-align-3/#gaps)