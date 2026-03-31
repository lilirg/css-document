# matrix3d()

`matrix3d()` 函数用于定义一个 3D 变换矩阵，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)

/* 参数说明 */
matrix3d(
  scaleX, skewY,  skewZ,  0,
  skewX,  scaleY, skewZ,  0,
  skewX,  skewY,  scaleZ, 0,
  translateX, translateY, translateZ, 1
)
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`（无变换） |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

`matrix3d()` 接受 16 个数值参数，按列优先顺序排列：

### 第一列（X轴变换）

- `a1`（scaleX）：水平缩放
- `b1`（skewY）：垂直倾斜
- `c1`（skewZ）：Z轴倾斜
- `d1`（0）：齐次坐标

### 第二列（Y轴变换）

- `a2`（skewX）：水平倾斜
- `b2`（scaleY）：垂直缩放
- `c2`（skewZ）：Z轴倾斜
- `d2`（0）：齐次坐标

### 第三列（Z轴变换）

- `a3`（skewX）：水平倾斜
- `b3`（skewY）：垂直倾斜
- `c3`（scaleZ）：深度缩放
- `d3`（0）：齐次坐标

### 第四列（位移）

- `a4`（translateX）：X轴位移
- `b4`（translateY）：Y轴位移
- `c4`（translateZ）：Z轴位移
- `d4`（1）：齐次坐标

## 示例

### 基本变换

```css
/* 无变换（默认） */
.none {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

/* 仅缩放 */
.scale {
  transform: matrix3d(
    2, 0, 0, 0,
    0, 2, 0, 0,
    0, 0, 2, 0,
    0, 0, 0, 1
  );
}

/* 仅位移 */
.translate {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    50, 50, 0, 1
  );
}
```

### 缩放变换

```css
/* 水平放大2倍 */
.scale-x {
  transform: matrix3d(
    2, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

/* 垂直放大2倍 */
.scale-y {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 2, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

/* 深度放大2倍 */
.scale-z {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 2, 0,
    0, 0, 0, 1
  );
}

/* 同时放大2倍 */
.scale-both {
  transform: matrix3d(
    2, 0, 0, 0,
    0, 2, 0, 0,
    0, 0, 2, 0,
    0, 0, 0, 1
  );
}
```

### 位移变换

```css
/* 向右移动50px */
.move-right {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    50, 0, 0, 1
  );
}

/* 向下移动50px */
.move-down {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 50, 0, 1
  );
}

/* 向前移动50px（Z轴） */
.move-forward {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 50, 1
  );
}
```

### 等价于其他3D变换函数

```css
/* 等价于 rotateX(30deg) */
.rotate-x {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 0.866, 0.5, 0,
    0, -0.5, 0.866, 0,
    0, 0, 0, 1
  );
}

/* 等价于 rotateY(30deg) */
.rotate-y {
  transform: matrix3d(
    0.866, 0, -0.5, 0,
    0, 1, 0, 0,
    0.5, 0, 0.866, 0,
    0, 0, 0, 1
  );
}

/* 等价于 rotateZ(30deg) */
.rotate-z {
  transform: matrix3d(
    0.866, 0.5, 0, 0,
    -0.5, 0.866, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

/* 等价于 translate3d(50px, 100px, 200px) */
.translate-3d {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    50, 100, 200, 1
  );
}

/* 等价于 scale3d(2, 0.5, 1.5) */
.scale-3d {
  transform: matrix3d(
    2, 0, 0, 0,
    0, 0.5, 0, 0,
    0, 0, 1.5, 0,
    0, 0, 0, 1
  );
}
```

### 复杂组合变换

```css
/* 缩放+旋转+位移 */
.complex {
  transform: matrix3d(
    1.5, 0.5, 0, 0,
    -0.5, 1.5, 0, 0,
    0, 0, 1.5, 0,
    50, 50, 0, 1
  );
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

- [MDN: matrix3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)
- [W3C: CSS Transforms Module Level 1 - matrix3d()](https://www.w3.org/TR/css-transforms-1/#matrix3d)
