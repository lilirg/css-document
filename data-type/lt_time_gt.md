# time

`time` 数据类型表示时间值，主要用于动画和过渡属性。

## 语法

```css
/* 秒 */
.element {
  transition-duration: 0.5s;
  animation-duration: 1s;
}

/* 毫秒 */
.element {
  transition-duration: 500ms;
  animation-duration: 1000ms;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持 |

## 单位

| 单位 | 描述 |
| :--- | :--- |
| `s` | 秒 |
| `ms` | 毫秒（1s = 1000ms） |

## 示例

### transition-duration

```css
/* 0.5 秒过渡 */
.element {
  transition-duration: 0.5s;
}

/* 500 毫秒过渡 */
.element {
  transition-duration: 500ms;
}

/* 多属性 */
.element {
  transition-duration: 0.3s, 0.5s;
}
```

### animation-duration

```css
/* 1 秒动画 */
.element {
  animation-duration: 1s;
}

/* 2 秒动画 */
.element {
  animation-duration: 2s;
}

/* 无限循环 */
.element {
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
```

### animation-delay

```css
/* 延迟动画 */
.element {
  animation-delay: 0.5s;
}

/* 负延迟 */
.element {
  animation-delay: -0.5s;
}
```

### transition-delay

```css
/* 延迟过渡 */
.element {
  transition-delay: 0.3s;
}
```

### 实用示例

```css
/* 缓慢过渡 */
.slow {
  transition-duration: 2s;
}

/* 快速过渡 */
.fast {
  transition-duration: 0.1s;
}

/* 延迟过渡 */
.delayed {
  transition-delay: 1s;
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

- [MDN Web Docs: time](https://developer.mozilla.org/zh-CN/docs/Web/CSS/time)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#time)
