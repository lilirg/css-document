# grid-template-rows

`grid-template-rows` 属性用于定义网格行的大小和数量。

## 语法

```css
grid-template-rows: none | <track-size> || <track-repeat> | <auto-repeat> | <auto-fill> | <auto-fit>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 是（可动画） |

## 值

### 固定大小

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 固定长度（如 `100px`, `20rem`） |
| `<percentage>` | 相对于容器的百分比 |

### 灵活大小

| 值 | 说明 |
| :--- | :--- |
| `fr` | 分数单位，分配剩余空间 |
| `auto` | 根据内容自动计算 |

### 重复函数

| 值 | 说明 |
| :--- | :--- |
| `repeat(n, size)` | 重复 n 次指定大小 |
| `repeat(auto-fill, size)` | 自动填充尽可能多的行 |
| `repeat(auto-fit, size)` | 自动适应，压缩空行 |

### minmax 和 fit-content

| 值 | 说明 |
| :--- | :--- |
| `minmax(min, max)` | 最小和最大高度范围 |
| `fit-content()` | 适应内容高度 |

## 注意

- 行的数量由值的数量决定
- `fr` 单位按比例分配剩余空间
- 通常与 `grid-template-columns` 配合使用

## 示例

```css
/* 固定行高 */
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px 100px;
}

/* 等分行高 */
.grid-container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

/* 混合布局 */
.grid-container {
  display: grid;
  grid-template-rows: 80px 1fr 60px;
}

/* 使用 repeat */
.grid-container {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}

/* 自适应行高 */
.grid-container {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
</div>
```

## 使用场景

```css
/* 1. 经典布局 */
.layout {
  display: grid;
  grid-template-rows: 80px 1fr 60px;
  grid-template-columns: 1fr;
}

.header { grid-row: 1; }
.main { grid-row: 2; }
.footer { grid-row: 3; }

/* 2. 等分行高 */
.equal-rows {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
}

/* 3. 自适应卡片行 */
.card-rows {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

/* 4. 固定头部和底部 */
.page-layout {
  display: grid;
  grid-template-rows: 60px 1fr auto;
  min-height: 100vh;
}

/* 5. 表格布局 */
.table-like {
  display: grid;
  grid-template-rows: auto repeat(10, 50px) auto;
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

- [`grid-template-columns`](grid-template-columns.md) - 模板列
- [`grid-template`](grid-template.md) - 模板简写
- [`grid-auto-rows`](grid-auto-rows.md) - 自动行高
- [`repeat()`](function/repeat.md) - repeat 函数
- [`minmax()`](function/minmax.md) - minmax 函数

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)