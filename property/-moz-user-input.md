# -moz-user-input

该属性指定 Firefox 浏览器中元素是否允许用户输入。

## 语法

```css
-moz-user-input: enable | disable | none | inherit
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `enable` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `enable`
允许用户输入（默认）。

### `disable`
禁止用户输入。

### `none`
元素不接收输入事件。

### `inherit`
继承父元素的值。

## 注意
- 该属性是 Firefox 特有的属性
- 主要用于控制元素是否允许用户输入
- 现代开发中通常使用 `readonly`、`disabled` 属性或 `pointer-events` 来实现类似功能

## 示例

```css
/* 禁止用户输入 */
.readonly {
  -moz-user-input: disable;
}

/* 允许用户输入 */
.editable {
  -moz-user-input: enable;
}
```

## 使用场景

```css
/* 场景 1：禁用文本框输入 */
.disabled-input {
  -moz-user-input: disable;
  background-color: #f0f0f0;
}

/* 场景 2：只读区域 */
.readonly-area {
  -moz-user-input: disable;
  cursor: default;
}

/* 场景 3：可编辑区域 */
.editable-area {
  -moz-user-input: enable;
  border: 1px solid #ccc;
}