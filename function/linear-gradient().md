# linear-gradient()

`linear-gradient()` 函数用于创建线性渐变图像，颜色沿着一条直线平滑过渡。

## 语法

```css
/* 基本语法 */
linear-gradient(direction, color-stop1, color-stop2, ...)

/* 方向参数 */
linear-gradient(to right, red, blue)     /* 从左到右 */
linear-gradient(to bottom, red, blue)    /* 从上到下 */
linear-gradient(45deg, red, blue)        /* 45度角 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（当渐变参数为数值时） |

## 属性值

### direction（方向）

定义渐变的方向，可以是以下值：

- **关键字**：
  - `to right`：从左到右
  - `to left`：从右到左
  - `to bottom`：从上到下
  - `to top`：从下到上
- **角度**：
  - `0deg`：从下到上
  - `90deg`：从左到右
  - `180deg`：从上到下
  - `270deg`：从右到左

### color-stop（颜色停止点）

定义渐变中的颜色和位置，格式为：

- **颜色值**：`red`、`#ff0000`、`rgb(255, 0, 0)` 等
- **颜色值 + 位置**：`red 50%`、`blue 100px` 等

## 示例

### 基本线性渐变

```css
/* 从左到右 */
.gradient-left-right {
  background: linear-gradient(to right, red, blue);
}

/* 从上到下 */
.gradient-top-bottom {
  background: linear-gradient(to bottom, red, blue);
}

/* 45度角 */
.gradient-45deg {
  background: linear-gradient(45deg, red, blue);
}
```

### 多色渐变

```css
/* 三色渐变 */
.tricolor {
  background: linear-gradient(to right, red, yellow, blue);
}

/* 四色渐变 */
.four-color {
  background: linear-gradient(45deg, red, green, blue, purple);
}
```

### 指定位置

```css
/* 指定颜色位置 */
.custom-stops {
  background: linear-gradient(to right, 
    red 0%, 
    yellow 25%, 
    green 50%, 
    blue 75%, 
    purple 100%
  );
}

/* 重复颜色 */
.repeating {
  background: linear-gradient(to right, 
    red 0%, 
    red 50%, 
    blue 50%, 
    blue 100%
  );
}
```

### 透明渐变

```css
/* 从不透明到透明 */
.fade-out {
  background: linear-gradient(to right, 
    rgba(255, 0, 0, 1), 
    rgba(255, 0, 0, 0)
  );
}

/* 透明渐变 */
.transparent {
  background: linear-gradient(to right, 
    hsla(0, 100%, 50%, 1), 
    hsla(0, 100%, 50%, 0)
  );
}
```

### 角度渐变

```css
/* 0度（从下到上） */
.angle-0 {
  background: linear-gradient(0deg, red, blue);
}

/* 90度（从左到右） */
.angle-90 {
  background: linear-gradient(90deg, red, blue);
}

/* 180度（从上到下） */
.angle-180 {
  background: linear-gradient(180deg, red, blue);
}

/* 270度（从右到左） */
.angle-270 {
  background: linear-gradient(270deg, red, blue);
}
```

### 径向渐变模拟

```css
/* 圆形渐变 */
.radial-like {
  background: linear-gradient(circle, red, blue);
}

/* 椭圆渐变 */
.ellipse-like {
  background: linear-gradient(ellipse, red, blue);
}
```

### 文字渐变

```css
/* 文字渐变 */
.text-gradient {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  color: transparent;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 10+ | 完全支持 |
| Firefox | 3.6+ | 完全支持 |
| Safari | 5.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 10+ | 完全支持 |

## 相关链接

- [MDN: linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)
- [W3C: CSS Images Module Level 3 - linear-gradient()](https://www.w3.org/TR/css-images-3/#linear-gradients)
