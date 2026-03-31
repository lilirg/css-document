---
sidebar_position: 68
---

# `angle`

`angle` 数据类型表示角度值�?

## 单位

- `deg` - 度（360deg = 1 圈）
- `grad` - 百分度（400grad = 1 圈）
- `rad` - 弧度�?π rad = 1 圈）
- `turn` - 圈（1turn = 360deg�?

## 示例

```css
/* 度数 */
.transform {
  transform: rotate(45deg);
}

/* 弧度 */
.transform {
  transform: rotate(0.785398rad);
}

/* 圈数 */
.transform {
  transform: rotate(0.25turn);
}

/* 百分�?*/
.transform {
  transform: rotate(50grad);
}

/* 负角�?*/
.transform {
  transform: rotate(-45deg);
}
```

## 相关资源

- [MDN Web Docs: angle](https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle)
- [CSS-Tricks: angle](https://css-tricks.com/almanac/properties/r/rotate/)
