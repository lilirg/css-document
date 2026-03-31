# rotate3d()

`rotate3d()` 函数用于定义一个 3D 旋转变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
rotate3d(x, y, z, angle)

/* 参数说明 */
rotate3d(1, 0, 0, 45deg)  /* 绕X轴旋转45度 */
rotate3d(0, 1, 0, 45deg)  /* 绕Y轴旋转45度 */
rotate3d(0, 0, 1, 45deg)  /* 绕Z轴旋转45度 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `rotate3d(0, 0, 0, 0deg)`（无旋转） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### x, y, z（旋转轴）

定义旋转轴的方向向量，取值范围：

- **数值**：`-1` 到 `1`
  - `1`：沿该轴正方向
  - `-1`：沿该轴负方向
  - `0`：不沿该轴

### angle（角度）

定义旋转的角度，可以是以下值：

- **正角度**：顺时针旋转（遵循右手定则）
- **负角度**：逆时针旋转

### 单位

- **度（deg）**：最常用
- **梯度（grad）**：`100grad = 90deg`
- **弧度（rad）**：`1rad ≈ 57.3deg`
- **转数（turn）**：`1turn = 360deg`

## 示例

### 绕X轴旋转

```css
/* 绕X轴旋转45度 */
.rotate-x-45 {
  transform: rotate3d(1, 0, 0, 45deg);
}

/* 绕X轴旋转90度 */
.rotate-x-90 {
  transform: rotate3d(1, 0, 0, 90deg);
}

/* 绕X轴旋转180度 */
.rotate-x-180 {
  transform: rotate3d(1, 0, 0, 180deg);
}
```

### 绕Y轴旋转

```css
/* 绕Y轴旋转45度 */
.rotate-y-45 {
  transform: rotate3d(0, 1, 0, 45deg);
}

/* 绕Y轴旋转90度 */
.rotate-y-90 {
  transform: rotate3d(0, 1, 0, 90deg);
}

/* 绕Y轴旋转180度 */
.rotate-y-180 {
  transform: rotate3d(0, 1, 0, 180deg);
}
```

### 绕Z轴旋转

```css
/* 绕Z轴旋转45度 */
.rotate-z-45 {
  transform: rotate3d(0, 0, 1, 45deg);
}

/* 绕Z轴旋转90度 */
.rotate-z-90 {
  transform: rotate3d(0, 0, 1, 90deg);
}

/* 绕Z轴旋转180度 */
.rotate-z-180 {
  transform: rotate3d(0, 0, 1, 180deg);
}
```

### 绕自定义轴旋转

```css
/* 绕(1, 1, 0)轴旋转45度 */
.rotate-custom {
  transform: rotate3d(1, 1, 0, 45deg);
}

/* 绕(1, 1, 1)轴旋转45度 */
.rotate-diagonal {
  transform: rotate3d(1, 1, 1, 45deg);
}
```

### 使用不同单位

```css
/* 使用度数 */
.deg {
  transform: rotate3d(1, 0, 0, 45deg);
}

/* 使用梯度 */
.grad {
  transform: rotate3d(1, 0, 0, 50grad);
}

/* 使用弧度 */
.rad {
  transform: rotate3d(1, 0, 0, 0.785rad);
}

/* 使用转数 */
.turn {
  transform: rotate3d(1, 0, 0, 0.125turn);
}
```

### 悬停效果

```css
/* 悬停时旋转 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: rotate3d(1, 1, 0, 10deg);
}

/* 悬停时旋转180度 */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: rotate3d(0, 1, 0, 180deg);
}
```

### 动画效果

```css
@keyframes spin-3d {
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

.animated {
  animation: spin-3d 2s infinite linear;
}
```

### 等价于其他3D旋转函数

```css
/* 等价于 rotateX(30deg) */
.rotate-x {
  transform: rotate3d(1, 0, 0, 30deg);
}

/* 等价于 rotateY(30deg) */
.rotate-y {
  transform: rotate3d(0, 1, 0, 30deg);
}

/* 等价于 rotateZ(30deg) */
.rotate-z {
  transform: rotate3d(0, 0, 1, 30deg);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 36+ | 完全支持 |
| Firefox | 10+ | 完全支持 |
| Safari | 9+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 11+ | 完全支持 |

## 相关链接

- [MDN: rotate3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate3d)
- [W3C: CSS Transforms Module Level 1 - rotate3d()](https://www.w3.org/TR/css-transforms-1/#rotate3d-function)
