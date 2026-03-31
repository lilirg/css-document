# animation-range-end

`animation-range-end` 属性定义动画在时间线上的结束位置，指定动画何时结束执行。

## 语法

```css
animation-range-end: normal | <timeline-range-name> <length-percentage>?;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 默认结束位置（100%） |
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
  animation-name: fadeOut;
  animation-timeline: view();
  animation-range-end: exit;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### 使用百分比

```css
.progress-element {
  animation-name: progress;
  animation-timeline: scroll();
  animation-range-end: 80%;
}
```

### 使用长度值

```css
.slide-element {
  animation-name: slideOut;
  animation-timeline: view();
  animation-range-end: exit 200px;
}
```

### 与 animation-range-start 配合

```css
.combined-animation {
  animation-name: rotate;
  animation-timeline: view();
  animation-range-start: entry;
  animation-range-end: exit;
}
```

### 自定义范围

```css
.custom-range {
  animation-name: scale;
  animation-timeline: scroll();
  animation-range-start: entry 10%;
  animation-range-end: exit 10%;
}

@keyframes scale {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
```

### HTML 示例

```html
<div class="fade-element">离开视口时淡出</div>
<div class="progress-element">滚动到 80% 结束</div>
<div class="slide-element">离开视口 200px 后结束滑动</div>
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
2. **默认值**：默认值为 `normal`，即到时间线结束处停止
3. **偏移量**：可以在范围名称后添加偏移量
4. **实验性功能**：浏览器支持有限
5. **性能考虑**：滚动驱动的动画可能影响性能

## 相关属性

- [`animation-range`](animation-range.md) - 动画范围
- [`animation-range-start`](animation-range-start.md) - 动画范围开始
- [`animation-timeline`](animation-timeline.md) - 动画时间线
- [`scroll-timeline`](scroll-timeline.md) - 滚动时间线
- [`view-timeline`](view-timeline.md) - 视图时间线

## 规范链接

- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2/#animation-range-end)
- [Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/)