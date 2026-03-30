# max-height

该属性设置元素的最大高度。

## 语法

```css
max-height: <length> | <percentage> | none | max-content | min-content | fit-content | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<length>`
固定最大高度值。

### `<percentage>`
相对于包含块高度的百分比。

### `none`
无限制，元素可以任意高度。

### `max-content`
内容所需的最小自然高度。

### `min-content`
内容可压缩的最小高度。

### `fit-content`
在 `max-content` 和 `min-content` 之间选择。

### `auto`
等同于 `none`。

## 注意

- 当内容高度超过最大高度时，内容会被截断或溢出
- 与 `min-height` 结合使用可以限制高度范围
- 百分比值相对于包含块高度计算

## 示例

```css
/* CSS 示例 */
.box {
  max-height: 200px;
  overflow: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容超过 200px 时会显示滚动条
</div>
```

## 使用场景

```css
/* 1. 限制卡片最大高度 */
.card {
  max-height: 300px;
  overflow: hidden;
}

/* 2. 模态框最大高度 */
.modal {
  max-height: 80vh;
  overflow-y: auto;
}

/* 3. 摘要内容限制 */
.summary {
  max-height: 100px;
  overflow: hidden;
}

/* 4. 响应式最大高度 */
.responsive {
  max-height: 200px;
}
@media (min-width: 768px) {
  .responsive {
    max-height: 400px;
  }
}

/* 5. 图片容器限制 */
.image-container {
  max-height: 500px;
  overflow: hidden;
}
