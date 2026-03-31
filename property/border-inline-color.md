# border-inline-color

`border-inline-color` 属性是 CSS 逻辑属性，用于设置行内方向边框（在垂直书写模式下是左右边框，在水平书写模式下是上下边框）的颜色。

## 语法

```css
border-inline-color: <color>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<color>` | 一个或两个颜色值，分别对应行内起始和行内结束边框 |

### 颜色值数量

| 数量 | 说明 |
| --- | --- |
| 1 个 | 起始和结束边框使用相同颜色 |
| 2 个 | 第一个颜色用于起始边框，第二个颜色用于结束边框 |

## 示例

### 单色边框

```css
.single-color {
  border-inline-color: #333;
  border-inline-style: solid;
}
```

### 双色边框

```css
.double-color {
  border-inline-color: #333 #999;
  border-inline-style: solid;
}
```

### 使用当前颜色

```css
.current-color {
  border-inline-color: currentColor;
  border-inline-style: solid;
}
```

### 响应式颜色

```css
.responsive-color {
  border-inline-color: #333;
}

@media (prefers-color-scheme: dark) {
  .responsive-color {
    border-inline-color: #666;
  }
}
```

### HTML 示例

```html
<div class="single-color">单色行内边框</div>
<div class="double-color">双色行内边框</div>
<div class="current-color">当前颜色行内边框</div>
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

1. **书写模式**：在水平书写模式（`writing-mode: horizontal-tb`）下，对应 `border-left-color` 和 `border-right-color`
2. **垂直书写**：在垂直书写模式（`writing-mode: vertical-rl` 或 `vertical-lr`）下，对应 `border-top-color` 和 `border-bottom-color`
3. **需要样式**：必须同时设置 `border-inline-style` 才能看到边框
4. **国际化**：逻辑属性适合多语言网站，自动适应不同书写方向
5. **简写属性**：可以使用 `border-inline` 简写属性同时设置颜色、样式和宽度

## 相关属性

- [`border-inline`](border-inline.md) - 行内边框速记
- [`border-inline-start-color`](border-inline-start-color.md) - 行内起始边框颜色
- [`border-inline-end-color`](border-inline-end-color.md) - 行内结束边框颜色
- [`border-block-color`](border-block-color.md) - 块边框颜色
- [`writing-mode`](writing-mode.md) - 书写模式

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#border-inline-color)