# 混合模式（Blend Mode）

混合模式控制元素如何与背景混合。

## mix-blend-mode 属性

```css
.element {
  mix-blend-mode: normal;       /* 正常（默认） */
  mix-blend-mode: multiply;     /* 正片叠底 */
  mix-blend-mode: screen;       /* 滤色 */
  mix-blend-mode: overlay;      /* 叠加 */
  mix-blend-mode: darken;       /* 变暗 */
  mix-blend-mode: lighten;      /* 变亮 */
  mix-blend-mode: color-dodge;  /* 颜色减淡 */
  mix-blend-mode: color-burn;   /* 颜色加深 */
  mix-blend-mode: hard-light;   /* 强光 */
  mix-blend-mode: soft-light;   /* 柔光 */
  mix-blend-mode: difference;   /* 差值 */
  mix-blend-mode: exclusion;    /* 排除 */
  mix-blend-mode: hue;          /* 色相 */
  mix-blend-mode: saturation;   /* 饱和度 */
  mix-blend-mode: color;        /* 颜色 */
  mix-blend-mode: luminosity;   /* 亮度 */
}
```

## background-blend-mode 属性

```css
.element {
  background-image: url(image1.jpg), url(image2.jpg);
  background-blend-mode: multiply, screen;
}
```

## 混合模式类型

### 1. 正常（Normal）

```css
.normal {
  mix-blend-mode: normal;
}
```

### 2. 正片叠底（Multiply）

```css
.multiply {
  mix-blend-mode: multiply;
}
```

### 3. 滤色（Screen）

```css
.screen {
  mix-blend-mode: screen;
}
```

### 4. 叠加（Overlay）

```css
.overlay {
  mix-blend-mode: overlay;
}
```

### 5. 变暗（Darken）

```css
.darken {
  mix-blend-mode: darken;
}
```

### 6. 变亮（Lighten）

```css
.lighten {
  mix-blend-mode: lighten;
}
```

### 7. 颜色减淡（Color Dodge）

```css
.color-dodge {
  mix-blend-mode: color-dodge;
}
```

### 8. 颜色加深（Color Burn）

```css
.color-burn {
  mix-blend-mode: color-burn;
}
```

### 9. 强光（Hard Light）

```css
.hard-light {
  mix-blend-mode: hard-light;
}
```

### 10. 柔光（Soft Light）

```css
.soft-light {
  mix-blend-mode: soft-light;
}
```

### 11. 差值（Difference）

```css
.difference {
  mix-blend-mode: difference;
}
```

### 12. 排除（Exclusion）

```css
.exclusion {
  mix-blend-mode: exclusion;
}
```

### 13. 色相（Hue）

```css
.hue {
  mix-blend-mode: hue;
}
```

### 14. 饱和度（Saturation）

```css
.saturation {
  mix-blend-mode: saturation;
}
```

### 15. 颜色（Color）

```css
.color {
  mix-blend-mode: color;
}
```

### 16. 亮度（Luminosity）

```css
.luminosity {
  mix-blend-mode: luminosity;
}
```

## 混合模式示例

```css
/* 文本混合 */
.text {
  color: white;
  mix-blend-mode: multiply;
  background: linear-gradient(45deg, red, blue);
}

/* 图像混合 */
.image {
  background-image: url(image1.jpg), url(image2.jpg);
  background-blend-mode: multiply;
}

/* 形状混合 */
.shape {
  background: red;
  mix-blend-mode: screen;
}
```

## 最佳实践

1. **使用混合模式** - 创造视觉效果
2. **避免过度使用** - 性能影响
3. **考虑可访问性** - 足够的对比度
4. **了解模式差异** - 选择合适的模式

## 相关链接

- [MDN: 混合模式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)
- [W3C: CSS Compositing and Blending](https://www.w3.org/TR/compositing/)