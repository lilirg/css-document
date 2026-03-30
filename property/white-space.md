# white-space

该属性用于设置如何处理元素内的空白字符。

## 语法

```css
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
默认值。合并空白字符，文本自动换行。

### `nowrap`
合并空白字符，文本不换行。

### `pre`
保留空白字符，文本只在 `<br>` 标签处换行。

### `pre-wrap`
保留空白字符，文本自动换行。

### `pre-line`
合并空白字符，保留换行符，文本自动换行。

### `break-spaces`
类似 `pre-wrap`，但也在空格处换行。

## 注意
- 继承属性
- 影响文本的显示方式
- 与 `word-wrap` 和 `overflow-wrap` 配合使用可控制长单词换行

## 示例
```css
.preserve {
  white-space: pre-wrap;
}

.no-wrap {
  white-space: nowrap;
}

.normal {
  white-space: normal;
}
```

```html
<p class="preserve">
  保留   多个    空格
  保留换行
</p>

<p class="no-wrap">
  这段文本不会换行，即使超出容器宽度
</p>

<p class="normal">
  多个   空格会被   合并为一个
</p>
```

## 使用场景
```css
/* 1. 代码块显示 */
code-block {
  white-space: pre-wrap;
  font-family: monospace;
}

/* 2. 单行文本（如标签） */
.single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 3. 保留格式文本 */
.formatted-text {
  white-space: pre;
}

/* 4. 正常文本流 */
.normal-text {
  white-space: normal;
}
