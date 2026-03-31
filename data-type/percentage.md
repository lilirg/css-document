# 百分比（Percentage）

百分比是 CSS 中的重要数据类型，用于表示相对于其他值的比例。

## 百分比语法

```css
/* 宽度百分比 */
.element {
  width: 50%;  /* 相对于父元素宽度 */
}

/* 高度百分比 */
.element {
  height: 100%;  /* 相对于父元素高度 */
}

/* 边距百分比 */
.element {
  margin: 10%;  /* 相对于父元素宽度 */
  padding: 5%;  /* 相对于父元素宽度 */
}
```

## 百分比应用

### 1. 宽度百分比

```css
.element {
  width: 50%;   /* 父元素宽度的 50% */
  width: 100%;  /* 父元素宽度的 100% */
  width: 25%;   /* 父元素宽度的 25% */
}
```

### 2. 高度百分比

```css
.element {
  height: 50%;   /* 父元素高度的 50% */
  height: 100%;  /* 父元素高度的 100% */
  height: 25%;   /* 父元素高度的 25% */
}
```

### 3. 边距百分比

```css
.element {
  margin: 10%;  /* 父元素宽度的 10% */
  padding: 5%;  /* 父元素宽度的 5% */
}
```

### 4. 字体大小百分比

```css
.element {
  font-size: 150%;  /* 父元素字体大小的 150% */
  font-size: 80%;   /* 父元素字体大小的 80% */
}
```

### 5. 背景位置百分比

```css
.element {
  background-position: 50% 50%;  /* 中心 */
  background-position: 0% 0%;    /* 左上角 */
  background-position: 100% 100%; /* 右下角 */
}
```

## 百分比示例

```css
/* 宽度百分比 */
.half {
  width: 50%;
}

/* 高度百分比 */
.full-height {
  height: 100%;
}

/* 边距百分比 */
.spaced {
  margin: 10%;
  padding: 5%;
}

/* 字体大小百分比 */
.larger {
  font-size: 150%;
}

/* 背景位置百分比 */
.centered {
  background-position: 50% 50%;
}
```

## 百分比注意事项

### 1. 高度百分比需要明确高度

```css
.parent {
  height: 200px;  /* 必须有明确高度 */
}

.child {
  height: 50%;  /* 100px */
}
```

### 2. 边距百分比相对于宽度

```css
.element {
  margin: 10%;  /* 相对于父元素宽度 */
  padding: 5%;  /* 相对于父元素宽度 */
}
```

### 3. 负百分比

```css
.element {
  margin-left: -10%;  /* 负百分比 */
}
```

## 最佳实践

1. **使用百分比** - 响应式布局
2. **明确高度** - 高度百分比需要明确高度
3. **了解规则** - 边距百分比相对于宽度
4. **避免过度使用** - 性能影响

## 相关链接

- [MDN: 百分比](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)