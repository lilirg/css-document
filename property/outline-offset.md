# outline-offset

`outline-offset` 属性定义轮廓与元素边框之间的间距。

## 语法

```css
outline-offset: <length>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（作为长度值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 轮廓偏移距离，必须为非负值 |

## 注意

- 轮廓绘制在边框外，偏移距离从边框外边缘开始计算
- 负值不被允许
- 轮廓不占用空间，不会影响布局

## 示例

```css
/* 轮廓距离边框 4px */
.element {
  outline: 2px solid blue;
  outline-offset: 4px;
}
```

## 使用场景

```css
/* 焦点状态，轮廓与元素有一定间距 */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 4px;
}

/* 链接悬停效果 */
a:hover {
  outline: 1px dashed #666;
  outline-offset: 2px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |

## 相关属性

- [`outline`](outline.md) - 轮廓速记
- [`outline-color`](outline-color.md) - 轮廓颜色
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-width`](outline-width.md) - 轮廓宽度

## 规范

- [CSS UI Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-offset)
