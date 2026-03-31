# padding-block-end

`padding-block-end` 属性用于设置块方向结束边的内边距。

## 语法

```css
padding-block-end: <length> | <percentage>
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

- 块结束边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块结束边是下边
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置块结束内边距 */
.element {
  padding-block-end: 10px;
}

/* 使用 em 单位 */
.element {
  padding-block-end: 1em;
}

/* 使用百分比 */
.element {
  padding-block-end: 5%;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片底部内边距 */
.card {
  padding-block-end: 16px;
}

/* 2. 按钮底部内边距 */
.button {
  padding-block-end: 8px;
}

/* 3. 段落底部内边距 */
p {
  padding-block-end: 0.5em;
}

/* 4. 导航栏底部内边距 */
.navbar {
  padding-block-end: 12px;
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

- [`padding-block-start`](padding-block-start.md) - 块起始内边距
- [`padding-block`](padding-block.md) - 块内边距简写
- [`padding-bottom`](padding-bottom.md) - 下内边距
- [`padding-inline-end`](padding-inline-end.md) - 行内结束内边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)