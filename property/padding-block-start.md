# padding-block-start

`padding-block-start` 属性用于设置块方向起始边的内边距。

## 语法

```css
padding-block-start: <length> | <percentage>
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

- 块起始边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块起始边是上边
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置块起始内边距 */
.element {
  padding-block-start: 10px;
}

/* 使用 em 单位 */
.element {
  padding-block-start: 1em;
}

/* 使用百分比 */
.element {
  padding-block-start: 5%;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片顶部内边距 */
.card {
  padding-block-start: 16px;
}

/* 2. 按钮顶部内边距 */
.button {
  padding-block-start: 8px;
}

/* 3. 段落顶部内边距 */
p {
  padding-block-start: 0.5em;
}

/* 4. 导航栏顶部内边距 */
.navbar {
  padding-block-start: 12px;
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

- [`padding-block-end`](padding-block-end.md) - 块结束内边距
- [`padding-block`](padding-block.md) - 块内边距简写
- [`padding-top`](padding-top.md) - 上内边距
- [`padding-inline-start`](padding-inline-start.md) - 行内起始内边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)