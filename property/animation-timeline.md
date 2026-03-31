# animation-timeline

`animation-timeline` 属性定义动画的时间线，允许将动画与滚动、视图或其他自定义时间线关联，实现基于滚动或视图变化的动画效果。

## 语法

```css
animation-timeline: auto | <timeline-name>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 使用默认的时间线（基于经过的时间） |
| `<timeline-name>` | 使用指定的时间线名称 |
| `scroll()` | 使用滚动时间线 |
| `view()` | 使用视图时间线 |

### 滚动时间线函数

```css
scroll(axis)
```

| 参数 | 说明 |
| --- | --- |
| `block` | 块方向滚动（默认） |
| `inline` | 行内方向滚动 |
| `x` | X 轴滚动 |
| `y` | Y 轴滚动 |

### 视图时间线函数

```css
view(axis)
```

| 参数 | 说明 |
| --- | --- |
| `block` | 块方向视图（默认） |
| `inline` | 行内方向视图 |
| `x` | X 轴视图 |
| `y` | Y 轴视图 |

## 示例

### 基于滚动的动画

```css
.fade-on-scroll {
  animation-name: fadeIn;
  animation-timeline: scroll();
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### 基于视图的动画

```css
.slide-in-view {
  animation-name: slideIn;
  animation-timeline: view();
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
```

### 指定滚动轴

```css
.horizontal-scroll {
  animation-name: progress;
  animation-timeline: scroll(x);
}
```

### 指定视图范围

```css
.view-range {
  animation-name: rotate;
  animation-timeline: view(block);
}
```

### HTML 示例

```html
<div class="fade-on-scroll">滚动时淡入</div>
<div class="slide-in-view">进入视图时滑入</div>
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
2. **与 animation-range 配合**：通常与 `animation-range` 属性配合使用
3. **性能考虑**：基于滚动的动画可能影响滚动性能
4. **渐进增强**：不支持的浏览器会回退到传统时间线
5. **滚动容器**：需要明确指定滚动容器

## 相关属性

- [`animation-range`](animation-range.md) - 动画范围
- [`animation-range-start`](animation-range-start.md) - 动画范围开始
- [`animation-range-end`](animation-range-end.md) - 动画范围结束
- [`scroll-timeline`](scroll-timeline.md) - 滚动时间线
- [`view-timeline`](view-timeline.md) - 视图时间线

## 规范链接

- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2/#animation-timeline)
- [Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/)