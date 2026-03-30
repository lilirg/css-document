# text-decoration-line

该属性用于设置文本装饰线的类型。

## 语法

```css
text-decoration-line: underline;
text-decoration-line: line-through;
text-decoration-line: none;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
不显示任何装饰线。

### `underline`
在文本下方显示下划线。

### `overline`
在文本上方显示上划线。

### `line-through`
在文本中间显示删除线。

### `blink`
闪烁的文本（已废弃，不推荐使用）。

## 注意
- 可以组合多个值，如 `underline overline`
- 继承属性，会影响所有子元素
- 通常与 `text-decoration-color` 和 `text-decoration-style` 配合使用

## 示例
```css
.underline {
  text-decoration-line: underline;
}

.overline {
  text-decoration-line: overline;
}

.strike {
  text-decoration-line: line-through;
}

.double {
  text-decoration-line: underline overline;
}
```

```html
<p class="underline">带下划线的文本</p>
<p class="overline">带上划线的文本</p>
<p class="strike">带删除线的文本</p>
<p class="double">带上下划线的文本</p>
```

## 使用场景
```css
/* 1. 移除链接默认下划线 */
a {
  text-decoration-line: none;
}

/* 2. 价格删除线 */
.old-price {
  text-decoration-line: line-through;
}

/* 3. 新标签上划线 */
.new-badge {
  text-decoration-line: overline;
}

/* 4. 强调文本下划线 */
.important {
  text-decoration-line: underline;
}
