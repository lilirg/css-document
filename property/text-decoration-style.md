# text-decoration-style

该属性用于设置文本装饰线的样式。

## 语法

```css
text-decoration-style: solid;
text-decoration-style: double;
text-decoration-style: dotted;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `solid` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `solid`
实线（默认值）。

### `double`
双线。

### `dotted`
点线。

### `dashed`
虚线。

### `wavy`
波浪线。

## 注意
- 通常与 `text-decoration-line` 配合使用
- 继承属性，会影响所有子元素
- 波浪线样式在某些浏览器中可能不支持

## 示例
```css
.solid {
  text-decoration-line: underline;
  text-decoration-style: solid;
}

.dotted {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}
```

```html
<p class="solid">实线下划线</p>
<p class="dotted">点线下划线</p>
<p class="wavy">波浪线下划线</p>
```

## 使用场景
```css
/* 1. 拼写错误的波浪下划线 */
.spelling-error {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

/* 2. 链接悬停虚线 */
a:hover {
  text-decoration-line: underline;
  text-decoration-style: dashed;
}

/* 3. 强调文本双线 */
.strong {
  text-decoration-line: underline;
  text-decoration-style: double;
}

/* 4. 装饰性点线 */
.decorative {
  text-decoration-line: underline;
  text-decoration-style: dotted;
}
