# hanging-punctuation

该属性用于指定标点符号是否可以悬挂在文本块的边缘之外。

## 语法

```css
hanging-punctuation: none | first | force-end | last | [ first || last || force-end || allow-end ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | none |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
标点符号不悬挂，放置在行内。

### `first`
允许第一行的开头标点符号悬挂。

### `last`
允许最后一行的末尾标点符号悬挂。

### `force-end`
强制末尾标点符号悬挂（即使行末有对齐空间）。

### `allow-end`
允许末尾标点符号悬挂（如果行末有对齐空间）。

## 注意
1. 该属性主要用于东亚排版（中文、日文、韩文）
2. 悬挂标点可以改善文本边缘的视觉效果
3. 并非所有浏览器都支持该属性
4. 可以组合多个值使用

## 示例

```css
/* 不悬挂 */
p {
  hanging-punctuation: none;
}

/* 开头标点悬挂 */
.first {
  hanging-punctuation: first;
}

/* 末尾标点悬挂 */
.last {
  hanging-punctuation: last;
}

/* 组合使用 */
.combined {
  hanging-punctuation: first last;
}
```

## 使用场景

```css
/* 1. 中文段落 - 开头悬挂 */
.chinese-paragraph {
  hanging-punctuation: first;
}

/* 2. 引文 - 末尾悬挂 */
.quote {
  hanging-punctuation: last;
}

/* 3. 完整悬挂 - 首尾 */
.full-hanging {
  hanging-punctuation: first last;
}

/* 4. 强制末尾悬挂 */
.force-end {
  hanging-punctuation: force-end;
}

/* 5. 正常显示 - 不悬挂 */
.normal {
  hanging-punctuation: none;
}
