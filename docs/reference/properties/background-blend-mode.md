# background-blend-mode

background-blend-mode 属性定义元素背景的混合模式。

## 语法

```css
background-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `normal` | 正常 | `background-blend-mode: normal` |
| `multiply` | 乘法 | `background-blend-mode: multiply` |
| `screen` | 屏幕 | `background-blend-mode: screen` |
| `overlay` | 叠加 | `background-blend-mode: overlay` |
| `darken` | 变暗 | `background-blend-mode: darken` |
| `lighten` | 变亮 | `background-blend-mode: lighten` |
| `color-dodge` | 颜色减淡 | `background-blend-mode: color-dodge` |
| `color-burn` | 颜色加深 | `background-blend-mode: color-burn` |
| `hard-light` | 强光 | `background-blend-mode: hard-light` |
| `soft-light` | 柔光 | `background-blend-mode: soft-light` |
| `difference` | 差异 | `background-blend-mode: difference` |
| `exclusion` | 排除 | `background-blend-mode: exclusion` |
| `hue` | 色相 | `background-blend-mode: hue` |
| `saturation` | 饱和度 | `background-blend-mode: saturation` |
| `color` | 颜色 | `background-blend-mode: color` |
| `luminosity` | 亮度 | `background-blend-mode: luminosity` |

## 示例

### 基础用法

```css
/* 正常 */
.normal {
  background-blend-mode: normal;
}

/* 乘法 */
.multiply {
  background-blend-mode: multiply;
}

/* 屏幕 */
.screen {
  background-blend-mode: screen;
}

/* 叠加 */
.overlay {
  background-blend-mode: overlay;
}

/* 变暗 */
.darken {
  background-blend-mode: darken;
}

/* 变亮 */
.lighten {
  background-blend-mode: lighten;
}

/* 颜色减淡 */
.color-dodge {
  background-blend-mode: color-dodge;
}

/* 颜色加深 */
.color-burn {
  background-blend-mode: color-burn;
}

/* 强光 */
.hard-light {
  background-blend-mode: hard-light;
}

/* 柔光 */
.soft-light {
  background-blend-mode: soft-light;
}

/* 差异 */
.difference {
  background-blend-mode: difference;
}

/* 排除 */
.exclusion {
  background-blend-mode: exclusion;
}

/* 色相 */
.hue {
  background-blend-mode: hue;
}

/* 饱和度 */
.saturation {
  background-blend-mode: saturation;
}

/* 颜色 */
.color {
  background-blend-mode: color;
}

/* 亮度 */
.luminosity {
  background-blend-mode: luminosity;
}
```

### 高级用法

```css
/* 容器 */
.container {
  background-blend-mode: normal;
}

/* 静态 */
.static {
  background-blend-mode: normal;
}

/* 相对 */
.relative {
  background-blend-mode: normal;
}

/* 绝对 */
.absolute {
  background-blend-mode: normal;
}

/* 固定 */
.fixed {
  background-blend-mode: normal;
}

/* 粘性 */
.sticky {
  background-blend-mode: normal;
}

/* 响应式布局 */
.responsive {
  background-blend-mode: normal;
}

/* 卡片布局 */
.card {
  background-blend-mode: normal;
}

/* 表单布局 */
.form {
  background-blend-mode: normal;
}

/* 图片画廊 */
.gallery {
  background-blend-mode: normal;
}

/* 混合单位 */
.mixed-units {
  background-blend-mode: normal;
}

/* 带命名的项目 */
.named-items {
  background-blend-mode: normal;
}

/* 悬停效果 */
.card {
  transition: background-blend-mode 0.3s ease-in-out;
}

.card:hover {
  background-blend-mode: multiply;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 35+ |
| Firefox | 30+ |
| Safari | 8+ |
| Edge | 79+ |
| iOS Safari | 8+ |
| Android Browser | 35+ |
| Chrome for Android | 35+ |

## 注意事项

- `background-blend-mode` 可以用于任何元素
- `background-blend-mode` 定义元素背景的混合模式
- `normal` 是默认值，表示正常

## 相关属性

- [`mix-blend-mode`](./mix-blend-mode)
- [`background-image`](./background-image)
- [`background-color`](./background-color)

## 相关资源

- [MDN Web Docs: background-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-blend-mode)
- [CSS-Tricks: background-blend-mode](https://css-tricks.com/almanac/properties/b/background-blend-mode/)
- [W3C CSS Compositing](https://www.w3.org/TR/compositing-2/)