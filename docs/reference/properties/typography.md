# typography

 typography 属性设置文本的排版样式。

## 常见属性

### font-family

```css
font-family: Arial, sans-serif;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### font-size

```css
font-size: 12px;
font-size: 1em;
font-size: 1rem;
font-size: 100%;
```

### font-weight

```css
font-weight: normal;
font-weight: bold;
font-weight: 100;
font-weight: 400;
font-weight: 700;
```

### line-height

```css
line-height: 1.5;
line-height: 24px;
line-height: 1.5em;
```

### text-align

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

### text-decoration

```css
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
```

### text-transform

```css
text-transform: none;
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

### letter-spacing

```css
letter-spacing: normal;
letter-spacing: 1px;
letter-spacing: 0.1em;
```

### word-spacing

```css
word-spacing: normal;
word-spacing: 2px;
word-spacing: 0.2em;
```

### white-space

```css
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
```

### text-indent

```css
text-indent: 0;
text-indent: 2em;
text-indent: 30px;
```

## 示例

```css
/* 字体 */
.text {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
}

/* 行高 */
.text {
  line-height: 1.5;
}

/* 对齐 */
.text {
  text-align: center;
}

/* 装饰 */
.text {
  text-decoration: underline;
}

/* 转换 */
.text {
  text-transform: uppercase;
}
```

## 相关资源

- [MDN Web Docs: typography](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
- [CSS-Tricks: typography](https://css-tricks.com/almanac/properties/t/text-transform/)