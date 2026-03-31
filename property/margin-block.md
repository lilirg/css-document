# margin-block

`margin-block` 属性是 `margin-block-start` 和 `margin-block-end` 的简写属性，用于设置块方向外边距。

## 语法

```css
margin-block: <length> | <percentage> | auto
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

### 单值和双值

| 组合 | 说明 |
| :--- | :--- |
| `margin-block: 10px` | 起始和结束都是 10px |
| `margin-block: 10px 20px` | 起始 10px，结束 20px |

## 注意

- 块方向取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块方向是垂直的（上外边距和下外边距）
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置块方向外边距 */
.element {
  margin-block: 10px;
}

/* 不同的起始和结束 */
.element {
  margin-block: 10px 20px;
}

/* 自动外边距 */
.element {
  margin-block: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 段落间距 */
p {
  margin-block: 1em;
}

/* 2. 卡片间距 */
.card {
  margin-block: 16px;
}

/* 3. 标题间距 */
h1, h2, h3 {
  margin-block-start: 1.5em;
  margin-block-end: 0.5em;
}

/* 4. 垂直居中 */
.centered {
  margin-block: auto;
}

/* 5. 列表项间距 */
.list-item {
  margin-block: 8px;
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
- [`margin-block-end`](margin-block-end.md) - 块结束外边距
- [`margin-inline`](margin-inline.md) - 行内外边距
- [`margin`](margin.md) - 外边距简写

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)