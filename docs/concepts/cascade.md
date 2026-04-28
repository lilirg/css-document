# 层叠（Cascade）

层叠是 CSS 的核心机制，决定了当多个样式规则匹配同一元素时，哪个规则生效。

## 什么是层叠？

层叠（Cascade）是 CSS 中处理多个样式规则冲突的机制。当多个规则匹配同一元素时，CSS 使用层叠算法决定哪个规则最终生效。

## 层叠的三个步骤

### 1. 寻找相关规则

CSS 首先找到所有匹配元素的规则，包括：

- 浏览器默认样式
- 外部样式表
- 内部样式
- 内联样式

### 2. 计算优先级

CSS 计算每个规则的优先级，优先级高的规则优先应用。

优先级计算：

- **内联样式** - 1000
- **ID 选择器** - 100
- **类选择器、属性选择器、伪类** - 10
- **元素选择器、伪元素** - 1

### 3. 应用层叠

CSS 按照以下顺序应用层叠：

1. **重要性** - `!important` 规则优先
2. **来源** - 用户样式 > 作者样式
3. **优先级** - 优先级高的规则优先
4. **源顺序** - 后出现的规则优先

## 优先级示例

```css
/* 优先级: 1 (元素选择器) */
p {
  color: blue;
}

/* 优先级: 10 (类选择器) */
.highlight {
  color: red;
}

/* 优先级: 100 (ID 选择器) */
#header {
  color: green;
}

/* 优先级: 1000 (内联样式) */
<p style="color: purple;">文本</p>
```

## !important

`!important` 用于提高规则的优先级：

```css
p {
  color: blue !important;
}
```

## 继承

某些 CSS 属性会从父元素继承到子元素：

```css
body {
  color: #333;  /* 子元素会继承这个颜色 */
  font-family: Arial;  /* 子元素会继承这个字体 */
}
```

## 相关资源

- [MDN Web Docs: 层叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade)
- [CSS-Tricks: Specificity](https://css-tricks.com/specifics-on-css-specificity/)