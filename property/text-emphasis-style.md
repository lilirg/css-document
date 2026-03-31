# text-emphasis-style

`text-emphasis-style` 属性定义文本强调标记的样式，用于在文本上添加强调标记（如点、圈等），主要用于东亚文字的排版。

## 语法

```css
text-emphasis-style: none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 不使用强调标记（默认） |
| `filled` | 使用实心标记 |
| `open` | 使用空心标记 |
| `dot` | 使用圆点（•） |
| `circle` | 使用圆圈（●） |
| `double-circle` | 使用双圆圈（○） |
| `triangle` | 使用三角形（▲） |
| `sesame` | 使用 sesame 点（、） |
| `<string>` | 使用自定义字符（最多两个字符） |

### 组合值

可以组合 `filled`/`open` 与标记形状：

| 组合 | 显示效果 |
| --- | --- |
| `filled dot` | • 实心圆点 |
| `open dot` | ○ 空心圆点 |
| `filled circle` | ● 实心圆圈 |
| `open circle` | ○ 空心圆圈 |
| `filled triangle` | ▲ 实心三角形 |
| `sesame` | 、sesame 点 |

## 示例

### 基本用法

```css
.dot-emphasis {
  text-emphasis-style: dot;
}
```

### 实心圆圈

```css
.filled-circle {
  text-emphasis-style: filled circle;
}
```

### 空心圆圈

```css
.open-circle {
  text-emphasis-style: open circle;
}
```

### 三角形

```css
.triangle-emphasis {
  text-emphasis-style: filled triangle;
}
```

### 自定义字符

```css
.custom-emphasis {
  text-emphasis-style: "'";
}
```

### 双字符自定义

```css
.double-custom {
  text-emphasis-style: "^^";
}
```

### HTML 示例

```html
<p class="dot-emphasis">圆点强调</p>
<p class="filled-circle">实心圆圈强调</p>
<p class="open-circle">空心圆圈强调</p>
<p class="custom-emphasis">自定义强调</p>
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
- Firefox: `-moz-text-emphasis-style`
- Safari: `-webkit-text-emphasis-style`

## 注意事项

1. **东亚文字**：此属性主要用于中文、日文、韩文等东亚文字的排版
2. **前缀支持**：某些浏览器需要添加 `-webkit-` 或 `-moz-` 前缀
3. **自定义字符**：自定义字符最多两个，超出部分会被忽略
4. **与 text-emphasis-color 配合**：需要配合 `text-emphasis-color` 设置颜色
5. **位置控制**：强调标记的位置由 `text-emphasis-position` 控制
6. **空格和标点**：默认情况下，强调标记不应用于空格和标点符号

## 相关属性

- [`text-emphasis`](text-emphasis.md) - 强调标记速记
- [`text-emphasis-color`](text-emphasis-color.md) - 强调标记颜色
- [`text-emphasis-position`](text-emphasis-position.md) - 强调标记位置
- [`text-decoration`](text-decoration.md) - 文本装饰

## 规范链接

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-style-prop)