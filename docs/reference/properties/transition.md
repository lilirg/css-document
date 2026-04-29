# transition

transition 属性定义元素的过渡效果。

## 语法

```css
transition: <transition-property> <transition-duration> <transition-timing-function> <transition-delay>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<transition-property>` | 过渡属性 | `transition: opacity` |
| `<transition-duration>` | 过渡持续时间 | `transition: 0.3s` |
| `<transition-timing-function>` | 过渡时间函数 | `transition: ease-in-out` |
| `<transition-delay>` | 过渡延迟 | `transition: 0.1s` |

## 示例

### 基础用法

```css
/* 过渡属性 */
.opacity {
  transition: opacity;
}

/* 过渡持续时间 */
.duration {
  transition: opacity 0.3s;
}

/* 过渡时间函数 */
.timing {
  transition: opacity 0.3s ease-in-out;
}

/* 过渡延迟 */
.delay {
  transition: opacity 0.3s ease-in-out 0.1s;
}
```

### 高级用法

```css
/* 容器 */
.container {
  transition: none;
}

/* 静态 */
.static {
  transition: none;
}

/* 相对 */
.relative {
  transition: none;
}

/* 绝对 */
.absolute {
  transition: none;
}

/* 固定 */
.fixed {
  transition: none;
}

/* 粘性 */
.sticky {
  transition: none;
}

/* 响应式布局 */
.responsive {
  transition: none;
}

/* 卡片布局 */
.card {
  transition: none;
}

/* 表单布局 */
.form {
  transition: none;
}

/* 图片画廊 */
.gallery {
  transition: none;
}

/* 混合单位 */
.mixed-units {
  transition: none;
}

/* 带命名的项目 */
.named-items {
  transition: none;
}

/* 悬停效果 */
.card {
  transition: opacity 0.3s ease-in-out;
}

.card:hover {
  opacity: 0.5;
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

- `transition` 可以用于任何元素
- `transition` 定义元素的过渡效果
- `none` 是默认值，表示无

## 相关属性

- [`transition-property`](./transition-property)
- [`transition-duration`](./transition-duration)
- [`transition-timing-function`](./transition-timing-function)
- [`transition-delay`](./transition-delay)

## 相关资源

- [MDN Web Docs: transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
- [CSS-Tricks: transition](https://css-tricks.com/almanac/properties/t/transition/)
- [W3C CSS Transitions](https://www.w3.org/TR/css-transitions-1/)