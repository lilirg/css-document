# hyphens

该属性用于控制文本的自动连字符断行。

## 语法

```css
hyphens: none | manual | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | manual |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
不插入连字符，即使单词可以断开。

### `manual`
仅在指定断开位置（如使用软连字符）插入连字符。

### `auto`
根据需要自动在适当位置插入连字符断开单词。

## 注意
1. 该属性主要用于西文排版
2. 自动连字符需要浏览器支持语言设置
3. 使用 `lang` 属性指定语言可以提高断词准确性
4. 中文等无空格语言不受影响

## 示例

```css
/* 不连字符 */
p {
  hyphens: none;
}

/* 手动连字符 */
.manual {
  hyphens: manual;
}

/* 自动连字符 */
.auto {
  hyphens: auto;
}
```

## 使用场景

```css
/* 1. 英文段落 - 自动连字符 */
.english-text {
  lang: en;
  hyphens: auto;
}

/* 2. 代码块 - 不连字符 */
code {
  hyphens: none;
}

/* 3. 窄栏排版 - 自动连字符 */
.narrow-column {
  width: 200px;
  hyphens: auto;
  lang: en;
}

/* 4. 手动控制 - 手动连字符 */
.manual-break {
  hyphens: manual;
}

/* 5. 正式文档 - 自动连字符 */
.document {
  hyphens: auto;
  lang: en;
}
