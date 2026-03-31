# circle()

`circle()` 函数用于定义一个圆形的形状，通常与 `shape-outside` 属性一起使用，以实现文本环绕圆形元素的效果。

## 语法

```css
/* 基本语法 */
circle(radius at position)

/* 圆形参数 */
circle(50% at 50% 50%)  /* 半径50%，中心点在(50%, 50%) */
circle(100px at center) /* 半径100px，中心点在中心 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `circle(50% at 50% 50%)` |
| 适用HTML元素 | 所有元素（主要用于浮动元素） |
| 动画 | 支持 |

## 属性值

### radius（半径）

定义圆的半径，可以是以下值：

- `closest-side`：圆心到最近边的距离
- `farthest-side`：圆心到最远边的距离
- `side`：圆心到最近的水平边和垂直边的距离中的较小值
- `<length>`：绝对长度值（如 `50px`、`10em`）
- `<percentage>`：相对于包含块的百分比（如 `50%`）

### position（圆心位置）

定义圆心的位置，格式为 `at x y`：

- `x`：水平位置（`left`、`center`、`right` 或百分比/长度）
- `y`：垂直位置（`top`、`center`、`bottom` 或百分比/长度）

## 示例

### 基本圆形

```css
/* 圆形半径为 100px，圆心在中心 */
.shape {
  shape-outside: circle(100px at center);
  float: left;
  width: 200px;
  height: 200px;
  background: #3498db;
  border-radius: 50%;
}
```

```html
<div class="shape"></div>
<p>这段文字将环绕圆形元素排列...</p>
```

### 百分比半径

```css
/* 圆形半径为容器的 50%，圆心在中心 */
.circle {
  shape-outside: circle(50% at 50% 50%);
  float: left;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
```

### 圆心偏移

```css
/* 圆心在右上角 */
.offset-circle {
  shape-outside: circle(100px at right top);
  float: left;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
```

### closest-side 和 farthest-side

```css
/* 半径为到最近边的距离 */
.closest {
  shape-outside: circle(closest-side at 20% 20%);
  float: left;
  width: 300px;
  height: 200px;
}

/* 半径为到最远边的距离 */
.farthest {
  shape-outside: circle(farthest-side at 80% 80%);
  float: left;
  width: 300px;
  height: 200px;
}
```

### 与 shape-margin 配合使用

```css
/* 圆形加上外边距 */
.circle-with-margin {
  shape-outside: circle(100px at center);
  shape-margin: 20px;
  float: left;
  width: 200px;
  height: 200px;
  border-radius: 50%;
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

- [MDN: circle()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside#circle)
- [W3C: CSS Shapes Module Level 1 - circle()](https://www.w3.org/TR/css-shapes-1/#circle-function)
