# outline-offset

`outline-offset` 属性定义轮廓线与元素边框之间的额外间距，控制轮廓线向外偏移的距离。

## 语法

```css
outline-offset: <length>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<length>` | 指定偏移距离（必须为非负值） |

## 示例

### 基本用法

```css
.offset-outline {
  outline: 2px solid #007bff;
  outline-offset: 4px;
}
```

### 不同偏移

```css
.small-offset {
  outline: 2px solid red;
  outline-offset: 2px;
}

.medium-offset {
  outline: 2px solid green;
  outline-offset: 5px;
}

.large-offset {
  outline: 2px solid blue;
  outline-offset: 10px;
}
```

### 配合圆角

```css
.rounded-offset {
  outline: 3px solid purple;
  outline-offset: 5px;
  border-radius: 10px;
}
```

### 焦点状态

```css
button:focus {
  outline: 2px solid #007bff;
  outline-offset: 3px;
}
```

### HTML 示例

```html
<button class="offset-outline">偏移轮廓按钮</button>
<button class="small-offset">小偏移</button>
<button class="medium-offset">中等偏移</button>
<button class="large-offset">大偏移</button>
<button class="rounded-offset">圆角偏移</button>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 支持 |
| Firefox | 35+ |
| Safari | 7+ |
| Edge | 支持 |
| Opera | 支持 |
| iOS Safari | 7+ |
| Android Browser | 支持 |

## 注意事项

1. **非负值**：值必须为非负值，负值会被忽略
2. **不占空间**：轮廓不占用布局空间，但偏移会影响视觉范围
3. **圆角跟随**：轮廓会跟随元素的圆角和偏移
4. **焦点状态**：常用于增强焦点状态的可见性
5. **无障碍**：适当的偏移可以提高可访问性

## 相关属性

- [`outline`](outline.md) - 轮廓简写
- [`outline-color`](outline-color.md) - 轮廓颜色
- [`outline-style`](outline-style.md) - 轮廓样式
- [`outline-width`](outline-width.md) - 轮廓宽度
- [`border`](border.md) - 边框

## 规范链接

- [CSS Basic User Interface Module Level 3](https://www.w3.org/TR/css-ui-3/#outline-offset)
