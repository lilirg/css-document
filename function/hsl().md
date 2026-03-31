# hsl()

`hsl()` 函数用于通过色相（Hue）、饱和度（Saturation）和亮度（Lightness）来定义颜色。

## 语法

```css
/* 基本语法 */
hsl(hue, saturation, lightness)

/* 参数范围 */
hsl(120, 100%, 50%)  /* 纯绿色 */
hsl(0, 100%, 50%)    /* 纯红色 */
hsl(240, 100%, 50%)  /* 纯蓝色 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### hue（色相）

定义颜色在色轮上的位置，取值范围：

- **角度值**：`0deg` 到 `360deg`
  - `0deg` 或 `360deg`：红色
  - `120deg`：绿色
  - `240deg`：蓝色
  - `60deg`：黄色
  - `180deg`：青色
  - `300deg`：洋红色
- **数值**：`0` 到 `360`（等同于 `deg`）
- **转数**：`0turn` 到 `1turn`
- **弧度**：`0rad` 到 `6.28318rad`
- **梯度**：`0grad` 到 `400grad`

### saturation（饱和度）

定义颜色的纯度，取值范围：

- **百分比**：`0%` 到 `100%`
  - `0%`：灰色（无颜色）
  - `100%`：纯色（最饱和）

### lightness（亮度）

定义颜色的明暗程度，取值范围：

- **百分比**：`0%` 到 `100%`
  - `0%`：黑色
  - `50%`：正常亮度
  - `100%`：白色

## 示例

### 基本颜色

```css
/* 红色 */
.red {
  color: hsl(0, 100%, 50%);
}

/* 绿色 */
.green {
  color: hsl(120, 100%, 50%);
}

/* 蓝色 */
.blue {
  color: hsl(240, 100%, 50%);
}

/* 黄色 */
.yellow {
  color: hsl(60, 100%, 50%);
}
```

### 不同饱和度

```css
/* 高饱和度 */
.vibrant {
  color: hsl(200, 100%, 50%);
}

/* 中等饱和度 */
.muted {
  color: hsl(200, 50%, 50%);
}

/* 低饱和度（灰色） */
.grayscale {
  color: hsl(200, 0%, 50%);
}
```

### 不同亮度

```css
/* 亮色 */
.light {
  color: hsl(200, 100%, 80%);
}

/* 中等亮度 */
.normal {
  color: hsl(200, 100%, 50%);
}

/* 暗色 */
.dark {
  color: hsl(200, 100%, 20%);
}
```

### 使用角度单位

```css
/* 使用度数 */
.hsl-deg {
  color: hsl(180deg, 100%, 50%);
}

/* 使用转数 */
.hsl-turn {
  color: hsl(0.33turn, 100%, 50%);
}

/* 使用弧度 */
.hsl-rad {
  color: hsl(2.094rad, 100%, 50%);
}

/* 使用梯度 */
.hsl-grad {
  color: hsl(200grad, 100%, 50%);
}
```

### 颜色渐变

```css
/* HSL 颜色渐变 */
.gradient {
  background: linear-gradient(
    hsl(0, 100%, 50%),
    hsl(120, 100%, 50%),
    hsl(240, 100%, 50%)
  );
}
```

### 动画效果

```css
@keyframes hue-rotate {
  0% {
    background-color: hsl(0, 100%, 50%);
  }
  100% {
    background-color: hsl(360, 100%, 50%);
  }
}

.animated {
  animation: hue-rotate 2s infinite;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: hsl()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/hsl)
- [W3C: CSS Color Module Level 3 - hsl()](https://www.w3.org/TR/css-color-3/#hsl-color)
