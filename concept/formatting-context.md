# 格式化上下文（Formatting Context）

格式化上下文是 CSS 中控制元素如何格式化和渲染的机制。

## 格式化上下文类型

CSS 中有多种格式化上下文，每种都有不同的格式化规则。

### 1. 块级格式化上下文（BFC）

BFC 是块级元素的独立格式化环境。

#### BFC 特性

- 内部块级元素垂直排列
- 外边距不会折叠
- 包含浮动元素
- 与外部布局隔离

#### 创建 BFC 的条件

```css
/* float 不为 none */
.float {
  float: left;
}

/* position 不为 static/relative */
.absolute {
  position: absolute;
}

/* display 为特定值 */
.flow-root {
  display: flow-root;
}

/* overflow 不为 visible */
.overflow {
  overflow: hidden;
}
```

### 2. 弹性格式化上下文（FFC）

FFC 是 Flexbox 布局的格式化上下文。

#### FFC 特性

- 主轴和交叉轴
- flex-item 沿主轴排列
- 支持对齐和分布

#### 创建 FFC 的条件

```css
.flex {
  display: flex;  /* 或 inline-flex */
}
```

### 3. 网格格式化上下文（GFC）

GFC 是 Grid 布局的格式化上下文。

#### GFC 特性

- 行和列定义
- 精确控制位置
- 支持响应式

#### 创建 GFC 的条件

```css
.grid {
  display: grid;  /* 或 inline-grid */
}
```

### 4. 行内格式化上下文（IFC）

IFC 是行内元素的格式化上下文。

#### IFC 特性

- 水平排列
- 行高控制
- 垂直对齐

#### 创建 IFC 的条件

```css
.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}
```

### 5. 表格格式化上下文（TFC）

TFC 是表格元素的格式化上下文。

#### TFC 特性

- 行和列自动计算
- 单元格对齐
- 表格布局

#### 创建 TFC 的条件

```css
.table {
  display: table;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
}
```

## 格式化上下文示例

```html
<div class="container">
  <div class="bfc">BFC</div>
  <div class="ffc">FFC</div>
  <div class="gfc">GFC</div>
  <span class="ifc">IFC</span>
  <div class="tfc">TFC</div>
</div>
```

```css
.container {
  width: 600px;
}

.bfc {
  overflow: hidden;
  height: 100px;
  background: #f0f0f0;
}

.ffc {
  display: flex;
  height: 100px;
  background: #e0e0e0;
}

.gfc {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100px;
  background: #d0d0d0;
}

.ifc {
  padding: 5px 10px;
  background: #c0c0c0;
}

.tfc {
  display: table;
  width: 100%;
  background: #b0b0b0;
}

.tfc-row {
  display: table-row;
}

.tfc-cell {
  display: table-cell;
  padding: 10px;
}
```

## 格式化上下文选择

### 选择原则

1. **简单布局** - 使用正常文档流
2. **一维布局** - 使用 Flexbox
3. **二维布局** - 使用 Grid
4. **表格布局** - 使用表格显示
5. **特殊需求** - 使用 BFC 解决特定问题

### 推荐使用

```css
/* 一维布局 - Flexbox */
.nav {
  display: flex;
}

/* 二维布局 - Grid */
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr;
}

/* 解决浮动问题 - BFC */
.wrapper {
  overflow: hidden;  /* 创建 BFC */
}

/* 表格布局 */
.data-table {
  display: table;
}
```

## 最佳实践

1. **理解格式化上下文** - 正确选择布局方式
2. **使用现代布局** - flex/grid 替代 float
3. **避免过度嵌套** - 保持结构简单
4. **考虑响应式** - 使用相对单位

## 相关链接

- [MDN: 格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)
- [W3C: CSS Box Model](https://www.w3.org/TR/css-box-3/)
- [W3C: CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)
- [W3C: CSS Grid](https://www.w3.org/TR/css-grid-2/)