# CSS 盒模型

CSS 盒模型（Box Model）是 CSS 布局的基础，它描述了每个 HTML 元素是如何被表示为一个矩形的盒子，以及这个盒子包含哪些部分。

## 盒模型组成

每个盒模型由四个部分组成，从内到外依次是：

```
┌─────────────────────────────────────┐
│              Margin (外边距)         │
│  ┌───────────────────────────────┐  │
│  │        Border (边框)          │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │    Padding (内边距)      │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │   Content (内容)   │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 1. Content（内容）

- 盒子的实际内容区域
- 包含文本、图像等内容
- 由 `width` 和 `height` 属性控制

### 2. Padding（内边距）

- 内容区域和边框之间的空间
- 透明区域
- 由 `padding` 属性控制

### 3. Border（边框）

- 围绕内边距和内容的边框
- 由 `border` 属性控制
- 包括边框样式、宽度和颜色

### 4. Margin（外边距）

- 盒子外部的空间，用于与其他元素分离
- 透明区域
- 由 `margin` 属性控制

## 盒模型属性

### width 和 height

```css
.box {
  width: 200px;
  height: 100px;
}
```

### padding

```css
.box {
  /* 四边相同 */
  padding: 20px;
  
  /* 上下左右 */
  padding: 10px 20px 10px 20px;
  
  /* 上下 左右 */
  padding: 10px 20px;
  
  /* 上 左右 下 */
  padding: 10px 20px 15px;
  
  /* 单独设置 */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 25px;
}
```

### border

```css
.box {
  /* 简写属性 */
  border: 2px solid #333;
  
  /* 单独设置 */
  border-width: 2px;
  border-style: solid;
  border-color: #333;
  
  /* 单边设置 */
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px double black;
}
```

### margin

```css
.box {
  /* 四边相同 */
  margin: 20px;
  
  /* 上下左右 */
  margin: 10px 20px 10px 20px;
  
  /* 上下 左右 */
  margin: 10px 20px;
  
  /* 上 左右 下 */
  margin: 10px 20px 15px;
  
  /* 单独设置 */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 25px;
  
  /* 自动外边距 - 水平居中 */
  margin: 0 auto;
}
```

## 标准盒模型 vs 边框盒模型

CSS 提供了两种盒模型计算方式：

### 标准盒模型（content-box）

- `width` 和 `height` 仅指内容区域的尺寸
- 实际尺寸 = width + padding + border

```css
.box {
  box-sizing: content-box; /* 默认值 */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* 实际宽度 = 200 + 20*2 + 5*2 = 250px */
}
```

### 边框盒模型（border-box）

- `width` 和 `height` 包括内容、内边距和边框
- 实际尺寸 = width（已包含 padding 和 border）

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  /* 实际宽度 = 200px（内容宽度 = 200 - 40 - 10 = 150px）*/
}
```

### 推荐使用 border-box

```css
/* 全局设置为 border-box */
*, *::before, *::after {
  box-sizing: border-box;
}
```

## 外边距折叠（Margin Collapsing）

在 CSS 中，相邻的块级元素的外边距可能会合并成一个外边距。

### 垂直外边距折叠

```css
.top {
  margin-bottom: 50px;
}

.bottom {
  margin-top: 30px;
}

/* 实际间距 = max(50px, 30px) = 50px */
```

### 外边距折叠规则

1. **相邻兄弟元素**：垂直方向相邻的外边距会折叠
2. **父子元素**：如果父元素没有边框或内边距，子元素的外边距会"溢出"到父元素
3. **空元素**：没有内容的元素，上下外边距会折叠

### 防止外边距折叠

```css
/* 方法 1：添加边框 */
.parent {
  border: 1px solid transparent;
}

/* 方法 2：添加内边距 */
.parent {
  padding: 1px;
}

/* 方法 3：使用 overflow */
.parent {
  overflow: auto;
}

/* 方法 4：使用 flex 或 grid */
.parent {
  display: flex;
}
```

## 盒模型示例

```html
<div class="container">
  <div class="box">内容</div>
</div>
```

```css
.container {
  padding: 20px;
  background-color: #f0f0f0;
}

.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #333;
  margin: 30px;
  background-color: #fff;
  
  /* 使用 border-box */
  box-sizing: border-box;
}
```

## 盒模型调试

使用浏览器开发者工具可以查看元素的盒模型：

1. 打开开发者工具（F12）
2. 选择元素
3. 在 Styles 面板中查看盒模型可视化

## 相关链接

- [MDN: 盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [MDN: box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)
- [W3C CSS Box Model Module Level 3](https://www.w3.org/TR/css-box-3/)