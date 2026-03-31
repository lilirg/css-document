# margin-block-end

`margin-block-end` 属性用于设置块方向结束边的外边距。

## 语法

```css
margin-block-end: <length> | <percentage> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 固定长度（如 `10px`, `1rem`） |
| `<percentage>` | 相对于包含块的百分比 |
| `auto` | 自动计算 |

## 注意

- 块结束边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块结束边是下边
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置块结束外边距 */
.element {
  margin-block-end: 10px;
}

/* 使用 em 单位 */
.element {
  margin-block-end: 1em;
}

/* 自动外边距 */
.element {
  margin-block-end: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 标题底部间距 */
h1 {
  margin-block-end: 1.5em;
}

/* 2. 段落底部间距 */
p {
  margin-block-end: 1em;
}

/* 3. 卡片底部间距 */
.card {
  margin-block-end: 16px;
}

/* 4. 列表底部间距 */
ul, ol {
  margin-block-end: 1em;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 87+ |
| Edge | 87+ |
| Firefox | 66+ |
| Safari | 14.1+ |
| Opera | 73+ |

## 相关属性

- [`margin-block-start`](margin-block-start.md) - 块起始外边距
- [`margin-block`](margin-block.md) - 块外边距简写
- [`margin-bottom`](margin-bottom.md) - 下外边距
- [`margin-inline-end`](margin-inline-end.md) - 行内结束外边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)