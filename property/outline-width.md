# outline-width

`outline-width` 属性定义元素轮廓线的宽度，轮廓线是在元素边框之外绘制的装饰线。

## 语法

```css
outline-width: thin | medium | thick | <length>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `thin` | 细轮廓 |
| `medium` | 中等宽度（默认） |
| `thick` | 粗轮廓 |
| `<length>` | 指定具体长度值 |

## 示例

### 基本用法

```css
.thin-outline {
  outline-width: thin;
  outline-style: solid;
  outline-color: #007bff;
}
```

### 不同宽度

```css
.medium-outline {
  outline-width: medium;
  outline-style: solid;
  outline-color: red;
}

.thick-outline {
  outline-width: thick;
  outline-style: solid;
  outline-color: green;
}
```

### 指定长度

```css
.specific-width {
  outline-width: 3px;
  outline-style: solid;
  outline-color: blue;
}

.em-width {
  outline-width: 0.5em;
  outline-style: dashed;
  outline-color: purple;
}

.rem-width {
  outline-width: 2rem;
  outline-style: dotted;
  outline-color: orange;
}
```

### 配合简写

```css
.custom-outline {
  outline: 4px solid #ff6b6b;
}
```

### HTML 示例

```html
<button class="thin-outline">细轮廓</button>
<button class="medium-outline">中等轮廓</button>
<button class="thick-outline">粗轮廓</button>
<button class="specific-width">3px 轮廓</button>
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
4. **相对单位**：推荐使用相对单位（em、rem）以保持响应式
5. **无障碍**：确保轮廓宽度足够清晰可见

## 相关属性

- [`outline`](outline.md) - 轮廓简写
- [`outline-color`](outline-color.md) - 轮廓颜色
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border-width`](border-width.md) - 边框宽度

## 规范链接

- [CSS Basic User Interface Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-width)
