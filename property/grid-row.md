# grid-row

`grid-row` 属性是 `grid-row-start` 和 `grid-row-end` 的简写属性，用于设置网格项目在行方向上的位置。

## 语法

```css
grid-row: <grid-line> | <grid-line> / <grid-line> | span <number> | span <name>
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

### 跨越多行

| 值 | 说明 |
| :--- | :--- |
| `span <number>` | 跨越指定数量的行 |
| `span <name>` | 跨越到指定名称的网格线 |

## 注意

- 第一个值是起始线，第二个值是结束线
- 使用 `span` 可以跨越多个行
- 负数从末尾开始计数

## 示例

```css
/* 指定起始和结束线 */
.item {
  grid-row: 1 / 3;
}

/* 跨越两行 */
.item {
  grid-row: span 2;
}

/* 使用网格线名称 */
.item {
  grid-row: start / middle;
}

/* 跨越到末尾 */
.item {
  grid-row: 1 / -1;
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div class="item">跨越两行</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 侧边栏占据多行 */
.layout {
  display: grid;
  grid-template-rows: 100px 1fr 100px;
}

.sidebar {
  grid-row: 1 / -1; /* 占据所有行 */
}

/* 2. 特色卡片跨两行 */
.card-grid {
  display: grid;
  grid-template-rows: repeat(3, 150px);
}

.featured-card {
  grid-row: span 2;
}

/* 3. 头部横跨 */
.header {
  grid-row: 1 / 2;
}

/* 4. 页脚横跨 */
.footer {
  grid-row: -1 / -2;
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

- [`grid-row-start`](grid-row-start.md) - 行起始线
- [`grid-row-end`](grid-row-end.md) - 行结束线
- [`grid-column`](grid-column.md) - 列位置
- [`grid-area`](grid-area.md) - 区域

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)