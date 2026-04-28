# 布局排版

CSS 布局排版定义了元素在页面中的排列方式。

## 常见的布局方式

### 浮动布局

```css
/* 浮动布局 */
.float-left {
  float: left;
}

.float-right {
  float: right;
}
```

### 定位布局

```css
/* 相对定位 */
.relative {
  position: relative;
}

/* 绝对定位 */
.absolute {
  position: absolute;
}

/* 固定定位 */
.fixed {
  position: fixed;
}

/* 粘性定位 */
.sticky {
  position: sticky;
}
```

### Flexbox 布局

```css
/* Flexbox 布局 */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

### Grid 布局

```css
/* Grid 布局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
}
```

### 表格布局

```css
/* 表格布局 */
.table-container {
  display: table;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
}
```

## 相关资源

- [MDN Web Docs: 布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Layout)
- [CSS-Tricks: Layout](https://css-tricks.com/almanac/properties/p/position/)