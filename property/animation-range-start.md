# animation-range-start

`animation-range-start` 属性定义动画在时间线上的开始位置，指定动画何时开始执行。

## 语法

```css
animation-range-start: normal | <timeline-range-name> <length-percentage>?;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 默认开始位置（0%） |
| `<timeline-range-name>` | 时间线范围名称 |
| `entry` | 元素进入视口 |
| `entry-crossing` | 元素穿过视口 |
| `exit` | 元素离开视口 |
| `cover` | 元素覆盖视口 |
| `contain` | 元素包含在视口内 |
| `<length-percentage>` | 长度或百分比值 |

## 示例

### 基本用法

```css
.fade-element {
  animation-name: fadeIn;
  animation-timeline: view();
  animation-range-start: entry;
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

### 使用百分比

```css
.progress-element {
  animation-name: progress;
  animation-timeline: scroll();
  animation-range-start: 20%;
}
```

### 使用长度值

```css
.slide-element {
  animation-name: slideIn;
  animation-timeline: view();
  animation-range-start: entry 100px;
}
```

### 与 animation-range-end 配合

```css
.combined-animation {
  animation-name: rotate;
  animation-timeline: view();
  animation-range-start: entry;
  animation-range-end: exit;
}
```

### HTML 示例

```html
<div class="fade-element">进入视口时开始淡入</div>
<div class="progress-element">滚动 20% 后开始</div>
<div class="slide-element">进入视口 100px 后开始滑动</div>
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

1. **与 timeline 配合**：必须与 `animation-timeline` 配合使用
2. **默认值**：默认值为 `normal`，即从时间线开始处启动
3. **偏移量**：可以在范围名称后添加偏移量
4. **实验性功能**：浏览器支持有限
5. **性能考虑**：滚动驱动的动画可能影响性能

## 相关属性

- [`animation-range`](animation-range.md) - 动画范围
- [`animation-range-end`](animation-range-end.md) - 动画范围结束
- [`animation-timeline`](animation-timeline.md) - 动画时间线
- [`scroll-timeline`](scroll-timeline.md) - 滚动时间线
- [`view-timeline`](view-timeline.md) - 视图时间线

## 规范链接

- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2/#animation-range-start)
- [Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/)