# caret-color

`caret-color` 属性用于设置输入光标（caret）的颜色。

## 语法

```css
caret-color: auto | <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 可编辑元素和表单控件 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 使用用户代理的默认颜色 |
| `<color>` | 光标的颜色 |

## 注意

- 此属性适用于可编辑元素（`contenteditable`）和表单控件（`input`、`textarea`）
- 当元素被禁用时，此属性不生效
- 可以用于创建自定义光标颜色效果

## 示例

```css
/* 设置光标颜色为红色 */
input {
  caret-color: red;
}

/* 使用十六进制颜色 */
textarea {
  caret-color: #007bff;
}

/* 使用 RGBA 颜色 */
.editable {
  caret-color: rgba(0, 123, 255, 0.8);
}
```

```html
<!-- HTML 示例 -->
<input type="text" placeholder="输入文本">
<textarea placeholder="输入多行文本"></textarea>
<div contenteditable="true">可编辑内容</div>
```

## 使用场景

```css
/* 1. 品牌色光标 */
.brand-input {
  caret-color: #007bff;
}

/* 2. 错误状态光标 */
.error-input {
  caret-color: #dc3545;
}

/* 3. 成功状态光标 */
.success-input {
  caret-color: #28a745;
}

/* 4. 深色模式光标 */
.dark-mode input {
  caret-color: #fff;
}

/* 5. 自定义可编辑区域 */
.custom-editor {
  caret-color: #ff6b6b;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 57+ |
| Edge | 57+ |
| Firefox | 53+ |
| Safari | 11+ |
| Opera | 44+ |

## 相关属性

- [`color`](color.md) - 文本颜色
- [`contenteditable`](contenteditable) - 可编辑属性

## 规范

- [CSS Basic User Interface Module Level 4](https://drafts.csswg.org/css-ui-4/)