# position

position 属性设置元素的定位方式。

## 语法

```css
position: <position-value>;
```

## 常见值

### static

```css
position: static;
```

### relative

```css
position: relative;
```

### absolute

```css
position: absolute;
```

### fixed

```css
position: fixed;
```

### sticky

```css
position: sticky;
```

## 相关属性

### top

```css
top: 0;
top: 10px;
top: 50%;
```

### right

```css
right: 0;
right: 10px;
right: 50%;
```

### bottom

```css
bottom: 0;
bottom: 10px;
bottom: 50%;
```

### left

```css
left: 0;
left: 10px;
left: 50%;
```

### z-index

```css
z-index: 0;
z-index: 1;
z-index: 100;
z-index: auto;
```

## 示例

```css
/* 相对定位 */
.relative {
  position: relative;
  top: 10px;
  left: 10px;
}

/* 绝对定位 */
.absolute {
  position: absolute;
  top: 0;
  left: 0;
}

/* 固定定位 */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
}

/* 粘性定位 */
.sticky {
  position: sticky;
  top: 0;
}
```

## 相关资源

- [MDN Web Docs: position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
- [CSS-Tricks: position](https://css-tricks.com/almanac/properties/p/position/)