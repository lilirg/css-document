# skewX()

`skewX()` 函数用于定义绕X轴的 2D 倾斜变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
skewX(angle)

/* 参数说明 */
skewX(30deg)   /* 水平倾斜30度 */
skewX(-30deg)  /* 水平反向倾斜30度 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `skewX(0deg)`（无倾斜） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### angle（倾斜角度）

定义水平方向的倾斜角度：

- **正角度**：顺时针倾斜
- **负角度**：逆时针倾斜
- **单位**：`deg`（度）、`grad`（梯度）、`rad`（弧度）、`turn`（转数）

## 示例

### 基本倾斜

```css
/* 水平倾斜30度 */
.skew-x-30 {
  transform: skewX(30deg);
}

/* 水平反向倾斜30度 */
.skew-x-30-ccw {
  transform: skewX(-30deg);
}

/* 水平倾斜45度 */
.skew-x-45 {
  transform: skewX(45deg);
}
```

### 使用不同单位

```css
/* 使用度数 */
.deg {
  transform: skewX(30deg);
}

/* 使用梯度 */
.grad {
  transform: skewX(33.33grad);
}

/* 使用弧度 */
.rad {
  transform: skewX(0.524rad);
}

/* 使用转数 */
.turn {
  transform: skewX(0.0833turn);
}
```

### 悬停效果

```css
/* 悬停时倾斜 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: skewX(10deg);
}

/* 悬停时倾斜180度 */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: skewX(180deg);
}
```

### 动画效果

```css
@keyframes skew-x-anim {
  0% {
    transform: skewX(0deg);
  }
  50% {
    transform: skewX(30deg);
  }
  100% {
    transform: skewX(0deg);
  }
}

.animated {
  animation: skew-x-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 skew(angle, 0) */
.skew {
  transform: skewX(30deg);
}

.skew-y-0 {
  transform: skew(30deg, 0);
}

/* 等价于 matrix(1, 0, tan(angle), 1, 0, 0) */
.matrix {
  transform: matrix(1, 0, 0.577, 1, 0, 0);
}
```

### 平行四边形

```css
/* 平行四边形 */
.parallelogram {
  width: 200px;
  height: 100px;
  background: #3498db;
  transform: skewX(30deg);
}
```

### 倾斜图片

```css
/* 倾斜图片 */
.image-skew {
  transform: skewX(10deg);
}

/* 倾斜图片20度 */
.image-skew-20 {
  transform: skewX(20deg);
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

- [MDN: skewX()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skewX)
- [W3C: CSS Transforms Module Level 1 - skewX()](https://www.w3.org/TR/css-transforms-1/#skewX-function)
