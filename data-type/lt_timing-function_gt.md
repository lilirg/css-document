# timing-function

`timing-function` 数据类型表示时间函数值，用于控制动画或过渡的速度曲线。

## 语法

```css
/* 关键字 */
.element {
  transition-timing-function: ease;
  animation-timing-function: linear;
}

/* 贝塞尔曲线 */
.element {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* steps() */
.element {
  animation-timing-function: steps(5, end);
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `ease` |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 时间函数类型

| 类型 | 描述 |
| :--- | :--- |
| `linear` | 线性（匀速） |
| `ease` | 缓动（先加速后减速） |
| `ease-in` | 缓入（加速） |
| `ease-out` | 缓出（减速） |
| `ease-in-out` | 缓入缓出（先加速后减速） |
| `cubic-bezier()` | 自定义贝塞尔曲线 |
| `steps()` | 阶梯函数 |
| `step-start` | 立即开始 |
| `step-end` | 立即结束 |

## 示例

### 关键字

```css
/* 线性 */
.element {
  transition-timing-function: linear;
}

/* 缓动 */
.element {
  transition-timing-function: ease;
}

/* 缓入 */
.element {
  transition-timing-function: ease-in;
}

/* 缓出 */
.element {
  transition-timing-function: ease-out;
}

/* 缓入缓出 */
.element {
  transition-timing-function: ease-in-out;
}
```

### 贝塞尔曲线

```css
/* 自定义贝塞尔曲线 */
.element {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* 弹性效果 */
.element {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 弹跳效果 */
.element {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### steps()

```css
/* 阶梯函数 */
.element {
  animation-timing-function: steps(5, end);
}

/* 立即开始 */
.element {
  animation-timing-function: step-start;
}

/* 立即结束 */
.element {
  animation-timing-function: step-end;
}
```

### 实用示例

```css
/* 缓动过渡 */
.element {
  transition: all 0.3s ease;
}

/* 弹性动画 */
.element {
  animation: bounce 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 阶段动画 */
.element {
  animation: progress 2s steps(10, end);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 10+ |

## 相关链接

- [MDN Web Docs: timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
- [CSS Animations Module Level 1](https://www.w3.org/TR/css-animations-1/#timing-functions)
- [CSS Transitions Module Level 1](https://www.w3.org/TR/css-transitions-1/#timing-functions)
