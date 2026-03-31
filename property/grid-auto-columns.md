# grid-auto-columns

`grid-auto-columns` 属性用于设置隐式网格列的宽度，当项目超出显式定义的列时自动创建新列。

## 语法

```css
grid-auto-columns: <length> | <percentage> | <track-size> | minmax() | fit-content()
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
| `min-content` | 内容所需的最小宽度 |
| `max-content` | 内容所需的最大宽度 |
| `fit-content()` | 适应内容宽度 |
| `minmax(min, max)` | 最小和最大宽度范围 |

## 注意

- 仅影响自动创建的隐式列
- 与 `grid-auto-rows` 配合使用
- 与 `grid-auto-flow` 配合控制自动放置

## 示例

```css
/* 固定宽度隐式列 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 100px;
}

/* 使用 minmax */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: minmax(100px, 1fr);
}

/* 适应内容 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: fit-content(200px);
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3（自动列）</div>
  <div>项目 4（自动列）</div>
</div>
```

## 使用场景

```css
/* 1. 横向滚动网格 */
.horizontal-grid {
  display: grid;
  grid-template-columns: 200px;
  grid-auto-columns: 150px;
  grid-auto-flow: column;
  overflow-x: auto;
}

/* 2. 最小宽度卡片 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: minmax(200px, 1fr);
}

/* 3. 动态标签网格 */
.tag-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: fit-content(100px);
  grid-auto-flow: column;
}

/* 4. 图片画廊 */
.image-grid {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-auto-columns: minmax(150px, 200px);
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

- [`grid-auto-rows`](grid-auto-rows.md) - 自动行高
- [`grid-auto-flow`](grid-auto-flow.md) - 自动流
- [`grid-template-columns`](grid-template-columns.md) - 模板列
- [`minmax()`](function/minmax.md) - minmax 函数

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)