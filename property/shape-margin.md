# shape-margin

`shape-margin` 属性定义形状与周围内容之间的边距。

## 语法

```css
shape-margin: <length>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是（作为长度值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<length>` | 形状边距，必须为非负值 |

## 注意

- 仅与 `shape-outside` 配合使用
- 定义形状边界与文本之间的间距
- 不影响元素本身的布局

## 示例

```css
/* 形状边距 20px */
.element {
  shape-outside: circle(50%);
  shape-margin: 20px;
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
  shape-margin: 15px;
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

- [`shape-outside`](shape-outside.md) - 形状外部
- [`shape-image-threshold`](shape-image-threshold.md) - 形状图像阈值
- [`float`](float.md) - 浮动

## 规范

- [CSS Shapes Module Level 1](https://www.w3.org/TR/css-shapes-1/#shape-margin)
