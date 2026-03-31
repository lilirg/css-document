# rotateZ()

`rotateZ()` 函数用于定义绕Z轴的 3D 旋转变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
rotateZ(angle)

/* 角度参数 */
rotateZ(45deg)   /* 绕Z轴顺时针旋转45度 */
rotateZ(90deg)   /* 绕Z轴顺时针旋转90度 */
rotateZ(-45deg)  /* 绕Z轴逆时针旋转45度 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `rotateZ(0deg)`（无旋转） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### angle（角度）

定义绕Z轴旋转的角度，可以是以下值：

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
/* 绕Z轴顺时针旋转45度 */
.rotate-z-45 {
  transform: rotateZ(45deg);
}

/* 绕Z轴顺时针旋转90度 */
.rotate-z-90 {
  transform: rotateZ(90deg);
}

/* 绕Z轴顺时针旋转180度 */
.rotate-z-180 {
  transform: rotateZ(180deg);
}

/* 绕Z轴逆时针旋转45度 */
.rotate-z-45-ccw {
  transform: rotateZ(-45deg);
}
```

### 使用不同单位

```css
/* 使用度数 */
.deg {
  transform: rotateZ(45deg);
}

/* 使用梯度 */
.grad {
  transform: rotateZ(50grad);
}

/* 使用弧度 */
.rad {
  transform: rotateZ(0.785rad);
}

/* 使用转数 */
.turn {
  transform: rotateZ(0.125turn);
}
```

### 悬停效果

```css
/* 悬停时旋转 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: rotateZ(10deg);
}

/* 悬停时旋转180度 */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: rotateZ(180deg);
}
```

### 动画效果

```css
@keyframes spin-z {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.animated {
  animation: spin-z 2s infinite linear;
}
```

### 等价变换

```css
/* 等价于 rotate3d(0, 0, 1, angle) */
.rotate-z {
  transform: rotateZ(45deg);
}

.rotate3d-z {
  transform: rotate3d(0, 0, 1, 45deg);
}

/* 等价于 rotate(angle) */
.rotate {
  transform: rotate(45deg);
}

.rotate-z-equivalent {
  transform: rotateZ(45deg);
}
```

### 2D 旋转效果

```css
/* 旋转正方形 */
.square {
  width: 100px;
  height: 100px;
  background: #3498db;
  transform: rotateZ(45deg);
}

/* 旋转圆形 */
.circle {
  width: 100px;
  height: 100px;
  background: #e74c3c;
  border-radius: 50%;
  transform: rotateZ(45deg);
}
```

### 等角旋转

```css
/* 等角旋转（绕(1, 1, 1)轴） */
.iso-rotate {
  transform: rotate3d(1, 1, 1, 45deg);
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

- [MDN: rotateZ()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotateZ)
- [W3C: CSS Transforms Module Level 1 - rotateZ()](https://www.w3.org/TR/css-transforms-1/#rotateZ-function)
