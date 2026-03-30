# column-rule-color

该属性设置多列布局中列分隔线的颜色。

## 语法

```css
column-rule-color: <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `currentcolor` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `<color>`
分隔线颜色，可以是：

- 颜色关键字（如 `red`、`blue`）
- RGB/RGBA 值
- HSL/HSLA 值
- 十六进制颜色
- `transparent`

## 注意

- 需要配合 `column-rule-style` 使用才能显示
- 默认值为当前文本颜色
- 支持颜色过渡动画

## 示例

```css
/* CSS 示例 */
.columns {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: #333;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>列之间有深色分隔线...</p>
</div>
```

## 使用场景

```css
/* 1. 灰色分隔线 */
.gray-rule {
  column-count: 2;
  column-rule-style: solid;
  column-rule-color: #ccc;
}

/* 2. 蓝色分隔线 */
.blue-rule {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: #007bff;
}

/* 3. 透明分隔线（隐藏） */
.hidden-rule {
  column-count: 2;
  column-rule-style: solid;
  column-rule-color: transparent;
}

/* 4. 深色分隔线 */
.dark-rule {
  column-count: 2;
  column-rule-style: solid;
  column-rule-color: #333;
}
