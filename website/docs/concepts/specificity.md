---
sidebar_position: 3
---

# 优先级（Specificity）

优先级用于计算不同选择器的权重，决定哪个样式规则优先应用。

## 什么是优先级？

优先级（Specificity）是 CSS 用于解决多个规则匹配同一元素时的冲突机制。优先级高的规则会覆盖优先级低的规则。

## 优先级计算

优先级由四个部分组成：`(a, b, c, d)`

- **a** - 内联样式数量（1000）
- **b** - ID 选择器数量（100）
- **c** - 类选择器、属性选择器、伪类数量（10）
- **d** - 元素选择器、伪元素数量（1）

### 示例

```css
/* 优先级: (0, 0, 0, 1) - 元素选择器 */
p {
  color: blue;
}

/* 优先级: (0, 0, 1, 0) - 类选择器 */
.highlight {
  color: red;
}

/* 优先级: (0, 1, 0, 0) - ID 选择器 */
#header {
  color: green;
}

/* 优先级: (1, 0, 0, 0) - 内联样式 */
<p style="color: purple;">文本</p>

/* 优先级: (0, 1, 1, 1) - ID + 类 + 元素 */
#main .content p {
  color: orange;
}
```

## 优先级比较

优先级从左到右比较，高位优先：

```
(0, 0, 0, 1) < (0, 0, 1, 0) < (0, 1, 0, 0) < (1, 0, 0, 0)
```

## 特殊情况

### !important

`!important` 会覆盖所有其他规则：

```css
p {
  color: blue !important;  /* 优先级最高 */
}
```

### 继承

继承的规则优先级最低：

```css
body {
  color: #333;  /* 继承的规则优先级低 */
}
```

### 源顺序

当优先级相同时，后出现的规则优先：

```css
p {
  color: blue;
}

p {
  color: red;  /* 最终颜色是红色 */
}
```

## 降低优先级

如果需要降低优先级，可以：

1. 使用类选择器代替 ID 选择器
2. 减少选择器的嵌套层级
3. 避免过度使用 `!important`

## 相关资源

- [MDN Web Docs: 优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
- [CSS-Tricks: Specificity](https://css-tricks.com/specifics-on-css-specificity/)