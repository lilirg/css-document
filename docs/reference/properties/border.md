# border

border 属性是一个简写属性，用于设置边框的宽度、样式和颜色。

## 语法

```css
border: width style color;
```

## 属性值

### border-width

```css
border-width: thin;
border-width: medium;
border-width: thick;
border-width: 1px;
border-width: 2em;
```

### border-style

```css
border-style: none;
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;
```

### border-color

```css
border-color: red;
border-color: #ff0000;
border-color: rgb(255, 0, 0);
border-color: rgba(255, 0, 0, 0.5);
```

## 单边边框

```css
/* 上边框 */
border-top: 1px solid #ccc;

/* 右边框 */
border-right: 1px solid #ccc;

/* 下边框 */
border-bottom: 1px solid #ccc;

/* 左边框 */
border-left: 1px solid #ccc;
```

## 边框半径

```css
border-radius: 5px;
border-radius: 10px 10px 0 0;
border-radius: 50%;  /* 圆形 */
```

## 示例

```css
/* 简单边框 */
.element {
  border: 1px solid #ccc;
}

/* 圆角边框 */
.element {
  border: 2px solid #007bff;
  border-radius: 4px;
}

/* 虚线边框 */
.element {
  border: 1px dashed #ccc;
}
```

## 相关资源

- [MDN Web Docs: border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)
- [CSS-Tricks: border](https://css-tricks.com/almanac/properties/b/border/)