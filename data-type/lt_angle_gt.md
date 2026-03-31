# angle

`angle` 数据类型表示角度值，常用于旋转、渐变等属性。

## 语法

```css
/* 度数 */
.element {
  transform: rotate(45deg);
}

/* 弧度 */
.element {
  transform: rotate(1.5708rad);
}

/* 梯度（百分之一圈） */
.element {
  transform: rotate(50grad);
}

/* 圈（一圈 = 360度） */
.element {
  transform: rotate(0.25turn);
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 单位

| 单位 | 描述 | 换算 |
| :--- | :--- |
| `deg` | 度（1 圈 = 360deg） | 90deg = 1/4 圈 |
| `rad` | 弧度（1 圈 = 2π rad） | π rad = 180deg |
| `grad` | 梯度（1 圈 = 400grad） | 100grad = 90deg |
| `turn` | 圈（1 圈 = 1turn） | 0.5turn = 180deg |

## 示例

### 旋转

```css
/* 旋转 45 度 */
.element {
  transform: rotate(45deg);
}

/* 旋转半圈 */
.element {
  transform: rotate(0.5turn);
}

/* 旋转 90 度（弧度） */
.element {
  transform: rotate(1.5708rad);
}
```

### 渐变方向

```css
/* 线性渐变 - 从左到右 */
.element {
  background: linear-gradient(90deg, red, blue);
}

/* 线性渐变 - 从上到下 */
.element {
  background: linear-gradient(180deg, red, blue);
}

/* 线性渐变 - 对角线 */
.element {
  background: linear-gradient(45deg, red, blue);
}

/* 径向渐变 */
.element {
  background: radial-gradient(circle, red, blue);
}
```

### clip-path

```css
/* 多边形 */
.element {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* 旋转多边形 */
.element {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

### animation-timing-function

```css
/* 贝塞尔曲线 */
.element {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 9+ |

## 相关链接

- [MDN Web Docs: angle](https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#angles)
