# text-align-last

该属性用于设置最后一行文本的对齐方式，通常与 `text-align: justify` 配合使用。

## 语法

```css
text-align-last: auto;
text-align-last: left;
text-align-last: center;
text-align-last: justify;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### `auto`

根据 `text-align` 属性值决定最后一行对齐方式。

### `left`

最后一行向左对齐。

### `right`

最后一行向右对齐。

### `center`

最后一行居中对齐。

### `justify`

最后一行也进行两端对齐。

### `start`

最后一行对齐到起始位置。

### `end`

最后一行对齐到结束位置。

## 注意

- 当 `text-align` 不是 `justify` 时，该属性通常没有效果
- 继承属性，会影响所有子元素
- 对于单行文本，该属性没有效果

## 示例

```css
.justify-last-center {
  text-align: justify;
  text-align-last: center;
}

.justify-last-right {
  text-align: justify;
  text-align-last: right;
}
```

```html
<p class="justify-last-center">
  这是一段两端对齐的文本，最后一行会居中对齐。文本内容会均匀分布以填满整个宽度，但最后一行保持居中。
</p>

<p class="justify-last-right">
  这是一段两端对齐的文本，最后一行会向右对齐。文本内容会均匀分布以填满整个宽度，但最后一行靠右显示。
</p>
```

## 使用场景

```css
/* 1. 段落最后一行居中 */
.paragraph {
  text-align: justify;
  text-align-last: center;
}

/* 2. 地址信息右对齐 */
.address {
  text-align: justify;
  text-align-last: right;
}

/* 3. 签名居右 */
.signature {
  text-align: justify;
  text-align-last: end;
}

/* 4. 诗歌最后一行居中 */
.poem {
  text-align: justify;
  text-align-last: center;
}
