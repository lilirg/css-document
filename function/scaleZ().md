# scaleZ()

`scaleZ()` 函数用于定义绕Z轴的 3D 缩放变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
scaleZ(sz)

/* 参数说明 */
scaleZ(2)        /* 深度放大2倍 */
scaleZ(0.5)      /* 深度缩小到50% */
scaleZ(-1)       /* 深度翻转 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `scaleZ(1)`（无缩放） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### sz（Z轴缩放因子）

定义深度方向的缩放比例：

- `1`：无缩放
- `>1`：放大
- `<1`：缩小
- `0`：压缩为线
- 负值：镜像翻转

## 示例

### 基本缩放

```css
/* 深度放大2倍 */
.scale-z-2 {
  transform: scaleZ(2);
}

/* 深度缩小到50% */
.scale-z-50 {
  transform: scaleZ(0.5);
}

/* 深度翻转 */
.flip-z {
  transform: scaleZ(-1);
}
```

### 放大效果

```css
/* 放大2倍 */
.scale-2x {
  transform: scaleZ(2);
}

/* 放大3倍 */
.scale-3x {
  transform: scaleZ(3);
}

/* 放大1.5倍 */
.scale-1-5x {
  transform: scaleZ(1.5);
}
```

### 缩小效果

```css
/* 缩小到50% */
.scale-50 {
  transform: scaleZ(0.5);
}

/* 缩小到25% */
.scale-25 {
  transform: scaleZ(0.25);
}

/* 缩小到75% */
.scale-75 {
  transform: scaleZ(0.75);
}
```

### 悬停效果

```css
/* 悬停时放大 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: scaleZ(1.1);
}

/* 悬停时缩小 */
.icon {
  transition: transform 0.3s;
}

.icon:hover {
  transform: scaleZ(0.9);
}
```

### 动画效果

```css
@keyframes pulse-z {
  0% {
    transform: scaleZ(1);
  }
  50% {
    transform: scaleZ(1.2);
  }
  100% {
    transform: scaleZ(1);
  }
}

.animated {
  animation: pulse-z 2s infinite;
}
```

### 等价变换

```css
/* 等价于 scale3d(1, 1, sz) */
.scale3d {
  transform: scaleZ(2);
}

.scale3d-1-1-sz {
  transform: scale3d(1, 1, 2);
}
```

### 缩放图片

```css
/* 缩放图片 */
.image-scale {
  transform: scaleZ(0.8);
}

/* 缩放图片1.5倍 */
.image-scale-1-5 {
  transform: scaleZ(1.5);
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

- [MDN: scaleZ()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scaleZ)
- [W3C: CSS Transforms Module Level 1 - scaleZ()](https://www.w3.org/TR/css-transforms-1/#scaleZ-function)
