# outline-style

outline-style 属性定义元素的轮廓样式。

## 语法

```css
outline-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无轮廓 | `outline-style: none` |
| `hidden` | 隐藏轮廓 | `outline-style: hidden` |
| `dotted` | 点线 | `outline-style: dotted` |
| `dashed` | 虚线 | `outline-style: dashed` |
| `solid` | 实线 | `outline-style: solid` |
| `double` | 双线 | `outline-style: double` |
| `groove` | 凹槽 | `outline-style: groove` |
| `ridge` | 凸起 | `outline-style: ridge` |
| `inset` | 内嵌 | `outline-style: inset` |
| `outset` | 外嵌 | `outline-style: outset` |

## 示例

### 基础用法

```css
/* 无轮廓 */
.none {
  outline-style: none;
}

/* 点线 */
.dotted {
  outline-style: dotted;
}

/* 虚线 */
.dashed {
  outline-style: dashed;
}

/* 实线 */
.solid {
  outline-style: solid;
}

/* 双线 */
.double {
  outline-style: double;
}

/* 凹槽 */
.groove {
  outline-style: groove;
}

/* 凸起 */
.ridge {
  outline-style: ridge;
}

/* 内嵌 */
.inset {
  outline-style: inset;
}

/* 外嵌 */
.outset {
  outline-style: outset;
}
```

### 高级用法

```css
/* 容器 */
.container {
  outline-style: solid;
}

/* 静态 */
.static {
  outline-style: solid;
}

/* 相对 */
.relative {
  outline-style: solid;
}

/* 绝对 */
.absolute {
  outline-style: solid;
}

/* 固定 */
.fixed {
  outline-style: solid;
}

/* 粘性 */
.sticky {
  outline-style: solid;
}

/* 响应式布局 */
.responsive {
  outline-style: solid;
}

/* 卡片布局 */
.card {
  outline-style: solid;
}

/* 表单布局 */
.form {
  outline-style: solid;
}

/* 图片画廊 */
.gallery {
  outline-style: solid;
}

/* 混合单位 */
.mixed-units {
  outline-style: solid;
}

/* 带命名的项目 */
.named-items {
  outline-style: solid;
}

/* 悬停效果 */
.card {
  transition: outline-style 0.3s ease-in-out;
}

.card:hover {
  outline-style: dashed;
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

- `outline-style` 可以用于任何元素
- `outline-style` 定义元素的轮廓样式
- `none` 是默认值，表示无轮廓

## 相关属性

- [`outline`](./outline)
- [`outline-width`](./outline-width)
- [`outline-color`](./outline-color)

## 相关资源

- [MDN Web Docs: outline-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-style)
- [CSS-Tricks: outline-style](https://css-tricks.com/almanac/properties/o/outline-style/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)