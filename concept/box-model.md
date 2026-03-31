# 盒模型（Box Model）

盒模型是 CSS 的核心概念之一，它描述了元素如何占据空间和渲染。

## 盒模型组成

每个 HTML 元素都可以看作是一个矩形盒子，由以下部分组成：

```
+---------------------+
|       margin        |  外边距
+---------------------+
|     border          |  边框
+---------------------+
|     padding         |  内边距
+---------------------+
|     content         |  内容
+---------------------+
```

### 1. 内容（Content）

内容区域是盒子的核心部分，包含文本、图像等实际内容。

```css
div {
  width: 200px;
  height: 100px;
}
```

### 2. 内边距（Padding）

内边距是内容与边框之间的空间。

```css
div {
  padding: 20px;           /* 上右下左 20px */
  padding: 10px 20px;      /* 上下 10px，左右 20px */
  padding: 10px 20px 30px; /* 上 10px，左右 20px，下 30px */
  padding: 10px 20px 30px 40px; /* 上右下左 */
  
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

### 3. 边框（Border）

边框是围绕内容和内边距的线条。

```css
div {
  border: 2px solid red;
  
  border-width: 2px;
  border-style: solid;
  border-color: red;
  
  border-top: 1px dashed blue;
  border-radius: 5px;  /* 圆角 */
}
```

### 4. 外边距（Margin）

外边距是盒子与其他元素之间的空间。

```css
div {
  margin: 20px;           /* 上右下左 20px */
  margin: 10px 20px;      /* 上下 10px，左右 20px */
  margin: 10px 20px 30px; /* 上 10px，左右 20px，下 30px */
  margin: 10px 20px 30px 40px; /* 上右下左 */
  
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
```

## 盒模型类型

### 标准盒模型（W3C 盒模型）

默认的盒模型，`width` 和 `height` 只包括内容区域：

```css
.box {
  box-sizing: content-box;  /* 默认值 */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* 实际宽度 = 200 + 20*2 + 5*2 = 250px */
}
```

### IE 盒模型（Border Box）

`width` 和 `height` 包括内容、内边距和边框：

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* 实际宽度 = 200px（包括 padding 和 border） */
}
```

## 盒模型示例

```html
<div class="box">
  <p>内容文本</p>
</div>
```

```css
.box {
  box-sizing: border-box;
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 10px;
  background-color: #f0f0f0;
}

.box p {
  margin: 0;
  padding: 10px;
}
```

## 盒模型相关属性

### margin 相关

| 属性 | 说明 |
| :--- | :--- |
| `margin` | 简写属性 |
| `margin-top` | 上外边距 |
| `margin-right` | 右外边距 |
| `margin-bottom` | 下外边距 |
| `margin-left` | 左外边距 |
| `margin-inline-start` | 内联起始外边距 |
| `margin-inline-end` | 内联结束外边距 |
| `margin-block-start` | 块级起始外边距 |
| `margin-block-end` | 块级结束外边距 |

### padding 相关

| 属性 | 说明 |
| :--- | :--- |
| `padding` | 简写属性 |
| `padding-top` | 上内边距 |
| `padding-right` | 右内边距 |
| `padding-bottom` | 下内边距 |
| `padding-left` | 左内边距 |
| `padding-inline-start` | 内联起始内边距 |
| `padding-inline-end` | 内联结束内边距 |
| `padding-block-start` | 块级起始内边距 |
| `padding-block-end` | 块级结束内边距 |

### border 相关

| 属性 | 说明 |
| :--- | :--- |
| `border` | 简写属性 |
| `border-width` | 边框宽度 |
| `border-style` | 边框样式 |
| `border-color` | 边框颜色 |
| `border-radius` | 边框圆角 |
| `border-top` | 上边框 |
| `border-right` | 右边框 |
| `border-bottom` | 下边框 |
| `border-left` | 左边框 |

## 最佳实践

1. **使用 `border-box`** - 更直观的盒模型计算
2. **避免 margin 重叠** - 使用 padding 或 border
3. **使用 flex/grid** - 现代布局方法
4. **理解盒模型** - 正确计算元素尺寸

## 相关链接

- [MDN: 盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model)
- [W3C: CSS Box Model](https://www.w3.org/TR/css-box-3/)