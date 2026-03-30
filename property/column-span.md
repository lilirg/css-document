# column-span

该属性指定多列布局中的元素是否跨越所有列。

## 语法

```css
column-span: none | all
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### `none`
默认值。元素不跨越列，只在单列中显示。

### `all`
元素跨越所有列，横跨整个容器宽度。

## 注意

- 通常用于标题或分隔线
- 跨越列的元素会打断内容流
- 元素会占据整行，下方内容从新列开始

## 示例

```css
/* CSS 示例 */
h1 {
  column-span: all;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <h1>跨越所有列的标题</h1>
  <p>内容在列中显示...</p>
</div>
```

## 使用场景

```css
/* 1. 跨列标题 */
.columns h1 {
  column-span: all;
  text-align: center;
}

/* 2. 跨列分隔线 */
.columns hr {
  column-span: all;
  border: none;
  border-top: 2px solid #ccc;
}

/* 3. 跨列横幅 */
.banner {
  column-span: all;
  background: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
}

/* 4. 多列文章布局 */
.article {
  column-count: 2;
}
.article h2 {
  column-span: all;
}
