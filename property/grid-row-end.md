# grid-row-end

`grid-row-end` 属性用于设置网格项目在行方向的结束位置。

## 语法

```css
grid-row-end: <grid-line> | span <number> | span <name> | auto
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
| `span <number>` | 跨越指定数量的行 |
| `span <name>` | 跨越到指定名称的网格线 |
| `auto` | 自动放置 |

## 注意

- 通常与 `grid-row-start` 配合使用
- 负数从末尾开始计数
- 是 `grid-row` 简写属性的第二个值

## 示例

```css
/* 在第 3 条网格线结束 */
.item {
  grid-row-start: 1;
  grid-row-end: 3;
}

/* 跨越两行 */
.item {
  grid-row-start: 1;
  grid-row-end: span 2;
}

/* 使用网格线名称 */
.item {
  grid-row-start: start;
  grid-row-end: end;
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
/* 1. 侧边栏占据所有行 */
.layout {
  display: grid;
  grid-template-rows: 100px 1fr 100px;
}

.sidebar {
  grid-row-start: 1;
  grid-row-end: -1;
}

/* 2. 卡片跨行 */
.card {
  grid-row-start: 1;
  grid-row-end: span 2;
}

/* 3. 使用命名网格线 */
.named-grid {
  display: grid;
  grid-template-rows: [header-end] 100px [main-end] 1fr [footer-end];
}

.main {
  grid-row-start: header-end;
  grid-row-end: footer-end;
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
- [`grid-row`](grid-row.md) - 行位置简写
- [`grid-column-end`](grid-column-end.md) - 列结束线
- [`grid-area`](grid-area.md) - 区域

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)