# CSS 数据类型 (CSS Data Types)

CSS 数据类型定义了 CSS 属性值的格式和类型。理解数据类型有助于正确使用 CSS 属性。

## 目录

### 基础数据类型

- [`integer.md`](integer.md) - 整数（`<integer>`）
- [`number.md`](number.md) - 数字（`<number>`）
- [`percentage.md`](percentage.md) - 百分比（`<percentage>`）
- [`length.md`](length.md) - 长度（`<length>`）
- [`angle.md`](angle.md) - 角度（`<angle>`）
- [`time.md`](time.md) - 时间（`<time>`）
- [`frequency.md`](frequency.md) - 频率（`<frequency>`）
- [`resolution.md`](resolution.md) - 分辨率（`<resolution>`）

### 颜色数据类型

- [`color.md`](color.md) - 颜色（`<color>`）
- [`<rgb>()`](rgb().md) - RGB 颜色
- [`<rgba>()`](rgba().md) - RGBA 颜色
- [`<hsl>()`](hsl().md) - HSL 颜色
- [`<hsla>()`](hsla().md) - HSLA 颜色
- [`<lab>()`](lab().md) - CIE LAB 颜色
- [`<lch>()`](lch().md) - CIE LCH 颜色
- [`<hex-color>()`](hex-color().md) - 十六进制颜色
- [`<named-color>()`](named-color().md) - 预定义颜色名称

### 几何数据类型

- [`<shape>()`](shape().md) - 形状函数
- [`<circle>()`](circle().md) - 圆形
- [`<ellipse>()`](ellipse().md) - 椭圆
- [`<inset>()`](inset().md) - 矩形
- [`<polygon>()`](polygon().md) - 多边形

### 函数数据类型

- [`<calc>()`](calc().md) - 计算表达式
- [`<attr>()`](attr().md) - 属性值函数
- [`<min>()`](min().md) - 最小值函数
- [`<max>()`](max().md) - 最大值函数
- [`<clamp>()`](clamp().md) - 限制值函数

### 其他数据类型

- [`<string>()`](string().md) - 字符串
- [`<url>()`](url().md) - URL
- [`<image>()`](image().md) - 图像
- [`<transform-function>()`](transform-function().md) - 变换函数
- [`<timing-function>()`](timing-function().md) - 计时函数
- [`<custom-ident>()`](custom-ident().md) - 自定义标识符
- [`<any-value>()`](any-value().md) - 任意值

## 数据类型分类

### 数值类型

CSS 中的数值类型包括：

1. **整数** (`<integer>`) - 如 `1`, `2`, `-3`
2. **数字** (`<number>`) - 如 `1.5`, `0.25`, `-2.7`
3. **百分比** (`<percentage>`) - 如 `50%`, `100%`, `-25%`
4. **长度** (`<length>`) - 如 `10px`, `2em`, `3rem`, `50%`
5. **角度** (`<angle>`) - 如 `45deg`, `1.5rad`, `100grad`
6. **时间** (`<time>`) - 如 `2s`, `500ms`
7. **频率** (`<frequency>`) - 如 `440Hz`
8. **分辨率** (`<resolution>`) - 如 `96dpi`, `300dpcm`

### 颜色类型

CSS 支持多种颜色表示方法：

1. **RGB** - 红绿蓝三原色
2. **HSL** - 色相、饱和度、亮度
3. **十六进制** - 如 `#ff0000`
4. **预定义名称** - 如 `red`, `blue`, `green`
5. **Lab/Lch** - CIE 标准颜色空间

### 几何类型

用于 `clip-path` 和 `shape-outside` 等属性：

1. **circle()** - 圆形
2. **ellipse()** - 椭圆
3. **inset()** - 矩形
4. **polygon()** - 多边形

### 函数类型

用于计算和转换：

1. **calc()** - 数学计算
2. **min()/max()/clamp()** - 值限制
3. **attr()** - 属性值提取

## 阅读路径

1. [CSS 简介](../basics/whatisCSS.md) - 了解 CSS 的基本概念
2. [长度](length.md) - 掌握 CSS 长度单位
3. [颜色](color.md) - 掌握 CSS 颜色表示方法
4. [整数](integer.md) - 掌握 CSS 整数类型
5. [数字](number.md) - 掌握 CSS 数字类型
6. [百分比](percentage.md) - 掌握 CSS 百分比类型
7. [角度](angle.md) - 掌握 CSS 角度单位
8. [时间](time.md) - 掌握 CSS 时间单位
9. [频率](frequency.md) - 了解 CSS 频率单位
10. [分辨率](resolution.md) - 了解 CSS 分辨率单位
11. [字符串](string.md) - 掌握 CSS 字符串类型
12. [URL](url.md) - 掌握 CSS URL 类型
13. [图像](image.md) - 掌握 CSS 图像类型
14. [变换函数](transform-function.md) - 掌握 CSS 变换函数
15. [计时函数](timing-function.md) - 掌握 CSS 计时函数
16. [自定义标识符](custom-ident.md) - 掌握 CSS 自定义标识符
17. [任意值](any-value.md) - 了解 CSS 任意值类型

## 相关链接

- [MDN Web Docs: CSS 数据类型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Types)
- [W3C CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)
- [W3C CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)