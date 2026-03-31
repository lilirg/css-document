# padding-inline

`padding-inline` 属性用于设置行内方向两侧的内边距（起始边和结束边）。

## 语法

```css
/* 两个值：起始边 结束边 */
padding-inline: <length> <length>;

/* 一个值：两侧相同 */
padding-inline: <length>;
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

- 行内方向取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，行内方向是左右方向
- 简写属性同时设置 `padding-inline-start` 和 `padding-inline-end`
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置两侧行内内边距 */
.element {
  padding-inline: 10px;
}

/* 设置不同的起始和结束内边距 */
.element {
  padding-inline: 10px 20px;
}

/* 使用 em 单位 */
.element {
  padding-inline: 1em 2em;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片左右内边距 */
.card {
  padding-inline: 16px;
}

/* 2. 按钮左右内边距 */
.button {
  padding-inline: 24px;
}

/* 3. 不同的左右内边距 */
.asymmetric {
  padding-inline: 10px 30px;
}

/* 4. 响应式内边距 */
@media (min-width: 768px) {
  .responsive {
    padding-inline: 24px;
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

- [`padding-inline-start`](padding-inline-start.md) - 行内起始内边距
- [`padding-inline-end`](padding-inline-end.md) - 行内结束内边距
- [`padding-block`](padding-block.md) - 块内边距简写
- [`padding-left`](padding-left.md) - 左内边距
- [`padding-right`](padding-right.md) - 右内边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)