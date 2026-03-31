# 颜色空间（Color Space）

颜色空间是 CSS 中描述颜色的数学模型。

## 颜色空间类型

### 1. RGB 颜色空间

RGB 是最常用的颜色空间，使用红、绿、蓝三个通道表示颜色。

```css
.color {
  color: rgb(255, 0, 0);     /* 红色 */
  color: rgb(0, 255, 0);     /* 绿色 */
  color: rgb(0, 0, 255);     /* 蓝色 */
  color: rgba(255, 0, 0, 0.5);  /* 半透明红色 */
}
```

### 2. HSL 颜色空间

HSL 使用色相、饱和度、亮度表示颜色，更符合人类视觉。

```css
.color {
  color: hsl(0, 100%, 50%);    /* 红色 */
  color: hsl(120, 100%, 50%);  /* 绿色 */
  color: hsl(240, 100%, 50%);  /* 蓝色 */
  color: hsla(0, 100%, 50%, 0.5);  /* 半透明红色 */
}
```

### 3. CMYK 颜色空间

CMYK 用于印刷，使用青、品红、黄、黑四个通道。

```css
/* CSS 不直接支持 CMYK */
/* 但可以通过其他方式模拟 */
```

### 4. Lab/LCH 颜色空间

Lab/LCH 是 CIE 标准颜色空间，更符合人类视觉感知。

```css
.color {
  color: lab(50% 50 50);
  color: lch(50% 70 25);
}
```

### 5. HWB 颜色空间

HWB 使用色相、黑度、白度表示颜色。

```css
.color {
  color: hwb(0 0% 0%);    /* 红色 */
  color: hwb(120 0% 0%);  /* 绿色 */
  color: hwb(240 0% 0%);  /* 蓝色 */
}
```

### 6. OKLab/OKLCH 颜色空间

OKLab/OKLCH 是改进的 Lab 颜色空间。

```css
.color {
  color: oklab(50% 50 50);
  color: oklch(50% 70 25);
}
```

## 颜色空间转换

### RGB 转 HSL

```css
/* RGB(255, 0, 0) -> HSL(0, 100%, 50%) */
.color {
  color: rgb(255, 0, 0);
  color: hsl(0, 100%, 50%);
}
```

### HSL 转 RGB

```css
/* HSL(0, 100%, 50%) -> RGB(255, 0, 0) */
.color {
  color: hsl(0, 100%, 50%);
  color: rgb(255, 0, 0);
}
```

## 颜色空间示例

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
```

## 最佳实践

1. **使用 HSL** - 更直观的颜色调整
2. **使用 CSS 变量** - 颜色主题管理
3. **考虑可访问性** - 足够的对比度
4. **避免过度使用 Lab/LCH** - 浏览器兼容性

## 相关链接

- [MDN: 颜色空间](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)
- [W3C: CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)