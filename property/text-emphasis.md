# text-emphasis

`text-emphasis` 属性是 `text-emphasis-style` 和 `text-emphasis-color` 的简写属性，用于在文本上添加强调标记（如点、圈等），主要用于东亚文字的排版。

## 语法

```css
text-emphasis: <emphasis-style> || <emphasis-color>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<emphasis-style>` | 强调标记的样式（见下表） |
| `<emphasis-color>` | 强调标记的颜色 |

### 强调标记样式

| 值 | 说明 |
| --- | --- |
| `none` | 不使用强调标记 |
| `dot` | 使用实心圆点（•） |
| `circle` | 使用实心圆圈（●） |
| `double-circle` | 使用空心圆圈（○） |
| `triangle` | 使用实心三角形（▲） |
| `sesame` | 使用 sesame 点（、） |
| `filled-dot` | 使用实心点 |
| `filled-circle` | 使用实心圆圈 |
| `filled-triangle` | 使用实心三角形 |
| `open-dot` | 使用空心点 |
| `open-circle` | 使用空心圆圈 |
| `custom` | 使用自定义字符（需配合 `text-emphasis-style`） |

## 示例

### 基本用法

```css
.emphasized {
  text-emphasis: dot #ff0000;
}
```

### 使用圆圈强调

```css
.circle-emphasis {
  text-emphasis: circle blue;
}
```

### 使用三角形强调

```css
.triangle-emphasis {
  text-emphasis: triangle green;
}
```

### 自定义字符

```css
.custom-emphasis {
  text-emphasis-style: "'";
  text-emphasis-color: #ff6600;
}
```

### 应用于日文文本

```css
.japanese-emphasis {
  font-family: "Hiragino Kaku Gothic Pro", sans-serif;
  text-emphasis: sesame #ff0000;
}
```

### HTML 示例

```html
<p class="emphasized">强调文本</p>
<p class="circle-emphasis">圆圈强调</p>
<p class="japanese-emphasis">日本語のテキスト</p>
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
- Firefox: `-moz-text-emphasis`
- Safari: `-webkit-text-emphasis`

## 注意事项

1. **东亚文字**：此属性主要用于中文、日文、韩文等东亚文字的排版
2. **前缀支持**：某些浏览器需要添加 `-webkit-` 或 `-moz-` 前缀
3. **与 text-decoration 的区别**：`text-emphasis` 在字符上方或下方添加标记，而 `text-decoration` 添加下划线、删除线等
4. **位置**：强调标记默认显示在字符上方，可以通过 `text-emphasis-position` 调整
5. **空格处理**：默认情况下，强调标记不应用于空格和标点符号

## 相关属性

- [`text-emphasis-style`](text-emphasis-style.md) - 强调标记样式
- [`text-emphasis-color`](text-emphasis-color.md) - 强调标记颜色
- [`text-emphasis-position`](text-emphasis-position.md) - 强调标记位置
- [`text-decoration`](text-decoration.md) - 文本装饰

## 规范链接

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-property)