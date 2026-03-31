# 布局上下文（Layout Context）

布局上下文是 CSS 中控制元素如何排列和渲染的机制。

## 布局上下文类型

CSS 中有多种布局上下文，每种都有不同的布局规则。

### 1. 正常文档流（Normal Flow）

正常文档流是最基本的布局方式，元素按照 HTML 顺序自然排列。

```css
.block {
  display: block;  /* 块级元素垂直排列 */
}

.inline {
  display: inline;  /* 行内元素水平排列 */
}
```

### 2. 块级格式化上下文（BFC）

BFC 是块级元素的独立布局环境。

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

### 3. 弹性格式化上下文（FFC）

FFC 是 Flexbox 布局的上下文。

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

### 4. 网格格式化上下文（GFC）

GFC 是 Grid 布局的上下文。

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

### 5. 行内格式化上下文（IFC）

IFC 是行内元素的布局上下文。

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

## 布局上下文示例

```html
<div class="container">
  <div class="bfc">BFC</div>
  <div class="ffc">FFC</div>
  <div class="gfc">GFC</div>
  <span class="ifc">IFC</span>
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
```

## 布局上下文选择

### 选择原则

1. **简单布局** - 使用正常文档流
2. **一维布局** - 使用 Flexbox
3. **二维布局** - 使用 Grid
4. **特殊需求** - 使用 BFC 解决特定问题

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
```

## 最佳实践

1. **理解布局上下文** - 正确选择布局方式
2. **使用现代布局** - flex/grid 替代 float
3. **避免过度嵌套** - 保持结构简单
4. **考虑响应式** - 使用相对单位

## 相关链接

- [MDN: 布局上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flow_Layout)
- [W3C: CSS Box Model](https://www.w3.org/TR/css-box-3/)
- [W3C: CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)
- [W3C: CSS Grid](https://www.w3.org/TR/css-grid-2/)