# initial

`initial` 关键字表示该属性应使用其初始值（默认值）。

## 语法

```css
/* 基本用法 */
.element {
  color: initial;
  font-size: initial;
}

/* 所有属性重置为初始值 */
.element {
  all: initial;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 取决于属性 |

## 属性值

| 值 | 描述 |
| :--- | :--- |
| `initial` | 将属性重置为其初始值 |

## 示例

### 基本重置

```html
<!-- HTML -->
<div class="parent">
  <p class="child">段落文本</p>
</div>
```

```css
.parent {
  color: blue;
  font-size: 18px;
}

.child {
  color: initial;
  font-size: initial;
}

/* 结果：
   color: initial 值为 black（默认颜色）
   font-size: initial 值为 medium（默认字体大小）
*/
```

### 所有属性重置

```css
.element {
  all: initial;
}

/* 等同于将所有属性重置为初始值 */
```

### 重置特定属性

```css
/* 重置边框为初始值（无边框） */
.element {
  border: initial;
}

/* 重置边距为初始值（0） */
.element {
  margin: initial;
}

/* 重置内边距为初始值（0） */
.element {
  padding: initial;
}

/* 重置显示为初始值（inline） */
.element {
  display: initial;
}
```

### 与 `inherit` 的区别

```css
/* 继承父元素的值 */
.child {
  color: inherit;
}

/* 使用属性的初始值 */
.child {
  color: initial;
}
```

## 相关链接

- [MDN Web Docs: initial](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#initial)
