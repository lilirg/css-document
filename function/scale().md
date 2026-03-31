# scale()

`scale()` 函数用于定义一个 2D 缩放变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
scale(sx, sy)

/* 参数说明 */
scale(2)        /* 同时缩放x和y轴 */
scale(2, 1)     /* 仅缩放x轴 */
scale(1, 2)     /* 仅缩放y轴 */
scale(0.5)      /* 缩小到50% */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `scale(1, 1)`（无缩放） |
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

### sy（Y轴缩放因子）

定义垂直方向的缩放比例：

- `1`：无缩放
- `>1`：放大
- `<1`：缩小
- `0`：压缩为线
- 负值：镜像翻转

## 示例

### 基本缩放

```css
/* 同时缩放x和y轴 */
.scale-both {
  transform: scale(2);
}

/* 仅缩放x轴 */
.scale-x {
  transform: scale(2, 1);
}

/* 仅缩放y轴 */
.scale-y {
  transform: scale(1, 2);
}

/* 缩小到50% */
.scale-down {
  transform: scale(0.5);
}
```

### 放大效果

```css
/* 放大2倍 */
.scale-2x {
  transform: scale(2);
}

/* 放大3倍 */
.scale-3x {
  transform: scale(3);
}

/* 放大1.5倍 */
.scale-1-5x {
  transform: scale(1.5);
}
```

### 缩小效果

```css
/* 缩小到50% */
.scale-50 {
  transform: scale(0.5);
}

/* 缩小到25% */
.scale-25 {
  transform: scale(0.25);
}

/* 缩小到75% */
.scale-75 {
  transform: scale(0.75);
}
```

### 单轴缩放

```css
/* 仅水平缩放 */
.scale-x-only {
  transform: scale(2, 1);
}

/* 仅垂直缩放 */
.scale-y-only {
  transform: scale(1, 2);
}

/* 水平翻转 */
.flip-x {
  transform: scale(-1, 1);
}

/* 垂直翻转 */
.flip-y {
  transform: scale(1, -1);
}

/* 水平和垂直翻转 */
.flip-both {
  transform: scale(-1, -1);
}
```

### 悬停效果

```css
/* 悬停时放大 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: scale(1.1);
}

/* 悬停时缩小 */
.icon {
  transition: transform 0.3s;
}

.icon:hover {
  transform: scale(0.9);
}
```

### 动画效果

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animated {
  animation: pulse 2s infinite;
}
```

### 等价变换

```css
/* 等价于 scaleX(sx) 和 scaleY(sy) */
.scale {
  transform: scale(2, 1.5);
}

.scale-x-y {
  transform: scaleX(2) scaleY(1.5);
}

/* 等价于 scale3d(sx, sy, 1) */
.scale-3d {
  transform: scale3d(2, 1.5, 1);
}
```

### 缩放图片

```css
/* 缩放图片 */
.image-scale {
  transform: scale(0.8);
}

/* 缩放图片1.5倍 */
.image-scale-1-5 {
  transform: scale(1.5);
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

- [MDN: scale()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale)
- [W3C: CSS Transforms Module Level 1 - scale()](https://www.w3.org/TR/css-transforms-1/#scale-function)
