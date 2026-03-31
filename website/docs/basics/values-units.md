---
sidebar_position: 6
---

# 值与单位

CSS 值与单位定义了 CSS 属性值的格式和类型。

## 常见的值类型

### 数值

```css
.element {
  font-size: 16;  /* 错误：缺少单位 */
  font-size: 16px;  /* 正确：带单位 */
}
```

### 长度单位

```css
/* 像素 */
.element {
  width: 100px;
}

/* 百分比 */
.element {
  width: 50%;
}

/* em */
.element {
  font-size: 1.5em;
}

/* rem */
.element {
  font-size: 1.5rem;
}

/* vw/vh */
.element {
  width: 50vw;
  height: 50vh;
}
```

### 颜色值

```css
/* 十六进制 */
.element {
  color: #ff0000;
}

/* rgb */
.element {
  color: rgb(255, 0, 0);
}

/* rgba */
.element {
  color: rgba(255, 0, 0, 0.5);
}

/* hsl */
.element {
  color: hsl(0, 100%, 50%);
}

/* hsla */
.element {
  color: hsla(0, 100%, 50%, 0.5);
}

/* 颜色名称 */
.element {
  color: red;
}
```

### 时间单位

```css
/* 秒 */
.element {
  transition-duration: 2s;
}

/* 毫秒 */
.element {
  transition-duration: 500ms;
}
```

### 角度单位

```css
/* 度 */
.element {
  transform: rotate(45deg);
}

/* 弧度 */
.element {
  transform: rotate(1.57rad);
}

/* 梯度 */
.element {
  transform: rotate(50grad);
}
```

### 频率单位

```css
/* 赫兹 */
.element {
  /* audio */
}

/* 千赫兹 */
.element {
  /* audio */
}
```

### 分辨率单位

```css
/* dpi */
.element {
  /* print */
}

/* dpcm */
.element {
  /* print */
}

/* dppx */
.element {
  /* screen */
}
```

## 相关资源

- [MDN Web Docs: 值与单位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [CSS-Tricks: Values and Units](https://css-tricks.com/almanac/properties/)