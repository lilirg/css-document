# margin-inline

`margin-inline` 属性用于设置行内方向两侧的外边距（起始边和结束边）。

## 语法

```css
/* 两个值：起始边 结束边 */
margin-inline: <length> <length>;

/* 一个值：两侧相同 */
margin-inline: <length>;
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

- 行内方向取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，行内方向是左右方向
- 简写属性同时设置 `margin-inline-start` 和 `margin-inline-end`
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置两侧行内外边距 */
.element {
  margin-inline: 10px;
}

/* 设置不同的起始和结束外边距 */
.element {
  margin-inline: 10px 20px;
}

/* 使用 em 单位 */
.element {
  margin-inline: 1em 2em;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 水平居中的块级元素 */
.centered {
  margin-inline: auto;
}

/* 2. 左右间距 */
.card {
  margin-inline: 16px;
}

/* 3. 不同的左右间距 */
.asymmetric {
  margin-inline: 10px 30px;
}

/* 4. 响应式间距 */
@media (min-width: 768px) {
  .responsive {
    margin-inline: 24px;
  }
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

- [`margin-inline-start`](margin-inline-start.md) - 行内起始外边距
- [`margin-inline-end`](margin-inline-end.md) - 行内结束外边距
- [`margin-block`](margin-block.md) - 块外边距简写
- [`margin-left`](margin-left.md) - 左外边距
- [`margin-right`](margin-right.md) - 右外边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)