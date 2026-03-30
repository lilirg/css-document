# -webkit-text-stroke

该属性指定 WebKit 浏览器中文本描边的速记属性。

## 语法

```css
-webkit-text-stroke: <width> || <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` 和 `currentcolor` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<width>`
描边宽度，可以是：
- 长度值（如 `1px`、`2px`）
- `thin`、`medium`、`thick`

### `<color>`
描边颜色，可以是：
- 颜色名称（如 `red`、`black`）
- 十六进制（如 `#ff0000`）
- RGB/RGBA（如 `rgb(0,0,0)`）
- `transparent`

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 是 `-webkit-text-stroke-width` 和 `-webkit-text-stroke-color` 的速记属性
- 常与 `-webkit-text-fill-color` 配合使用创建描边文字效果

## 示例

```css
/* 设置描边 */
.element {
  -webkit-text-stroke: 1px black;
}

/* 仅设置宽度 */
.element {
  -webkit-text-stroke: 2px;
}

/* 仅设置颜色 */
.element {
  -webkit-text-stroke: red;
}
```

## 使用场景

```css
/* 场景 1：描边文字效果 */
.stroked-text {
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  font-weight: bold;
}

/* 场景 2：彩色描边文字 */
.colored-stroke {
  -webkit-text-stroke: 2px #007bff;
  -webkit-text-fill-color: white;
  font-size: 36px;
}

/* 场景 3：粗描边标题 */
.headline {
  -webkit-text-stroke: 3px #ff0000;
  -webkit-text-fill-color: yellow;
  font-size: 60px;
}

/* 场景 4：细描边装饰文字 */
.decorative {
  -webkit-text-stroke: 0.5px #333;
  -webkit-text-fill-color: #fff;
  font-size: 24px;
}