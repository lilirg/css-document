# pointer-events

pointer-events 属性定义元素是否可以成为鼠标事件的目标。

## 语法

```css
pointer-events: auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `pointer-events: auto` |
| `none` | 无 | `pointer-events: none` |
| `visiblePainted` | 可见绘制 | `pointer-events: visiblePainted` |
| `visibleFill` | 可见填充 | `pointer-events: visibleFill` |
| `visibleStroke` | 可见描边 | `pointer-events: visibleStroke` |
| `visible` | 可见 | `pointer-events: visible` |
| `painted` | 绘制 | `pointer-events: painted` |
| `fill` | 填充 | `pointer-events: fill` |
| `stroke` | 描边 | `pointer-events: stroke` |
| `all` | 所有 | `pointer-events: all` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  pointer-events: auto;
}

/* 无 */
.none {
  pointer-events: none;
}

/* 可见绘制 */
.visible-painted {
  pointer-events: visiblePainted;
}

/* 可见填充 */
.visible-fill {
  pointer-events: visibleFill;
}

/* 可见描边 */
.visible-stroke {
  pointer-events: visibleStroke;
}

/* 可见 */
.visible {
  pointer-events: visible;
}

/* 绘制 */
.painted {
  pointer-events: painted;
}

/* 填充 */
.fill {
  pointer-events: fill;
}

/* 描边 */
.stroke {
  pointer-events: stroke;
}

/* 所有 */
.all {
  pointer-events: all;
}
```

### 高级用法

```css
/* 容器 */
.container {
  pointer-events: auto;
}

/* 静态 */
.static {
  pointer-events: auto;
}

/* 相对 */
.relative {
  pointer-events: auto;
}

/* 绝对 */
.absolute {
  pointer-events: auto;
}

/* 固定 */
.fixed {
  pointer-events: auto;
}

/* 粘性 */
.sticky {
  pointer-events: auto;
}

/* 响应式布局 */
.responsive {
  pointer-events: auto;
}

/* 卡片布局 */
.card {
  pointer-events: auto;
}

/* 表单布局 */
.form {
  pointer-events: auto;
}

/* 图片画廊 */
.gallery {
  pointer-events: auto;
}

/* 混合单位 */
.mixed-units {
  pointer-events: auto;
}

/* 带命名的项目 */
.named-items {
  pointer-events: auto;
}

/* 悬停效果 */
.card {
  transition: pointer-events 0.3s ease-in-out;
}

.card:hover {
  pointer-events: none;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `pointer-events` 可以用于任何元素
- `pointer-events` 定义元素是否可以成为鼠标事件的目标
- `auto` 是默认值，表示自动

## 相关属性

- [`visibility`](./visibility)
- [`opacity`](./opacity)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)
- [CSS-Tricks: pointer-events](https://css-tricks.com/almanac/properties/p/pointer-events/)
- [W3C CSS Pointer Events](https://www.w3.org/TR/css-pointer-events-3/)