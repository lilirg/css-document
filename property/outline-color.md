# outline-color

`outline-color` 属性定义轮廓的颜色。

## 语法

```css
outline-color: <color> | invert
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `invert` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（作为颜色值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<color>` | 任何有效的 CSS 颜色值 |
| `invert` | 使用浏览器反色（默认） |

## 注意

- `invert` 值会尝试使用与背景相反的颜色
- 如果无法反色，则使用系统默认颜色
- 通常与 `outline-style` 配合使用

## 示例

```css
/* 蓝色轮廓 */
.element {
  outline-color: blue;
  outline-style: solid;
  outline-width: 2px;
}

/* 使用 RGBA 颜色 */
.element {
  outline-color: rgba(0, 102, 204, 0.8);
  outline-style: solid;
}
```

## 使用场景

```css
/* 焦点状态 */
button:focus {
  outline-color: #0066cc;
  outline-style: solid;
  outline-width: 2px;
}

/* 错误状态 */
input.invalid {
  outline-color: red;
  outline-style: solid;
  outline-width: 2px;
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
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`outline-offset`](outline-offset.md) - 轮廓偏移

## 规范

- [CSS UI Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-color)
