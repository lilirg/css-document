# shape-outside

`shape-outside` 属性定义形状，使文本围绕非矩形元素排列。

## 语法

```css
shape-outside: none | <shape-box> || <basic-shape> | <image>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 浮动元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 无形状 |
| `<basic-shape>` | 基本形状：`circle()`、`ellipse()`、`inset()`、`polygon()` |
| `<image>` | 图像作为形状源 |
| `<shape-box>` | 形状参考框 |

## 注意

- 仅适用于浮动元素
- 文本会围绕定义的形状排列
- 可以与 `shape-margin` 和 `shape-image-threshold` 配合使用

## 示例

```css
/* 圆形形状 */
.element {
  shape-outside: circle(50%);
  float: left;
}

/* 多边形形状 */
.element {
  shape-outside: polygon(0 0, 100% 50%, 0 100%);
  float: left;
}

/* 图像作为形状 */
.element {
  shape-outside: url('shape.png);
  float: left;
}
```

## 使用场景

```css
/* 圆形图片周围的文本环绕 */
.circle-image {
  float: left;
  width: 150px;
  height: 150px;
  shape-outside: circle(50% at 50% 50%);
}

/* 自定义多边形形状 */
.custom-shape {
  float: left;
  width: 200px;
  height: 200px;
  shape-outside: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |

## 相关属性

- [`shape-margin`](shape-margin.md) - 形状边距
- [`shape-image-threshold`](shape-image-threshold.md) - 形状图像阈值
- [`float`](float.md) - 浮动

## 规范

- [CSS Shapes Module Level 1](https://www.w3.org/TR/css-shapes-1/#shape-outside-property)
