# padding-inline-end

`padding-inline-end` 属性用于设置行内方向结束边的内边距。

## 语法

```css
padding-inline-end: <length> | <percentage>
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

## 注意

- 行内结束边取决于 `writing-mode` 和 `direction`
- 在水平左到右书写模式中，行内结束边是右边
- 在水平右到左书写模式中，行内结束边是左边
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置行内结束内边距 */
.element {
  padding-inline-end: 10px;
}

/* 使用 em 单位 */
.element {
  padding-inline-end: 1em;
}

/* 使用百分比 */
.element {
  padding-inline-end: 5%;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 左到右模式下的右边距 */
.ltr-element {
  padding-inline-end: 16px;
}

/* 2. 右到左模式下的左边距 */
.rtl-element {
  direction: rtl;
  padding-inline-end: 16px;
}

/* 3. 垂直书写模式 */
.vertical-element {
  writing-mode: vertical-rl;
  padding-inline-end: 10px;
}

/* 4. 列表项缩进 */
li {
  padding-inline-end: 20px;
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

- [`padding-inline-start`](padding-inline-start.md) - 行内起始内边距
- [`padding-inline`](padding-inline.md) - 行内内边距简写
- [`padding-left`](padding-left.md) - 左内边距
- [`padding-right`](padding-right.md) - 右内边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)