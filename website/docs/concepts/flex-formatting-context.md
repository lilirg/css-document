---
sidebar_position: 12
---

# 弹性格式化上下文（FFC）

弹性格式化上下文（Flex Formatting Context, FFC）用于 Flexbox 布局。

## 什么是 FFC？

弹性格式化上下文（Flex Formatting Context, FFC）是 CSS 中用于 Flexbox 布局的格式化上下文。FFC 允许元素沿主轴和交叉轴排列。

## 创建 FFC 的条件

```css
.element {
  display: flex;      /* 创建 FFC */
  display: inline-flex;  /* 创建内联 FFC */
}
```

## FFC 特性

### 1. 主轴和交叉轴

FFC 定义了主轴（main axis）和交叉轴（cross axis）：

- **主轴** - 主要排列方向
- **交叉轴** - 垂直于主轴的方向

```css
.flex-container {
  display: flex;
  flex-direction: row;  /* 主轴为水平方向 */
}
```

### 2. 子元素排列

FFC 中的子元素可以沿主轴排列：

```css
.flex-container {
  display: flex;
  flex-direction: row;  /* 水平排列 */
  flex-wrap: wrap;      /* 自动换行 */
}
```

### 3. 对齐方式

FFC 可以控制子元素的对齐方式：

```css
.flex-container {
  display: flex;
  justify-content: center;  /* 主轴居中 */
  align-items: center;      /* 交叉轴居中 */
}
```

### 4. 伸缩比例

FFC 可以控制子元素的伸缩比例：

```css
.flex-item {
  flex: 1;  /* 伸缩比例 */
}
```

## FFC 属性

### 容器属性

- `display` - 定义 FFC
- `flex-direction` - 主轴方向
- `flex-wrap` - 是否换行
- `flex-flow` - flex-direction 和 flex-wrap 的简写
- `justify-content` - 主轴对齐
- `align-items` - 交叉轴对齐
- `align-content` - 多行对齐

### 项目属性

- `flex` - 伸缩比例
- `order` - 排序
- `align-self` - 单个项目对齐

## FFC 示例

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  padding: 10px;
  background: #eee;
}
```

## 相关资源

- [MDN Web Docs: Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS-Tricks: Flexbox](https://css-tricks.com/almanac/properties/f/flex/)