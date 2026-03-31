# grid-template-columns

`grid-template-columns` 属性用于定义网格列的大小和数量。

## 语法

```css
grid-template-columns: none | <track-size> || <track-repeat> | <auto-repeat> | <auto-fill> | <auto-fit>
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
| `repeat(auto-fill, size)` | 自动填充尽可能多的列 |
| `repeat(auto-fit, size)` | 自动适应，压缩空列 |

### minmax 和 fit-content

| 值 | 说明 |
| :--- | :--- |
| `minmax(min, max)` | 最小和最大宽度范围 |
| `fit-content()` | 适应内容宽度 |

## 注意

- 列的数量由值的数量决定
- `fr` 单位按比例分配剩余空间
- `auto-fill` 和 `auto-fit` 用于响应式布局

## 示例

```css
/* 固定列宽 */
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}

/* 等分布局 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

/* 混合布局 */
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}

/* 使用 repeat */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* 响应式布局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
/* 1. 三栏布局 */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 20px;
}

/* 2. 等分布局 */
.equal-columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* 3. 响应式卡片 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* 4. 不对称布局 */
.asymmetric {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}

/* 5. 固定 + 自适应 */
.fixed-auto {
  display: grid;
  grid-template-columns: 200px repeat(auto-fit, minmax(150px, 1fr));
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

- [`grid-template-rows`](grid-template-rows.md) - 模板行
- [`grid-template`](grid-template.md) - 模板简写
- [`grid-auto-columns`](grid-auto-columns.md) - 自动列宽
- [`repeat()`](function/repeat.md) - repeat 函数
- [`minmax()`](function/minmax.md) - minmax 函数

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)