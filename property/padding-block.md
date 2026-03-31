# padding-block

`padding-block` 属性用于设置块方向两侧的内边距（起始边和结束边）。

## 语法

```css
/* 两个值：起始边 结束边 */
padding-block: <length> <length>;

/* 一个值：两侧相同 */
padding-block: <length>;
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

- 块方向取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，块方向是上下方向
- 简写属性同时设置 `padding-block-start` 和 `padding-block-end`
- 百分比值相对于包含块的宽度

## 示例

```css
/* 设置两侧块内边距 */
.element {
  padding-block: 10px;
}

/* 设置不同的起始和结束内边距 */
.element {
  padding-block: 10px 20px;
}

/* 使用 em 单位 */
.element {
  padding-block: 1em 2em;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 卡片上下内边距 */
.card {
  padding-block: 16px;
}

/* 2. 按钮上下内边距 */
.button {
  padding-block: 8px 12px;
}

/* 3. 段落内边距 */
p {
  padding-block: 0.5em;
}

/* 4. 响应式内边距 */
@media (min-width: 768px) {
  .responsive {
    padding-block: 24px;
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

- [`padding-block-start`](padding-block-start.md) - 块起始内边距
- [`padding-block-end`](padding-block-end.md) - 块结束内边距
- [`padding-inline`](padding-inline.md) - 行内内边距简写
- [`padding-top`](padding-top.md) - 上内边距
- [`padding-bottom`](padding-bottom.md) - 下内边距

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)