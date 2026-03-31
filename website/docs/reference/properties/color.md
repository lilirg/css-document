---
sidebar_position: 4
---

# color

color 属性设置文本颜色。

## 语法

```css
color: <color>;
```

## 颜色值

### 颜色名称

```css
color: red;
color: blue;
color: green;
```

### 十六进制

```css
color: #ff0000;
color: #f00;
```

### rgb()

```css
color: rgb(255, 0, 0);
color: rgb(100%, 0%, 0%);
```

### rgba()

```css
color: rgba(255, 0, 0, 0.5);
```

### hsl()

```css
color: hsl(0, 100%, 50%);
```

### hsla()

```css
color: hsla(0, 100%, 50%, 0.5);
```

### lab()

```css
color: lab(50% 50 50);
```

### lch()

```css
color: lch(50% 70 250);
```

### oklab()

```css
color: oklab(50% 0.1 0.1);
```

### oklch()

```css
color: oklch(50% 0.1 250);
```

### currentcolor

```css
color: currentcolor;
```

## 示例

```css
/* 颜色名称 */
.text {
  color: red;
}

/* 十六进制 */
.text {
  color: #ff0000;
}

/* rgb */
.text {
  color: rgb(255, 0, 0);
}

/* rgba */
.text {
  color: rgba(255, 0, 0, 0.5);
}

/* hsl */
.text {
  color: hsl(0, 100%, 50%);
}

/* hsla */
.text {
  color: hsla(0, 100%, 50%, 0.5);
}
```

## 相关资源

- [MDN Web Docs: color](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)
- [CSS-Tricks: color](https://css-tricks.com/almanac/properties/c/color/)