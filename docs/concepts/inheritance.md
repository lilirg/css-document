# 继承（Inheritance）

继承是 CSS 中某些属性从父元素传递到子元素的机制。

## 什么是继承？

继承（Inheritance）是指某些 CSS 属性会从父元素自动传递给子元素。这使得我们可以设置父元素的样式，然后所有子元素都会继承这些样式。

## 可继承的属性

以下属性通常会被继承：

### 文本相关属性

- `color` - 文本颜色
- `font-family` - 字体族
- `font-size` - 字体大小
- `font-weight` - 字体粗细
- `font-style` - 字体样式
- `line-height` - 行高
- `text-align` - 文本对齐
- `text-decoration` - 文本装饰
- `text-indent` - 首行缩进
- `text-transform` - 文本转换

### 列表相关属性

- `list-style` - 列表样式
- `list-style-type` - 列表项标记类型
- `list-style-image` - 列表项标记图像
- `list-style-position` - 列表项标记位置

### 间距相关属性

- `letter-spacing` - 字符间距
- `word-spacing` - 单词间距

### 其他属性

- `visibility` - 可见性
- `cursor` - 光标样式
- `white-space` - 空白处理

## 不可继承的属性

以下属性通常不会被继承：

### 盒模型属性

- `margin` - 外边距
- `padding` - 内边距
- `border` - 边框
- `width` - 宽度
- `height` - 高度

### 背景属性

- `background` - 背景
- `background-color` - 背景颜色
- `background-image` - 背景图像

### 布局属性

- `display` - 显示方式
- `position` - 定位
- `float` - 浮动
- `clear` - 清除浮动

## 继承示例

```css
/* 父元素设置字体 */
body {
  font-family: Arial, sans-serif;
  color: #333;
}

/* 所有子元素都会继承这些样式 */
p {
  /* 继承 font-family: Arial */
  /* 继承 color: #333 */
}

div {
  /* 继承 font-family: Arial */
  /* 继承 color: #333 */
}
```

## 覆盖继承

子元素可以覆盖继承的样式：

```css
body {
  color: #333;
}

.highlight {
  color: red;  /* 覆盖继承的颜色 */
}
```

## inherit 关键字

使用 `inherit` 关键字可以强制继承：

```css
p {
  margin: inherit;  /* 强制继承 margin */
}
```

## 相关资源

- [MDN Web Docs: 继承](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)
- [CSS-Tricks: Inheritance](https://css-tricks.com/almanac/properties/i/inherit/)