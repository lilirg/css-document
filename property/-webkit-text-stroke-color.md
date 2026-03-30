# -webkit-text-stroke-color

该属性指定 WebKit 浏览器中文本描边的颜色。

## 语法

```css
-webkit-text-stroke-color: <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `currentcolor` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<color>`
颜色值，可以是：
- 颜色名称（如 `red`、`blue`、`black`）
- 十六进制（如 `#ff0000`、`#000`）
- RGB/RGBA（如 `rgb(255,0,0)`、`rgba(0,0,0,0.5)`）
- HSL/HSLA（如 `hsl(0,100%,50%)`）
- 关键字（如 `transparent`、`inherit`、`initial`）

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 是 `-webkit-text-stroke` 速记属性的一部分
- 通常与 `-webkit-text-stroke-width` 配合使用

## 示例

```css
/* 设置描边颜色 */
.element {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

/* 使用透明描边 */
.element {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: transparent;
}
```

## 使用场景

```css
/* 场景 1：黑色描边文字 */
.black-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: white;
  font-size: 36px;
}

/* 场景 2：彩色描边 */
.colored-stroke {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #007bff;
  -webkit-text-fill-color: white;
  font-size: 48px;
}

/* 场景 3：渐变描边（配合其他属性） */
.gradient-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ff0000;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
}

/* 场景 4：半透明描边 */
.faded-stroke {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  -webkit-text-fill-color: #333;
  font-size: 24px;
}