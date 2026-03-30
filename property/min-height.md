# min-height

该属性设置元素的最小高度。

## 语法

```css
min-height: <length> | <percentage> | auto | max-content | min-content | fit-content
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<length>`
固定最小高度值。

### `<percentage>`
相对于包含块高度的百分比。

### `auto`
根据内容自动计算高度。

### `max-content`
内容所需的最小自然高度。

### `min-content`
内容可压缩的最小高度。

### `fit-content`
在 `max-content` 和 `min-content` 之间选择。

## 注意

- 当内容高度小于最小高度时，元素会扩展到最小高度
- 与 `max-height` 结合使用可以限制高度范围
- 百分比值相对于包含块高度计算

## 示例

```css
/* CSS 示例 */
.box {
  min-height: 200px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  即使内容很少，高度也至少为 200px
</div>
```

## 使用场景

```css
/* 1. 全屏高度容器 */
.full-height {
  min-height: 100vh;
}

/* 2. 卡片最小高度 */
.card {
  min-height: 200px;
}

/* 3. 侧边栏最小高度 */
.sidebar {
  min-height: 100vh;
}

/* 4. 表单区域最小高度 */
.form-area {
  min-height: 300px;
}

/* 5. 响应式最小高度 */
.responsive {
  min-height: 100px;
}
@media (min-width: 768px) {
  .responsive {
    min-height: 200px;
  }
}
