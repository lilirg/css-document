# list-style-type

该属性用于设置列表项标记的类型。

## 语法

```css
list-style-type: disc;
list-style-type: decimal;
list-style-type: none;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `disc`（对于 `ul`），`decimal`（对于 `ol`） |
| 适用 HTML 元素 | `ul`, `ol` |
| 动画 | 否 |

## 值

### `none`
不显示任何标记。

### `disc`
实心圆点（`ul` 的默认值）。

### `circle`
空心圆点。

### `square`
方块。

### `decimal`
十进制数字（`ol` 的默认值）：1, 2, 3...

### `decimal-leading-zero`
带前导零的数字：01, 02, 03...

### `lower-alpha`
小写英文字母：a, b, c...

### `upper-alpha`
大写英文字母：A, B, C...

### `lower-roman`
小写罗马数字：i, ii, iii...

### `upper-roman`
大写罗马数字：I, II, III...

### `lower-greek`
小写希腊字母：α, β, γ...

### `lower-latin`, `upper-latin`
小写/大写拉丁字母。

### `cjk-ideographic`
中文/日文/韩文表意文字。

## 注意
- 该属性只影响标记类型，不影响标记位置
- 继承属性，会影响所有子元素
- 可以使用 `list-style` 速记属性同时设置多个列表样式属性

## 示例
```css
ul {
  list-style-type: square;
}

ol {
  list-style-type: upper-roman;
}
```

```html
<ul>
  <li>方块标记列表</li>
  <li>第二项</li>
</ul>

<ol>
  <li>罗马数字列表</li>
  <li>第二项</li>
</ol>
```

## 使用场景
```css
/* 1. 移除列表标记 */
.nav-list {
  list-style-type: none;
  padding-left: 0;
}

/* 2. 有序列表使用字母 */
.steps {
  list-style-type: lower-alpha;
}

/* 3. 目录使用罗马数字 */
.toc {
  list-style-type: upper-roman;
}

/* 4. 嵌套列表不同标记 */
ul ul {
  list-style-type: circle;
}
