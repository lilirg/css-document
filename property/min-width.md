# min-width

该属性设置元素的最小宽度。

## 语法

```css
min-width: <length> | <percentage> | auto | max-content | min-content | fit-content
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<length>`
固定最小宽度值。

### `<percentage>`
相对于包含块宽度的百分比。

### `auto`
根据内容自动计算宽度。

### `max-content`
内容所需的最小自然宽度。

### `min-content`
内容可压缩的最小宽度。

### `fit-content`
在 `max-content` 和 `min-content` 之间选择。

## 注意

- 当内容宽度小于最小宽度时，元素会扩展到最小宽度
- 与 `max-width` 结合使用可以限制宽度范围
- 常用于响应式设计中确保元素不会过窄

## 示例

```css
/* CSS 示例 */
.box {
  min-width: 200px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  即使内容很少，宽度也至少为 200px
</div>
```

## 使用场景

```css
/* 1. 表格最小宽度 */
.table {
  min-width: 600px;
}

/* 2. 侧边栏最小宽度 */
.sidebar {
  min-width: 250px;
}

/* 3. 模态框最小宽度 */
.modal {
  min-width: 300px;
  max-width: 90vw;
}

/* 4. 响应式最小宽度 */
.responsive {
  min-width: 320px;
}

/* 5. 导航栏最小宽度 */
.navbar {
  min-width: 200px;
}
