# -webkit-text-stroke-width

该属性指定 WebKit 浏览器中文本描边的宽度。

## 语法

```css
-webkit-text-stroke-width: <length> | thin | medium | thick
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<length>`
描边宽度，可以是：
- 绝对长度（如 `1px`、`2pt`）
- 相对长度（如 `0.1em`、`1rem`）

### `thin`
细描边。

### `medium`
中等描边（默认）。

### `thick`
粗描边。

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 是 `-webkit-text-stroke` 速记属性的一部分
- 通常与 `-webkit-text-stroke-color` 配合使用
- 值为 `0` 时不显示描边

## 示例

```css
/* 设置描边宽度 */
.element {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

/* 使用关键字 */
.element {
  -webkit-text-stroke-width: thick;
  -webkit-text-stroke-color: red;
}
```

## 使用场景

```css
/* 场景 1：细描边文字 */
.thin-stroke {
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #333;
  -webkit-text-fill-color: white;
  font-size: 24px;
}

/* 场景 2：中等描边标题 */
.medium-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: yellow;
  font-size: 36px;
}

/* 场景 3：粗描边装饰文字 */
.thick-stroke {
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #007bff;
  -webkit-text-fill-color: white;
  font-size: 60px;
  font-weight: bold;
}

/* 场景 4：无描边（重置） */
.no-stroke {
  -webkit-text-stroke-width: 0;
  -webkit-text-fill-color: #333;
}