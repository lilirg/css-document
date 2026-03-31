# 整数（Integer）

整数是 CSS 中的基本数据类型，用于表示没有小数部分的数值。

## 整数语法

```css
/* 正整数 */
.element {
  z-index: 10;
  counter-increment: item 5;
}

/* 负整数 */
.element {
  z-index: -1;
  transform: translateX(-100px);
}

/* 零 */
.element {
  z-index: 0;
  margin: 0;
}
```

## 整数应用

### 1. z-index

```css
.element {
  z-index: 1;    /* 优先级 1 */
  z-index: 10;   /* 优先级 10 */
  z-index: -1;   /* 优先级 -1 */
}
```

### 2. counter-increment

```css
.element {
  counter-increment: item 1;   /* 增加 1 */
  counter-increment: item 5;   /* 增加 5 */
  counter-increment: item -1;  /* 减少 1 */
}
```

### 3. transform

```css
.element {
  transform: translateX(100px);   /* 向右 100px */
  transform: translateY(-50px);   /* 向上 50px */
  transform: scale(2);            /* 缩放 2 倍 */
}
```

### 4. animation-iteration-count

```css
.element {
  animation-iteration-count: 1;   /* 1 次 */
  animation-iteration-count: 3;   /* 3 次 */
  animation-iteration-count: infinite;  /* 无限次 */
}
```

## 整数示例

```css
/* z-index */
.box1 {
  z-index: 1;
}

.box2 {
  z-index: 10;
}

.box3 {
  z-index: -1;
}

/* counter-increment */
.list {
  counter-increment: item 2;
}

/* transform */
.translate {
  transform: translate(100px, -50px);
}

/* animation-iteration-count */
.animate {
  animation-iteration-count: 3;
}
```

## 最佳实践

1. **使用整数** - 简单的数值
2. **避免过大值** - z-index 建议 1-100
3. **考虑负值** - 合理使用负值
4. **了解限制** - 某些属性有范围限制

## 相关链接

- [MDN: 整数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/integer)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)