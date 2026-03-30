# word-wrap

该属性用于设置长单词是否可以在行内换行（现已被 `overflow-wrap` 替代）。

## 语法

```css
word-wrap: normal;
word-wrap: break-word;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
默认值。只在允许的断点处换行（如空格或连字符处）。

### `break-word`
允许在单词内换行，防止长单词溢出容器。

## 注意
- 该属性已被 `overflow-wrap` 替代，但为了兼容性仍可使用
- 继承属性
- 主要用于处理长 URL 或无空格文本的换行

## 示例
```css
.break-word {
  word-wrap: break-word;
}

.normal {
  word-wrap: normal;
}
```

```html
<p class="break-word">
  这是一个非常非常非常非常非常非常非常非常非常长的单词
</p>

<p class="normal">
  这个长单词可能会溢出容器
</p>
```

## 使用场景
```css
/* 1. 防止长 URL 溢出 */
.url-container {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* 2. 代码块换行 */
.code-block {
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* 3. 正常换行 */
.normal-text {
  word-wrap: normal;
}

/* 4. 兼容写法（推荐） */
.compatible {
  word-wrap: break-word;
  overflow-wrap: break-word;
}
