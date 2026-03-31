---
sidebar_position: 7
---

# 包含块（Containing Block）

包含块是元素定位和尺寸计算的参考基准。

## 什么是包含块？

包含块（Containing Block）是元素定位和尺寸计算的参考矩形区域。每个元素都相对于其包含块进行定位。

## 如何确定包含块

### 默认情况

在默认情况下，元素的包含块是其父元素的内容区域。

```html
<div class="parent">
  <div class="child">子元素</div>
</div>
```

```css
.parent {
  width: 300px;
  height: 200px;
  background: #eee;
}

.child {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 50px;
  background: #ccc;
}
```

### 特殊情况

#### 根元素

根元素（`<html>`）的包含块是视口（viewport）。

#### 绝对定位元素

绝对定位元素的包含块是最近的非 `static` 定位的祖先元素。

```css
.parent {
  position: relative;  /* 创建包含块 */
}

.child {
  position: absolute;  /* 相对于父元素定位 */
}
```

#### 固定定位元素

固定定位元素的包含块是视口。

```css
.fixed {
  position: fixed;  /* 相对于视口定位 */
}
```

#### 浮动元素

浮动元素的包含块是其正常文档流中的包含块。

## 包含块示例

```css
.container {
  width: 400px;
  height: 300px;
  position: relative;  /* 创建包含块 */
}

.box {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 50px;
}
```

在上面的例子中，`.box` 的定位是相对于 `.container` 的。

## 相关资源

- [MDN Web Docs: 包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_Block)
- [CSS-Tricks: Containing Block](https://css-tricks.com/containing-block/)