# scaleY()

`scaleY()` 函数用于定义绕Y轴的 2D 缩放变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
scaleY(sy)

/* 参数说明 */
scaleY(2)        /* 垂直放大2倍 */
scaleY(0.5)      /* 垂直缩小到50% */
scaleY(-1)       /* 垂直翻转 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `scaleY(1)`（无缩放） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

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
/* 垂直放大2倍 */
.scale-y-2 {
  transform: scaleY(2);
}

/* 垂直缩小到50% */
.scale-y-50 {
  transform: scaleY(0.5);
}

/* 垂直翻转 */
.flip-y {
  transform: scaleY(-1);
}
```

### 放大效果

```css
/* 放大2倍 */
.scale-2x {
  transform: scaleY(2);
}

/* 放大3倍 */
.scale-3x {
  transform: scaleY(3);
}

/* 放大1.5倍 */
.scale-1-5x {
  transform: scaleY(1.5);
}
```

### 缩小效果

```css
/* 缩小到50% */
.scale-50 {
  transform: scaleY(0.5);
}

/* 缩小到25% */
.scale-25 {
  transform: scaleY(0.25);
}

/* 缩小到75% */
.scale-75 {
  transform: scaleY(0.75);
}
```

### 悬停效果

```css
/* 悬停时放大 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: scaleY(1.1);
}

/* 悬停时缩小 */
.icon {
  transition: transform 0.3s;
}

.icon:hover {
  transform: scaleY(0.9);
}
```

### 动画效果

```css
@keyframes pulse-y {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.2);
  }
  100% {
    transform: scaleY(1);
  }
}

.animated {
  animation: pulse-y 2s infinite;
}
```

### 等价变换

```css
/* 等价于 scale(1, sy) */
.scale {
  transform: scaleY(2);
}

.scale-x-1 {
  transform: scale(1, 2);
}

/* 等价于 scale3d(1, sy, 1) */
.scale3d {
  transform: scale3d(1, 2, 1);
}
```

### 缩放图片

```css
/* 缩放图片 */
.image-scale {
  transform: scaleY(0.8);
}

/* 缩放图片1.5倍 */
.image-scale-1-5 {
  transform: scaleY(1.5);
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

- [MDN: scaleY()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scaleY)
- [W3C: CSS Transforms Module Level 1 - scaleY()](https://www.w3.org/TR/css-transforms-1/#scaleY-function)
