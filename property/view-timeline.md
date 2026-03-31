# view-timeline

`view-timeline` 属性定义一个视图时间线，将动画与元素在视口中的可见进度关联，实现基于元素进入/离开视口的动画效果。

## 语法

```css
view-timeline: none | <view-timeline-name> <view-axis>?;
```

### 简写语法

```css
view-timeline: <view-timeline-name> || <view-axis>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 无视图时间线 |
| `<view-timeline-name>` | 时间线名称 |
| `auto` | 自动命名 |
| `<view-axis>` | 视图轴方向 |
| `block` | 块方向（默认） |
| `inline` | 行内方向 |
| `x` | X 轴方向 |
| `y` | Y 轴方向 |

## 示例

### 基本用法

```css
.fade-on-view {
  animation-name: fadeIn;
  animation-timeline: view();
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

### 指定时间线名称

```css
.named-timeline {
  view-timeline: my-view-timeline;
}

.animated {
  animation-name: slideIn;
  animation-timeline: view(my-view-timeline);
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

### 指定视图轴

```css
.horizontal-view {
  view-timeline: x-axis x;
}

.vertical-view {
  view-timeline: y-axis y;
}
```

### 配合 animation-range 使用

```css
.range-animation {
  animation-name: rotate;
  animation-timeline: view();
  animation-range: entry 10% exit 10%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### 进度条效果

```css
.progress-view {
  animation-name: progress;
  animation-timeline: view();
  animation-range: entry exit;
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

### HTML 示例

```html
<div style="height: 200vh; overflow-y: scroll;">
  <div class="fade-on-view">进入视口时淡入</div>
  <div class="named-timeline">使用命名时间线</div>
  <div class="range-animation">范围动画</div>
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
2. **视口检测**：基于元素在视口中的可见性
3. **与 timeline 配合**：通常与 `animation-timeline` 配合使用
4. **性能考虑**：视图检测可能影响滚动性能
5. **渐进增强**：不支持的浏览器会忽略此属性
6. **范围控制**：配合 `animation-range` 可精确控制动画范围

## 相关属性

- [`animation-timeline`](animation-timeline.md) - 动画时间线
- [`animation-range`](animation-range.md) - 动画范围
- [`animation-range-start`](animation-range-start.md) - 动画范围开始
- [`animation-range-end`](animation-range-end.md) - 动画范围结束
- [`scroll-timeline`](scroll-timeline.md) - 滚动时间线

## 规范链接

- [Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/#view-timeline)
- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2/)