# text-emphasis-position

`text-emphasis-position` 属性设置文本强调标记的位置，用于在文本上方或下方显示强调标记（如点、圈等），主要用于东亚文字的排版。

## 语法

```css
text-emphasis-position: over | under;
```

### 值

| 值 | 说明 |
| --- | --- |
| `over` | 在文本上方显示强调标记（默认） |
| `under` | 在文本下方显示强调标记 |

## 示例

### 默认位置（上方）

```css
.over-emphasis {
  text-emphasis-style: dot;
  text-emphasis-color: red;
  text-emphasis-position: over;
}
```

### 下方位置

```css
.under-emphasis {
  text-emphasis-style: dot;
  text-emphasis-color: red;
  text-emphasis-position: under;
}
```

### 与行高配合

```css
.emphasis-with-line-height {
  text-emphasis-style: circle;
  text-emphasis-color: blue;
  text-emphasis-position: over;
  line-height: 1.8; /* 增加行高以避免强调标记与上行文字重叠 */
}
```

### 日文文本示例

```css
.japanese-emphasis {
  font-family: "Hiragino Kaku Gothic Pro", sans-serif;
  text-emphasis-style: sesame;
  text-emphasis-color: #ff0000;
  text-emphasis-position: over;
}
```

### HTML 示例

```html
<p class="over-emphasis">上方强调</p>
<p class="under-emphasis">下方强调</p>
<p class="emphasis-with-line-height">行高调整强调</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 25+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 不支持 |
| Opera | 14.1+ |
| iOS Safari | 不支持 |
| Android Browser | 4.4+ |

**注意**：此属性在 Firefox 和 Safari 中需要前缀：
- Firefox: `-moz-text-emphasis-position`
- Safari: `-webkit-text-emphasis-position`

## 注意事项

1. **默认值**：默认值为 `over`，强调标记显示在文本上方
2. **行高影响**：使用 `over` 时可能需要增加 `line-height` 以避免强调标记与上行文字重叠
3. **东亚文字**：此属性主要用于中文、日文、韩文等东亚文字的排版
4. **前缀支持**：某些浏览器需要添加 `-webkit-` 或 `-moz-` 前缀
5. **与 text-emphasis-style 配合**：必须先设置 `text-emphasis-style` 才能看到效果
6. **书写模式**：在垂直书写模式下，强调标记的位置可能会自动调整

## 相关属性

- [`text-emphasis`](text-emphasis.md) - 强调标记速记
- [`text-emphasis-style`](text-emphasis-style.md) - 强调标记样式
- [`text-emphasis-color`](text-emphasis-color.md) - 强调标记颜色
- [`writing-mode`](writing-mode.md) - 书写模式

## 规范链接

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-position-prop)