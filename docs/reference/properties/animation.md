# animation

animation 属性是一个简写属性，用于设置动画的各个属性。

## 语法

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

## 属性值

### animation-name

```css
animation-name: none;
animation-name: myAnimation;
```

### animation-duration

```css
animation-duration: 0s;
animation-duration: 2s;
animation-duration: 500ms;
```

### animation-timing-function

```css
animation-timing-function: linear;
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: step-start;
animation-timing-function: step-end;
animation-timing-function: steps(n, start);
animation-timing-function: cubic-bezier(x1, y1, x2, y2);
```

### animation-delay

```css
animation-delay: 0s;
animation-delay: 1s;
animation-delay: 500ms;
```

### animation-iteration-count

```css
animation-iteration-count: 1;
animation-iteration-count: infinite;
animation-iteration-count: 3;
```

### animation-direction

```css
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;
```

### animation-fill-mode

```css
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;
```

### animation-play-state

```css
animation-play-state: running;
animation-play-state: paused;
```

## 示例

```css
/* 简单动画 */
.element {
  animation: myAnimation 2s ease-in-out;
}

/* 多个动画 */
.element {
  animation: fadeIn 1s, slideIn 2s;
}

/* 无限循环动画 */
.element {
  animation: spin 1s linear infinite;
}
```

## 相关资源

- [MDN Web Docs: animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
- [CSS-Tricks: animation](https://css-tricks.com/almanac/properties/a/animation/)