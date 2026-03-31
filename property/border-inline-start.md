# border-inline-start

`border-inline-start` 属性用于设置行内方向起始边的边框。

## 语法

```css
border-inline-start: <line-width> || <line-style> || <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 详见各简写属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<line-width>` | 边框宽度（如 `1px`, `thin`, `medium`, `thick`） |
| `<line-style>` | 边框样式（如 `solid`, `dashed`, `dotted`, `double`） |
| `<color>` | 边框颜色 |

## 注意

- 行内起始边取决于 `writing-mode` 和 `direction`
- 在水平书写模式中，行内起始边是左边框（`direction: ltr`）或右边框（`direction: rtl`）
- 在垂直书写模式中，行内起始边是上边框

## 示例

```css
/* 设置行内起始边框 */
.element {
  border-inline-start: 1px solid #333;
}

/* 不同宽度 */
.element {
  border-inline-start: 2px dashed blue;
}

/* 仅设置样式 */
.element {
  border-inline-start: none;
}
```

```html
<!-- HTML 示例 -->
<div class="element">内容</div>
```

## 使用场景

```css
/* 1. 引用块左侧边框 */
blockquote {
  border-inline-start: 4px solid #ccc;
  padding-inline-start: 16px;
  margin: 0;
}

/* 2. 列表项左侧标记 */
.list-item {
  border-inline-start: 3px solid #007bff;
  padding-inline-start: 12px;
}

/* 3. 代码块左侧 */
code {
  border-inline-start: 2px solid #f39c12;
  padding-inline-start: 8px;
}

/* 4. 通知消息 */
.notification {
  border-inline-start: 4px solid;
  border-inline-start-color: var(--notification-color);
  padding: 12px 16px;
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

- [`border-inline-end`](border-inline-end.md) - 行内结束边框
- [`border-inline`](border-inline.md) - 行内边框简写
- [`border-left`](border-left.md) - 左边框
- [`border-block-start`](border-block-start.md) - 块起始边框

## 规范

- [CSS Logical Properties Module Level 1](https://www.w3.org/TR/css-logical-1/)