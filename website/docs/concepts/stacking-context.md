---
sidebar_position: 8
---

# 堆叠上下文（Stacking Context）

堆叠上下文决定了元素在 z 轴方向上的层叠顺序。

## 什么是堆叠上下文？

堆叠上下文（Stacking Context）是 HTML 元素在 z 轴方向上的层叠顺序。当元素在页面上重叠时，堆叠上下文决定了哪个元素显示在前面，哪个元素显示在后面。

## 堆叠层级

元素在堆叠上下文中的层级从低到高：

1. **背景和边框** - 最底层
2. **负 z-index 元素** - 负值 z-index
3. **块级元素** - 默认层级
4. **浮动元素** - 浮动元素
5. **行内元素** - 行内元素
6. **z-index: auto 元素** - 自动 z-index
7. **正 z-index 元素** - 正值 z-index - 最高层

## 创建堆叠上下文

以下情况会创建新的堆叠上下文：

### z-index 属性

```css
.element {
  position: relative;  /* 或 absolute、fixed */
  z-index: 10;
}
```

### 其他情况

- 根元素（`<html>`）
- `position: absolute` 或 `position: relative` 且 `z-index` 不为 `auto`
- `position: fixed` 或 `position: sticky`
- `opacity` 小于 1
- `transform` 不为 `none`
- `filter` 不为 `none`
- `mix-blend-mode` 不为 `normal`
- `will-change` 指定的属性
- `perspective` 不为 `none`

## 堆叠上下文示例

```css
.parent {
  position: relative;
  z-index: 1;
}

.child {
  position: absolute;
  z-index: 10;
}
```

在上面的例子中，`.child` 的 z-index 是相对于 `.parent` 的。

## 堆叠上下文规则

1. **父级优先** - 父元素的堆叠层级优先于子元素
2. **后出现优先** - 在同一堆叠上下文中，后出现的元素优先
3. **z-index 优先** - z-index 值高的元素优先

## 相关资源

- [MDN Web Docs: 堆叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [CSS-Tricks: Stacking Context](https://css-tricks.com/almanac/properties/z/z-index/)