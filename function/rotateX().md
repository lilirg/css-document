# rotateX()

`rotateX()` 函数用于定义绕X轴的 3D 旋转变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
rotateX(angle)

/* 角度参数 */
rotateX(45deg)   /* 绕X轴顺时针旋转45度 */
rotateX(90deg)   /* 绕X轴顺时针旋转90度 */
rotateX(-45deg)  /* 绕X轴逆时针旋转45度 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `rotateX(0deg)`（无旋转） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### angle（角度）

定义绕X轴旋转的角度，可以是以下值：

- **正角度**：顺时针旋转（遵循右手定则）
  - `0deg`：无旋转
  - `90deg`：顺时针旋转90度
  - `180deg`：顺时针旋转180度
  - `270deg`：顺时针旋转270度
  - `360deg`：顺时针旋转360度（回到原位）
- **负角度**：逆时针旋转
  - `-90deg`：逆时针旋转90度
  - `-180deg`：逆时针旋转180度
  - `-270deg`：逆时针旋转270度

### 单位

- **度（deg）**：最常用
- **梯度（grad）**：`100grad = 90deg`
- **弧度（rad）**：`1rad ≈ 57.3deg`
- **转数（turn）**：`1turn = 360deg`

## 示例

### 基本旋转

```css
/* 绕X轴顺时针旋转45度 */
.rotate-x-45 {
  transform: rotateX(45deg);
}

/* 绕X轴顺时针旋转90度 */
.rotate-x-90 {
  transform: rotateX(90deg);
}

/* 绕X轴顺时针旋转180度 */
.rotate-x-180 {
  transform: rotateX(180deg);
}

/* 绕X轴逆时针旋转45度 */
.rotate-x-45-ccw {
  transform: rotateX(-45deg);
}
```

### 使用不同单位

```css
/* 使用度数 */
.deg {
  transform: rotateX(45deg);
}

/* 使用梯度 */
.grad {
  transform: rotateX(50grad);
}

/* 使用弧度 */
.rad {
  transform: rotateX(0.785rad);
}

/* 使用转数 */
.turn {
  transform: rotateX(0.125turn);
}
```

### 悬停效果

```css
/* 悬停时旋转 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: rotateX(10deg);
}

/* 悬停时旋转180度 */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: rotateX(180deg);
}
```

### 动画效果

```css
@keyframes spin-x {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

.animated {
  animation: spin-x 2s infinite linear;
}
```

### 等价变换

```css
/* 等价于 rotate3d(1, 0, 0, angle) */
.rotate-x {
  transform: rotateX(45deg);
}

.rotate3d-x {
  transform: rotate3d(1, 0, 0, 45deg);
}
```

### 3D 翻转效果

```css
/* 正面朝前 */
.front {
  transform: rotateX(0deg);
}

/* 正面朝后 */
.back {
  transform: rotateX(180deg);
}

/* 正面朝上 */
.top {
  transform: rotateX(-90deg);
}

/* 正面朝下 */
.bottom {
  transform: rotateX(90deg);
}
```

### 翻牌效果

```css
/* 翻牌容器 */
.card {
  perspective: 1000px;
}

.card-inner {
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateX(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateX(180deg);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 12+ | 完全支持 |
| Firefox | 10+ | 完全支持 |
| Safari | 4+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 10+ | 完全支持 |

## 相关链接

- [MDN: rotateX()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotateX)
- [W3C: CSS Transforms Module Level 1 - rotateX()](https://www.w3.org/TR/css-transforms-1/#rotateX-function)
