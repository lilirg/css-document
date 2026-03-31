# rotate()

`rotate()` 函数用于定义一个 2D 旋转变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
rotate(angle)

/* 角度参数 */
rotate(45deg)   /* 顺时针旋转45度 */
rotate(90deg)   /* 顺时针旋转90度 */
rotate(-45deg)  /* 逆时针旋转45度 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `rotate(0deg)`（无旋转） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### angle（角度）

定义旋转的角度，可以是以下值：

- **正角度**：顺时针旋转
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
/* 顺时针旋转45度 */
.rotate-45 {
  transform: rotate(45deg);
}

/* 顺时针旋转90度 */
.rotate-90 {
  transform: rotate(90deg);
}

/* 顺时针旋转180度 */
.rotate-180 {
  transform: rotate(180deg);
}

/* 逆时针旋转45度 */
.rotate-45-ccw {
  transform: rotate(-45deg);
}
```

### 使用不同单位

```css
/* 使用度数 */
.deg {
  transform: rotate(45deg);
}

/* 使用梯度 */
.grad {
  transform: rotate(50grad);
}

/* 使用弧度 */
.rad {
  transform: rotate(0.785rad);
}

/* 使用转数 */
.turn {
  transform: rotate(0.125turn);
}
```

### 悬停效果

```css
/* 悬停时旋转 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: rotate(10deg);
}

/* 悬停时旋转180度 */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: rotate(180deg);
}
```

### 动画效果

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animated {
  animation: spin 2s infinite linear;
}
```

### 旋转图片

```css
/* 旋转图片 */
.image-rotate {
  transform: rotate(90deg);
}

/* 旋转图片180度 */
.image-flip {
  transform: rotate(180deg);
}
```

### 旋转文本

```css
/* 垂直文本 */
.vertical-text {
  transform: rotate(90deg);
}

/* 垂直文本（反向） */
.vertical-text-reverse {
  transform: rotate(-90deg);
}
```

### 旋转容器

```css
/* 旋转容器 */
.container {
  transform: rotate(45deg);
}

.container > * {
  transform: rotate(-45deg); /* 反向旋转内容 */
}
```

### 旋转正方形为菱形

```css
/* 正方形旋转45度 */
.diamond {
  width: 100px;
  height: 100px;
  background: #3498db;
  transform: rotate(45deg);
}
```

## 等价变换矩阵

`rotate(angle)` 等价于 `matrix()`：

```
matrix(cos(angle), sin(angle), -sin(angle), cos(angle), 0, 0)
```

例如：
- `rotate(90deg)` 等价于 `matrix(0, 1, -1, 0, 0, 0)`
- `rotate(180deg)` 等价于 `matrix(-1, 0, 0, -1, 0, 0)`
- `rotate(270deg)` 等价于 `matrix(0, -1, 1, 0, 0, 0)`

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 3.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: rotate()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate)
- [W3C: CSS Transforms Module Level 1 - rotate()](https://www.w3.org/TR/css-transforms-1/#rotate-function)
