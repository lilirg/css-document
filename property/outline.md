# outline

`outline` 属性是轮廓的速记属性，用于在元素边框外绘制线条。

## 语法

```css
outline: [ <'outline-color'> || <'outline-style'> || <'outline-width'> || <'outline-offset'> ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 参见各个独立属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<outline-color>` | 轮廓颜色：颜色值或 `invert` |
| `<outline-style>` | 轮廓样式：`none`、`hidden`、`dotted`、`dashed`、`solid`、`double`、`groove`、`ridge`、`inset`、`outset` |
| `<outline-width>` | 轮廓宽度：`thin`、`medium`、`thick` 或长度值 |
| `<outline-offset>` | 轮廓偏移距离 |

## 注意

- 轮廓绘制在边框外，不占用空间
- 轮廓可以是非矩形（跟随元素形状）
- 常用于焦点状态指示
- 与 `border` 不同，轮廓不影响布局

## 示例

```css
/* 蓝色实线轮廓 */
.element {
  outline: 2px solid blue;
}

/* 焦点状态轮廓 */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}
```

## 使用场景

```css
/* 自定义焦点样式 */
a:focus,
button:focus,
input:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* 移除默认轮廓（不推荐） */
button {
  outline: none;
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

- [`outline-color`](outline-color.md) - 轮廓颜色
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border`](border.md) - 边框

## 规范

- [CSS UI Module Level 3](https://www.w3.org/TR/css-ui-3/#outline)
