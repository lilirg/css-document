# display

该属性指定元素的显示类型，控制元素如何布局和显示。

## 语法

```css
display: <display-outside> || <display-inside> || <display-listitem>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 取决于元素类型 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### 基本显示类型

| 值 | 说明 |
| :--- | :--- |
| `none` | 不显示元素 |
| `block` | 块级元素 |
| `inline` | 行内元素 |
| `inline-block` | 行内块元素 |

### 布局模型

| 值 | 说明 |
| :--- | :--- |
| `flex` | 弹性盒子 |
| `inline-flex` | 行内弹性盒子 |
| `grid` | 网格布局 |
| `inline-grid` | 行内网格布局 |
| `table` | 表格 |
| `inline-table` | 行内表格 |
| `table-row` | 表格行 |
| `table-cell` | 表格单元格 |

### 其他值

| 值 | 说明 |
| :--- | :--- |
| `contents` | 元素不显示，子元素直接显示 |
| `run-in` | 根据上下文决定为 block 或 inline |

## 注意

- `display: none` 会从文档流中完全移除元素
- 使用 `visibility: hidden` 可以隐藏元素但保留空间
- 现代布局推荐使用 Flexbox 和 Grid

## 示例

```css
/* CSS 示例 */
.block {
  display: block;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.hidden {
  display: none;
}
```

```html
<!-- HTML 示例 -->
<div class="block">块级元素</div>
<div class="flex-container">
  <div>项目 1</div>
  <div>项目 2</div>
</div>
```

## 使用场景

```css
/* 1. 隐藏元素 */
.hidden {
  display: none;
}

/* 2. Flex 布局容器 */
.flex-container {
  display: flex;
  gap: 10px;
}

/* 3. Grid 布局容器 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* 4. 行内块元素 */
.inline-btn {
  display: inline-block;
  padding: 10px 20px;
}

/* 5. 导航栏 */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 6. 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
