# text-underline-position

`text-underline-position` 属性定义文本下划线的位置。

## 语法

```css
text-underline-position: auto | under | left | right
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 浏览器自动决定下划线位置 |
| `under` | 下划线在文本下方 |
| `left` | 下划线在左侧（用于竖排文本） |
| `right` | 下划线在右侧（用于竖排文本） |

## 注意

- 与 `text-decoration` 属性配合使用
- 对于竖排文本特别有用
- `auto` 值会根据书写模式自动调整

## 示例

```css
/* 下划线在文本下方 */
.element {
  text-decoration: underline;
  text-underline-position: under;
}

/* 自动决定位置 */
.element {
  text-decoration: underline;
  text-underline-position: auto;
}
```

## 使用场景

```css
/* 竖排文本的下划线位置 */
.vertical-text {
  writing-mode: vertical-rl;
  text-decoration: underline;
  text-underline-position: right;
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

- [`text-decoration`](text-decoration.md) - 文本装饰速记
- [`text-decoration-position`](text-decoration-position.md) - 装饰线位置
- [`text-underline-offset`](text-underline-offset.md) - 下划线偏移

## 规范

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-underline-position-property)
