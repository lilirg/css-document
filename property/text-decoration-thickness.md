# text-decoration-thickness

`text-decoration-thickness` 属性用于设置文本装饰线（下划线、上划线、删除线）的粗细。

## 语法

```css
text-decoration-thickness: auto | from-font | <length> | <percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 浏览器自动计算 |
| `from-font` | 使用字体定义的粗细 |
| `<length>` | 固定长度（如 `1px`, `2px`） |
| `<percentage>` | 相对于字体大小的百分比 |

## 注意

- 此属性与 `text-decoration-line` 和 `text-decoration-color` 配合使用
- 可以单独控制装饰线的粗细
- 支持简写属性 `text-decoration`

## 示例

```css
/* 使用固定粗细 */
.underline {
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
}

/* 使用 from-font */
.underline {
  text-decoration-line: underline;
  text-decoration-thickness: from-font;
}

/* 使用百分比 */
.underline {
  text-decoration-line: underline;
  text-decoration-thickness: 10%;
}
```

```html
<!-- HTML 示例 -->
<p class="underline">带下划线的文本</p>
<p class="line-through">带删除线的文本</p>
```

## 使用场景

```css
/* 1. 粗下划线强调 */
.important {
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
  text-decoration-color: #ff0000;
}

/* 2. 细下划线链接 */
a {
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
}

/* 3. 删除线价格 */
.old-price {
  text-decoration-line: line-through;
  text-decoration-thickness: 2px;
}

/* 4. 上划线标注 */
.superscript-note {
  text-decoration-line: overline;
  text-decoration-thickness: 1px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 前缀 |
|--------|------|------|
| Chrome | 87+ | 无 |
| Edge | 87+ | 无 |
| Firefox | 72+ | 无 |
| Safari | 12.1+ | 无 |
| Opera | 73+ | 无 |

## 相关属性

- [`text-decoration-line`](text-decoration-line.md) - 装饰线类型
- [`text-decoration-color`](text-decoration-color.md) - 装饰线颜色
- [`text-decoration-style`](text-decoration-style.md) - 装饰线样式
- [`text-decoration`](text-decoration.md) - 简写属性

## 规范

- [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/)