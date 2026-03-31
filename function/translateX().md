# translateX()

`translateX()` 函数用于定义绕X轴的 2D 位移变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
translateX(tx)

/* 参数说明 */
translateX(50px)   /* 向右位移50px */
translateX(-50px)  /* 向左位移50px */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `translateX(0px)`（无位移） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### tx（X轴位移）

定义水平方向的位移量：

- **正值**：向右移动
- **负值**：向左移动
- **单位**：`px`、`em`、`rem`、`%`、`pt`、`cm`、`mm`、`in` 等长度单位

## 示例

### 基本位移

```css
/* 向右位移50px */
.translate-x-50 {
  transform: translateX(50px);
}

/* 向左位移50px */
.translate-x-50-left {
  transform: translateX(-50px);
}

/* 向右位移100px */
.translate-x-100 {
  transform: translateX(100px);
}
```

### 使用百分比

```css
/* 位移为元素宽度的50% */
.translate-percent {
  transform: translateX(50%);
}

/* 位移为元素宽度的-50% */
.translate-percent-left {
  transform: translateX(-50%);
}
```

### 悬停效果

```css
/* 悬停时位移 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: translateX(10px);
}

/* 悬停时位移50px */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: translateX(50px);
}
```

### 动画效果

```css
@keyframes translate-x-anim {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0px);
  }
}

.animated {
  animation: translate-x-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 translate(tx, 0) */
.translate {
  transform: translateX(50px);
}

.translate-y-0 {
  transform: translate(50px, 0);
}

/* 等价于 translate3d(tx, 0, 0) */
.translate3d {
  transform: translate3d(50px, 0, 0);
}
```

### 居中定位

```css
/* 绝对定位居中 */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
```

### 位移图片

```css
/* 位移图片 */
.image-translate {
  transform: translateX(20px);
}

/* 位移图片50px */
.image-translate-50 {
  transform: translateX(50px);
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

- [MDN: translateX()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translateX)
- [W3C: CSS Transforms Module Level 1 - translateX()](https://www.w3.org/TR/css-transforms-1/#translateX-function)
