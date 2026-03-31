# border-block-color

`border-block-color` 属性是 CSS 逻辑属性，用于设置块方向边框（在垂直书写模式下是上下边框，在水平书写模式下是左右边框）的颜色。

## 语法

```css
border-block-color: <color>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<color>` | 一个或两个颜色值，分别对应块起始和块结束边框 |

### 颜色值数量

| 数量 | 说明 |
| --- | --- |
| 1 个 | 起始和结束边框使用相同颜色 |
| 2 个 | 第一个颜色用于起始边框，第二个颜色用于结束边框 |

## 示例

### 单色边框

```css
.single-color {
  border-block-color: #333;
  border-block-style: solid;
}
```

### 双色边框

```css
.double-color {
  border-block-color: #333 #999;
  border-block-style: solid;
}
```

### 使用当前颜色

```css
.current-color {
  border-block-color: currentColor;
  border-block-style: solid;
}
```

### 响应式颜色

```css
.responsive-color {
  border-block-color: #333;
}

@media (prefers-color-scheme: dark) {
  .responsive-color {
    border-block-color: #666;
  }
}
```

### HTML 示例

```html
<div class="single-color">单色块边框</div>
<div class="double-color">双色块边框</div>
<div class="current-color">当前颜色块边框</div>
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

1. **书写模式**：在水平书写模式（`writing-mode: horizontal-tb`）下，对应 `border-top-color` 和 `border-bottom-color`
2. **垂直书写**：在垂直书写模式（`writing-mode: vertical-rl` 或 `vertical-lr`）下，对应 `border-right-color` 和 `border-left-color`
3. **需要样式**：必须同时设置 `border-block-style` 才能看到边框
4. **国际化**：逻辑属性适合多语言网站，自动适应不同书写方向
5. **简写属性**：可以使用 `border-block` 简写属性同时设置颜色、样式和宽度

## 相关属性

- [`border-block`](border-block.md) - 块边框速记
- [`border-block-start-color`](border-block-start-color.md) - 块起始边框颜色
- [`border-block-end-color`](border-block-end-color.md) - 块结束边框颜色
- [`border-inline-color`](border-inline-color.md) - 行内边框颜色
- [`writing-mode`](writing-mode.md) - 书写模式

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#border-block-color)