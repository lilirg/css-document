# 时间（Time）

时间是 CSS 中用于表示动画和过渡持续时间的数据类型。

## 时间单位

### 1. 秒（s）

```css
.element {
  animation-duration: 2s;   /* 2 秒 */
  transition-duration: 1s;  /* 1 秒 */
}
```

### 2. 毫秒（ms）

```css
.element {
  animation-duration: 2000ms;  /* 2 秒 */
  transition-duration: 500ms;  /* 0.5 秒 */
}
```

## 时间转换

| 秒（s） | 毫秒（ms） |
| :--- | :--- |
| 1s | 1000ms |
| 2s | 2000ms |
| 0.5s | 500ms |
| 0.1s | 100ms |

## 时间应用

### 1. animation-duration

```css
.element {
  animation-duration: 2s;    /* 2 秒 */
  animation-duration: 1.5s;  /* 1.5 秒 */
  animation-duration: 500ms; /* 0.5 秒 */
}
```

### 2. transition-duration

```css
.element {
  transition-duration: 1s;    /* 1 秒 */
  transition-duration: 0.5s;  /* 0.5 秒 */
  transition-duration: 300ms; /* 0.3 秒 */
}
```

### 3. animation-delay

```css
.element {
  animation-delay: 1s;    /* 1 秒后开始 */
  animation-delay: 500ms; /* 0.5 秒后开始 */
}
```

### 4. transition-delay

```css
.element {
  transition-delay: 1s;    /* 1 秒后开始 */
  transition-delay: 500ms; /* 0.5 秒后开始 */
}
```

### 5. animation-iteration-count

```css
.element {
  animation-duration: 1s;
  animation-iteration-count: infinite;  /* 无限次 */
}
```

## 时间示例

```css
/* 动画持续时间 */
.animate-long {
  animation-duration: 3s;
}

.animate-short {
  animation-duration: 500ms;
}

/* 过渡持续时间 */
.transition-slow {
  transition-duration: 2s;
}

.transition-fast {
  transition-duration: 200ms;
}

/* 动画延迟 */
.animate-delayed {
  animation-delay: 1s;
}
```

## 时间最佳实践

1. **使用 ms** - 短时间动画
2. **使用 s** - 长时间动画
3. **避免过长** - 用户体验
4. **考虑性能** - 动画性能

## 相关链接

- [MDN: 时间](https://developer.mozilla.org/zh-CN/docs/Web/CSS/time)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)