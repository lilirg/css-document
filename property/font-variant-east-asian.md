# font-variant-east-asian

`font-variant-east-asian` 属性控制东亚文字（中文、日文、韩文）的字形变体显示。

## 语法

```css
font-variant-east-asian: normal | <east-asian-value>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 使用标准的东亚文字字形（默认） |
| `jis78` | 使用 JIS 1978 标准的字形 |
| `jis83` | 使用 JIS 1983 标准的字形 |
| `jis90` | 使用 JIS 1990 标准的字形 |
| `jis04` | 使用 JIS 2004 标准的字形 |
| `simplified` | 使用简化字形 |
| `traditional` | 使用传统字形 |
| `full-width` | 使用全角字形 |
| `proportional-width` | 使用比例宽度字形 |
| `ruby` | 显示 Ruby 标注 |

### 组合值

可以组合多个值，例如：
```css
font-variant-east-asian: jis90 full-width;
```

## 示例

### 使用 JIS90 标准

```css
.japanese-text {
  font-family: "Hiragino Kaku Gothic Pro", sans-serif;
  font-variant-east-asian: jis90;
}
```

### 全角字形

```css
.full-width-text {
  font-family: "MS Gothic", sans-serif;
  font-variant-east-asian: full-width;
}
```

### 比例宽度

```css
.proportional-text {
  font-family: "Hiragino Kaku Gothic Pro", sans-serif;
  font-variant-east-asian: proportional-width;
}
```

### 传统字形

```css
.traditional-chinese {
  font-family: "Microsoft JhengHei", sans-serif;
  font-variant-east-asian: traditional;
}
```

### 组合使用

```css
.japanese-proper {
  font-family: "Hiragino Kaku Gothic Pro", sans-serif;
  font-variant-east-asian: jis90 proportional-width;
}
```

### HTML 示例

```html
<p class="japanese-text">日本語のテキスト</p>
<p class="full-width-text">全角文字</p>
<p class="traditional-chinese">繁體中文</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 11+ |
| Firefox | 34+ |
| Safari | 9+ |
| Edge | 14+ |
| Opera | 11.1+ |
| iOS Safari | 9+ |
| Android Browser | 4.4+ |

## 注意事项

1. **字体支持**：效果取决于字体是否包含相应的东亚文字字形
2. **JIS 标准**：日本工业标准（JIS）定义了不同版本的汉字字形
3. **简化 vs 传统**：`simplified` 和 `traditional` 用于区分简繁体中文
4. **全角 vs 比例**：全角字符宽度相同，比例宽度字符根据字形调整宽度
5. **Ruby 标注**：`ruby` 值用于显示注音符号

## 相关属性

- [`font-variant`](font-variant.md) - 字体变体速记
- [`font-variant-caps`](font-variant-caps.md) - 字体变体大写字母
- [`font-variant-numeric`](font-variant-numeric.md) - 字体变体数字
- [`ruby-align`](ruby-align.md) - Ruby 对齐
- [`ruby-position`](ruby-position.md) - Ruby 位置

## 规范链接

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/#font-variant-east-asian-prop)