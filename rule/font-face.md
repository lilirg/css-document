# @font-face

`@font-face` 规则用于定义自定义字体，允许在网页中使用非系统安装的字体。

## 语法

```css
@font-face {
  font-family: <family-name>;
  src: <src>;
  [font-weight: <weight>];
  [font-style: <style>];
  [font-stretch: <stretch>];
  [unicode-range: <range>];
  [font-variant: <variant>];
  [font-feature-settings: <settings>];
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 不适用（样式表规则） |
| 动画 | 不适用 |

## 属性值

### font-family（字体族名）

定义字体的名称，用于在 CSS 中引用。

### src（字体源）

定义字体文件的来源，可以是以下值：

- `url("path/to/font.woff2")`：字体文件路径
- `local("Font Name")`：本地安装的字体
- `format("woff2")`：字体格式提示
- `unicode-range`：Unicode 字符范围

### font-weight（字体粗细）

定义字体的粗细，可以是：

- `normal`、`bold`、`lighter`、`bolder`
- 数值：`100` 到 `900`

### font-style（字体样式）

定义字体的样式：

- `normal`：正常
- `italic`：斜体
- `oblique`：倾斜

### font-stretch（字体拉伸）

定义字体的拉伸程度：

- `normal`、`ultra-condensed`、`extra-condensed`、`condensed`、`semi-condensed`
- `semi-expanded`、`expanded`、`extra-expanded`、`ultra-expanded`

### unicode-range（Unicode 范围）

定义字体支持的 Unicode 字符范围。

## 示例

### 基本用法

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/myfont.woff2') format('woff2'),
       url('fonts/myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'MyCustomFont', sans-serif;
}
```

### 加载多种格式

```css
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto.woff2') format('woff2'),
       url('fonts/roboto.woff') format('woff'),
       url('fonts/roboto.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

### 定义粗体和斜体

```css
/* 正常字体 */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

/* 粗体字体 */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}

/* 斜体字体 */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-italic.woff2') format('woff2');
  font-weight: normal;
  font-style: italic;
}

/* 粗斜体字体 */
@font-face {
  font-family: 'Roboto';
  src: url('fonts/roboto-bolditalic.woff2') format('woff2');
  font-weight: bold;
  font-style: italic;
}
```

### 本地字体回退

```css
@font-face {
  font-family: 'CustomFont';
  src: local('Arial'), local('Helvetica'), url('fonts/custom.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
```

### Unicode 范围

```css
@font-face {
  font-family: 'ChineseFont';
  src: url('fonts/chinese.woff2') format('woff2');
  unicode-range: U+4E00-U+9FFF; /* 中文字符范围 */
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 4+ | 完全支持 |
| Firefox | 3.5+ | 完全支持 |
| Safari | 3.1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: @font-face](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)
- [W3C: CSS Fonts Module Level 3 - @font-face](https://www.w3.org/TR/css-fonts-3/#font-face-rule)
