# grid-auto-rows

`grid-auto-rows` 属性用于设置隐式网格行的高度，当项目超出显式定义的行时自动创建新行。

## 语法

```css
grid-auto-rows: <length> | <percentage> | <track-size> | minmax() | fit-content()
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 固定长度（如 `100px`, `20rem`） |
| `<percentage>` | 相对于容器的百分比 |
| `auto` | 根据内容自动计算 |
| `min-content` | 内容所需的最小高度 |
| `max-content` | 内容所需的最大高度 |
| `fit-content()` | 适应内容高度 |
| `minmax(min, max)` | 最小和最大高度范围 |

## 注意

- 仅影响自动创建的隐式行
- 与 `grid-auto-columns` 配合使用
- 与 `grid-auto-flow` 配合控制自动放置

## 示例

```css
/* 固定高度隐式行 */
.grid-container {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-auto-rows: 50px;
}

/* 使用 minmax */
.grid-container {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-auto-rows: minmax(50px, 1fr);
}

/* 适应内容 */
.grid-container {
  display: grid;
  grid-template-rows: 100px 100px;
  grid-auto-rows: fit-content(100px);
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3（自动行）</div>
  <div>项目 4（自动行）</div>
</div>
```

## 使用场景

```css
/* 1. 等行高网格 */
.equal-rows {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
}

/* 2. 最小高度卡片 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
}

/* 3. 动态列表 */
.dynamic-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
}

/* 4. 图片画廊 */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, 200px);
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
- [`grid-auto-flow`](grid-auto-flow.md) - 自动流
- [`grid-template-rows`](grid-template-rows.md) - 模板行
- [`minmax()`](function/minmax.md) - minmax 函数

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)