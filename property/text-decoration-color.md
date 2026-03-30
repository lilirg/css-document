# text-decoration-color

该属性用于设置文本装饰线（下划线、删除线等）的颜色。

## 语法

```css
text-decoration-color: red;
text-decoration-color: #ff0000;
text-decoration-color: currentColor;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `currentColor` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<color>`
任何有效的 CSS 颜色值：
- 颜色名称：`red`, `blue`, `green`
- 十六进制：`#ff0000`, `#f00`
- RGB/RGBA：`rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)`
- HSL/HSLA：`hsl(0, 100%, 50%)`
- `currentColor` - 继承当前文本颜色

## 注意
- 通常与 `text-decoration-line` 配合使用
- 继承属性，会影响所有子元素
- 可以创建多彩的装饰线效果

## 示例
```css
.red-underline {
  text-decoration-line: underline;
  text-decoration-color: red;
}

.blue-strike {
  text-decoration-line: line-through;
  text-decoration-color: blue;
}
```

```html
<p class="red-underline">红色下划线的文本</p>
<p class="blue-strike">蓝色删除线的文本</p>
```

## 使用场景
```css
/* 1. 链接悬停时改变下划线颜色 */
a:hover {
  text-decoration-color: #ff6b6b;
}

/* 2. 错误文本的红色删除线 */
.error {
  text-decoration-line: line-through;
  text-decoration-color: #e74c3c;
}

/* 3. 强调文本的彩色下划线 */
.highlight {
  text-decoration-line: underline;
  text-decoration-color: #f1c40f;
}

/* 4. 与文本颜色不同的装饰线 */
.custom {
  color: #333;
  text-decoration-line: underline;
  text-decoration-color: #3498db;
}
