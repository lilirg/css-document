# translate()

`translate()` 函数用于定义一个 2D 位移变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
translate(tx, ty)

/* 参数说明 */
translate(50px)        /* 仅位移x轴 */
translate(50px, 30px)  /* 同时位移x轴和y轴 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `translate(0px, 0px)`（无位移） |
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

## 示例

### 基本位移

```css
/* 仅位移x轴 */
.translate-x {
  transform: translate(50px);
}

/* 仅位移y轴 */
.translate-y {
  transform: translate(0, 50px);
}

/* 同时位移x轴和y轴 */
.translate-both {
  transform: translate(50px, 30px);
}
```

### 使用百分比

```css
/* 位移为元素宽度的50% */
.translate-percent {
  transform: translate(50%);
}

/* 位移为元素高度的50% */
.translate-percent-y {
  transform: translate(0, 50%);
}

/* 位移为元素宽高的50% */
.translate-percent-both {
  transform: translate(50%, 50%);
}
```

### 悬停效果

```css
/* 悬停时位移 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: translate(10px, 10px);
}

/* 悬停时位移50px */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: translate(50px, 50px);
}
```

### 动画效果

```css
@keyframes translate-anim {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(50px, 30px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.animated {
  animation: translate-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 translateX(tx) 和 translateY(ty) */
.translate {
  transform: translate(50px, 30px);
}

.translate-x-y {
  transform: translateX(50px) translateY(30px);
}

/* 等价于 translate3d(tx, ty, 0) */
.translate3d {
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
  transform: translate(-50%, -50%);
}
```

### 位移图片

```css
/* 位移图片 */
.image-translate {
  transform: translate(20px, 20px);
}

/* 位移图片50px */
.image-translate-50 {
  transform: translate(50px, 50px);
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

- [MDN: translate()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate)
- [W3C: CSS Transforms Module Level 1 - translate()](https://www.w3.org/TR/css-transforms-1/#translate-function)
