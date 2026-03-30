# text-align

该属性用于设置文本的水平对齐方式。

## 语法

```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `start` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### `start`

根据文本方向对齐到起始位置（左对齐或右对齐）。

### `end`

根据文本方向对齐到结束位置。

### `left`

文本向左对齐。

### `right`

文本向右对齐。

### `center`

文本居中对齐。

### `justify`

文本两端对齐，最后一行左对齐。

### `justify-all`

文本两端对齐，所有行都两端对齐。

### `match-parent`

继承父元素的对齐方式，但根据当前文本方向计算。

## 注意

- 该属性只影响块级元素内的文本
- 继承属性，会影响所有子元素
- 对于从左到右的语言，`start` 等同于 `left`

## 示例

```css
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.justify {
  text-align: justify;
}
```

```html
<p class="left">左对齐的文本</p>
<p class="center">居中对齐的文本</p>
<p class="right">右对齐的文本</p>
<p class="justify">两端对齐的文本，内容会均匀分布以填满整个宽度。</p>
```

## 使用场景

```css
/* 1. 标题居中对齐 */
h1, h2, h3 {
  text-align: center;
}

/* 2. 正文两端对齐 */
.article-content {
  text-align: justify;
}

/* 3. 价格右对齐 */
.price {
  text-align: right;
}

/* 4. 页脚居中对齐 */
.footer {
  text-align: center;
}
