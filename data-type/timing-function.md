# 计时函数（Timing Function）

计时函数是 CSS 中用于表示动画速度曲线的数据类型。

## 计时函数类型

### 1. 关键词计时函数

```css
/* ease - 缓动（默认） */
.element {
  animation-timing-function: ease;
}

/* ease-in - 加速 */
.element {
  animation-timing-function: ease-in;
}

/* ease-out - 减速 */
.element {
  animation-timing-function: ease-out;
}

/* ease-in-out - 加速后减速 */
.element {
  animation-timing-function: ease-in-out;
}

/* linear - 线性 */
.element {
  animation-timing-function: linear;
}
```

### 2. steps() 计时函数

```css
/* steps(n, start) - n 个阶梯，跳到开始 */
.element {
  animation-timing-function: steps(5, start);
}

/* steps(n, end) - n 个阶梯，跳到结束 */
.element {
  animation-timing-function: steps(5, end);
}

/* steps(n) - n 个阶梯，默认跳到结束 */
.element {
  animation-timing-function: steps(5);
}
```

### 3. cubic-bezier() 计时函数

```css
/* cubic-bezier(x1, y1, x2, y2) - 自定义贝塞尔曲线 */
.element {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 计时函数应用

### 1. animation-timing-function

```css
/* 缓动动画 */
.animate-ease {
  animation-timing-function: ease;
}

/* 加速动画 */
.animate-ease-in {
  animation-timing-function: ease-in;
}

/* 减速动画 */
.animate-ease-out {
  animation-timing-function: ease-out;
}

/* 加速后减速动画 */
.animate-ease-in-out {
  animation-timing-function: ease-in-out;
}

/* 线性动画 */
.animate-linear {
  animation-timing-function: linear;
}

/* 阶梯动画 */
.animate-steps {
  animation-timing-function: steps(5);
}

/* 自定义贝塞尔曲线动画 */
.animate-cubic {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 2. transition-timing-function

```css
/* 缓动过渡 */
.transition-ease {
  transition-timing-function: ease;
}

/* 加速过渡 */
.transition-ease-in {
  transition-timing-function: ease-in;
}

/* 减速过渡 */
.transition-ease-out {
  transition-timing-function: ease-out;
}

/* 加速后减速过渡 */
.transition-ease-in-out {
  transition-timing-function: ease-in-out;
}

/* 线性过渡 */
.transition-linear {
  transition-timing-function: linear;
}

/* 阶梯过渡 */
.transition-steps {
  transition-timing-function: steps(5);
}

/* 自定义贝塞尔曲线过渡 */
.transition-cubic {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 计时函数示例

```css
/* 缓动动画 */
.animate-ease {
  animation: move 2s ease;
}

/* 加速动画 */
.animate-ease-in {
  animation: move 2s ease-in;
}

/* 减速动画 */
.animate-ease-out {
  animation: move 2s ease-out;
}

/* 加速后减速动画 */
.animate-ease-in-out {
  animation: move 2s ease-in-out;
}

/* 线性动画 */
.animate-linear {
  animation: move 2s linear;
}

/* 阶梯动画 */
.animate-steps {
  animation: move 2s steps(5);
}

/* 自定义贝塞尔曲线动画 */
.animate-cubic {
  animation: move 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 最佳实践

1. **使用关键词** - 简单的动画效果
2. **使用 cubic-bezier** - 自定义动画效果
3. **避免过度使用** - 性能影响
4. **考虑用户体验** - 合适的动画速度

## 相关链接

- [MDN: 计时函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
- [W3C: CSS Animations](https://www.w3.org/TR/css-animations-1/)
- [CSS Easing Animation Tool](https://cubic-bezier.com/)