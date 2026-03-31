# border-inline-style

`border-inline-style` 属性是 CSS 逻辑属性，用于设置行内方向边框（在垂直书写模式下是左右边框，在水平书写模式下是上下边框）的样式。

## 语法

```css
border-inline-style: <line-style>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<line-style>` | 一个或两个边框样式值 |

### 边框样式值

| 值 | 说明 |
| --- | --- |
| `none` | 无边框 |
| `hidden` | 隐藏边框（用于表格边框合并） |
| `dotted` | 点状边框 |
| `dashed` | 虚线边框 |
| `solid` | 实线边框 |
| `double` | 双线边框 |
| `groove` | 凹槽边框 |
| `ridge` | 脊状边框 |
| `inset` | 内嵌边框 |
| `outset` | 外凸边框 |

## 示例

### 实线边框

```css
.solid-style {
  border-inline-style: solid;
  border-inline-color: #333;
}
```

### 虚线边框

```css
.dashed-style {
  border-inline-style: dashed;
  border-inline-color: #666;
}
```

### 双色不同样式

```css
.double-style {
  border-inline-style: solid dashed;
  border-inline-color: #333 #999;
}
```

### 凹槽边框

```css
.groove-style {
  border-inline-style: groove;
  border-inline-color: #333;
}
```

### HTML 示例

```html
<div class="solid-style">实线行内边框</div>
<div class="dashed-style">虚线行内边框</div>
<div class="double-style">双色行内边框</div>
<div class="groove-style">凹槽行内边框</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 87+ |
| Firefox | 41+ |
| Safari | 14.1+ |
| Edge | 87+ |
| Opera | 73+ |
| iOS Safari | 14.5+ |
| Android Browser | 87+ |

## 注意事项

1. **书写模式**：在水平书写模式下，对应 `border-left-style` 和 `border-right-style`
2. **垂直书写**：在垂直书写模式下，对应 `border-top-style` 和 `border-bottom-style`
3. **需要颜色**：必须同时设置 `border-inline-color` 才能看到边框
4. **宽度影响**：边框的宽度由 `border-inline-width` 控制
5. **国际化**：逻辑属性适合多语言网站，自动适应不同书写方向

## 相关属性

- [`border-inline`](border-inline.md) - 行内边框速记
- [`border-inline-start-style`](border-inline-start-style.md) - 行内起始边框样式
- [`border-inline-end-style`](border-inline-end-style.md) - 行内结束边框样式
- [`border-block-style`](border-block-style.md) - 块边框样式
- [`border-style`](border-style.md) - 边框样式速记

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#border-inline-style)