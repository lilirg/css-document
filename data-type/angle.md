# 角度（Angle）

角度是 CSS 中用于表示旋转和方向的数据类型。

## 角度单位

### 1. 度（deg）

```css
.element {
  transform: rotate(45deg);   /* 45 度 */
  transform: rotate(90deg);   /* 90 度 */
  transform: rotate(180deg);  /* 180 度 */
  transform: rotate(360deg);  /* 360 度 */
}
```

### 2. 弧度（rad）

```css
.element {
  transform: rotate(0.785rad);  /* 约 45 度 */
  transform: rotate(1.571rad);  /* 约 90 度 */
  transform: rotate(3.142rad);  /* 约 180 度 */
}
```

### 3. 梯度（grad）

```css
.element {
  transform: rotate(50grad);  /* 45 度 */
  transform: rotate(100grad); /* 90 度 */
  transform: rotate(200grad); /* 180 度 */
}
```

### 4. 圈（turn）

```css
.element {
  transform: rotate(0.125turn);  /* 45 度 */
  transform: rotate(0.25turn);   /* 90 度 */
  transform: rotate(0.5turn);    /* 180 度 */
  transform: rotate(1turn);      /* 360 度 */
}
```

## 角度转换

| 度（deg） | 弧度（rad） | 梯度（grad） | 圈（turn） |
| :--- | :--- | :--- | :--- |
| 45° | 0.785rad | 50grad | 0.125turn |
| 90° | 1.571rad | 100grad | 0.25turn |
| 180° | 3.142rad | 200grad | 0.5turn |
| 360° | 6.283rad | 400grad | 1turn |

## 角度应用

### 1. transform: rotate

```css
.rotate-deg {
  transform: rotate(45deg);
}

.rotate-rad {
  transform: rotate(0.785rad);
}

.rotate-grad {
  transform: rotate(50grad);
}

.rotate-turn {
  transform: rotate(0.125turn);
}
```

### 2. transform: skew

```css
.skew-deg {
  transform: skew(30deg);
}

.skew-rad {
  transform: skew(0.524rad);
}
```

### 3. conic-gradient

```css
.conic {
  background: conic-gradient(
    red 0deg,
    green 90deg,
    blue 180deg,
    yellow 360deg
  );
}
```

### 4. linear-gradient

```css
.linear {
  background: linear-gradient(
    45deg,
    red,
    blue
  );
}
```

## 角度示例

```css
/* 旋转 */
.rotate {
  transform: rotate(45deg);
}

/* 倾斜 */
.skew {
  transform: skew(30deg);
}

/* 圆锥渐变 */
.conic {
  background: conic-gradient(
    red 0deg,
    green 90deg,
    blue 180deg
  );
}

/* 线性渐变 */
.linear {
  background: linear-gradient(
    45deg,
    red,
    blue
  );
}
```

## 最佳实践

1. **使用 deg** - 最直观的角度单位
2. **了解转换** - 不同单位之间的转换
3. **避免过度使用** - 性能影响
4. **考虑响应式** - 使用相对单位

## 相关链接

- [MDN: 角度](https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)