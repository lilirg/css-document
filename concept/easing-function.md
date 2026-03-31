# 缓动函数（Easing Function）

缓动函数控制动画的速度变化。

## 缓动函数类型

### 1. 关键词缓动函数

```css
/* ease - 缓动（默认） */
.ease {
  animation-timing-function: ease;
}

/* ease-in - 加速 */
.ease-in {
  animation-timing-function: ease-in;
}

/* ease-out - 减速 */
.ease-out {
  animation-timing-function: ease-out;
}

/* ease-in-out - 加速后减速 */
.ease-in-out {
  animation-timing-function: ease-in-out;
}

/* linear - 线性 */
.linear {
  animation-timing-function: linear;
}
```

### 2. steps 缓动函数

```css
/* steps(n, start) - n 个阶梯，跳到开始 */
.steps-start {
  animation-timing-function: steps(5, start);
}

/* steps(n, end) - n 个阶梯，跳到结束 */
.steps-end {
  animation-timing-function: steps(5, end);
}

/* steps(n) - n 个阶梯，默认跳到结束 */
.steps {
  animation-timing-function: steps(5);
}
```

### 3. cubic-bezier 缓动函数

```css
/* cubic-bezier(x1, y1, x2, y2) - 自定义贝塞尔曲线 */
.cubic {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 常用贝塞尔曲线 */
.bounce {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.elastic {
  animation-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
}

.back {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 缓动函数示例

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

## 缓动函数应用

### 1. 弹跳效果

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-100px); }
}

.bounce {
  animation: bounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 2. 弹性效果

```css
@keyframes elastic {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.elastic {
  animation: elastic 1s cubic-bezier(0.8, 0, 0.2, 1);
}
```

### 3. 回退效果

```css
@keyframes back {
  0% { transform: translateX(-100px); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.back {
  animation: back 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 最佳实践

1. **使用关键词** - 简单的动画效果
2. **使用 cubic-bezier** - 自定义动画效果
3. **避免过度使用** - 性能影响
4. **考虑用户体验** - 合适的动画速度

## 相关链接

- [MDN: 缓动函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function)
- [W3C: CSS Animations](https://www.w3.org/TR/css-animations-1/)
- [CSS Easing Animation Tool](https://cubic-bezier.com/)