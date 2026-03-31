# 继承（Inheritance）

继承是 CSS 的核心机制之一，它允许某些样式从父元素自动传递到子元素。

## 继承原理

继承是指某些 CSS 属性的值会从父元素传递给其子元素。这使得我们可以为整个文档设置默认样式，而不需要为每个元素单独设置。

### 继承的工作方式

1. **父元素设置属性** - 父元素设置了某个可继承的属性
2. **子元素继承值** - 子元素自动获得父元素的值
3. **直接设置覆盖** - 子元素直接设置的值会覆盖继承的值

## 可继承属性

以下属性是可继承的：

### 文本相关

| 属性 | 说明 |
| :--- | :--- |
| `color` | 文本颜色 |
| `font-family` | 字体族 |
| `font-size` | 字体大小 |
| `font-weight` | 字体粗细 |
| `font-style` | 字体样式 |
| `line-height` | 行高 |
| `text-align` | 文本对齐 |
| `text-decoration` | 文本装饰 |
| `text-indent` | 首行缩进 |
| `text-transform` | 文本转换 |
| `letter-spacing` | 字母间距 |
| `word-spacing` | 单词间距 |
| `white-space` | 空白处理 |

### 列表相关

| 属性 | 说明 |
| :--- | :--- |
| `list-style` | 列表样式 |
| `list-style-type` | 列表项标记类型 |
| `list-style-image` | 列表项标记图像 |
| `list-style-position` | 列表项标记位置 |

### 其他

| 属性 | 说明 |
| :--- | :--- |
| `visibility` | 可见性 |
| `cursor` | 光标样式 |
| `opacity` | 不透明度 |

## 不可继承属性

以下属性是不可继承的：

### 盒模型相关

| 属性 | 说明 |
| :--- | :--- |
| `width` / `height` | 宽度/高度 |
| `margin` | 外边距 |
| `padding` | 内边距 |
| `border` | 边框 |
| `box-sizing` | 盒模型 |

### 背景相关

| 属性 | 说明 |
| :--- | :--- |
| `background` | 背景 |
| `background-color` | 背景颜色 |
| `background-image` | 背景图像 |

### 布局相关

| 属性 | 说明 |
| :--- | :--- |
| `display` | 显示类型 |
| `position` | 定位方式 |
| `float` | 浮动 |
| `clear` | 清除浮动 |
| `overflow` | 溢出处理 |

## 继承值

### `inherit`

`inherit` 关键字强制属性继承父元素的值：

```css
p {
  color: red;
}

span {
  color: inherit;  /* 继承父元素的红色 */
}
```

### `initial`

`initial` 关键字将属性重置为初始值：

```css
p {
  color: red;
}

span {
  color: initial;  /* 重置为初始值（黑色） */
}
```

### `unset`

`unset` 关键字：
- 对可继承属性：效果类似 `inherit`
- 对不可继承属性：效果类似 `initial`

```css
p {
  color: red;
}

span {
  color: unset;  /* 可继承属性，效果类似 inherit */
}
```

## 继承示例

```html
<div class="container">
  <p>段落文本</p>
  <span>内联文本</span>
</div>
```

```css
/* 继承示例 */
.container {
  color: blue;
  font-size: 16px;
  font-family: Arial;
}

/* 子元素继承父元素的样式 */
.container p {
  /* color: blue; 继承 */
  /* font-size: 16px; 继承 */
  /* font-family: Arial; 继承 */
}

/* 子元素可以覆盖继承的样式 */
.container span {
  color: red;  /* 覆盖继承的蓝色 */
}
```

## 最佳实践

1. **利用继承** - 为 `body` 设置字体和颜色
2. **避免过度继承** - 明确设置需要的属性
3. **使用 `inherit`** - 明确表达继承意图
4. **理解继承规则** - 知道哪些属性可继承

## 相关链接

- [MDN: 继承](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)
- [W3C: CSS Cascading and Inheritance Level 6](https://www.w3.org/TR/css-cascade-6/)