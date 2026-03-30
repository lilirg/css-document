# quotes

该属性设置引用符号的样式，与 `content` 属性配合使用。

## 语法

```css
quotes: none | auto | [<string> <string>]+
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 取决于语言     |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `none`

不显示引用符号。

### `auto`

根据语言自动选择引用符号。

### `<string> <string>`

指定引用符号对：
- 第一个字符串：开引号
- 第二个字符串：闭引号
- 可以指定多对，用于嵌套引用

## 注意

- 该属性与 `content: open-quote` 和 `content: close-quote` 配合使用
- 嵌套引用使用后续的引号对
- 不同语言有不同的引用符号习惯

## 示例

```css
/* 英文引号 */
.en {
  quotes: '"' '"';
}

/* 中文引号 */
.zh {
  quotes: '"' '"';
}

/* 嵌套引号 */
.nested {
  quotes: '"' '"' "'" "'";
}

/* 无引号 */
.no-quotes {
  quotes: none;
}
```

```html
<!-- 引用符号示例 -->
<blockquote>
  这是一个引用
  <blockquote>
    这是嵌套引用
  </blockquote>
</blockquote>
```

## 使用场景

```css
/* 英文引用 */
blockquote {
  quotes: '"' '"';
}

blockquote::before {
  content: open-quote;
}

blockquote::after {
  content: close-quote;
}

/* 中文引用 */
.zh-quote {
  quotes: '"' '"';
}

.zh-quote::before {
  content: open-quote;
}

.zh-quote::after {
  content: close-quote;
}

/* 嵌套引用 */
.nested-quote {
  quotes: '"' '"' "'" "'";
}

.nested-quote::before {
  content: open-quote;
}

.nested-quote::after {
  content: close-quote;
}

/* 双重重嵌套 */
.double-nested {
  quotes: '"' '"' "'" "'" "`" "`";
}

/* 法语引号 */
.fr-quote {
  quotes: "« " " »";
}

/* 德语引号 */
.de-quote {
  quotes: "„" "«";
}

/* 西班牙语引号 */
.es-quote {
  quotes: "«" "»";
}

/* 引用样式 */
.quote-style {
  quotes: '"' '"';
  font-style: italic;
}

.quote-style::before {
  content: open-quote;
  color: #666;
}

.quote-style::after {
  content: close-quote;
  color: #666;
}

/* 块级引用 */
.block-quote {
  quotes: '"' '"';
  padding-left: 20px;
  border-left: 4px solid #ddd;
}

.block-quote::before {
  content: open-quote;
  font-size: 2em;
  line-height: 0;
  vertical-align: -0.4em;
}

/* 内联引用 */
.inline-quote {
  quotes: '"' '"';
}

.inline-quote::before {
  content: open-quote;
}

.inline-quote::after {
  content: close-quote;
}

/* 响应式引号 */
.responsive-quote {
  quotes: '"' '"';
}

@media (max-width: 768px) {
  .responsive-quote {
    quotes: "'" "'";
  }
}

/* 自定义引号 */
.custom-quote {
  quotes: "【" "】";
}

.custom-quote::before {
  content: open-quote;
}

.custom-quote::after {
  content: close-quote;
}

/* 无引号模式 */
.no-quote-mode {
  quotes: none;
}

.no-quote-mode::before,
.no-quote-mode::after {
  content: "";
}
