# translateY()

`translateY()` 函数用于定义绕Y轴的 2D 位移变换，是 `transform` 属性的变换函数之一。

## 语法

```css
/* 基本语法 */
translateY(ty)

/* 参数说明 */
translateY(50px)   /* 向下位移50px */
translateY(-50px)  /* 向上位移50px */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `translateY(0px)`（无位移） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 支持 |

## 属性值

### ty（Y轴位移）

定义垂直方向的位移量：

- **正值**：向下移动
- **负值**：向上移动
- **单位**：`px`、`em`、`rem`、`%`、`pt`、`cm`、`mm`、`in` 等长度单位

## 示例

### 基本位移

```css
/* 向下位移50px */
.translate-y-50 {
  transform: translateY(50px);
}

/* 向上位移50px */
.translate-y-50-up {
  transform: translateY(-50px);
}

/* 向下位移100px */
.translate-y-100 {
  transform: translateY(100px);
}
```

### 使用百分比

```css
/* 位移为元素高度的50% */
.translate-percent {
  transform: translateY(50%);
}

/* 位移为元素高度的-50% */
.translate-percent-up {
  transform: translateY(-50%);
}
```

### 悬停效果

```css
/* 悬停时位移 */
.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: translateY(10px);
}

/* 悬停时位移50px */
.icon {
  transition: transform 0.5s;
}

.icon:hover {
  transform: translateY(50px);
}
```

### 动画效果

```css
@keyframes translate-y-anim {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animated {
  animation: translate-y-anim 2s infinite;
}
```

### 等价变换

```css
/* 等价于 translate(0, ty) */
.translate {
  transform: translateY(50px);
}

.translate-x-0 {
  transform: translate(0, 50px);
}

/* 等价于 translate3d(0, ty, 0) */
.translate3d {
  transform: translate3d(0, 50px, 0);
}
```

### 居中定位

```css
/* 绝对定位居中 */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
```

### 位移图片

```css
/* 位移图片 */
.image-translate {
  transform: translateY(20px);
}

/* 位移图片50px */
.image-translate-50 {
  transform: translateY(50px);
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

- [MDN: translateY()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translateY)
- [W3C: CSS Transforms Module Level 1 - translateY()](https://www.w3.org/TR/css-transforms-1/#translateY-function)
