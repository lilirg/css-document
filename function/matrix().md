# matrix()

`matrix()` 函数用于定义一个 2D 变换矩阵，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
matrix(a, b, c, d, e, f)

/* 参数说明 */
matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `matrix(1, 0, 0, 1, 0, 0)`（无变换） |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

`matrix()` 接受 6 个数值参数，按顺序为：

### a（scaleX）

水平缩放因子
- `1`：无缩放
- `>1`：放大
- `<1`：缩小
- `0`：压缩为线

### b（skewY）

垂直倾斜因子
- `0`：无倾斜
- 正值：顺时针倾斜
- 负值：逆时针倾斜

### c（skewX）

水平倾斜因子
- `0`：无倾斜
- 正值：顺时针倾斜
- 负值：逆时针倾斜

### d（scaleY）

垂直缩放因子
- `1`：无缩放
- `>1`：放大
- `<1`：缩小
- `0`：压缩为线

### e（translateX）

水平位移（X轴）
- 单位：长度值（px、em、%等）

### f（translateY）

垂直位移（Y轴）
- 单位：长度值（px、em、%等）

## 示例

### 基本变换

```css
/* 无变换（默认） */
.none {
  transform: matrix(1, 0, 0, 1, 0, 0);
}

/* 仅缩放 */
.scale {
  transform: matrix(2, 0, 0, 2, 0, 0);
}

/* 仅位移 */
.translate {
  transform: matrix(1, 0, 0, 1, 50, 50);
}
```

### 缩放变换

```css
/* 水平放大2倍 */
.scale-x {
  transform: matrix(2, 0, 0, 1, 0, 0);
}

/* 垂直放大2倍 */
.scale-y {
  transform: matrix(1, 0, 0, 2, 0, 0);
}

/* 同时放大2倍 */
.scale-both {
  transform: matrix(2, 0, 0, 2, 0, 0);
}

/* 缩小到50% */
.shrink {
  transform: matrix(0.5, 0, 0, 0.5, 0, 0);
}
```

### 位移变换

```css
/* 向右移动50px */
.move-right {
  transform: matrix(1, 0, 0, 1, 50, 0);
}

/* 向下移动50px */
.move-down {
  transform: matrix(1, 0, 0, 1, 0, 50);
}

/* 向右上移动 */
.move-diagonal {
  transform: matrix(1, 0, 0, 1, 50, -50);
}
```

### 倾斜变换

```css
/* 水平倾斜10度（约0.176） */
.skew-x {
  transform: matrix(1, 0, 0.176, 1, 0, 0);
}

/* 垂直倾斜10度（约0.176） */
.skew-y {
  transform: matrix(1, 0.176, 0, 1, 0, 0);
}

/* 同时倾斜 */
.skew-both {
  transform: matrix(1, 0.176, 0.176, 1, 0, 0);
}
```

### 组合变换

```css
/* 缩放+位移 */
.scale-translate {
  transform: matrix(1.5, 0, 0, 1.5, 50, 50);
}

/* 位移+缩放（顺序不同结果不同） */
.translate-scale {
  transform: matrix(2, 0, 0, 2, 50, 50);
}

/* 缩放+倾斜+位移 */
.complex {
  transform: matrix(1.5, 0.2, 0.2, 1.5, 50, 50);
}
```

### 等价于其他变换函数

```css
/* 等价于 rotate(30deg) */
.rotate-30 {
  transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
}

/* 等价于 scaleX(2) */
.scale-x-2 {
  transform: matrix(2, 0, 0, 1, 0, 0);
}

/* 等价于 scaleY(0.5) */
.scale-y-05 {
  transform: matrix(1, 0, 0, 0.5, 0, 0);
}

/* 等价于 translate(50px, 100px) */
.translate-50-100 {
  transform: matrix(1, 0, 0, 1, 50, 100);
}
```

## 变换矩阵原理

2D 变换矩阵的数学表示：

```
[a  c  e]
[b  d  f]
[0  0  1]
```

对于点 (x, y)，变换后的坐标为：
- x' = a * x + c * y + e
- y' = b * x + d * y + f

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 3.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: matrix()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)
- [W3C: CSS Transforms Module Level 1 - matrix()](https://www.w3.org/TR/css-transforms-1/#matrix)
