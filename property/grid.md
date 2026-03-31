# grid

`grid` 属性是网格布局的简写属性，用于设置 `grid-template-rows`、`grid-template-columns`、`grid-template-areas`、`grid-auto-rows`、`grid-auto-columns` 和 `grid-auto-flow`。

## 语法

```css
grid: none | <'grid-template-rows'> / <'grid-template-columns'> | <'grid-template-rows'> / <'grid-auto-columns'> && <'grid-auto-flow'> | <'grid-template-columns'> && <'grid-auto-flow'> / <'grid-auto-rows'>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 详见各简写属性 |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 否 |

## 值

### 关键字值

| 值 | 说明 |
| :--- | :--- |
| `none` | 重置所有网格属性为初始值 |

### 简写组合

| 组合 | 设置的内容 |
| :--- | :--- |
| `grid: 100px 200px / 100px 200px` | 设置行和列 |
| `grid: 1fr 1fr / 100px auto` | 使用 fr 单位 |
| `grid: auto-flow dense / 100px` | 设置自动流和行 |
| `grid: 100px / auto-flow dense` | 设置列和自动流 |

## 注意

- 简写属性会重置未指定的值为初始值
- 推荐使用显式设置以提高可读性
- 不能同时设置显式和隐式网格

## 示例

```css
/* 简单网格 */
.grid-container {
  display: grid;
  grid: 100px 200px / 100px 200px;
}

/* 等分布局 */
.grid-container {
  display: grid;
  grid: repeat(3, 1fr) / repeat(4, 1fr);
}

/* 自动流 */
.grid-container {
  display: grid;
  grid: auto-flow dense / 100px;
}

/* 重置网格 */
.grid-container {
  grid: none;
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
/* 1. 简单三列布局 */
.simple-grid {
  display: grid;
  grid: 100px / repeat(3, 1fr);
  gap: 20px;
}

/* 2. 响应式网格 */
.responsive-grid {
  display: grid;
  grid: auto-flow / repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* 3. 密集布局 */
.dense-grid {
  display: grid;
  grid: auto-flow dense / 100px;
}

/* 4. 固定行高网格 */
.fixed-row-grid {
  display: grid;
  grid: repeat(4, 100px) / 1fr 2fr 1fr;
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

- [`grid-template`](grid-template.md) - 模板简写
- [`grid-template-rows`](grid-template-rows.md) - 模板行
- [`grid-template-columns`](grid-template-columns.md) - 模板列
- [`grid-auto-flow`](grid-auto-flow.md) - 自动流
- [`gap`](gap.md) - 间距

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)