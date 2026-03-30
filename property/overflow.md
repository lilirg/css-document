# overflow

该属性设置当内容溢出元素框时的处理方式。

## 语法

```css
overflow: visible | hidden | scroll | auto | clip
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
内容溢出时显示滚动条（始终显示）。

### `auto`
内容溢出时显示滚动条（需要时显示）。

### `clip`
内容溢出时裁剪，不显示滚动条。

## 注意

- 可以分别设置水平和垂直方向：`overflow-x` 和 `overflow-y`
- `scroll` 值在移动端可能表现不同
- 使用 `auto` 可以智能显示滚动条

## 示例

```css
/* CSS 示例 */
.box {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容超过容器大小时会显示滚动条
</div>
```

## 使用场景

```css
/* 1. 自动滚动条 */
.auto-scroll {
  width: 300px;
  height: 200px;
  overflow: auto;
}

/* 2. 隐藏溢出 */
.hidden-overflow {
  width: 300px;
  height: 200px;
  overflow: hidden;
}

/* 3. 始终显示滚动条 */
.always-scroll {
  width: 300px;
  height: 200px;
  overflow: scroll;
}

/* 4. 仅垂直滚动 */
.vertical-scroll {
  width: 300px;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 5. 模态框内容滚动 */
.modal-content {
  max-height: 80vh;
  overflow-y: auto;
}
