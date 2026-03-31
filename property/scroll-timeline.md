# scroll-timeline

`scroll-timeline` 属性定义一个滚动时间线，将动画与元素的滚动进度关联，实现基于滚动位置的动画效果。

## 语法

```css
scroll-timeline: none | <scroll-timeline-name> <scroll-direction>? <scroll-source>?;
```

### 简写语法

```css
scroll-timeline: <scroll-timeline-name> || <scroll-direction> || <scroll-source>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 无滚动时间线 |
| `<scroll-timeline-name>` | 时间线名称 |
| `auto` | 自动命名 |
| `<scroll-direction>` | 滚动方向 |
| `block` | 块方向（默认） |
| `inline` | 行内方向 |
| `x` | X 轴方向 |
| `y` | Y 轴方向 |
| `<scroll-source>` | 滚动源 |

## 示例

### 基本用法

```css
.scroller {
  scroll-timeline: my-timeline;
  overflow-y: scroll;
  height: 300px;
}

.animated {
  animation-name: progress;
  animation-timeline: scroll(my-timeline);
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
```

### 指定滚动方向

```css
.horizontal-scroller {
  scroll-timeline: x-timeline x;
  overflow-x: scroll;
  width: 500px;
}
```

### 使用 auto 命名

```css
.auto-timeline {
  scroll-timeline: auto;
  overflow-y: scroll;
}

.child {
  animation-name: fadeIn;
  animation-timeline: scroll();
}
```

### 多方向滚动

```css
.multi-axis {
  scroll-timeline:
    x-timeline x,
    y-timeline y;
  overflow: scroll;
}
```

### HTML 示例

```html
<div class="scroller">
  <div class="animated">进度条</div>
  <div style="height: 1000px;">滚动内容...</div>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 115+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 115+ |
| Opera | 101+ |
| iOS Safari | 不支持 |
| Android Browser | 115+ |

## 注意事项

1. **实验性功能**：此属性仍处于实验阶段，浏览器支持有限
2. **滚动容器**：元素必须具有滚动能力（overflow 不为 visible）
3. **与 timeline 配合**：通常与 `animation-timeline` 配合使用
4. **性能考虑**：滚动驱动的动画可能影响滚动性能
5. **渐进增强**：不支持的浏览器会忽略此属性

## 相关属性

- [`animation-timeline`](animation-timeline.md) - 动画时间线
- [`animation-range`](animation-range.md) - 动画范围
- [`animation-range-start`](animation-range-start.md) - 动画范围开始
- [`animation-range-end`](animation-range-end.md) - 动画范围结束
- [`view-timeline`](view-timeline.md) - 视图时间线

## 规范链接

- [Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/#scroll-timeline)
- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2/)