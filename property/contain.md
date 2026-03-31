# contain

`contain` CSS 属性用于指示元素及其内容相对于元素的其余部分独立渲染，允许浏览器进行优化。

## 语法

```css
/* 关键字值 */
contain: none;
contain: strict;
contain: content;

/* 单值语法 */
contain: size;
contain: layout;
contain: style;
contain: paint;

/* 组合值 */
contain: size layout;
contain: size layout paint;
contain: size layout style paint;

/* 全局值 */
contain: inherit;
contain: initial;
contain: unset;
```

## 值

### `none`

元素不产生任何包含效果。这是默认值。

### `strict`

元素的包含效果是 `size`、`layout`、`style` 和 `paint` 的完全组合。

```css
contain: strict;
/* 等同于 */
contain: size layout style paint;
```

### `content`

元素的包含效果是 `layout` 和 `paint` 的组合。

```css
contain: content;
/* 等同于 */
contain: layout paint;
```

### `size`

指示元素的大小与其内部内容完全无关。

```css
contain: size;
```

**注意**：如果设置了 `size`，则必须明确设置元素的大小（例如通过 `width` 和 `height`），否则元素将坍缩为 0。

### `layout`

指示元素及其内部内容的渲染与 DOM 树其余部分是独立的。外部元素的变化不会影响元素内部，元素内部的变化也不会影响外部元素。

```css
contain: layout;
```

**效果**：
- 盒模型计算独立
- 滚动条独立
- 表格布局独立
- 基线计算独立

### `style`

指示元素的样式计算（包括伪元素）独立于 DOM 树其余部分。

```css
contain: style;
```

**效果**：
- 计数器独立
- 需要重新计算样式时，只影响包含元素及其后代

### `paint`

指示元素及其后代不会在包含元素的边界框之外绘制。

```css
contain: paint;
```

**效果**：
- 溢出被裁剪
- 元素被视为一个独立的绘制层
- 有助于性能优化

## 示例

### 基本示例

```css
/* 独立渲染的卡片组件 */
.card {
  contain: content;
  padding: 16px;
  border: 1px solid #ccc;
}

/* 独立的列表项 */
.list-item {
  contain: layout paint;
  padding: 8px;
}

/* 完全隔离的组件 */
.widget {
  contain: strict;
}
```

### 性能优化示例

```css
/* 大型列表中的每个项目独立渲染 */
.list-item {
  contain: layout paint;
  /* 当某个项目变化时，不会影响其他项目 */
}

/* 独立的图表组件 */
.chart {
  contain: size layout paint;
  width: 300px;
  height: 200px;
}
```

### 与 overflow 的配合

```css
/* contain: paint 会自动裁剪溢出 */
.contained {
  contain: paint;
  /* 溢出内容不会绘制到边界外 */
}

/* 如果需要滚动，需要显式设置 overflow */
.scrollable {
  contain: paint;
  overflow: auto;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 55+ |
| Edge | 79+ |
| Firefox | 47+ |
| Safari | 10+ |
| Opera | 42+ |

## 注意事项

1. **性能优化**：`contain` 主要用于性能优化，浏览器可以利用包含信息来优化渲染和布局。

2. **谨慎使用**：不正确的使用可能导致布局问题，特别是 `size` 值需要元素有明确的大小。

3. **组合使用**：可以组合多个值以获得更精确的包含效果。

4. **与 overflow 的关系**：`contain: paint` 会裁剪溢出，如果需要滚动，需要显式设置 `overflow`。

5. **调试**：在开发者工具中，包含元素通常会显示特殊的边框或标记。

## 相关属性

- [`overflow`](overflow.md) - 溢出处理
- [`clip-path`](clip-path.md) - 裁剪路径
- [`will-change`](will-change.md) - 即将变化（性能提示）

## 规范

- [CSS Containment Module Level 1](https://www.w3.org/TR/css-contain-1/)
- [CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/)