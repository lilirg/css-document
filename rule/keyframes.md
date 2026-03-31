# @keyframes

`@keyframes` 规则用于定义 CSS 动画的关键帧。

## 语法

```css
@keyframes animation-name {
  0% {
    /* CSS properties */
  }
  100% {
    /* CSS properties */
  }
}

/* 或者使用 from/to */
@keyframes animation-name {
  from {
    /* CSS properties */
  }
  to {
    /* CSS properties */
  }
}

/* 示例 */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 可动画属性 |

## 属性值

### animation-name

定义动画的名称，用于在 `animation-name` 属性中引用。

### 关键帧百分比

定义动画在不同时间点的状态：

- `0%`：动画开始状态
- `100%`：动画结束状态
- `from`：等同于 `0%`
- `to`：等同于 `100%`
- 中间百分比：如 `25%`, `50%`, `75%`

### CSS 属性

在关键帧中可以使用任何可动画的 CSS 属性。

## 示例

### 基本动画

```css
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.box {
  animation: slideIn 1s ease-in-out;
}
```

### 使用 from/to

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.box {
  animation: fadeIn 0.5s ease-out;
}
```

### 多个关键帧

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
  40% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

.ball {
  animation: bounce 1s infinite;
}
```

### 复合动画

```css
@keyframes complex {
  0% {
    transform: scale(1) rotate(0deg);
    background-color: red;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
    background-color: blue;
  }
  100% {
    transform: scale(1) rotate(360deg);
    background-color: green;
  }
}

.box {
  animation: complex 2s ease-in-out infinite;
}
```

### 无限循环动画

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

### 延迟和反向动画

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.box {
  animation: pulse 1s ease-in-out infinite alternate;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 4+ | 完全支持 |
| Firefox | 5+ | 完全支持 |
| Safari | 4+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 10+ | 完全支持 |

## 相关链接

- [MDN: @keyframes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)
- [W3C: CSS Animations Module Level 1 - @keyframes](https://www.w3.org/TR/css-animations-1/#keyframes)
