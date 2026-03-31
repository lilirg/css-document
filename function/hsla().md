# hsla()

`hsla()` 函数用于通过色相（Hue）、饱和度（Saturation）、亮度（Lightness）和透明度（Alpha）来定义颜色。

## 语法

```css
/* 基本语法 */
hsla(hue, saturation, lightness, alpha)

/* 参数范围 */
hsla(120, 100%, 50%, 1.0)  /* 不透明的纯绿色 */
hsla(120, 100%, 50%, 0.5)  /* 半透明的纯绿色 */
hsla(120, 100%, 50%, 0)    /* 完全透明 */
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

### alpha（透明度）

定义颜色的透明度，取值范围：

- **数值**：`0` 到 `1`
  - `0`：完全透明
  - `1`：完全不透明
  - `0.5`：半透明

## 示例

### 基本颜色

```css
/* 红色 */
.red {
  color: hsla(0, 100%, 50%, 1.0);
}

/* 绿色 */
.green {
  color: hsla(120, 100%, 50%, 1.0);
}

/* 蓝色 */
.blue {
  color: hsla(240, 100%, 50%, 1.0);
}
```

### 不同透明度

```css
/* 不透明 */
.opaque {
  background-color: hsla(200, 100%, 50%, 1.0);
}

/* 半透明 */
.semi-transparent {
  background-color: hsla(200, 100%, 50%, 0.5);
}

/* 完全透明 */
.transparent {
  background-color: hsla(200, 100%, 50%, 0);
}
```

### 覆盖效果

```css
/* 两个半透明层叠加 */
.overlay {
  position: relative;
}

.overlay::before,
.overlay::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
}

.overlay::before {
  background-color: hsla(0, 100%, 50%, 0.5);
}

.overlay::after {
  background-color: hsla(120, 100%, 50%, 0.5);
}
```

### 渐变效果

```css
/* HSLA 颜色渐变 */
.gradient {
  background: linear-gradient(
    to right,
    hsla(0, 100%, 50%, 1.0),
    hsla(0, 100%, 50%, 0.0)
  );
}
```

### 悬停效果

```css
/* 悬停时改变透明度 */
.button {
  background-color: hsla(200, 100%, 50%, 0.8);
  transition: background-color 0.3s;
}

.button:hover {
  background-color: hsla(200, 100%, 50%, 1.0);
}
```

### 使用角度单位

```css
/* 使用度数 */
.hsla-deg {
  color: hsla(180deg, 100%, 50%, 0.7);
}

/* 使用转数 */
.hsla-turn {
  color: hsla(0.33turn, 100%, 50%, 0.7);
}

/* 使用弧度 */
.hsla-rad {
  color: hsla(2.094rad, 100%, 50%, 0.7);
}

/* 使用梯度 */
.hsla-grad {
  color: hsla(200grad, 100%, 50%, 0.7);
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

- [MDN: hsla()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/hsla)
- [W3C: CSS Color Module Level 3 - hsla()](https://www.w3.org/TR/css-color-3/#hsla-color)
