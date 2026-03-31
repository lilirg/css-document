# perspective

`perspective` 属性定义元素在 3D 空间中距离观察者的距离，产生透视效果。

## 语法

```css
perspective: none | <length>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（作为长度值） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 无透视效果 |
| `<length>` | 透视距离，必须为正数 |

## 注意

- 值越小，透视效果越强烈
- 值越大，透视效果越弱
- 通常与 `transform` 属性配合使用
- 可以应用于父元素以影响所有子元素的 3D 变换

## 示例

```css
/* 设置透视距离 */
.container {
  perspective: 1000px;
}

/* 子元素进行 3D 变换 */
.container .element {
  transform: rotateY(45deg);
}
```

## 使用场景

```css
/* 卡片翻转效果 */
.card-container {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card.flipped {
  transform: rotateY(180deg);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持（需 -webkit- 前缀） |
| Firefox | 支持 |
| Safari | 支持（需 -webkit- 前缀） |
| Edge | 支持 |

## 相关属性

- [`perspective-origin`](perspective-origin.md) - 透视原点
- [`transform`](transform.md) - 变换
- [`transform-style`](transform-style.md) - 变换样式
- [`transform-origin`](transform-origin.md) - 变换原点

## 规范

- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/#perspective-property)
