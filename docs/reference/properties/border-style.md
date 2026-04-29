# border-style

border-style 属性定义元素的边框样式。

## 语法

```css
border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无 | `border-style: none` |
| `hidden` | 隐藏 | `border-style: hidden` |
| `dotted` | 点线 | `border-style: dotted` |
| `dashed` | 虚线 | `border-style: dashed` |
| `solid` | 实线 | `border-style: solid` |
| `double` | 双线 | `border-style: double` |
| `groove` | 槽线 | `border-style: groove` |
| `ridge` | 脊线 | `border-style: ridge` |
| `inset` | 内嵌 | `border-style: inset` |
| `outset` | 外嵌 | `border-style: outset` |

## 示例

### 基础用法

```css
/* 无 */
.none {
  border-style: none;
}

/* 点线 */
.dotted {
  border-style: dotted;
}

/* 虚线 */
.dashed {
  border-style: dashed;
}

/* 实线 */
.solid {
  border-style: solid;
}

/* 双线 */
.double {
  border-style: double;
}

/* 槽线 */
.groove {
  border-style: groove;
}

/* 脊线 */
.ridge {
  border-style: ridge;
}

/* 内嵌 */
.inset {
  border-style: inset;
}

/* 外嵌 */
.outset {
  border-style: outset;
}
```

### 高级用法

```css
/* 容器 */
.container {
  border-style: none;
}

/* 静态 */
.static {
  border-style: none;
}

/* 相对 */
.relative {
  border-style: none;
}

/* 绝对 */
.absolute {
  border-style: solid;
}

/* 固定 */
.fixed {
  border-style: solid;
}

/* 粘性 */
.sticky {
  border-style: none;
}

/* 响应式布局 */
.responsive {
  border-style: none;
}

/* 卡片布局 */
.card {
  border-style: solid;
}

/* 表单布局 */
.form {
  border-style: none;
}

/* 图片画廊 */
.gallery {
  border-style: none;
}

/* 混合单位 */
.mixed-units {
  border-style: none;
}

/* 带命名的项目 */
.named-items {
  border-style: none;
}

/* 悬停效果 */
.card {
  transition: border-style 0.3s ease-in-out;
}

.card:hover {
  border-style: solid;
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

- `border-style` 可以用于任何元素
- `border-style` 定义元素的边框样式
- `none` 是默认值，表示无

## 相关属性

- [`border`](./border)
- [`border-width`](./border-width)
- [`border-color`](./border-color)
- [`border-radius`](./border-radius)

## 相关资源

- [MDN Web Docs: border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)
- [CSS-Tricks: border-style](https://css-tricks.com/almanac/properties/b/border-style/)
- [W3C CSS Box](https://www.w3.org/TR/css-box-4/)