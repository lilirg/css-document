# repeating-radial-gradient()

`repeating-radial-gradient()` 函数用于创建重复的径向渐变图像，颜色从一个中心点向外辐射过渡并重复。

## 语法

```css
/* 基本语法 */
repeating-radial-gradient(shape size at position, color-stop1, color-stop2, ...)

/* 参数说明 */
repeating-radial-gradient(circle, red, blue 50px)           /* 圆形渐变 */
repeating-radial-gradient(ellipse, red, blue 50px)          /* 椭圆渐变 */
repeating-radial-gradient(circle at 50% 50%, red, blue 50px) /* 指定中心点 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `repeating-radial-gradient(circle at center, closest-side, red, blue)` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持（当渐变参数为数值时） |

## 属性值

### shape（形状）

定义渐变的形状：

- `circle`：圆形
- `ellipse`：椭圆（默认值）

### size（大小）

定义渐变的大小，可以是以下值：

- `closest-side`：圆心到最近边的距离
- `closest-corner`：圆心到最近角的距离
- `farthest-side`：圆心到最远边的距离
- `farthest-corner`：圆心到最远角的距离

### position（位置）

定义渐变中心点的位置：

- `center`：中心
- `top`、`bottom`、`left`、`right`：边缘
- `50% 50%`：中心点坐标
- `left top`：左上角

### color-stop（颜色停止点）

定义渐变中的颜色和位置，格式为：

- **颜色值**：`red`、`#ff0000`、`rgb(255, 0, 0)` 等
- **颜色值 + 位置**：`red 50%`、`blue 100px` 等

## 示例

### 基本重复径向渐变

```css
/* 圆形渐变 */
.circle {
  background: repeating-radial-gradient(circle, red, blue 50px);
}

/* 椭圆渐变（默认） */
.ellipse {
  background: repeating-radial-gradient(ellipse, red, blue 50px);
}

/* 从中心点开始 */
.center {
  background: repeating-radial-gradient(circle at center, red, blue 50px);
}
```

### 指定中心点

```css
/* 左上角 */
.top-left {
  background: repeating-radial-gradient(circle at top left, red, blue 50px);
}

/* 右下角 */
.bottom-right {
  background: repeating-radial-gradient(circle at bottom right, red, blue 50px);
}

/* 偏移中心 */
.offset {
  background: repeating-radial-gradient(circle at 25% 25%, red, blue 50px);
}
```

### 指定大小

```css
/* 最近边 */
.closest-side {
  background: repeating-radial-gradient(circle closest-side, red, blue 50px);
}

/* 最近角 */
.closest-corner {
  background: repeating-radial-gradient(circle closest-corner, red, blue 50px);
}

/* 最远边 */
.farthest-side {
  background: repeating-radial-gradient(circle farthest-side, red, blue 50px);
}

/* 最远角 */
.farthest-corner {
  background: repeating-radial-gradient(circle farthest-corner, red, blue 50px);
}
```

### 多色渐变

```css
/* 三色渐变 */
.tricolor {
  background: repeating-radial-gradient(circle, red, yellow 50px, blue 100px);
}

/* 四色渐变 */
.four-color {
  background: repeating-radial-gradient(ellipse, red, green 50px, blue 100px, purple 150px);
}
```

### 指定位置

```css
/* 指定颜色位置 */
.custom-stops {
  background: repeating-radial-gradient(circle,
    red 0%,
    yellow 25%,
    green 50%,
    blue 75%,
    purple 100%
  );
}

/* 重复颜色 */
.repeating {
  background: repeating-radial-gradient(circle,
    red 0%,
    red 50%,
    blue 50%,
    blue 100%
  );
}
```

### 环形渐变

```css
/* 环形效果 */
.ring {
  background: repeating-radial-gradient(circle,
    transparent 0%,
    transparent 50%,
    red 50%,
    red 70%,
    transparent 70%
  );
}

/* 波纹效果 */
.ripples {
  background: repeating-radial-gradient(circle,
    blue 0%,
    blue 20px,
    transparent 20px,
    transparent 40px
  );
}
```

### 透明渐变

```css
/* 从不透明到透明 */
.fade-out {
  background: repeating-radial-gradient(circle,
    rgba(255, 0, 0, 1),
    rgba(255, 0, 0, 0) 50px
  );
}

/* 透明渐变 */
.transparent {
  background: repeating-radial-gradient(circle,
    hsla(0, 100%, 50%, 1),
    hsla(0, 100%, 50%, 0) 50px
  );
}
```

### 辐射效果

```css
/* 太阳光效果 */
.sun {
  background: repeating-radial-gradient(ellipse at center,
    yellow 0%,
    orange 50%,
    red 100%
  );
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 16+ | 完全支持 |
| Firefox | 16+ | 完全支持 |
| Safari | 6.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 10+ | 完全支持 |

## 相关链接

- [MDN: repeating-radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-radial-gradient)
- [W3C: CSS Images Module Level 3 - repeating-radial-gradient()](https://www.w3.org/TR/css-images-3/#repeating-radial-gradients)
