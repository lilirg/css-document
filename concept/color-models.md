# 颜色模型（Color Models）

颜色模型是描述颜色的数学模型。

## 颜色模型类型

### 1. RGB 模型

RGB（Red, Green, Blue）是加色模型，用于屏幕显示。

```css
.color {
  color: rgb(255, 0, 0);     /* 红色 */
  color: rgb(0, 255, 0);     /* 绿色 */
  color: rgb(0, 0, 255);     /* 蓝色 */
  color: rgb(255, 255, 255); /* 白色 */
  color: rgb(0, 0, 0);       /* 黑色 */
}
```

### 2. HSL 模型

HSL（Hue, Saturation, Lightness）是 cylindrical-coordinate 模型。

```css
.color {
  color: hsl(0, 100%, 50%);    /* 红色 */
  color: hsl(120, 100%, 50%);  /* 绿色 */
  color: hsl(240, 100%, 50%);  /* 蓝色 */
}
```

### 3. CMYK 模型

CMYK（Cyan, Magenta, Yellow, Key/Black）是减色模型，用于印刷。

```css
/* CSS 不直接支持 CMYK */
/* 但可以通过其他方式模拟 */
```

### 4. Lab 模型

Lab（Lightness, a, b）是 CIE 标准颜色空间。

```css
.color {
  color: lab(50% 50 50);
}
```

### 5. LCH 模型

LCH（Lightness, Chroma, Hue）是 Lab 的极坐标表示。

```css
.color {
  color: lch(50% 70 25);
}
```

### 6. HWB 模型

HWB（Hue, Whiteness, Blackness）是 RGB 的变体。

```css
.color {
  color: hwb(0 0% 0%);    /* 红色 */
  color: hwb(120 0% 0%);  /* 绿色 */
  color: hwb(240 0% 0%);  /* 蓝色 */
}
```

### 7. OKLab 模型

OKLab 是改进的 Lab 颜色空间。

```css
.color {
  color: oklab(50% 50 50);
}
```

### 8. OKLCH 模型

OKLCH 是 OKLab 的极坐标表示。

```css
.color {
  color: oklch(50% 70 25);
}
```

## 颜色模型比较

| 模型 | 类型 | 用途 | 特点 |
| :--- | :--- | :--- | :--- |
| RGB | 加色 | 屏幕显示 | 直观，广泛支持 |
| HSL | 圆柱 | 颜色调整 | 符合人类视觉 |
| CMYK | 减色 | 印刷 | 专业印刷 |
| Lab | 感知 | 颜色测量 | 设备无关 |
| LCH | 圆柱 | 颜色调整 | Lab 的极坐标 |
| HWB | RGB 变体 | 简单颜色 | 易于理解 |
| OKLab | 感知 | 颜色测量 | 改进的 Lab |
| OKLCH | 圆柱 | 颜色调整 | OKLab 的极坐标 |

## 颜色模型示例

```css
/* RGB */
.red-rgb {
  color: rgb(255, 0, 0);
}

/* HSL */
.red-hsl {
  color: hsl(0, 100%, 50%);
}

/* Lab */
.red-lab {
  color: lab(60% 80 60);
}

/* LCH */
.red-lch {
  color: lch(60% 100 40);
}

/* HWB */
.red-hwb {
  color: hwb(0 0% 0%);
}

/* OKLab */
.red-oklab {
  color: oklab(60% 80 60);
}

/* OKLCH */
.red-oklch {
  color: oklch(60% 100 40);
}
```

## 最佳实践

1. **使用 HSL** - 更直观的颜色调整
2. **使用 CSS 变量** - 颜色主题管理
3. **考虑可访问性** - 足够的对比度
4. **了解模型差异** - 选择合适的模型

## 相关链接

- [MDN: 颜色模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)
- [W3C: CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)