# right

该属性设置定位元素的右侧位置。

## 语法

```css
right: auto | <length> | <percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 定位元素（`position` 不为 `static`） |
| 动画 | 是 |

## 值

### `auto`
使用默认位置。

### `<length>`
固定距离值。

### `<percentage>`
相对于包含块宽度的百分比。

## 注意

- 仅对 `position` 为 `relative`、`absolute`、`fixed` 或 `sticky` 的元素有效
- 与 `left` 属性配合使用可精确控制元素宽度
- 百分比值相对于包含块宽度计算

## 示例

```css
/* CSS 示例 */
.absolute-box {
  position: absolute;
  right: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="container">
  <div class="absolute-box">右侧距离容器 20px</div>
</div>
```

## 使用场景

```css
/* 1. 绝对定位 - 右上角元素 */
.top-right {
  position: absolute;
  right: 0;
  top: 0;
}

/* 2. 固定定位 - 右侧悬浮按钮 */
.fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

/* 3. 相对定位 - 向右偏移 */
.offset-right {
  position: relative;
  right: 10px;
}

/* 4. 百分比定位 - 响应式右侧 */
.responsive {
  position: absolute;
  right: 5%;
}

/* 5. 模态框 - 右侧对齐 */
.modal-right {
  position: absolute;
  right: 0;
  width: 300px;
}
