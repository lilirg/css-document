# CSS 概念 (CSS Concepts)

CSS 概念部分深入探讨 CSS 的核心概念和原理，帮助开发者理解 CSS 的工作机制。

## 目录

### 核心概念

- [`cascade.md`](cascade.md) - 层叠（Cascade）机制
- [`specificity.md`](specificity.md) - 优先级（Specificity）
- [`inheritance.md`](inheritance.md) - 继承（Inheritance）
- [`box-model.md`](box-model.md) - 盒模型（Box Model）
- [`normal-flow.md`](normal-flow.md) - 正常文档流（Normal Flow）
- [`containing-block.md`](containing-block.md) - 包含块（Containing Block）
- [`stacking-context.md`](stacking-context.md) - 堆叠上下文（Stacking Context）

### 布局概念

- [`layout-context.md`](layout-context.md) - 布局上下文（Layout Context）
- [`formatting-context.md`](formatting-context.md) - 格式化上下文（Formatting Context）
- [`block-formatting-context.md`](block-formatting-context.md) - 块级格式化上下文（BFC）
- [`flex-formatting-context.md`](flex-formatting-context.md) - 弹性格式化上下文（FFC）
- [`grid-formatting-context.md`](grid-formatting-context.md) - 网格格式化上下文（GFC）

### 颜色与视觉

- [`color-space.md`](color-space.md) - 颜色空间（Color Space）
- [`color-models.md`](color-models.md) - 颜色模型（Color Models）
- [`opacity.md`](opacity.md) - 不透明度（Opacity）
- [`blend-mode.md`](blend-mode.md) - 混合模式（Blend Mode）

### 动画与变换

- [`transform-origin.md`](transform-origin.md) - 变换原点（Transform Origin）
- [`animation-timing.md`](animation-timing.md) - 动画计时（Animation Timing）
- [`easing-function.md`](easing-function.md) - 缓动函数（Easing Function）

## 概念分类

### 基础概念

CSS 的基础概念是理解 CSS 工作机制的关键：

1. **层叠** - 多个样式规则如何合并和冲突解决
2. **优先级** - 当多个规则匹配同一元素时，哪个规则生效
3. **继承** - 样式如何从父元素传递到子元素
4. **盒模型** - 元素如何占据空间和渲染
5. **文档流** - 元素在页面中的默认排列方式

### 布局概念

理解布局上下文对于掌握 CSS 布局至关重要：

1. **BFC** - 块级格式化上下文，影响块级元素的布局
2. **FFC** - 弹性格式化上下文，用于 Flexbox 布局
3. **GFC** - 网格格式化上下文，用于 Grid 布局
4. **IFC** - 行内格式化上下文，用于行内元素布局

### 视觉概念

CSS 的视觉效果涉及颜色、透明度和混合：

1. **颜色空间** - 不同的颜色表示方法
2. **不透明度** - 元素的透明程度
3. **混合模式** - 元素如何与背景混合

## 相关链接

- [MDN Web Docs: CSS 概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Concepts)
- [W3C CSS 规范](https://www.w3.org/Style/CSS/specs.en.html)
- [CSS-Tricks: CSS Concepts](https://css-tricks.com/concepts/)