# scroll-timeline

`scroll-timeline` 属性定义滚动时间线，用于创建基于滚动位置的动画。

## 语法

```css
scroll-timeline: none | <scroll-timeline-name> || <scroll-timeline-axis>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 不创建滚动时间线 |
| `<scroll-timeline-name>` | 滚动时间线的名称 |
| `<scroll-timeline-axis>` | 指定滚动轴，可选值：`block`、`inline`、`vertical`、`horizontal` |

## 注意

- `scroll-timeline` 是 CSS 滚动时间线规范的一部分
- 用于创建滚动驱动动画（Scroll-driven Animations）
- 需要与 `animation-timeline` 属性配合使用

## 示例

```css
/* 创建垂直滚动时间线 */
.scroller {
  scroll-timeline: --my-timeline vertical;
}

/* 使用滚动时间线驱动动画 */
.animated {
  animation: fade-in 1s;
  animation-timeline: --my-timeline;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## 使用场景

```css
/* 长页面滚动时元素渐入效果 */
.section {
  scroll-timeline: --section-timeline block;
  animation: slide-in 0.5s;
  animation-timeline: --section-timeline;
}

@keyframes slide-in {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 115+ |
| Edge | 115+ |
| Firefox | 实验性支持 |
| Safari | 不支持 |

## 相关属性

- [`animation-timeline`](animation-timeline.md) - 动画时间线
- [`view-timeline`](view-timeline.md) - 视图时间线

## 规范

- [CSS Scroll-driven Animations](https://drafts.csswg.org/scroll-animations/)