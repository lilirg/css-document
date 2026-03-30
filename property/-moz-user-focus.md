# -moz-user-focus

该属性指定 Firefox 浏览器中元素是否可以接收焦点。

## 语法

```css
-moz-user-focus: ignore | normal | select-after | select-before | select-menu | select-same | select-all | select-none
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `ignore`
元素不能接收焦点。

### `normal`
元素可以正常接收焦点（默认）。

### `select-after`
元素接收焦点后，选择其后的内容。

### `select-before`
元素接收焦点后，选择其前的内容。

### `select-menu`
元素接收焦点后，显示菜单选择。

### `select-same`
元素接收焦点后，选择相同的内容。

### `select-all`
元素接收焦点后，选择所有内容。

### `select-none`
元素接收焦点后，不选择任何内容。

## 注意
- 该属性是 Firefox 特有的属性
- 主要用于控制元素获得焦点时的行为
- 现代开发中通常使用 `tabindex` 和 `focus` 伪类来实现类似功能

## 示例

```css
/* 元素可以接收焦点 */
.focusable {
  -moz-user-focus: normal;
}

/* 元素不能接收焦点 */
.unfocusable {
  -moz-user-focus: ignore;
}
```

## 使用场景

```css
/* 场景 1：禁用元素的焦点 */
.disabled-button {
  -moz-user-focus: ignore;
  pointer-events: none;
}

/* 场景 2：输入框获得焦点时选择所有内容 */
.select-all-input {
  -moz-user-focus: select-all;
}

/* 场景 3：菜单项获得焦点时显示菜单 */
.menu-item {
  -moz-user-focus: select-menu;
}