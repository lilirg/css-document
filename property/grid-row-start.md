# grid-row-start

`grid-row-start` 属性用于设置网格项目在行方向的起始位置。

## 语法

```css
grid-row-start: <grid-line> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 网格项目 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 网格线编号（正数从前往后，负数从后往前） |
| `<name>` | 网格线名称 |
| `auto` | 自动放置 |

## 注意

- 通常与 `grid-row-end` 配合使用
- 负数从末尾开始计数
- 是 `grid-row` 简写属性的第一个值

## 示例

```css
/* 从第 1 条网格线开始 */
.item {
  grid-row-start: 1;
}

/* 从倒数第 2 条网格线开始 */
.item {
  grid-row-start: -2;
}

/* 使用网格线名称 */
.item {
  grid-row-start: start;
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
/* 1. 头部从第一行开始 */
.header {
  grid-row-start: 1;
}

/* 2. 主内容从第二行开始 */
.main {
  grid-row-start: 2;
}

/* 3. 使用命名网格线 */
.named-grid {
  display: grid;
  grid-template-rows: [header-start] 100px [main-start] 1fr [footer-start];
}

.header {
  grid-row-start: header-start;
}

.main {
  grid-row-start: main-start;
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

- [`grid-row-end`](grid-row-end.md) - 行结束线
- [`grid-row`](grid-row.md) - 行位置简写
- [`grid-column-start`](grid-column-start.md) - 列起始线
- [`grid-area`](grid-area.md) - 区域

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)