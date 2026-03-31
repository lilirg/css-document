# grid-auto-flow

`grid-auto-flow` 属性用于设置网格项目中自动放置的策略，控制项目如何填充隐式网格。

## 语法

```css
grid-auto-flow: row | column | row dense | column dense
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `row` |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `row` | 按行放置（默认） |
| `column` | 按列放置 |
| `row dense` | 按行放置，使用密集算法 |
| `column dense` | 按列放置，使用密集算法 |

### 放置策略

| 策略 | 说明 |
| :--- | :--- |
| `row` | 从左到右，从上到下填充 |
| `column` | 从上到下，从左到右填充 |
| `dense` | 尝试填充所有空隙，可能打乱顺序 |

## 注意

- `dense` 算法会尝试填充所有可用空间
- `dense` 可能导致项目视觉顺序与 DOM 顺序不同
- 与 `grid-auto-columns` 和 `grid-auto-rows` 配合使用

## 示例

```css
/* 按行放置（默认） */
.grid-container {
  display: grid;
  grid-auto-flow: row;
}

/* 按列放置 */
.grid-container {
  display: grid;
  grid-auto-flow: column;
}

/* 密集算法 */
.grid-container {
  display: grid;
  grid-auto-flow: row dense;
}

/* 列方向密集 */
.grid-container {
  display: grid;
  grid-auto-flow: column dense;
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 横向滚动网格 */
.horizontal-scroll {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  overflow-x: auto;
}

/* 2. 密集填充画廊 */
.dense-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
}

.small-item {
  grid-column: span 1;
  grid-row: span 1;
}

.large-item {
  grid-column: span 2;
  grid-row: span 2;
}

/* 3. 垂直列表 */
.vertical-list {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 50px);
}

/* 4. 卡片密集布局 */
.card-mosaic {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  gap: 10px;
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

- [`grid-auto-columns`](grid-auto-columns.md) - 自动列宽
- [`grid-auto-rows`](grid-auto-rows.md) - 自动行高
- [`grid-template-columns`](grid-template-columns.md) - 模板列
- [`grid-template-rows`](grid-template-rows.md) - 模板行

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)