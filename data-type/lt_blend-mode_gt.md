# blend-mode

`blend-mode` 数据类型表示混合模式，用于控制元素或背景的混合方式。

## 语法

```css
/* 基本用法 */
.element {
  background-blend-mode: multiply;
}

/* 混合多个背景 */
.element {
  background-blend-mode: multiply, screen;
}

/* 混合模式 */
.element {
  mix-blend-mode: overlay;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `normal` |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 混合模式

| 模式 | 描述 |
| :--- | :--- |
| `normal` | 正常（无混合） |
| `multiply` | 正片叠底 |
| `screen` | 滤色 |
| `overlay` | 柔光 |
| `darken` | 变暗 |
| `lighten` | 变亮 |
| `color-dodge` | 颜色减淡 |
| `color-burn` | 颜色加深 |
| `hard-light` | 强光 |
| `soft-light` | 柔光 |
| `difference` | 差值 |
| `exclusion` | 排除 |
| `hue` | 色相 |
| `saturation` | 饱和度 |
| `color` | 颜色 |
| `luminosity` | 亮度 |

## 示例

### background-blend-mode

```css
/* 多背景混合 */
.element {
  background-image: url(image1.jpg), url(image2.jpg);
  background-blend-mode: multiply;
}

/* 背景颜色与图片混合 */
.element {
  background-color: rgba(255, 0, 0, 0.5);
  background-image: url(image.jpg);
  background-blend-mode: overlay;
}
```

### mix-blend-mode

```css
/* 文本与背景混合 */
.element {
  background-color: blue;
  color: white;
  mix-blend-mode: multiply;
}

/* 图像混合 */
.element {
  mix-blend-mode: screen;
}
```

### 实用示例

```css
/* 悬停效果 */
.card {
  background-image: url(image.jpg);
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
}

.card:hover {
  background-blend-mode: normal;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 35+ |
| Firefox | 30+ |
| Safari | 8+ |
| Edge | 79+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/blend-mode)
- [Compositing and Blending Level 1](https://www.w3.org/TR/compositing-1/)
