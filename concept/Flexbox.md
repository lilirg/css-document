# 弹性盒子布局 (Flexbox)

Flexbox（弹性盒子布局）是一种一维布局模型，允许子元素在容器中灵活排列、对齐和分配空间。

## 语法

```css
/* 定义弹性容器 */
.container {
  display: flex | inline-flex;
}

/* 主轴方向 */
flex-direction: row | row-reverse | column | column-reverse;

/* 换行 */
flex-wrap: nowrap | wrap | wrap-reverse;

/* 简写 */
flex-flow: <flex-direction> <flex-wrap>;

/* 主轴对齐 */
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right | ...;

/* 交叉轴对齐 */
align-items: flex-start | flex-end | center | baseline | stretch;

/* 多行交叉轴对齐 */
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

/* 子元素属性 */
flex: <flex-grow> <flex-shrink> <flex-basis>;
order: <integer>;
flex-grow: <number>;
flex-shrink: <number>;
flex-basis: <length> | auto;
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `flex-direction: row; flex-wrap: nowrap;` |
| 适用HTML元素 | 所有元素（作为容器时） |
| 动画 | 支持部分属性 |

## Flex 容器属性

| 属性 | 描述 |
| :--- | :--- |
| `display` | 定义弹性容器（`flex` 或 `inline-flex`） |
| `flex-direction` | 定义主轴方向（行或列） |
| `flex-wrap` | 定义子元素是否换行 |
| `flex-flow` | `flex-direction` 和 `flex-wrap` 的简写 |
| `justify-content` | 定义子元素在主轴上的对齐方式 |
| `align-items` | 定义子元素在交叉轴上的对齐方式 |
| `align-content` | 定义多行在交叉轴上的对齐方式 |

## Flex 项目属性

| 属性 | 描述 |
| :--- | :--- |
| `order` | 定义子元素的排列顺序（默认为 0） |
| `flex-grow` | 定义子元素的放大比例（默认为 0） |
| `flex-shrink` | 定义子元素的缩小比例（默认为 1） |
| `flex-basis` | 定义子元素的初始大小（默认为 `auto`） |
| `flex` | `flex-grow`、`flex-shrink`、`flex-basis` 的简写 |
| `align-self` | 定义单个子元素的对齐方式 |

## 示例

### 基本 Flexbox

```html
<!-- HTML -->
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
}

.item {
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### 主轴方向

```css
/* 水平排列（默认） */
.container {
  flex-direction: row;
}

/* 水平反向排列 */
.container {
  flex-direction: row-reverse;
}

/* 垂直排列 */
.container {
  flex-direction: column;
}

/* 垂直反向排列 */
.container {
  flex-direction: column-reverse;
}
```

### 换行

```css
/* 不换行（默认） */
.container {
  flex-wrap: nowrap;
}

/* 换行 */
.container {
  flex-wrap: wrap;
}

/* 换行反向 */
.container {
  flex-wrap: wrap-reverse;
}
```

### 主轴对齐

```css
/* 左对齐（默认） */
.container {
  justify-content: flex-start;
}

/* 右对齐 */
.container {
  justify-content: flex-end;
}

/* 居中 */
.container {
  justify-content: center;
}

/* 两端对齐 */
.container {
  justify-content: space-between;
}

/* 均匀分布 */
.container {
  justify-content: space-around;
}

/* 均匀分布（元素间距相等） */
.container {
  justify-content: space-evenly;
}
```

### 交叉轴对齐

```css
/* 顶部对齐（默认） */
.container {
  align-items: flex-start;
}

/* 底部对齐 */
.container {
  align-items: flex-end;
}

/* 居中 */
.container {
  align-items: center;
}

/* 基线对齐 */
.container {
  align-items: baseline;
}

/* 拉伸（默认） */
.container {
  align-items: stretch;
}
```

### 多行对齐

```css
/* 顶部对齐（默认） */
.container {
  align-content: flex-start;
}

/* 底部对齐 */
.container {
  align-content: flex-end;
}

/* 居中 */
.container {
  align-content: center;
}

/* 两端对齐 */
.container {
  align-content: space-between;
}

/* 均匀分布 */
.container {
  align-content: space-around;
}

/* 拉伸 */
.container {
  align-content: stretch;
}
```

### Flex 项目属性

```css
/* 改变顺序 */
.item-1 {
  order: 2;
}

.item-2 {
  order: 1;
}

/* 放大比例 */
.item {
  flex-grow: 1;
}

/* 缩小比例 */
.item {
  flex-shrink: 0;
}

/* 初始大小 */
.item {
  flex-basis: 200px;
}

/* 简写 */
.item {
  flex: 1 1 200px;
}

/* 单独对齐 */
.item {
  align-self: center;
}
```

### 实用示例

#### 居中对齐

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### 等宽项目

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

#### 侧边栏布局

```css
.container {
  display: flex;
}

.sidebar {
  flex: 0 0 200px;
}

.content {
  flex: 1;
}
```

#### 导航栏

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-left: 20px;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 21+ |
| Firefox | 22+ |
| Safari | 6.1+ |
| Edge | 12+ |
| IE | 11+ |

## 相关链接

- [MDN Web Docs: Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
