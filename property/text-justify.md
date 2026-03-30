# text-justify

该属性用于设置当 `text-align` 为 `justify` 时，文本两端对齐的算法。

## 语法

```css
text-justify: auto;
text-justify: none;
text-justify: inter-word;
text-justify: inter-character;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### `auto`
浏览器使用默认的对齐算法。

### `none`
不进行两端对齐。

### `inter-word`
通过调整单词之间的间距来实现两端对齐。

### `inter-character`
通过调整字符之间的间距来实现两端对齐（主要用于 CJK 文本）。

## 注意
- 仅当 `text-align: justify` 时生效
- 浏览器支持有限，部分浏览器可能不支持
- 继承属性，会影响所有子元素

## 示例
```css
.justify-word {
  text-align: justify;
  text-justify: inter-word;
}

.justify-character {
  text-align: justify;
  text-justify: inter-character;
}
```

```html
<p class="justify-word">
  这是一个使用单词间距对齐的段落。文本会均匀分布以填满整个宽度。
</p>

<p class="justify-character">
  这是一个使用字符间距对齐的段落。字符间距会被调整以实现两端对齐效果。
</p>
```

## 使用场景
```css
/* 1. 报纸风格排版 */
.newspaper {
  text-align: justify;
  text-justify: inter-word;
}

/* 2. 中文文档两端对齐 */
.chinese-doc {
  text-align: justify;
  text-justify: inter-character;
}

/* 3. 正式文档 */
.official-document {
  text-align: justify;
  text-justify: auto;
}

/* 4. 禁用两端对齐 */
.no-justify {
  text-align: justify;
  text-justify: none;
}
