---
sidebar_position: 69
---

# `length`

`length` 数据类型表示长度值。

## 绝对单位

- `px` - 像素
- `cm` - 厘米
- `mm` - 毫米
- `in` - 英寸
- `pt` - �?
- `pc` - 派卡

## 相对单位

- `em` - 相对于字体大�?
- `rem` - 相对于根元素字体大小
- `ex` - 相对�?x-height
- `ch` - 相对于数�?0 的宽�?
- `vw` - 视口宽度的百分比
- `vh` - 视口高度的百分比
- `vmin` - 视口较小维度的百分比
- `vmax` - 视口较大维度的百分比

## 示例

```css
/* 像素 */
.element {
  width: 200px;
  height: 100px;
}

/* em */
.element {
  font-size: 1.5em;
  padding: 2em;
}

/* rem */
.element {
  font-size: 1.2rem;
  margin: 1rem;
}

/* 百分�?*/
.element {
  width: 50%;
  height: 80%;
}

/* 视口单位 */
.element {
  width: 100vw;
  height: 100vh;
}

/* calc() 计算 */
.element {
  width: calc(100% - 50px);
}
```

## 相关资源

- [MDN Web Docs: length](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)
- [CSS-Tricks: length](https://css-tricks.com/almanac/properties/w/width/)
