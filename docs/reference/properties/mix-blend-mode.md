# mix-blend-mode

mix-blend-mode 属性定义元素与背景的混合模式。

## 语法

```css
mix-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `normal` | 正常 | `mix-blend-mode: normal` |
| `multiply` | 乘法 | `mix-blend-mode: multiply` |
| `screen` | 屏幕 | `mix-blend-mode: screen` |
| `overlay` | 叠加 | `mix-blend-mode: overlay` |
| `darken` | 变暗 | `mix-blend-mode: darken` |
| `lighten` | 变亮 | `mix-blend-mode: lighten` |
| `color-dodge` | 颜色减淡 | `mix-blend-mode: color-dodge` |
| `color-burn` | 颜色加深 | `mix-blend-mode: color-burn` |
| `hard-light` | 强光 | `mix-blend-mode: hard-light` |
| `soft-light` | 柔光 | `mix-blend-mode: soft-light` |
| `difference` | 差异 | `mix-blend-mode: difference` |
| `exclusion` | 排除 | `mix-blend-mode: exclusion` |
| `hue` | 色相 | `mix-blend-mode: hue` |
| `saturation` | 饱和度 | `mix-blend-mode: saturation` |
| `color` | 颜色 | `mix-blend-mode: color` |
| `luminosity` | 亮度 | `mix-blend-mode: luminosity` |

## 示例

### 基础用法

```css
/* 正常 */
.normal {
  mix-blend-mode: normal;
}

/* 乘法 */
.multiply {
  mix-blend-mode: multiply;
}

/* 屏幕 */
.screen {
  mix-blend-mode: screen;
}

/* 叠加 */
.overlay {
  mix-blend-mode: overlay;
}

/* 变暗 */
.darken {
  mix-blend-mode: darken;
}

/* 变亮 */
.lighten {
  mix-blend-mode: lighten;
}

/* 颜色减淡 */
.color-dodge {
  mix-blend-mode: color-dodge;
}

/* 颜色加深 */
.color-burn {
  mix-blend-mode: color-burn;
}

/* 强光 */
.hard-light {
  mix-blend-mode: hard-light;
}

/* 柔光 */
.soft-light {
  mix-blend-mode: soft-light;
}

/* 差异 */
.difference {
  mix-blend-mode: difference;
}

/* 排除 */
.exclusion {
  mix-blend-mode: exclusion;
}

/* 色相 */
.hue {
  mix-blend-mode: hue;
}

/* 饱和度 */
.saturation {
  mix-blend-mode: saturation;
}

/* 颜色 */
.color {
  mix-blend-mode: color;
}

/* 亮度 */
.luminosity {
  mix-blend-mode: luminosity;
}
```

### 高级用法

```css
/* 容器 */
.container {
  mix-blend-mode: normal;
}

/* 静态 */
.static {
  mix-blend-mode: normal;
}

/* 相对 */
.relative {
  mix-blend-mode: normal;
}

/* 绝对 */
.absolute {
  mix-blend-mode: normal;
}

/* 固定 */
.fixed {
  mix-blend-mode: normal;
}

/* 粘性 */
.sticky {
  mix-blend-mode: normal;
}

/* 响应式布局 */
.responsive {
  mix-blend-mode: normal;
}

/* 卡片布局 */
.card {
  mix-blend-mode: normal;
}

/* 表单布局 */
.form {
  mix-blend-mode: normal;
}

/* 图片画廊 */
.gallery {
  mix-blend-mode: normal;
}

/* 混合单位 */
.mixed-units {
  mix-blend-mode: normal;
}

/* 带命名的项目 */
.named-items {
  mix-blend-mode: normal;
}

/* 悬停效果 */
.card {
  transition: mix-blend-mode 0.3s ease-in-out;
}

.card:hover {
  mix-blend-mode: multiply;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 35+ |
| Firefox | 32+ |
| Safari | 8+ |
| Edge | 79+ |
| iOS Safari | 8+ |
| Android Browser | 35+ |
| Chrome for Android | 35+ |

## 注意事项

- `mix-blend-mode` 可以用于任何元素
- `mix-blend-mode` 定义元素与背景的混合模式
- `normal` 是默认值，表示正常

## 相关属性

- [`background-blend-mode`](./background-blend-mode)
- [`isolation`](./isolation)
- [`filter`](./filter)

## 相关资源

- [MDN Web Docs: mix-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)
- [CSS-Tricks: mix-blend-mode](https://css-tricks.com/almanac/properties/m/mix-blend-mode/)
- [W3C CSS Compositing](https://www.w3.org/TR/compositing-2/)