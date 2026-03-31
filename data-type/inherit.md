# inherit

`inherit` 关键字表示该属性的值应从其父元素继承。

## 语法

```css
/* 基本用法 */
.element {
  color: inherit;
  font-size: inherit;
}

/* 所有属性继承 */
.element {
  all: inherit;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 取决于继承的属性 |

## 属性值

| 值 | 描述 |
| :--- | :--- |
| `inherit` | 从父元素继承该属性的计算值 |

## 示例

### 基本继承

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
  font-weight: bold;
}

.child {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
}

/* 结果：子元素继承父元素的所有样式 */
```

### 所有属性继承

```css
.child {
  all: inherit;
}

/* 等同于：
   color: inherit;
   font-size: inherit;
   font-weight: inherit;
   ...（所有可继承属性）
*/
```

### 非继承属性

某些属性默认不继承，使用 `inherit` 可以强制继承：

```css
/* border 默认不继承 */
.child {
  border: inherit;
}

/* margin 默认不继承 */
.child {
  margin: inherit;
}

/* padding 默认不继承 */
.child {
  padding: inherit;
}
```

### 重置为继承值

```css
/* 将属性重置为继承值 */
.element {
  color: inherit;
  font-size: inherit;
}

/* 等同于 */
.element {
  all: inherit;
}
```

## 相关链接

- [MDN Web Docs: inherit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#inherit)
