# box-sizing

该属性设置如何计算元素的总宽度和高度。

## 语法

```css
box-sizing: content-box | border-box | padding-box
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `content-box`  |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `content-box`

宽度和高度只包括内容，不包括 padding 和 border。

### `border-box`

宽度和高度包括内容、padding 和 border。

### `padding-box`

宽度和高度包括内容和 padding，不包括 border。

## 注意

- `border-box` 更易于布局
- 改变盒模型会影响布局计算
- 与 `width` 和 `height` 配合使用

## 示例

```css
/* 内容盒 */
.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* 实际宽度 = 200 + 40 + 10 = 250px */
}

/* 边框盒 */
.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* 实际宽度 = 200px */
}
```

```html
<!-- 盒子模型示例 -->
<div class="content-box">内容盒</div>
<div class="border-box">边框盒</div>
```

## 使用场景

```css
/* 全局边框盒 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
