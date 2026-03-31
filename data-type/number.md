# 数字（Number）

数字是 CSS 中的基本数据类型，用于表示整数或小数。

## 数字语法

```css
/* 正数字 */
.element {
  opacity: 0.5;
  flex-grow: 1.5;
}

/* 负数字 */
.element {
  transform: scale(-1);
}

/* 零 */
.element {
  opacity: 0;
  margin: 0;
}

/* 整数（也是数字） */
.element {
  z-index: 10;
}
```

## 数字应用

### 1. opacity

```css
.element {
  opacity: 1;    /* 完全不透明 */
  opacity: 0.5;  /* 半透明 */
  opacity: 0;    /* 完全透明 */
}
```

### 2. flex-grow / flex-shrink

```css
.element {
  flex-grow: 1;    /* 等比例增长 */
  flex-grow: 1.5;  /* 增长权重 1.5 */
  flex-shrink: 1;  /* 可收缩 */
  flex-shrink: 0;  /* 不收缩 */
}
```

### 3. transform

```css
.element {
  transform: scale(1.5);     /* 缩放 1.5 倍 */
  transform: scale(-1);      /* 反向缩放 */
  transform: rotate(45deg);  /* 旋转 45 度 */
}
```

### 4. animation-duration

```css
.element {
  animation-duration: 1.5s;  /* 1.5 秒 */
  animation-duration: 0.5s;  /* 0.5 秒 */
}
```

## 数字示例

```css
/* opacity */
.transparent {
  opacity: 0.5;
}

/* flex-grow */
.grow {
  flex-grow: 1.5;
}

/* transform */
.scale {
  transform: scale(1.5);
}

/* animation-duration */
.animate {
  animation-duration: 1.5s;
}
```

## 数字与整数的区别

| 特性 | 数字 | 整数 |
| :--- | :--- | :--- |
| 小数 | 支持 | 不支持 |
| 范围 | 任意 | 整数 |
| 应用 | opacity, flex-grow | z-index, counter-increment |

## 最佳实践

1. **使用数字** - 需要小数时
2. **使用整数** - 简单的数值
3. **了解限制** - 某些属性有范围限制
4. **避免过大值** - 性能影响

## 相关链接

- [MDN: 数字](https://developer.mozilla.org/zh-CN/docs/Web/CSS/number)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)