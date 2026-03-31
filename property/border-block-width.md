# border-block-width

`border-block-width` 属性是 CSS 逻辑属性，用于设置块方向边框（在垂直书写模式下是上下边框，在水平书写模式下是左右边框）的宽度。

## 语法

```css
border-block-width: <line-width>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<line-width>` | 一个或两个边框宽度值 |

### 宽度值类型

| 类型 | 示例 | 说明 |
| --- | --- | --- |
| 关键字 | `thin`, `medium`, `thick` | 预定义宽度 |
| 长度 | `1px`, `2pt`, `0.5em` | 具体长度值 |

### 关键字宽度

| 关键字 | 近似像素值 |
| --- | --- |
| `thin` | 约 1px |
| `medium` | 约 3px |
| `thick` | 约 5px |

## 示例

### 单色宽度

```css
.single-width {
  border-block-width: 2px;
  border-block-style: solid;
  border-block-color: #333;
}
```

### 双色不同宽度

```css
.double-width {
  border-block-width: 2px 4px;
  border-block-style: solid;
  border-block-color: #333 #999;
}
```

### 使用关键字

```css
.keyword-width {
  border-block-width: thick;
  border-block-style: solid;
  border-block-color: #333;
}
```

### 使用 em 单位

```css
.em-width {
  border-block-width: 0.25em;
  border-block-style: solid;
  border-block-color: #333;
}
```

### HTML 示例

```html
<div class="single-width">单宽块边框</div>
<div class="double-width">双宽块边框</div>
<div class="keyword-width">关键字块边框</div>
<div class="em-width">EM 单位块边框</div>
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

1. **书写模式**：在水平书写模式下，对应 `border-top-width` 和 `border-bottom-width`
2. **垂直书写**：在垂直书写模式下，对应 `border-right-width` 和 `border-left-width`
3. **需要样式**：必须同时设置 `border-block-style` 才能看到边框
4. **需要颜色**：必须同时设置 `border-block-color` 才能看到边框
5. **相对单位**：使用 `em` 等相对单位可以使边框随字体大小变化

## 相关属性

- [`border-block`](border-block.md) - 块边框速记
- [`border-block-start-width`](border-block-start-width.md) - 块起始边框宽度
- [`border-block-end-width`](border-block-end-width.md) - 块结束边框宽度
- [`border-inline-width`](border-inline-width.md) - 行内边框宽度
- [`border-width`](border-width.md) - 边框宽度速记

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#border-block-width)