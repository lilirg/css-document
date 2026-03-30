# max-width

该属性设置元素的最大宽度。

## 语法

```css
max-width: <length> | <percentage> | none | max-content | min-content | fit-content | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<length>`
固定最大宽度值。

### `<percentage>`
相对于包含块宽度的百分比。

### `none`
无限制，元素可以任意宽度。

### `max-content`
内容所需的最小自然宽度。

### `min-content`
内容可压缩的最小宽度。

### `fit-content`
在 `max-content` 和 `min-content` 之间选择。

### `auto`
等同于 `none`。

## 注意

- 当内容宽度超过最大宽度时，内容会换行或溢出
- 与 `min-width` 结合使用可以限制宽度范围
- 常用于响应式设计中限制内容宽度

## 示例

```css
/* CSS 示例 */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

```html
<!-- HTML 示例 -->
<div class="container">
  内容最大宽度为 1200px，居中显示
</div>
```

## 使用场景

```css
/* 1. 响应式容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* 2. 文章最大宽度 */
.article {
  max-width: 800px;
  margin: 0 auto;
}

/* 3. 图片响应式 */
.responsive-image {
  max-width: 100%;
  height: auto;
}

/* 4. 模态框宽度限制 */
.modal {
  max-width: 500px;
  width: 90%;
}

/* 5. 卡片最大宽度 */
.card {
  max-width: 400px;
}
