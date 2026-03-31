# grid-column

`grid-column` 属性是 `grid-column-start` 和 `grid-column-end` 的简写属性，用于设置网格项目在列方向上的位置。

## 语法

```css
grid-column: <grid-line> | <grid-line> / <grid-line> | span <number> | span <name>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 网格项目 |
| 动画 | 是（可动画） |

## 值

### 网格线位置

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 网格线编号（正数从前往后，负数从后往前） |
| `<name>` | 网格线名称 |
| `auto` | 自动放置 |

### 跨越多列

| 值 | 说明 |
| :--- | :--- |
| `span <number>` | 跨越指定数量的列 |
| `span <name>` | 跨越到指定名称的网格线 |
| `span / span` | 简写跨越 |

## 注意

- 第一个值是起始线，第二个值是结束线
- 使用 `span` 可以跨越多个列
- 负数从末尾开始计数

## 示例

```css
/* 指定起始和结束线 */
.item {
  grid-column: 1 / 3;
}

/* 跨越两列 */
.item {
  grid-column: span 2;
}

/* 使用网格线名称 */
.item {
  grid-column: start / middle;
}

/* 跨越到末尾 */
.item {
  grid-column: 1 / -1;
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div class="item">跨越两列</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 头部横跨所有列 */
.header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.header-title {
  grid-column: 1 / -1; /* 横跨所有列 */
}

/* 2. 侧边栏占据一列 */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}

.sidebar {
  grid-column: 1 / 2;
}

.main {
  grid-column: 2 / 4;
}

/* 3. 特色卡片跨两列 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.featured-card {
  grid-column: span 2;
}

/* 4. 页脚横跨 */
.footer {
  grid-column: 1 / -1;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 57+ |
| Edge | 16+ |
| Firefox | 52+ |
| Safari | 10.1+ |
| Opera | 44+ |

## 相关属性

- [`grid-column-start`](grid-column-start.md) - 列起始线
- [`grid-column-end`](grid-column-end.md) - 列结束线
- [`grid-row`](grid-row.md) - 行位置
- [`grid-area`](grid-area.md) - 区域

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)