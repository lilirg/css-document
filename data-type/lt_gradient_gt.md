# gradient

`gradient` 数据类型表示渐变值，用于创建平滑的颜色过渡效果。

## 语法

```css
/* 线性渐变 */
.element {
  background: linear-gradient(to right, red, blue);
}

/* 径向渐变 */
.element {
  background: radial-gradient(circle, red, blue);
}

/* 圆锥渐变 */
.element {
  background: conic-gradient(from 0deg, red, blue);
}

/* 重复线性渐变 */
.element {
  background: repeating-linear-gradient(to right, red, blue 10px);
}

/* 重复径向渐变 */
.element {
  background: repeating-radial-gradient(circle, red, blue 10px);
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分渐变） |

## 渐变类型

| 类型 | 描述 |
| :--- | :--- |
| `linear-gradient()` | 线性渐变 |
| `radial-gradient()` | 径向渐变 |
| `conic-gradient()` | 圆锥渐变 |
| `repeating-linear-gradient()` | 重复线性渐变 |
| `repeating-radial-gradient()` | 重复径向渐变 |

## 示例

### 线性渐变

```css
/* 从左到右 */
.element {
  background: linear-gradient(to right, red, blue);
}

/* 从上到下 */
.element {
  background: linear-gradient(to bottom, red, blue);
}

/* 对角线 */
.element {
  background: linear-gradient(to bottom right, red, blue);
}

/* 角度 */
.element {
  background: linear-gradient(45deg, red, blue);
}

/* 多色 stops */
.element {
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}
```

### 径向渐变

```css
/* 圆形 */
.element {
  background: radial-gradient(circle, red, blue);
}

/* 椭圆 */
.element {
  background: radial-gradient(ellipse, red, blue);
}

/* 位置 */
.element {
  background: radial-gradient(circle at 50% 50%, red, blue);
}

/* 大小 */
.element {
  background: radial-gradient(circle closest-side, red, blue);
}
```

### 圆锥渐变

```css
/* 从顶部开始 */
.element {
  background: conic-gradient(from 0deg, red, blue);
}

/* 多色 stops */
.element {
  background: conic-gradient(red, orange, yellow, green, blue, indigo, violet);
}
```

### 重复渐变

```css
/* 重复线性渐变 */
.element {
  background: repeating-linear-gradient(to right, red, blue 10px);
}

/* 重复径向渐变 */
.element {
  background: repeating-radial-gradient(circle, red, blue 10px);
}
```

### 实用示例

```css
/* 条纹背景 */
.element {
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
}

/* 圆形渐变按钮 */
.button {
  background: radial-gradient(circle, #007bff, #0056b3);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 10+ |
| Firefox | 3.6+ |
| Safari | 5.1+ |
| Edge | 12+ |
| IE | 10+ |

## 相关链接

- [MDN Web Docs: gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)
- [CSS Images Module Level 3](https://www.w3.org/TR/css-images-3/#gradients)
