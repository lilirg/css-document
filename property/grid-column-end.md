# grid-column-end

`grid-column-end` 属性用于设置网格项目在列方向的结束位置。

## 语法

```css
grid-column-end: <grid-line> | span <number> | span <name> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 网格项目 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 网格线编号 |
| `<name>` | 网格线名称 |
| `span <number>` | 跨越指定数量的列 |
| `span <name>` | 跨越到指定名称的网格线 |
| `auto` | 自动放置 |

## 注意

- 通常与 `grid-column-start` 配合使用
- 负数从末尾开始计数
- 是 `grid-column` 简写属性的第二个值

## 示例

```css
/* 在第 3 条网格线结束 */
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}

/* 跨越两列 */
.item {
  grid-column-start: 1;
  grid-column-end: span 2;
}

/* 使用网格线名称 */
.item {
  grid-column-start: start;
  grid-column-end: end;
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div class="item">项目</div>
</div>
```

## 使用场景

```css
/* 1. 横跨布局 */
.header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.header-title {
  grid-column-start: 1;
  grid-column-end: -1;
}

/* 2. 侧边栏布局 */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}

.main {
  grid-column-start: 2;
  grid-column-end: 4;
}

/* 3. 卡片跨列 */
.card {
  grid-column-start: 1;
  grid-column-end: span 2;
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
- [`grid-column`](grid-column.md) - 列位置简写
- [`grid-row-end`](grid-row-end.md) - 行结束线
- [`grid-area`](grid-area.md) - 区域

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)