# animation-range

`animation-range` 属性定义动画在时间线上的范围，指定动画何时开始和结束，通常与 `animation-timeline` 配合使用。

## 语法

```css
animation-range: <start> <end>?;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 默认范围（0% 到 100%） |
| `entry` | 元素进入视口 |
| `entry-crossing` | 元素穿过视口 |
| `exit` | 元素离开视口 |
| `cover` | 元素覆盖视口 |
| `contain` | 元素包含在视口内 |
| `<percentage>` | 指定百分比值 |
| `<length>` | 指定长度值 |

### 简写形式

```css
animation-range: <start-name> <end-name>;
```

## 示例

### 基本用法

```css
.fade-element {
  animation-name: fadeIn;
  animation-timeline: view();
  animation-range: entry exit;
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

### 指定百分比范围

```css
.progress-bar {
  animation-name: progress;
  animation-timeline: scroll();
  animation-range: 0% 100%;
}
```

### 使用命名范围

```css
.slide-element {
  animation-name: slideIn;
  animation-timeline: view();
  animation-range: entry 20% exit 50%;
}
```

### 覆盖范围

```css
.cover-animation {
  animation-name: scaleUp;
  animation-timeline: view();
  animation-range: cover;
}

@keyframes scaleUp {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
```

### 包含范围

```css
.contain-animation {
  animation-name: rotate;
  animation-timeline: view();
  animation-range: contain;
}
```

### HTML 示例

```html
<div class="fade-element">进入视口时淡入</div>
<div class="progress-bar">滚动时进度条</div>
<div class="slide-element">滑动进入</div>
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
2. **范围名称**：预定义范围名称基于元素与视口的关系
3. **百分比值**：可以使用百分比精确控制动画范围
4. **长度值**：可以使用长度值指定偏移量
5. **实验性功能**：浏览器支持有限

## 相关属性

- [`animation-timeline`](animation-timeline.md) - 动画时间线
- [`animation-range-start`](animation-range-start.md) - 动画范围开始
- [`animation-range-end`](animation-range-end.md) - 动画范围结束
- [`scroll-timeline`](scroll-timeline.md) - 滚动时间线
- [`view-timeline`](view-timeline.md) - 视图时间线

## 规范链接

- [CSS Animations Level 2](https://www.w3.org/TR/css-animations-2/#animation-range)
- [Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/)