# CSS 参考

本部分提供 CSS 属性、规则、函数和数据类型的详细文档。

## CSS 属性

CSS 属性定义了元素的样式和行为。本参考包含所有标准 CSS 属性的详细说明。

### 常用属性分类

- **布局属性** - display、position、float、clear 等
- **盒模型属性** - margin、padding、border、width、height 等
- **文本属性** - color、font、text-align、line-height 等
- **背景属性** - background、background-color、background-image 等
- **动画属性** - animation、transition、transform 等

## CSS 规则（At-Rules）

CSS 规则是以 `@` 符号开头的特殊规则，用于定义样式表的元数据、条件规则、动画、页面布局等。

### 常用 At-Rules

- `@media` - 媒体查询
- `@keyframes` - 动画关键帧
- `@font-face` - 自定义字体
- `@import` - 导入样式表
- `@charset` - 字符编码
- `@supports` - 特性检测

## CSS 函数

CSS 函数用于在 CSS 中执行计算、转换和生成值。

### 常用函数分类

- **颜色函数** - rgb()、rgba()、hsl()、hsla()
- **渐变函数** - linear-gradient()、radial-gradient()
- **形状函数** - circle()、ellipse()、polygon()
- **变换函数** - translate()、rotate()、scale()
- **计算函数** - calc()、min()、max()、clamp()

## CSS 数据类型

CSS 数据类型定义了 CSS 属性值的格式和类型。

### 常用数据类型

- **数值类型** - `<integer>`、`<number>`、`<percentage>`、`<length>`
- **时间类型** - `<time>`、`<angle>`、`<frequency>`、`<resolution>`
- **颜色类型** - `<color>`、`<rgb>()`、`<hsl>()`
- **字符串类型** - `<string>`
- **URL 类型** - `<url>`

## 伪类与伪元素

伪类和伪元素是 CSS 选择器的重要组成部分。

### 伪类（Pseudo-classes）

以单冒号 `:` 开头，用于选择处于特定状态的元素。

- **状态伪类** - :active、:hover、:focus、:visited、:link
- **表单伪类** - :checked、:disabled、:enabled、:valid、:invalid
- **结构伪类** - :first-child、:last-child、:nth-child()
- **函数式伪类** - :not()、:is()、:where()

### 伪元素（Pseudo-elements）

以双冒号 `::` 开头，用于选择元素的特定部分。

- `::before` - 元素内容前插入内容
- `::after` - 元素内容后插入内容
- `::first-letter` - 元素的第一个字母
- `::first-line` - 元素的第一行
- `::placeholder` - 占位文字

## 相关资源

- [MDN Web Docs: CSS 参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
- [W3C CSS 规范](https://www.w3.org/Style/CSS/specs.en)
- [CSS-Tricks: CSS Reference](https://css-tricks.com/almanac/)