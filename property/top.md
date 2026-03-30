# top

该属性设置定位元素的顶部位置。

## 语法

```css
top: auto | <length> | <percentage>
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
相对于包含块高度的百分比。

## 注意

- 仅对 `position` 为 `relative`、`absolute`、`fixed` 或 `sticky` 的元素有效
- 与 `bottom` 属性配合使用可精确控制元素高度
- 百分比值相对于包含块高度计算

## 示例

```css
/* CSS 示例 */
.absolute-box {
  position: absolute;
  top: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="container">
  <div class="absolute-box">顶部距离容器 20px</div>
</div>
```

## 使用场景

```css
/* 1. 绝对定位 - 左上角元素 */
.top-left {
  position: absolute;
  top: 0;
  left: 0;
}

/* 2. 固定定位 - 顶部导航栏 */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

/* 3. 相对定位 - 向下偏移 */
.offset-down {
  position: relative;
  top: 10px;
}

/* 4. 百分比定位 - 响应式顶部 */
.responsive {
  position: absolute;
  top: 10%;
}

/* 5. 模态框 - 垂直居中 */
.modal-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
