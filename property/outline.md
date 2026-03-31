# outline

`outline` 属性定义元素边框外的轮廓线，是一种在边框之外绘制的装饰线，不占用布局空间。

## 语法

```css
outline: [ <'outline-color'> || <'outline-style'> || <'outline-width'> ];
```

### 值

| 值 | 说明 |
| --- | --- |
| `<outline-color>` | 轮廓颜色 |
| `auto` | 自动颜色 |
| `<color>` | 指定颜色 |
| `<outline-style>` | 轮廓样式 |
| `none` | 无轮廓 |
| `hidden` | 隐藏轮廓 |
| `dotted` | 点状 |
| `dashed` | 虚线 |
| `solid` | 实线 |
| `double` | 双线 |
| `groove` | 凹槽 |
| `ridge` | 脊线 |
| `inset` | 嵌入 |
| `outset` | 突出 |
| `<outline-width>` | 轮廓宽度 |
| `thin` | 细 |
| `medium` | 中等 |
| `thick` | 粗 |
| `<length>` | 指定长度 |

## 示例

### 基本用法

```css
.focused-element {
  outline: 2px solid #007bff;
}
```

### 不同样式

```css
.dotted-outline {
  outline: 3px dotted red;
}

.dashed-outline {
  outline: 2px dashed green;
}

.double-outline {
  outline: 4px double blue;
}
```

### 移除轮廓

```css
.no-outline {
  outline: none;
}
```

### 自动颜色

```css
.auto-color {
  outline: 2px solid auto;
}
```

### HTML 示例

```html
<button class="focused-element">蓝色轮廓按钮</button>
<button class="dotted-outline">点状轮廓按钮</button>
<button class="dashed-outline">虚线轮廓按钮</button>
<button class="no-outline">无轮廓按钮</button>
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

1. **不占空间**：轮廓不占用布局空间，不会影响元素尺寸
2. **绘制顺序**：轮廓绘制在边框之外
3. **圆角**：轮廓会跟随元素的圆角
4. **无障碍**：常用于焦点状态的视觉反馈
5. **与 border 区别**：border 占用空间，outline 不占用

## 相关属性

- [`outline-color`](outline-color.md) - 轮廓颜色
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border`](border.md) - 边框

## 规范链接

- [CSS Basic User Interface Module Level 3](https://www.w3.org/TR/css-ui-3/#outline)
