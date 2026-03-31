# max-lines

`max-lines` 属性限制块容器中的最大行数。

## 语法

```css
max-lines: none | <integer>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级容器元素 |
| 动画 | 是（作为整数） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 不限制行数 |
| `<integer>` | 最大行数，必须为正整数 |

## 注意

- 仅适用于分页媒体或具有固定高度的容器
- 超过最大行数的内容会被截断
- 通常与 `line-clamp` 配合使用

## 示例

```css
/* 限制最多 3 行 */
.element {
  max-lines: 3;
  height: 100px;
}
```

## 使用场景

```css
/* 多列布局中的行数限制 */
.multi-column {
  column-count: 2;
  max-lines: 10;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 不支持 |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 不支持 |

## 相关属性

- [`box-decoration-break`](box-decoration-break.md) - 盒子装饰片段
- [`line-clamp`](line-clamp.md) - 行裁剪

## 规范

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/css-break-3/#max-lines)