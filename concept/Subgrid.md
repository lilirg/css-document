# 子网格 (Subgrid)

CSS 子网格（Subgrid）允许网格项目继承其父网格的行和列定义，从而实现更精确的对齐。

## 语法

```css
/* 定义子网格 */
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

/* 子网格继承父网格 */
.subgrid {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素（作为容器时） |
| 动画 | 不适用 |

## 子网格属性

| 属性 | 描述 |
| :--- | :--- |
| `grid-template-columns: subgrid` | 继承父网格的列定义 |
| `grid-template-rows: subgrid` | 继承父网格的行定义 |
| `grid: subgrid` | 继承父网格的行和列定义 |

## 示例

### 基本子网格

```html
<!-- HTML -->
<div class="container">
  <div class="item">
    <div class="subgrid">
      <div class="subitem">1</div>
      <div class="subitem">2</div>
      <div class="subitem">3</div>
    </div>
  </div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
}

.item {
  background-color: #f0f0f0;
  padding: 10px;
}

.subgrid {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  gap: 5px;
}

.subitem {
  background-color: #007bff;
  color: white;
  padding: 10px;
}
```

### 列对齐

```html
<!-- HTML -->
<div class="container">
  <div class="item">
    <div class="subgrid">
      <div class="subitem">内容 1</div>
      <div class="subitem">内容 2</div>
    </div>
  </div>
  <div class="item">
    <div class="subgrid">
      <div class="subitem">内容 3</div>
      <div class="subitem">内容 4</div>
    </div>
  </div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

.item {
  background-color: #f0f0f0;
}

.subgrid {
  display: grid;
  grid-template-columns: subgrid;
  gap: 10px;
}

/* 子网格项目对齐到父网格 */
.subitem:nth-child(1) {
  grid-column: 1 / 7;
}

.subitem:nth-child(2) {
  grid-column: 7 / 13;
}
```

### 行子网格

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 100px);
  gap: 10px;
}

.item {
  background-color: #f0f0f0;
  display: grid;
  grid-template-rows: subgrid;
  gap: 5px;
}

.subitem {
  background-color: #007bff;
  color: white;
}
```

### 实用示例

#### 卡片布局

```html
<!-- HTML -->
<div class="container">
  <div class="card">
    <div class="card-header">
      <h3>标题</h3>
      <span class="date">2024-01-01</span>
    </div>
    <div class="card-body">
      <p>内容</p>
    </div>
    <div class="card-footer">
      <button>按钮 1</button>
      <button>按钮 2</button>
    </div>
  </div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: subgrid;
}

.card-header {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.card-body {
  padding: 16px;
  grid-column: 1 / -1;
}

.card-footer {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
  padding: 16px;
  border-top: 1px solid #eee;
}

.card-footer button {
  grid-column: span 1;
}
```

#### 表单布局

```html
<!-- HTML -->
<div class="form-container">
  <div class="form-row">
    <label>姓名</label>
    <input type="text">
  </div>
  <div class="form-row">
    <label>邮箱</label>
    <input type="email">
  </div>
  <div class="form-row">
    <label>电话</label>
    <input type="tel">
  </div>
</div>
```

```css
.form-container {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
}

.form-row {
  display: grid;
  grid-template-columns: subgrid;
  align-items: center;
}

.form-row label {
  grid-column: 1;
}

.form-row input {
  grid-column: 2;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 105+ |
| Firefox | 113+ |
| Safari | 17+ |
| Edge | 105+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: CSS 子网格](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
- [CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/#subgrid)
