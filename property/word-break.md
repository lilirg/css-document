# word-break

该属性用于设置单词换行规则。

## 语法

```css
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
默认值。使用默认的换行规则。

### `break-all`
允许在任意字符间换行，用于防止长单词溢出。

### `keep-all`
保持单词/字符不分开，主要用于 CJK 文本。

### `break-word`
允许在单词内换行（非标准值，部分浏览器支持）。

## 注意
- 继承属性
- 与 `overflow-wrap` 配合使用
- 主要用于处理长单词或 URL 的换行

## 示例
```css
.break-all {
  word-break: break-all;
}

.keep-all {
  word-break: keep-all;
}

.normal {
  word-break: normal;
}
```

```html
<p class="break-all">
  这是一个非常非常非常非常非常非常非常非常非常长的单词
</p>

<p class="keep-all">
  中文文本保持字符不分开
</p>
```

## 使用场景
```css
/* 1. 防止长 URL 溢出 */
.url-container {
  word-break: break-all;
  overflow-wrap: break-word;
}

/* 2. 中文文本排版 */
.chinese-text {
  word-break: keep-all;
}

/* 3. 正常换行 */
.normal-text {
  word-break: normal;
}

/* 4. 代码块换行 */
.code-block {
  word-break: break-all;
  white-space: pre-wrap;
}
