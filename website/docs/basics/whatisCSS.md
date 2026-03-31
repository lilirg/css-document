---
sidebar_position: 1
---

# 什么是 CSS？

CSS（Cascading Style Sheets，层叠样式表）是一种用于描述 HTML 文档外观和格式的样式表语言。

## CSS 的作用

CSS 允许您控制网页的：

- **布局** - 页面元素的排列方式
- **颜色** - 背景、文本、边框等颜色
- **字体** - 字体类型、大小、粗细
- **动画** - 元素的过渡和动画效果
- **响应式** - 不同设备上的显示效果

## CSS 的工作原理

CSS 通过选择器匹配 HTML 元素，然后应用样式规则：

```css
/* 选择器 */ { 
  /* 声明1 */
  /* 声明2 */
}
```

示例：

```css
p {
  color: blue;
  font-size: 16px;
}
```

## CSS 的类型

1. **内联样式** - 直接在 HTML 元素上使用 style 属性
2. **内部样式** - 在 HTML 文档的 `<style>` 标签中
3. **外部样式** - 在单独的 `.css` 文件中（推荐）

## CSS 的历史

- **1996** - CSS1 发布
- **1998** - CSS2 发布
- **2011** - CSS2.1 发布
- **2012+** - CSS3 模块化发展

## 相关资源

- [MDN Web Docs: CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [W3C CSS 规范](https://www.w3.org/Style/CSS/specs.en)
- [CSS-Tricks](https://css-tricks.com/)