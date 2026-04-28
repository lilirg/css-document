# @keyframes

@keyframes 规则定义动画关键帧。

## 语法

```css
@keyframes <animation-name> {
  <keyframe-selector> {
    <declaration-list>;
  }
}
```

## 常见值

```css
@keyframes myAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
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

## 示例

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

.element {
  animation: slideIn 1s ease-in-out;
}
```

## 相关资源

- [MDN Web Docs: @keyframes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)
- [CSS-Tricks: @keyframes](https://css-tricks.com/almanac/properties/a/animation/)