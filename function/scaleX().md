# scaleX()

`scaleX()` 函数用于定义绕X轴的 2D 缩放变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
scaleX(sx)

/* 参数说明 */
scaleX(2)        /* 水平放大2倍 */
scaleX(0.5)      /* 水平缩小到50% */
scaleX(-1)       /* 水平翻转 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `scaleX(1)`（无缩放） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### sx（X轴缩放因子）

定义水平方向的缩放比例：

- `1`：无缩放
- `>1`：放大
- `<1`：缩小
- `0`：压缩为线
- 负值：镜像翻转

## 示例

### 基本缩放

```css
/* 水平放大2倍 */
.scale-x-2 {
  transform: scaleX(2);
}

/* 水平缩小到50% */
.scale-x-50 {
  transform: scaleX(0.5);
}

/* 水平翻转 */
.flip-x {
  transform: scaleX(-1);
}
```

### 放大效果

```css
/* 放大2倍 */
.scale-2x {
  transform: scaleX(2);
}

/* 放大3倍 */
.scale-3x {
  transform: scaleX(3);
}

/* 放大1.5倍 */
.scale-1-5x {
  transform: scaleX(1.5);
}
```

### 缩小效果

```css
/* 缩小到50% */
.scale-50 {
  transform: scaleX(0.5);
}

/* 缩小到25% */
.scale-25 {
  transform: scaleX(0.25);
}

/* 缩小到75% */
.scale-75 {
  transform: scaleX(0.75);
}
```

### 悬停效果

```css
/* 悬停时放大 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: scaleX(1.1);
}

/* 悬停时缩小 */
.icon {
  transition: transform 0.3s;
}

.icon:hover {
  transform: scaleX(0.9);
}
```

### 动画效果

```css
@keyframes pulse-x {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1.2);
  }
  100% {
    transform: scaleX(1);
  }
}

.animated {
  animation: pulse-x 2s infinite;
}
```

### 等价变换

```css
/* 等价于 scale(sx, 1) */
.scale {
  transform: scaleX(2);
}

.scale-y-1 {
  transform: scale(2, 1);
}

/* 等价于 scale3d(sx, 1, 1) */
.scale3d {
  transform: scale3d(2, 1, 1);
}
```

### 缩放图片

```css
/* 缩放图片 */
.image-scale {
  transform: scaleX(0.8);
}

/* 缩放图片1.5倍 */
.image-scale-1-5 {
  transform: scaleX(1.5);
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

- [MDN: scaleX()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scaleX)
- [W3C: CSS Transforms Module Level 1 - scaleX()](https://www.w3.org/TR/css-transforms-1/#scaleX-function)
