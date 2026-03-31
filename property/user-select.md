# user-select

`user-select` 属性用于控制用户是否可以选中文本。

## 语法

```css
user-select: auto | text | none | contain | all
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 默认行为，取决于元素类型 |
| `text` | 文本可被选择 |
| `none` | 文本不可被选择 |
| `contain` | 选择范围被限制在元素内 |
| `all` | 选择任意部分时选择全部内容 |

## 注意

- 此属性不影响程序化的文本选择（如通过 JavaScript）
- 对于 `none` 值，用户仍可以通过其他方式复制内容
- 不同浏览器可能需要前缀（`-webkit-`、`-ms-`）

## 示例

```css
/* 禁止文本选择 */
.no-select {
  user-select: none;
}

/* 选择全部内容 */
.select-all {
  user-select: all;
}

/* 限制选择范围 */
.contain-select {
  user-select: contain;
}
```

```html
<!-- HTML 示例 -->
<div class="no-select">不可选中的文本</div>
<div class="select-all">点击选择全部内容</div>
<div class="contain-select">选择限制在内部</div>
```

## 使用场景

```css
/* 1. 按钮 - 防止双击选中 */
.button {
  user-select: none;
}

/* 2. 图标 - 防止选中 */
.icon {
  user-select: none;
}

/* 3. 代码块 - 方便选择 */
.code-block {
  user-select: text;
}

/* 4. 可复制内容 - 一键全选 */
.copy-content {
  user-select: all;
}

/* 5. 拖拽元素 - 防止干扰 */
.draggable {
  user-select: none;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 前缀 |
|--------|------|------|
| Chrome | 54+ | `-webkit-` |
| Edge | 79+ | 无 |
| Firefox | 36+ | `-moz-` |
| Safari | 9+ | `-webkit-` |
| Opera | 41+ | 无 |

## 相关属性

- [`-webkit-user-select`](user-select.md) - WebKit 前缀版本
- [`-moz-user-select`](user-select.md) - Firefox 前缀版本

## 规范

- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/)