# vertical-align

该属性设置行内元素或表格单元格元素的垂直对齐方式。

## 语法

```css
vertical-align: baseline | sub | super | top | text-top | middle | bottom | text-bottom | <length> | <percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `baseline` |
| 适用 HTML 元素 | 行内元素和表格单元格 |
| 动画 | 是 |

## 值

### `baseline`
默认值，元素基线与父元素基线对齐。

### `sub`
元素下标对齐。

### `super`
元素上标对齐。

### `top`
元素顶部与行最高项对齐。

### `text-top`
元素顶部与父元素字体顶部对齐。

### `middle`
元素中部与父元素基线加半个 x 高对齐。

### `bottom`
元素底部与行最低项对齐。

### `text-bottom`
元素底部与父元素字体底部对齐。

### `<length>`
固定偏移值。

### `<percentage>`
相对于行高的百分比。

## 注意

- 仅对行内元素或表格单元格有效
- 对块级元素无效
- 常用于图片与文字对齐

## 示例

```css
/* CSS 示例 */
.middle-align {
  vertical-align: middle;
}

.superscript {
  vertical-align: super;
}
```

```html
<!-- HTML 示例 -->
<span>文字 <sup>上标</sup> 文字</span>
<img class="middle-align" src="icon.png" alt="图标">
```

## 使用场景

```css
/* 1. 图片与文字居中 */
.icon-text {
  vertical-align: middle;
}

/* 2. 上标效果 */
.superscript {
  vertical-align: super;
  font-size: smaller;
}

/* 3. 下标效果 */
.subscript {
  vertical-align: sub;
  font-size: smaller;
}

/* 4. 表格单元格居中 */
.table-cell {
  vertical-align: middle;
}

/* 5. 按钮图标对齐 */
.button-icon {
  vertical-align: middle;
}
