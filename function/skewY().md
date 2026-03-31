# skewY()

`skewY()` 函数用于定义绕Y轴的 2D 倾斜变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
skewY(angle)

/* 参数说明 */
skewY(30deg)   /* 垂直倾斜30度 */
skewY(-30deg)  /* 垂直反向倾斜30度 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `skewY(0deg)`（无倾斜） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### angle（倾斜角度）

定义垂直方向的倾斜角度：

- **正角度**：顺时针倾斜
- **负角度**：逆时针倾斜
- **单位**：`deg`（度）、`grad`（梯度）、`rad`（弧度）、`turn`（转数）

## 示例

### 基本倾斜

```css
/* 垂直倾斜30度 */
.skew-y-30 {
  transform: skewY(30deg);
}

/* 垂直反向倾斜30度 */
.skew-y-30-ccw {
  transform: skewY(-30deg);
}

/* 垂直倾斜45度 */
.skew-y-45 {
  transform: skewY(45deg);
}
```

### 使用不同单位

```css
/* 使用度数 */
.deg {
  transform: skewY(30deg);
}

/* 使用梯度 */
.grad {
  transform: skewY(33.33grad);
}

/* 使用弧度 */
.rad {
  transform: skewY(0.524rad);
}

/* 使用转数 */
.turn {
  transform: skewY(0.0833turn);
}
```

### 悬停效果

```css
/* 悬停时倾斜 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: skewY(10deg);
}

/* 悬停时倾斜180度 */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: skewY(180deg);
}
```

### 动画效果

```css
@keyframes skew-y-anim {
  0% {
    transform: skewY(0deg);
  }
  50% {
    transform: skewY(30deg);
  }
  100% {
    transform: skewY(0deg);
  }
}

.animated {
  animation: skew-y-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 skew(0, angle) */
.skew {
  transform: skewY(30deg);
}

.skew-x-0 {
  transform: skew(0, 30deg);
}

/* 等价于 matrix(1, tan(angle), 0, 1, 0, 0) */
.matrix {
  transform: matrix(1, 0.577, 0, 1, 0, 0);
}
```

### 平行四边形

```css
/* 平行四边形 */
.parallelogram {
  width: 200px;
  height: 100px;
  background: #3498db;
  transform: skewY(30deg);
}
```

### 倾斜图片

```css
/* 倾斜图片 */
.image-skew {
  transform: skewY(10deg);
}

/* 倾斜图片20度 */
.image-skew-20 {
  transform: skewY(20deg);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 1+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 3.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: skewY()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skewY)
- [W3C: CSS Transforms Module Level 1 - skewY()](https://www.w3.org/TR/css-transforms-1/#skewY-function)
