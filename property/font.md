# font

该属性用于设置元素的字体样式，是一个速记属性，可以一次性设置多个字体相关属性。

## 语法

```css
font: [ font-style || font-variant || font-weight || font-stretch || font-size [/ line-height] || font-family ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 无（各属性使用各自初始值） |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### font-style
- `normal` - 正常字体
- `italic` - 斜体
- `oblique` - 倾斜字体

### font-variant
- `normal` - 正常字体
- `small-caps` - 小型大写字母

### font-weight
- `normal` - 正常粗细 (400)
- `bold` - 粗体 (700)
- `100` 到 `900` - 数值粗细

### font-stretch
- `normal` - 正常宽度
- `condensed` - 压缩宽度
- `expanded` - 扩展宽度

### font-size
- `<length>` - 具体长度值
- `<percentage>` - 相对于父元素的百分比
- `smaller` / `larger` - 相对于父元素调整
- `xx-small` 到 `xxx-large` - 关键字大小

### line-height
- `<number>` - 倍数
- `<length>` - 具体长度
- `<percentage>` - 百分比

### font-family
- `<family-name>` - 字体族名称
- `<generic-family>` - 通用字体族（serif, sans-serif, monospace, cursive, fantasy）

## 注意
1. 使用 font 速记属性时，必须至少包含 `font-size` 和 `font-family`
2. 如果省略可选值，它们会被重置为各自的初始值
3. `line-height` 紧跟在 `font-size` 后面，用斜杠分隔

## 示例

```css
/* 基本用法 */
p {
  font: 16px sans-serif;
}

/* 包含行高 */
h1 {
  font: bold 24px/1.5 "Helvetica Neue", Arial, sans-serif;
}

/* 包含字体样式和变体 */
cite {
  font: italic small-caps bold 18px Georgia, serif;
}
```

## 使用场景

```css
/* 1. 正文文本 - 简洁设置 */
body {
  font: 16px/1.6 "Segoe UI", "Microsoft YaHei", sans-serif;
}

/* 2. 标题 - 粗体大字号 */
h1 {
  font: bold 32px/1.2 "Helvetica Neue", Arial, sans-serif;
}

/* 3. 引用 - 斜体样式 */
blockquote {
  font: italic 18px/1.5 Georgia, serif;
}

/* 4. 代码块 - 等宽字体 */
code {
  font: normal normal normal 14px/1.5 "Consolas", "Monaco", monospace;
}

/* 5. 小型大写字母 - 缩写强调 */
abbr {
  font: normal small-caps normal 14px sans-serif;
}
