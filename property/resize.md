# resize

该属性控制用户是否可以调整元素的大小。

## 语法

```css
resize: none | both | horizontal | vertical | inherit
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级元素和 `overflow` 不为 `visible` 的元素 |
| 动画 | 否 |

## 值

### `none`
用户不能调整元素大小（默认）。

### `both`
用户可以水平和垂直调整元素大小。

### `horizontal`
用户只能水平调整元素大小。

### `vertical`
用户只能垂直调整元素大小。

## 注意

- 元素必须设置 `overflow` 属性且不为 `visible`
- 通常与 `textarea`、`div` 等元素配合使用
- 调整手柄显示在元素右下角

## 示例

```css
/* CSS 示例 */
.resizable {
  resize: both;
  overflow: auto;
  width: 300px;
  height: 200px;
}
```

```html
<!-- HTML 示例 -->
<div class="resizable">
  可调整大小的内容区域
</div>
```

## 使用场景

```css
/* 1. 双向调整 - 文本区域 */
.textarea {
  resize: both;
  overflow: auto;
}

/* 2. 水平调整 - 宽度可调 */
.width-only {
  resize: horizontal;
  overflow: auto;
}

/* 3. 垂直调整 - 高度可调 */
.height-only {
  resize: vertical;
  overflow: auto;
}

/* 4. 禁止调整 - 固定尺寸 */
.fixed-size {
  resize: none;
}

/* 5. 可调整面板 */
.resizable-panel {
  resize: both;
  overflow: auto;
  min-width: 200px;
  min-height: 150px;
}
