# overflow-x

该属性设置当内容水平溢出元素框时的处理方式。

## 语法

```css
overflow-x: visible | hidden | scroll | auto | clip
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
内容溢出时显示水平滚动条（始终显示）。

### `auto`
内容溢出时显示水平滚动条（需要时显示）。

### `clip`
内容溢出时裁剪，不显示滚动条。

## 注意

- 通常与 `overflow-y` 配合使用
- 与 `overflow` 属性相比，可以单独控制水平方向
- 移动端可能需要特殊处理

## 示例

```css
/* CSS 示例 */
.box {
  width: 200px;
  overflow-x: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容超过宽度时会显示水平滚动条
</div>
```

## 使用场景

```css
/* 1. 表格横向滚动 */
.table-container {
  overflow-x: auto;
}

/* 2. 隐藏横向溢出 */
.no-horizontal-scroll {
  overflow-x: hidden;
}

/* 3. 始终显示横向滚动条 */
.always-horizontal-scroll {
  overflow-x: scroll;
}

/* 4. 代码块横向滚动 */
.code-block {
  overflow-x: auto;
  white-space: pre;
}

/* 5. 横向滚动容器 */
.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
}
