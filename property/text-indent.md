# text-indent

该属性用于设置文本块第一行的缩进。

## 语法

```css
text-indent: 20px;
text-indent: 2em;
text-indent: 5%;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<length>`
固定长度值，如 `20px`、`1em`。正数向右缩进，负数向左缩进（悬挂缩进）。

### `<percentage>`
相对于包含块宽度的百分比值。

## 注意
- 只影响第一行文本
- 继承属性，会影响所有子元素
- 负值可用于创建悬挂缩进效果
- 对于从左到右的语言，正值向右缩进

## 示例
```css
p {
  text-indent: 2em;
}

.hanging {
  text-indent: -20px;
  padding-left: 20px;
}
```

```html
<p>这是一个带有缩进的段落。第一行会向右缩进两个字符的距离，而后续行保持正常位置。</p>

<p class="hanging">这是一个悬挂缩进的段落。第一行向左突出，后续行缩进。</p>
```

## 使用场景
```css
/* 1. 中文段落首行缩进 */
.paragraph {
  text-indent: 2em;
}

/* 2. 引用块缩进 */
blockquote {
  text-indent: 1em;
}

/* 3. 悬挂缩进（列表项） */
.list-item {
  text-indent: -1.5em;
  padding-left: 1.5em;
}

/* 4. 文章段落缩进 */
.article p {
  text-indent: 2em;
  margin: 0;
}
