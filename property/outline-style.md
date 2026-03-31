# outline-style

`outline-style` 属性定义元素轮廓线的样式，轮廓线是在元素边框之外绘制的装饰线。

## 语法

```css
outline-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset;
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 无轮廓 |
| `hidden` | 隐藏轮廓（与 none 类似，但在冲突解决中有区别） |
| `dotted` | 点状轮廓 |
| `dashed` | 虚线轮廓 |
| `solid` | 实线轮廓 |
| `double` | 双线轮廓 |
| `groove` | 凹槽轮廓（3D 效果） |
| `ridge` | 脊线轮廓（3D 效果） |
| `inset` | 嵌入轮廓（3D 效果） |
| `outset` | 突出轮廓（3D 效果） |

## 示例

### 基本用法

```css
.dotted-outline {
  outline-style: dotted;
  outline-color: #007bff;
  outline-width: 2px;
}
```

### 不同样式

```css
.dashed-outline {
  outline-style: dashed;
  outline-color: red;
}

.solid-outline {
  outline-style: solid;
  outline-color: green;
}

.double-outline {
  outline-style: double;
  outline-color: blue;
}
```

### 3D 效果

```css
.groove-outline {
  outline-style: groove;
  outline-color: #333;
}

.ridge-outline {
  outline-style: ridge;
  outline-color: #333;
}

.inset-outline {
  outline-style: inset;
  outline-color: #333;
}

.outset-outline {
  outline-style: outset;
  outline-color: #333;
}
```

### 移除轮廓

```css
.no-outline {
  outline-style: none;
}
```

### HTML 示例

```html
<button class="dotted-outline">点状轮廓</button>
<button class="dashed-outline">虚线轮廓</button>
<button class="solid-outline">实线轮廓</button>
<button class="double-outline">双线轮廓</button>
<button class="groove-outline">凹槽轮廓</button>
<button class="no-outline">无轮廓</button>
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

1. **配合颜色**：需要与 `outline-color` 配合使用才能显示
2. **不占空间**：轮廓不占用布局空间
3. **焦点状态**：常用于焦点状态的视觉反馈
4. **3D 效果**：`groove`、`ridge`、`inset`、`outset` 依赖 `outline-color` 产生 3D 效果
5. **无障碍**：确保轮廓样式清晰可见

## 相关属性

- [`outline`](outline.md) - 轮廓简写
- [`outline-color`](outline-color.md) - 轮廓颜色
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`outline-offset`](outline-offset.md) - 轮廓偏移
- [`border-style`](border-style.md) - 边框样式

## 规范链接

- [CSS Basic User Interface Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-style)
