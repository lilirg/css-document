# 布局上下文（Layout Context）

布局上下文定义了 CSS 布局的机制。

## 什么是布局上下文？

布局上下文（Layout Context）是 CSS 中定义元素如何布局的机制。不同的布局上下文决定了元素如何排列和计算尺寸。

## 常见的布局上下文

### 块级格式化上下文（BFC）

块级格式化上下文（Block Formatting Context, BFC）影响块级元素的布局。

#### 创建 BFC 的条件

- `float` 不为 `none`
- `position` 为 `absolute` 或 `fixed`
- `display` 为 `inline-block`、`table-cell`、`table-caption`、`flex`、`grid`
- `overflow` 不为 `visible`

#### BFC 特性

- 内部的块级元素在垂直方向上依次排列
- BFC 的高度会包含浮动元素
- BFC 不会与浮动元素重叠

### 弹性格式化上下文（FFC）

弹性格式化上下文（Flex Formatting Context, FFC）用于 Flexbox 布局。

#### 创建 FFC 的条件

- `display` 为 `flex` 或 `inline-flex`

#### FFC 特性

- 子元素可以沿主轴和交叉轴排列
- 可以控制子元素的对齐方式
- 可以控制子元素的伸缩比例

### 网格格式化上下文（GFC）

网格格式化上下文（Grid Formatting Context, GFC）用于 Grid 布局。

#### 创建 GFC 的条件

- `display` 为 `grid` 或 `inline-grid`

#### GFC 特性

- 子元素可以放置在网格中
- 可以定义网格的行和列
- 可以控制网格项的对齐方式

### 行内格式化上下文（IFC）

行内格式化上下文（Inline Formatting Context, IFC）用于行内元素的布局。

#### IFC 特性

- 行内元素在同一行排列
- 垂直对齐基于基线
- 行高由行内元素的最大行高决定

## 相关资源

- [MDN Web Docs: 布局上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)
- [CSS-Tricks: Layout Contexts](https://css-tricks.com/almanac/properties/l/layout/)