---
sidebar_position: 5
---

# 盒模型（Box Model）

盒模型描述了元素如何占据空间和渲染，包括内容、内边距、边框和外边距。

## 什么是盒模型？

盒模型（Box Model）是 CSS 中描述元素如何占据空间的概念模型。每个 HTML 元素都被视为一个矩形盒子，由四个部分组成：

1. **内容（Content）** - 实际内容区域
2. **内边距（Padding）** - 内容与边框之间的空间
3. **边框（Border）** - 围绕内容和内边距的边框
4. **外边距（Margin）** - 元素与其他元素之间的空间

## 盒模型结构

```
+---------------------+
|      Margin         |
|  +---------------+  |
|  |    Border     |  |
|  |  +---------+  |  |
|  |  | Padding |  |  |
|  |  | +-----+ |  |  |
|  |  | |Content| |  |  |
|  |  | +-----+ |  |  |
|  |  +---------+  |  |
|  +---------------+  |
+---------------------+
```

## 盒模型属性

### 内容（Content）

```css
width: 200px;
height: 100px;
```

### 内边距（Padding）

```css
padding: 10px;           /* 所有方向 */
padding-top: 10px;       /* 上 */
padding-right: 20px;     /* 右 */
padding-bottom: 10px;    /* 下 */
padding-left: 20px;      /* 左 */
```

### 边框（Border）

```css
border: 1px solid #ccc;           /* 简写 */
border-width: 1px;                /* 宽度 */
border-style: solid;              /* 样式 */
border-color: #ccc;               /* 颜色 */
```

### 外边距（Margin）

```css
margin: 10px;           /* 所有方向 */
margin-top: 10px;       /* 上 */
margin-right: 20px;     /* 右 */
margin-bottom: 10px;    /* 下 */
margin-left: 20px;      /* 左 */
```

## 盒模型类型

### 标准盒模型（content-box）

默认的盒模型，宽度和高度只包括内容区域。

```css
.box {
  box-sizing: content-box;  /* 默认 */
}
```

### 边框盒模型（border-box）

宽度和高度包括内容、内边距和边框。

```css
.box {
  box-sizing: border-box;
}
```

## 盒模型示例

```css
.element {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #ccc;
  margin: 10px;
  
  /* 标准盒模型 */
  box-sizing: content-box;
}
```

在标准盒模型中，元素的实际宽度为：
- 内容宽度：200px
- 内边距：20px × 2 = 40px
- 边框：5px × 2 = 10px
- **总宽度：250px**

在边框盒模型中，元素的实际宽度为：
- **总宽度：200px**（包括内容、内边距和边框）

## 相关资源

- [MDN Web Docs: 盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model)
- [CSS-Tricks: Box Model](https://css-tricks.com/almanac/properties/b/box-sizing/)