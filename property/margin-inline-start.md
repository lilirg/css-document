# margin-inline-start

`margin-inline-start` 属性用于设置行内方向起始边的外边距。

## 语法

```css
margin-inline-start: <length> | <percentage> | auto
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

- 行内起始边取决于 `writing-mode` 和 `direction`
- 在水平左到右书写模式中，行内起始边是左边
- 在水平右到左书写模式中，行内起始边是右边
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置行内起始外边距 */
.element {
  margin-inline-start: 10px;
}

/* 使用 em 单位 */
.element {
  margin-inline-start: 1em;
}

/* 自动外边距 */
.element {
  margin-inline-start: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 左到右模式下的左边距 */
.ltr-element {
  margin-inline-start: 16px;
}

/* 2. 右到左模式下的右边距 */
.rtl-element {
  direction: rtl;
  margin-inline-start: 16px;
}

/* 3. 垂直书写模式 */
.vertical-element {
  writing-mode: vertical-rl;
  margin-inline-start: 10px;
}

/* 4. 列表项缩进 */
li {
  margin-inline-start: 20px;
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

- [`margin-inline-end`](margin-inline-end.md) - 行内结束外边距
- [`margin-inline`](margin-inline.md) - 行内外边距简写
- [`margin-left`](margin-left.md) - 左外边距
- [`margin-right`](margin-right.md) - 右外边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)