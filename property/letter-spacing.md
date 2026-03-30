# letter-spacing

该属性用于设置字符之间的间距。

## 语法

```css
letter-spacing: normal;
letter-spacing: 10px;
letter-spacing: 0.1em;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### normal
使用浏览器默认的字符间距。

### `<length>`
设置固定的字符间距值。可以是正数（增加间距）或负数（减少间距）。

## 注意
- 该属性不会在文本中插入额外的字符
- 负值会使字符重叠
- 继承属性，会影响所有子元素

## 示例
```css
p {
  letter-spacing: 2px;
}

h1 {
  letter-spacing: -1px;
}
```

```html
<p>这段文字的字符间距为 2px</p>
<h1>标题文字</h1>
```

## 使用场景
```css
/* 1. 增加标题的可读性 */
h1 {
  letter-spacing: 2px;
}

/* 2. 紧凑的导航菜单 */
.nav-link {
  letter-spacing: -0.5px;
}

/* 3. 大写字母的特殊效果 */
.accent {
  text-transform: uppercase;
  letter-spacing: 3px;
}

/* 4. 代码块中的字符间距 */
code {
  letter-spacing: 1px;
}
