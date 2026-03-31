# line-break

`line-break` 属性控制文本换行的规则，主要用于东亚文字（中文、日文、韩文）的排版，以及处理标点符号的换行行为。

## 语法

```css
line-break: auto | loose | normal | strict | anywhere;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 浏览器根据内容和语言自动选择换行规则（默认） |
| `loose` | 使用宽松的换行规则，允许更多换行点 |
| `normal` | 使用标准的换行规则 |
| `strict` | 使用严格的换行规则，减少换行点 |
| `anywhere` | 允许在任何位置换行，包括无间断空格处 |

## 示例

### 自动换行

```css
.auto-break {
  line-break: auto;
  font-family: "Microsoft YaHei", sans-serif;
}
```

### 宽松换行

```css
.loose-break {
  line-break: loose;
  font-family: "Microsoft YaHei", sans-serif;
}
```

### 严格换行

```css
.strict-break {
  line-break: strict;
  font-family: "Microsoft YaHei", sans-serif;
}
```

### 任意位置换行

```css
.anywhere-break {
  line-break: anywhere;
  font-family: "Microsoft YaHei", sans-serif;
}
```

### HTML 示例

```html
<p class="auto-break">这是一段很长的中文文本，用于测试自动换行规则的效果。</p>
<p class="loose-break">这是一段很长的中文文本，用于测试宽松换行规则的效果。</p>
<p class="strict-break">这是一段很长的中文文本，用于测试严格换行规则的效果。</p>
<p class="anywhere-break">这是一段很长的中文文本，用于测试任意位置换行规则的效果。</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 56+ |
| Firefox | 69+ |
| Safari | 14+ |
| Edge | 14+ |
| Opera | 43+ |
| iOS Safari | 14+ |
| Android Browser | 56+ |

**注意**：旧版 Chrome 和 Edge 可能需要 `-webkit-` 前缀。

## 注意事项

1. **东亚文字**：此属性主要用于中文、日文、韩文等东亚文字的排版
2. **标点符号**：不同的换行规则会影响标点符号的换行行为
3. **与 word-break 的区别**：`line-break` 控制换行规则，`word-break` 控制单词换行行为
4. **anywhere 值**：`anywhere` 值可以强制换行，即使有 `white-space: nowrap` 或无间断空格
5. **自动检测**：浏览器会根据内容的语言自动选择合适的换行规则

## 相关属性

- [`word-break`](word-break.md) - 单词换行
- [`white-space`](white-space.md) - 空白处理
- [`overflow-wrap`](overflow-wrap.md) - 溢出换行

## 规范链接

- [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/#line-break-property)