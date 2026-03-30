# -moz-float-edge

该属性指定 Firefox 浏览器计算元素内容高度和宽度时所使用的高度/宽度模型。

## 语法

```css
-moz-float-edge: content-box | padding-box | border-box | margin-box
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `content-box` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `content-box`

内容区域的高度和宽度（默认）。

### `padding-box`

内边距区域的高度和宽度。

### `border-box`

边框区域的高度和宽度。

### `margin-box`

外边距区域的高度和宽度。

## 注意

- 该属性是 Firefox 特有的属性
- 主要用于控制 `height` 和 `width` 属性的计算方式
- 与 `box-sizing` 属性类似，但行为略有不同

## 示例

```css
/* 使用 content-box 模型 */
.element {
  -moz-float-edge: content-box;
  width: 200px;
  height: 100px;
}

/* 使用 border-box 模型 */
.element {
  -moz-float-edge: border-box;
  width: 200px;
  height: 100px;
}
```

## 使用场景

```css
/* 场景 1：确保 Firefox 中元素尺寸计算一致 */
.box {
  width: 300px;
  height: 200px;
  -moz-float-edge: content-box;
}

/* 场景 2：与 box-sizing 配合使用 */
.responsive-box {
  box-sizing: border-box;
  -moz-float-edge: border-box;
  width: 100%;
}

/* 场景 3：旧版 Firefox 兼容性处理 */
.legacy-element {
  -moz-float-edge: padding-box;
  width: 150px;
  height: 80px;
}
