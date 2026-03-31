# ellipse()

`ellipse()` 函数用于定义一个椭圆形的形状，通常与 `shape-outside` 属性一起使用，以实现文本环绕椭圆形元素的效果。

## 语法

```css
/* 基本语法 */
ellipse(radius-x radius-y at position)

/* 椭圆参数 */
ellipse(100px 50px at 50% 50%)  /* x半径100px，y半径50px，中心点在(50%, 50%) */
ellipse(50% 30% at center)      /* x半径50%，y半径30%，中心点在中心 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `ellipse(50% 50% at 50% 50%)` |
| 适用HTML元素 | 所有元素（主要用于浮动元素） |
| 动画 | 支持 |

## 属性值

### radius-x（x轴半径）

定义椭圆在水平方向的半径，可以是以下值：

- `closest-side`：圆心到最近水平边的距离
- `farthest-side`：圆心到最远水平边的距离
- `<length>`：绝对长度值（如 `100px`、`5em`）
- `<percentage>`：相对于包含块宽度的百分比（如 `50%`）

### radius-y（y轴半径）

定义椭圆在垂直方向的半径，可以是以下值：

- `closest-side`：圆心到最近垂直边的距离
- `farthest-side`：圆心到最远垂直边的距离
- `<length>`：绝对长度值（如 `50px`、`3em`）
- `<percentage>`：相对于包含块高度的百分比（如 `30%`）

### position（椭圆中心位置）

定义椭圆中心的位置，格式为 `at x y`：

- `x`：水平位置（`left`、`center`、`right` 或百分比/长度）
- `y`：垂直位置（`top`、`center`、`bottom` 或百分比/长度）

## 示例

### 基本椭圆

```css
/* 椭圆 x半径100px，y半径50px，中心点在中心 */
.shape {
  shape-outside: ellipse(100px 50px at center);
  float: left;
  width: 200px;
  height: 100px;
  background: #e74c3c;
  border-radius: 50%;
}
```

```html
<div class="shape"></div>
<p>这段文字将环绕椭圆形元素排列...</p>
```

### 百分比半径

```css
/* 椭圆 x半径40%，y半径30%，中心点在中心 */
.ellipse {
  shape-outside: ellipse(40% 30% at 50% 50%);
  float: left;
  width: 250px;
  height: 150px;
  border-radius: 50%;
}
```

### 圆心偏移

```css
/* 椭圆圆心在左上角 */
.offset-ellipse {
  shape-outside: ellipse(80px 40px at left top);
  float: left;
  width: 200px;
  height: 100px;
  border-radius: 50%;
}
```

### closest-side 和 farthest-side

```css
/* x半径为到最近水平边的距离，y半径为到最近垂直边的距离 */
.closest {
  shape-outside: ellipse(closest-side closest-side at 20% 30%);
  float: left;
  width: 300px;
  height: 200px;
}

/* x半径为到最远水平边的距离，y半径为到最远垂直边的距离 */
.farthest {
  shape-outside: ellipse(farthest-side farthest-side at 80% 70%);
  float: left;
  width: 300px;
  height: 200px;
}
```

### 与 shape-margin 配合使用

```css
/* 椭圆加上外边距 */
.ellipse-with-margin {
  shape-outside: ellipse(100px 50px at center);
  shape-margin: 15px;
  float: left;
  width: 200px;
  height: 100px;
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

- [MDN: ellipse()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside#ellipse)
- [W3C: CSS Shapes Module Level 1 - ellipse()](https://www.w3.org/TR/css-shapes-1/#ellipse-function)
