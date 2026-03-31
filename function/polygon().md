# polygon()

`polygon()` 函数用于定义一个多边形的形状，通常与 `shape-outside` 属性一起使用，以实现文本环绕多边形元素的效果。

## 语法

```css
/* 基本语法 */
polygon(x1 y1, x2 y2, x3 y3, ...)

/* 多边形参数 */
polygon(50% 0%, 0% 100%, 100% 100%)  /* 三角形 */
polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)  /* 梯形 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`（矩形） |
| 适用HTML元素 | 所有元素（主要用于浮动元素） |
| 动画 | 支持 |

## 属性值

`polygon()` 函数接受至少 3 对坐标值，每对坐标定义多边形的一个顶点：

### 坐标格式

每对坐标包含：
- **x**：水平位置（`left`、`center`、`right` 或百分比/长度）
- **y**：垂直位置（`top`、`center`、`bottom` 或百分比/长度）

### 坐标单位

- **百分比**：相对于包含块的百分比（如 `50%`）
- **长度**：绝对长度值（如 `50px`、`10em`）
- **关键字**：`left`、`center`、`right`、`top`、`bottom`

## 示例

### 三角形

```css
/* 向上的三角形 */
.triangle-up {
  shape-outside: polygon(50% 0%, 0% 100%, 100% 100%);
  float: left;
  width: 200px;
  height: 200px;
  background: #e74c3c;
}

/* 向下的三角形 */
.triangle-down {
  shape-outside: polygon(0% 0%, 100% 0%, 50% 100%);
  float: left;
  width: 200px;
  height: 200px;
  background: #3498db;
}

/* 向左的三角形 */
.triangle-left {
  shape-outside: polygon(100% 0%, 100% 100%, 0% 50%);
  float: left;
  width: 200px;
  height: 200px;
  background: #9b59b6;
}

/* 向右的三角形 */
.triangle-right {
  shape-outside: polygon(0% 0%, 100% 50%, 0% 100%);
  float: left;
  width: 200px;
  height: 200px;
  background: #f1c40f;
}
```

```html
<div class="triangle-up"></div>
<p>这段文字将环绕三角形元素排列...</p>
```

### 梯形

```css
/* 向上的梯形 */
.trapezoid {
  shape-outside: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
  float: left;
  width: 200px;
  height: 150px;
  background: #1abc9c;
}
```

### 平行四边形

```css
/* 向右倾斜的平行四边形 */
.parallelogram {
  shape-outside: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
  float: left;
  width: 200px;
  height: 150px;
  background: #34495e;
}
```

### 六边形

```css
/* 正六边形 */
.hexagon {
  shape-outside: polygon(
    25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%
  );
  float: left;
  width: 200px;
  height: 200px;
  background: #e67e22;
}
```

### 星形

```css
/* 五角星 */
.star {
  shape-outside: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
    50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
  float: left;
  width: 200px;
  height: 200px;
  background: #c0392b;
}
```

### 圆形近似

```css
/* 圆形近似（16边形） */
.circle-approx {
  shape-outside: polygon(
    50% 0%, 69% 10%, 85% 25%, 95% 45%, 100% 50%,
    95% 55%, 85% 75%, 69% 90%, 50% 100%, 31% 90%,
    15% 75%, 5% 55%, 0% 50%, 5% 45%, 15% 25%, 31% 10%
  );
  float: left;
  width: 200px;
  height: 200px;
  background: #27ae60;
}
```

### 与 shape-margin 配合使用

```css
/* 多边形加上外边距 */
.polygon-with-margin {
  shape-outside: polygon(50% 0%, 0% 100%, 100% 100%);
  shape-margin: 10px;
  float: left;
  width: 200px;
  height: 200px;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 37+ | 完全支持 |
| Firefox | 62+ | 完全支持 |
| Safari | 7+ | 完全支持 |
| Edge | 79+ | 完全支持 |
| IE | 不支持 | 无 |

## 相关链接

- [MDN: polygon()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside#polygon)
- [W3C: CSS Shapes Module Level 1 - polygon()](https://www.w3.org/TR/css-shapes-1/#polygon-function)
