# repeating-linear-gradient()

`repeating-linear-gradient()` 函数用于创建重复的线性渐变图像，颜色沿着一条直线平滑过渡并重复。

## 语法

```css
/* 基本语法 */
repeating-linear-gradient(direction, color-stop1, color-stop2, ...)

/* 方向参数 */
repeating-linear-gradient(to right, red, blue)     /* 从左到右 */
repeating-linear-gradient(to bottom, red, blue)    /* 从上到下 */
repeating-linear-gradient(45deg, red, blue)        /* 45度角 */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用 HTML 元素 | 所有元素 |
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

### 基本重复渐变

```css
/* 从左到右重复 */
.gradient-left-right {
  background: repeating-linear-gradient(to right, red, blue 50px);
}

/* 从上到下重复 */
.gradient-top-bottom {
  background: repeating-linear-gradient(to bottom, red, blue 50px);
}

/* 45度角重复 */
.gradient-45deg {
  background: repeating-linear-gradient(45deg, red, blue 50px);
}
```

### 多色重复渐变

```css
/* 三色重复渐变 */
.tricolor {
  background: repeating-linear-gradient(to right, 
    red 0px, 
    yellow 25px, 
    blue 50px
  );
}

/* 四色重复渐变 */
.four-color {
  background: repeating-linear-gradient(45deg, 
    red 0px, 
    green 25px, 
    blue 50px, 
    purple 75px
  );
}
```

### 指定位置

```css
/* 指定颜色位置 */
.custom-stops {
  background: repeating-linear-gradient(to right, 
    red 0%, 
    yellow 25%, 
    green 50%, 
    blue 75%, 
    purple 100%
  );
}

/* 重复颜色 */
.repeating {
  background: repeating-linear-gradient(to right, 
    red 0%, 
    red 50%, 
    blue 50%, 
    blue 100%
  );
}
```

### 条纹效果

```css
/* 水平条纹 */
.horizontal-stripes {
  background: repeating-linear-gradient(to bottom, 
    red 0px, 
    red 10px, 
    blue 10px, 
    blue 20px
  );
}

/* 垂直条纹 */
.vertical-stripes {
  background: repeating-linear-gradient(to right, 
    red 0px, 
    red 10px, 
    blue 10px, 
    blue 20px
  );
}

/* 斜条纹 */
.diagonal-stripes {
  background: repeating-linear-gradient(45deg, 
    red 0px, 
    red 10px, 
    blue 10px, 
    blue 20px
  );
}
```

### 透明渐变

```css
/* 从不透明到透明 */
.fade-out {
  background: repeating-linear-gradient(to right, 
    rgba(255, 0, 0, 1), 
    rgba(255, 0, 0, 0) 50px
  );
}

/* 透明渐变 */
.transparent {
  background: repeating-linear-gradient(to right, 
    hsla(0, 100%, 50%, 1), 
    hsla(0, 100%, 50%, 0) 50px
  );
}
```

### 角度渐变

```css
/* 0度（从下到上） */
.angle-0 {
  background: repeating-linear-gradient(0deg, red, blue 50px);
}

/* 90度（从左到右） */
.angle-90 {
  background: repeating-linear-gradient(90deg, red, blue 50px);
}

/* 180度（从上到下） */
.angle-180 {
  background: repeating-linear-gradient(180deg, red, blue 50px);
}

/* 270度（从右到左） */
.angle-270 {
  background: repeating-linear-gradient(270deg, red, blue 50px);
}
```

### 棋盘效果

```css
/* 棋盘格 */
.checkerboard {
  background: repeating-linear-gradient(45deg, 
    #606dbc 0px, 
    #606dbc 10px, 
    #465298 10px, 
    #465298 20px
  );
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 16+ | 完全支持 |
| Firefox | 16+ | 完全支持 |
| Safari | 6.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 10+ | 完全支持 |

## 相关链接

- [MDN: repeating-linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient)
- [W3C: CSS Images Module Level 3 - repeating-linear-gradient()](https://www.w3.org/TR/css-images-3/#repeating-linear-gradients)
