# outline-color

`outline-color` 属性定义元素轮廓线的颜色，轮廓线是在元素边框之外绘制的装饰线。

## 语法

```css
outline-color: auto | <color> | invert;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 使用默认颜色（默认） |
| `<color>` | 指定颜色值 |
| `invert` | 反转颜色（用于确保可见性） |

## 示例

### 基本用法

```css
.focused-element {
  outline-color: #007bff;
  outline-style: solid;
  outline-width: 2px;
}
```

### 使用颜色值

```css
.red-outline {
  outline-color: red;
  outline-style: solid;
}

.hex-color {
  outline-color: #ff6b6b;
  outline-style: solid;
}

.rgb-color {
  outline-color: rgb(0, 123, 255);
  outline-style: solid;
}
```

### 透明颜色

```css
.transparent-outline {
  outline-color: transparent;
  outline-style: solid;
}
```

### 使用简写

```css
.outline-color {
  outline: 2px solid blue;
}
```

### HTML 示例

```html
<button class="focused-element">蓝色轮廓</button>
<button class="red-outline">红色轮廓</button>
<button class="hex-color">十六进制颜色轮廓</button>
<button class="transparent-outline">透明轮廓</button>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |
| Opera | 支持 |
| iOS Safari | 支持 |
| Android Browser | 支持 |

## 注意事项

1. **配合样式**：需要与 `outline-style` 配合使用才能显示
2. **不占空间**：轮廓不占用布局空间
3. **焦点状态**：常用于焦点状态的视觉反馈
4. **无障碍**：确保轮廓颜色与背景有足够的对比度
5. **invert 值**：`invert` 用于自动反色以确保可见性

## 相关属性

- [`outline`](outline.md) - 轮廓简写
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border-color`](border-color.md) - 边框颜色

## 规范链接

- [CSS Basic User Interface Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-color)
