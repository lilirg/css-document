# 变换原点（Transform Origin）

变换原点是变换的参考点。

## 什么是变换原点？

变换原点（Transform Origin）是 CSS 中定义变换参考点的属性。默认情况下，变换原点是元素的中心点。

## transform-origin 属性

```css
.element {
  transform-origin: 50% 50%;  /* 中心点（默认） */
  transform-origin: 0% 0%;    /* 左上角 */
  transform-origin: 100% 100%; /* 右下角 */
  transform-origin: 25% 75%;  /* 自定义点 */
}
```

## 变换原点示例

```css
/* 默认变换原点（中心点） */
.origin-default {
  transform: rotate(45deg);
}

/* 左上角变换原点 */
.origin-top-left {
  transform-origin: 0% 0%;
  transform: rotate(45deg);
}

/* 右下角变换原点 */
.origin-bottom-right {
  transform-origin: 100% 100%;
  transform: rotate(45deg);
}
```

## 变换原点与变换函数

变换原点影响所有变换函数：

```css
.element {
  transform-origin: 50% 50%;
  transform: rotate(45deg) scale(1.5);
}
```

## 变换原点单位

变换原点可以使用以下单位：

- **百分比** - 相对于元素尺寸
- **长度** - px、em、rem 等
- **关键字** - top、bottom、left、right、center

```css
/* 百分比 */
.element {
  transform-origin: 50% 50%;
}

/* 长度 */
.element {
  transform-origin: 10px 20px;
}

/* 关键字 */
.element {
  transform-origin: top left;
}
```

## 相关资源

- [MDN Web Docs: 变换原点](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)
- [CSS-Tricks: Transform Origin](https://css-tricks.com/almanac/properties/t/transform-origin/)