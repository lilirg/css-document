# text-combine-upright

`text-combine-upright` 属性（也称为 `text-combine-horizontal`）用于在垂直书写模式下组合多个字符，使其占据一个字符的宽度，主要用于日文、中文等东亚文字的排版。

## 语法

```css
text-combine-upright: none | all | digits [ <integer> ];
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 不组合字符（默认） |
| `all` | 组合所有字符为一个字符宽度 |
| `digits` | 仅组合数字字符 |
| `digits <integer>` | 组合指定数量的数字字符（2-4） |

## 示例

### 组合所有字符

```css
.combine-all {
  writing-mode: vertical-rl;
  text-combine-upright: all;
}
```

### 组合数字

```css
.combine-digits {
  writing-mode: vertical-rl;
  text-combine-upright: digits;
}
```

### 组合两个数字

```css
.combine-two-digits {
  writing-mode: vertical-rl;
  text-combine-upright: digits 2;
}
```

### 组合四个数字

```css
.combine-four-digits {
  writing-mode: vertical-rl;
  text-combine-upright: digits 4;
}
```

### HTML 示例

```html
<div class="combine-all">
  <span>日</span>本
</div>
<div class="combine-digits">
  年份 2024
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 48+ |
| Firefox | 48+ |
| Safari | 9+ |
| Edge | 14+ |
| Opera | 35+ |
| iOS Safari | 9+ |
| Android Browser | 4.4+ |

**注意**：旧版浏览器可能需要前缀：
- Chrome/Safari: `-webkit-text-combine-upright`
- Firefox: `-moz-text-combine-horizontal`
- IE/Edge: `-ms-text-combine-horizontal`

## 注意事项

1. **垂直书写模式**：此属性主要用于 `writing-mode: vertical-rl` 或 `writing-mode: vertical-lr`
2. **字符限制**：`all` 值通常只组合两个字符，超过两个字符可能不被支持
3. **数字组合**：`digits` 值专门用于组合数字，如年份"2024"
4. **字体支持**：组合效果取决于字体是否支持相应的字形
5. **前缀支持**：旧版浏览器需要添加相应前缀
6. **东亚文字**：此属性主要用于中文、日文、韩文等东亚文字的排版

## 相关属性

- [`writing-mode`](writing-mode.md) - 书写模式
- [`direction`](direction.md) - 文本方向
- [`unicode-bidi`](unicode-bidi.md) - Unicode 双向算法

## 规范链接

- [CSS Writing Modes Module Level 3](https://www.w3.org/TR/css-writing-modes-3/#text-combine)