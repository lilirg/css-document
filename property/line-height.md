# line-height

该属性用于设置行与行之间的间距（行高）。

## 语法

```css
line-height: normal;
line-height: 20px;
line-height: 1.5;
line-height: 150%;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### normal
使用浏览器默认的行高，通常为字体大小的 1.2 倍。

### `<number>`
无单位数字，表示字体大小的倍数。推荐使用 1.2-1.6 之间的值。

### `<length>`
固定长度值，如 `20px`、`1.5em`。

### `<percentage>`
百分比值，相对于字体大小计算。

## 注意
- 无单位数字是最佳实践，因为它会继承计算后的值
- 过小的行高会导致文本重叠
- 过大的行高会降低可读性
- 继承属性，会影响所有子元素

## 示例
```css
p {
  line-height: 1.6;
}

h1 {
  line-height: 1.2;
}
```

```html
<p>这是一段具有合适行高的文本。行高设置得当可以提高文本的可读性。</p>
<h1>标题行高</h1>
```

## 使用场景
```css
/* 1. 正文文本的最佳可读性 */
.article-content {
  line-height: 1.6;
}

/* 2. 紧凑的标题 */
h1, h2, h3 {
  line-height: 1.2;
}

/* 3. 导航菜单的紧凑行高 */
.nav-item {
  line-height: 1;
}

/* 4. 引用文本的宽松行高 */
blockquote {
  line-height: 1.8;
}
