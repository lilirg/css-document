# font-style

该属性用于指定元素的字体样式，如正常、斜体或倾斜。

## 语法

```css
font-style: normal | italic | oblique
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | normal |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
正常字体，不倾斜。

### `italic`
斜体字体，使用字体的斜体变体（如果可用）。

### `oblique`
倾斜字体，浏览器将正常字体倾斜生成斜体效果。

## 注意
1. `italic` 使用字体内置的斜体字形，`oblique` 是机械倾斜
2. 如果字体没有斜体变体，`italic` 会回退到 `oblique`
3. 斜体常用于强调、引用或区分特定文本
4. 中文等无斜体概念的字体，该属性效果不明显

## 示例

```css
/* 正常字体 */
p {
  font-style: normal;
}

/* 斜体 */
em {
  font-style: italic;
}

/* 倾斜 */
.italic-text {
  font-style: oblique;
}
```

## 使用场景

```css
/* 1. 引用文本 - 斜体 */
blockquote {
  font-style: italic;
}

/* 2. 强调文本 - 斜体 */
em {
  font-style: italic;
}

/* 3. 正常显示 - 默认 */
.body-text {
  font-style: normal;
}

/* 4. 术语定义 - 斜体 */
.term {
  font-style: italic;
  font-weight: bold;
}

/* 5. 倾斜效果 - oblique */
.styled-text {
  font-style: oblique;
}
