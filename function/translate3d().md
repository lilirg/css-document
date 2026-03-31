# translate3d()

`translate3d()` 函数用于定义一个 3D 位移变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
translate3d(tx, ty, tz)

/* 参数说明 */
translate3d(50px)        /* 仅位移x轴 */
translate3d(50px, 30px)  /* 位移x轴和y轴 */
translate3d(50px, 30px, 20px)  /* 同时位移x轴、y轴和z轴 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `translate3d(0px, 0px, 0px)`（无位移） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### tx（X轴位移）

定义水平方向的位移量：

- **正值**：向右移动
- **负值**：向左移动
- **单位**：`px`、`em`、`rem`、`%`、`pt`、`cm`、`mm`、`in` 等长度单位

### ty（Y轴位移）

定义垂直方向的位移量：

- **正值**：向下移动
- **负值**：向上移动
- **单位**：`px`、`em`、`rem`、`%`、`pt`、`cm`、`mm`、`in` 等长度单位

### tz（Z轴位移）

定义深度方向的位移量：

- **正值**：向前移动（靠近观察者）
- **负值**：向后移动（远离观察者）
- **单位**：`px`、`em`、`rem`、`pt`、`cm`、`mm`、`in` 等长度单位

## 示例

### 基本位移

```css
/* 仅位移x轴 */
.translate-x {
  transform: translate3d(50px, 0, 0);
}

/* 仅位移y轴 */
.translate-y {
  transform: translate3d(0, 50px, 0);
}

/* 仅位移z轴 */
.translate-z {
  transform: translate3d(0, 0, 50px);
}

/* 同时位移x轴、y轴和z轴 */
.translate-both {
  transform: translate3d(50px, 30px, 20px);
}
```

### 悬停效果

```css
/* 悬停时位移 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: translate3d(10px, 10px, 10px);
}

/* 悬停时位移50px */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: translate3d(50px, 50px, 50px);
}
```

### 动画效果

```css
@keyframes translate-3d-anim {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  50% {
    transform: translate3d(50px, 30px, 20px);
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
  }
}

.animated {
  animation: translate-3d-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 translateX(tx)、translateY(ty) 和 translateZ(tz) */
.translate {
  transform: translate3d(50px, 30px, 20px);
}

.translate-x-y-z {
  transform: translateX(50px) translateY(30px) translateZ(20px);
}

/* 等价于 translate(tx, ty)（z轴为0） */
.translate-2d {
  transform: translate(50px, 30px);
}

.translate3d-2d {
  transform: translate3d(50px, 30px, 0);
}
```

### 居中定位

```css
/* 绝对定位居中 */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
```

### 位移图片

```css
/* 位移图片 */
.image-translate {
  transform: translate3d(20px, 20px, 0);
}

/* 位移图片50px */
.image-translate-50 {
  transform: translate3d(50px, 50px, 0);
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

- [MDN: translate3d()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate3d)
- [W3C: CSS Transforms Module Level 1 - translate3d()](https://www.w3.org/TR/css-transforms-1/#translate3d-function)
