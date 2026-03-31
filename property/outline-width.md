# outline-width

`outline-width` 属性定义轮廓的宽度。

## 语法

```css
outline-width: <line-width>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `medium` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（作为长度值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `thin` | 细轮廓 |
| `medium` | 中等轮廓（默认） |
| `thick` | 粗轮廓 |
| `<length>` | 具体长度值 |

## 注意

- 必须设置 `outline-style` 才能显示轮廓
- 轮廓不占用空间，不会影响布局
- 轮廓宽度与 `border-width` 类似

## 示例

```css
/* 2px 宽度的轮廓 */
.element {
  outline-width: 2px;
  outline-style: solid;
  outline-color: blue;
}

/* 使用关键字 */
.element {
  outline-width: thick;
  outline-style: solid;
}
```

## 使用场景

```css
/* 焦点状态 */
button:focus {
  outline-width: 2px;
  outline-style: solid;
  outline-color: #0066cc;
}

/* 错误状态 */
input.invalid {
  outline-width: 3px;
  outline-style: solid;
  outline-color: red;
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
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border-width`](border-width.md) - 边框宽度

## 规范

- [CSS UI Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-width)
