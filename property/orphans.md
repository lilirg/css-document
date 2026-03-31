# orphans

`orphans` 属性设置分页媒体中段落的最小孤行数，防止段落开头在页面底部只留下少数几行。

## 语法

```css
orphans: integer
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `2` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是（作为长度值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<integer>` | 最小孤行数，必须为正整数 |

## 注意

- 孤行（orphan）是指段落开头在页面底部只留下的一行或少数几行
- 与 `widows` 属性配合使用，控制分页时的文本布局
- 仅适用于分页媒体（如打印）

## 示例

```css
/* 防止段落开头在页面底部只留下 1 行 */
p {
  orphans: 3;
}
```

## 使用场景

```css
/* 打印样式表中控制文本分页 */
@media print {
  article p {
    orphans: 3;
    widows: 3;
  }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |

## 相关属性

- [`widows`](widows.md) - 末页孤行数
- [`break-after`](break-after.md) - 分页后断点
- [`break-before`](break-before.md) - 分页前断点

## 规范

- [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/#orphans)
