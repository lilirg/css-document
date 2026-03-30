# -moz-orient

该属性指定 Firefox 浏览器中元素的方向，主要用于 `progress` 和 `meter` 元素。

## 语法

```css
-moz-orient: horizontal | vertical
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `horizontal` |
| 适用 HTML 元素 | `progress`, `meter` |
| 动画 | 否 |

## 值

### `horizontal`
水平方向（默认）。

### `vertical`
垂直方向。

## 注意
- 该属性是 Firefox 特有的属性
- 主要用于控制进度条和计量器的显示方向
- 现代浏览器通常使用 `appearance` 属性或标准 CSS 来控制方向

## 示例

```css
/* 垂直进度条 */
progress {
  -moz-orient: vertical;
  width: 30px;
  height: 200px;
}

/* 水平计量器 */
meter {
  -moz-orient: horizontal;
  width: 200px;
}
```

## 使用场景

```css
/* 场景 1：垂直进度条 */
.vertical-progress {
  -moz-orient: vertical;
  width: 20px;
  height: 150px;
}

/* 场景 2：水平进度条（默认） */
.horizontal-progress {
  -moz-orient: horizontal;
  width: 200px;
  height: 20px;
}

/* 场景 3：垂直计量器 */
.vertical-meter {
  -moz-orient: vertical;
  width: 40px;
  height: 100px;
}