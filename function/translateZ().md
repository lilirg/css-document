# translateZ()

`translateZ()` 函数用于定义绕Z轴的 3D 位移变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
translateZ(tz)

/* 参数说明 */
translateZ(50px)   /* 向前位移50px */
translateZ(-50px)  /* 向后位移50px */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `translateZ(0px)`（无位移） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### tz（Z轴位移）

定义深度方向的位移量：

- **正值**：向前移动（靠近观察者）
- **负值**：向后移动（远离观察者）
- **单位**：`px`、`em`、`rem`、`pt`、`cm`、`mm`、`in` 等长度单位

## 示例

### 基本位移

```css
/* 向前位移50px */
.translate-z-50 {
  transform: translateZ(50px);
}

/* 向后位移50px */
.translate-z-50-back {
  transform: translateZ(-50px);
}

/* 向前位移100px */
.translate-z-100 {
  transform: translateZ(100px);
}
```

### 悬停效果

```css
/* 悬停时位移 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: translateZ(10px);
}

/* 悬停时位移50px */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: translateZ(50px);
}
```

### 动画效果

```css
@keyframes translate-z-anim {
  0% {
    transform: translateZ(0px);
  }
  50% {
    transform: translateZ(50px);
  }
  100% {
    transform: translateZ(0px);
  }
}

.animated {
  animation: translate-z-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 translate3d(0, 0, tz) */
.translate3d {
  transform: translateZ(50px);
}

.translate3d-0-0-tz {
  transform: translate3d(0, 0, 50px);
}
```

### 位移图片

```css
/* 位移图片 */
.image-translate {
  transform: translateZ(20px);
}

/* 位移图片50px */
.image-translate-50 {
  transform: translateZ(50px);
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

- [MDN: translateZ()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translateZ)
- [W3C: CSS Transforms Module Level 1 - translateZ()](https://www.w3.org/TR/css-transforms-1/#translateZ-function)
