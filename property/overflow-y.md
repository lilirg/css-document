# overflow-y

该属性设置当内容垂直溢出元素框时的处理方式。

## 语法

```css
overflow-y: visible | hidden | scroll | auto | clip
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `visible` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `visible`
默认值。内容溢出时不裁剪，显示在元素框外。

### `hidden`
内容溢出时裁剪，不可见部分被隐藏。

### `scroll`
内容溢出时显示垂直滚动条（始终显示）。

### `auto`
内容溢出时显示垂直滚动条（需要时显示）。

### `clip`
内容溢出时裁剪，不显示滚动条。

## 注意

- 通常与 `overflow-x` 配合使用
- 与 `overflow` 属性相比，可以单独控制垂直方向
- 常用于模态框、侧边栏等需要垂直滚动的场景

## 示例

```css
/* CSS 示例 */
.box {
  height: 200px;
  overflow-y: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容超过高度时会显示垂直滚动条
</div>
```

## 使用场景

```css
/* 1. 自动垂直滚动 */
.auto-scroll {
  height: 300px;
  overflow-y: auto;
}

/* 2. 隐藏垂直溢出 */
.hidden-overflow {
  height: 300px;
  overflow-y: hidden;
}

/* 3. 始终显示垂直滚动条 */
.always-scroll {
  height: 300px;
  overflow-y: scroll;
}

/* 4. 模态框内容滚动 */
.modal-content {
  max-height: 80vh;
  overflow-y: auto;
}

/* 5. 侧边栏滚动 */
.sidebar {
  height: 100vh;
  overflow-y: auto;
}
