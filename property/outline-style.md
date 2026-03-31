# outline-style

`outline-style` 属性定义轮廓的样式。

## 语法

```css
outline-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 无轮廓 |
| `hidden` | 隐藏轮廓（与 none 类似，但在层叠中有区别） |
| `dotted` | 点状轮廓 |
| `dashed` | 虚线轮廓 |
| `solid` | 实线轮廓 |
| `double` | 双线轮廓 |
| `groove` | 凹槽效果 |
| `ridge` | 脊状效果 |
| `inset` | 内嵌效果 |
| `outset` | 外凸效果 |

## 注意

- 必须设置 `outline-width` 才能显示轮廓
- 轮廓样式与 `border-style` 类似
- 常用于焦点状态指示

## 示例

```css
/* 实线轮廓 */
.element {
  outline-style: solid;
  outline-width: 2px;
  outline-color: blue;
}

/* 虚线轮廓 */
.element {
  outline-style: dashed;
  outline-width: 2px;
}
```

## 使用场景

```css
/* 焦点状态 */
button:focus {
  outline-style: solid;
  outline-width: 2px;
  outline-color: #0066cc;
}

/* 错误状态 */
input.invalid {
  outline-style: solid;
  outline-width: 2px;
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
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border-style`](border-style.md) - 边框样式

## 规范

- [CSS UI Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-style)
