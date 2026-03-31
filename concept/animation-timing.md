# 动画计时（Animation Timing）

动画计时控制动画的速度曲线。

## animation-timing-function 属性

```css
.element {
  animation-timing-function: ease;        /* 缓动（默认） */
  animation-timing-function: ease-in;     /* 加速 */
  animation-timing-function: ease-out;    /* 减速 */
  animation-timing-function: ease-in-out; /* 加速后减速 */
  animation-timing-function: linear;      /* 线性 */
  animation-timing-function: step-start;  /* 跳到开始 */
  animation-timing-function: step-end;    /* 跳到结束 */
  animation-timing-function: steps(n, start/end); /* 阶梯 */
  animation-timing-function: cubic-bezier(x1, y1, x2, y2); /* 贝塞尔曲线 */
}
```

### 常用计时函数

#### 1. ease

```css
.ease {
  animation-timing-function: ease;
  /* 等价于 cubic-bezier(0.25, 0.1, 0.25, 1) */
}
```

#### 2. ease-in

```css
.ease-in {
  animation-timing-function: ease-in;
  /* 等价于 cubic-bezier(0.42, 0, 1, 1) */
}
```

#### 3. ease-out

```css
.ease-out {
  animation-timing-function: ease-out;
  /* 等价于 cubic-bezier(0, 0, 0.58, 1) */
}
```

#### 4. ease-in-out

```css
.ease-in-out {
  animation-timing-function: ease-in-out;
  /* 等价于 cubic-bezier(0.42, 0, 0.58, 1) */
}
```

#### 5. linear

```css
.linear {
  animation-timing-function: linear;
  /* 等价于 cubic-bezier(0, 0, 1, 1) */
}
```

#### 6. steps

```css
.steps {
  animation-timing-function: steps(5, end);
  /* 5 个阶梯，跳到结束 */
}
```

#### 7. cubic-bezier

```css
.cubic {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /* 自定义贝塞尔曲线 */
}
```

### animation-timing-function 示例

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

## transition-timing-function

```css
.element {
  transition-timing-function: ease;
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: linear;
  transition-timing-function: steps(n, start/end);
  transition-timing-function: cubic-bezier(x1, y1, x2, y2);
}
```

## 最佳实践

1. **使用 ease** - 自然的动画效果
2. **使用 cubic-bezier** - 自定义动画效果
3. **避免过度使用** - 性能影响
4. **考虑用户体验** - 合适的动画速度

## 相关链接

- [MDN: animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)
- [W3C: CSS Animations](https://www.w3.org/TR/css-animations-1/)