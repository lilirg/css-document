# shape-image-threshold

`shape-image-threshold` 属性定义形状外部使用图像时的透明度阈值。

## 语法

```css
shape-image-threshold: <number>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0.0` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 透明度阈值，范围 0.0 到 1.0 |

## 注意

- 仅与 `shape-outside` 配合使用
- 值越小，包含的透明区域越多
- 值越大，包含的透明区域越少

## 示例

```css
/* 透明度阈值为 0.5 */
.element {
  shape-outside: url('shape.png);
  shape-image-threshold: 0.5;
  float: left;
}
```

## 使用场景

```css
/* 使用 PNG 图像创建非矩形文本环绕 */
.image-wrap {
  float: left;
  shape-outside: url('circle.png);
  shape-image-threshold: 0.5;
  width: 200px;
  height: 200px;
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
- [`shape-margin`](shape-margin.md) - 形状边距
- [`shape-image-threshold`](shape-image-threshold.md) - 形状图像阈值

## 规范

- [CSS Shapes Module Level 1](https://www.w3.org/TR/css-shapes-1/#shape-image-threshold)
