# -webkit-text-fill-color

该属性指定 WebKit 浏览器中文本填充颜色。

## 语法

```css
-webkit-text-fill-color: <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `currentcolor` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<color>`
颜色值，可以是：
- 颜色名称（如 `red`、`blue`）
- 十六进制（如 `#ff0000`）
- RGB/RGBA（如 `rgb(255,0,0)`、`rgba(255,0,0,0.5)`）
- HSL/HSLA（如 `hsl(0,100%,50%)`）
- 关键字（如 `transparent`、`inherit`）

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 与 `color` 属性类似，但专门用于文本填充
- 常与 `-webkit-text-stroke` 配合使用创建描边文字效果

## 示例

```css
/* 设置文本填充颜色 */
.element {
  -webkit-text-fill-color: red;
}

/* 半透明文本 */
.element {
  -webkit-text-fill-color: rgba(0, 0, 0, 0.5);
}
```

## 使用场景

```css
/* 场景 1：描边文字效果 */
.stroked-text {
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
}

/* 场景 2：渐变文字 */
.gradient-text {
  background: linear-gradient(to right, #ff0000, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
}

/* 场景 3：半透明文字 */
.faded-text {
  -webkit-text-fill-color: rgba(0, 0, 0, 0.3);
  font-size: 24px;
}

/* 场景 4：彩色描边文字 */
.colored-stroke {
  -webkit-text-stroke: 2px #007bff;
  -webkit-text-fill-color: white;
  font-size: 40px;
}