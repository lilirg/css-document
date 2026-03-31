# scrollbar-gutter

`scrollbar-gutter` 属性控制滚动条的预留空间，防止内容在滚动条显示/隐藏时发生抖动。

## 语法

```css
scrollbar-gutter: auto | stable | stable both-edges
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 默认行为，需要时显示滚动条 |
| `stable` | 始终预留滚动条空间 |
| `stable both-edges` | 预留两侧滚动条空间 |

## 注意

- 防止滚动条出现时内容布局发生偏移
- 对于需要精确布局的场景非常有用
- 现代浏览器的推荐做法

## 示例

```css
/* 始终预留滚动条空间 */
.container {
  overflow: auto;
  scrollbar-gutter: stable;
}
```

## 使用场景

```css
/* 侧边栏布局，防止内容抖动 */
.sidebar {
  width: 300px;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

.content {
  margin-left: 300px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 105+ |
| Firefox | 97+ |
| Safari | 15.4+ |
| Edge | 105+ |

## 相关属性

- [`overflow`](overflow.md) - 溢出处理
- [`scrollbar-color`](scrollbar-color.md) - 滚动条颜色
- [`scrollbar-width`](scrollbar-width.md) - 滚动条宽度

## 规范

- [CSS Overflow Module Level 3](https://drafts.csswg.org/css-overflow-3/#scrollbar-gutter)