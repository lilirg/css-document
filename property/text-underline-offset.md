# text-underline-offset

`text-underline-offset` CSS 属性设置文本下划线的偏移量，控制下划线与文本基线之间的距离。

## 语法

```css
/* 自动偏移 */
text-underline-offset: auto;

/* 长度值 */
text-underline-offset: 2px;
text-underline-offset: 0.2em;

/* 百分比值 */
text-underline-offset: 10%;
```

## 值

### `auto`

使用浏览器默认的下划线偏移量。这是默认值。

```css
text-underline-offset: auto;
```

### 长度值

使用长度值指定下划线的偏移量。

```css
text-underline-offset: 2px;
text-underline-offset: 0.2em;
text-underline-offset: 1rem;
```

### 百分比值

使用相对于字体大小的百分比值。

```css
text-underline-offset: 10%;
text-underline-offset: 20%;
```

## 示例

### 基本偏移

```css
/* 增加下划线偏移 */
.underlined {
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

### 使用 em 单位

```css
/* 相对于字体大小 */
.em-offset {
  text-decoration: underline;
  text-underline-offset: 0.3em;
}
```

### 配合文本装饰厚度

```css
/* 下划线偏移和厚度 */
.thick-underline {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
```

### 实际应用

```css
/* 链接样式 */
a {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* 强调文本 */
.important {
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-color: red;
}

/* 导航链接 */
.nav-link {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 87+ |
| Edge | 87+ |
| Firefox | 73+ |
| Safari | 12.1+ |
| Opera | 73+ |

## 注意事项

1. **仅影响下划线**：`text-underline-offset` 只影响 `text-decoration-line: underline` 的下划线。

2. **不影响其他装饰线**：对 `overline`（上划线）和 `line-through`（删除线）没有影响。

3. **正值向下**：正值使下划线向下偏移，远离文本。

4. **负值向上**：负值使下划线向上偏移，可能穿过文本。

5. **与 text-decoration-thickness 配合**：可以与 `text-decoration-thickness` 配合使用，获得更精细的控制。

## 相关属性

- [`text-decoration`](text-decoration.md) - 文本装饰速记
- [`text-decoration-line`](text-decoration-line.md) - 装饰线类型
- [`text-decoration-color`](text-decoration-color.md) - 装饰颜色
- [`text-decoration-style`](text-decoration-style.md) - 装饰线样式
- [`text-decoration-thickness`](text-decoration-thickness.md) - 装饰线厚度

## 规范

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-underline-offset)