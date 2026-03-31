# number

`number` 数据类型表示数值，可以是整数或小数。

## 语法

```css
/* 整数 */
.element {
  z-index: 10;
}

/* 小数 */
.element {
  opacity: 0.5;
  flex-grow: 1.5;
}

/* 负数 */
.element {
  z-index: -1;
  margin-left: -10px;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分属性） |

## 示例

### opacity

```css
/* 透明度 */
.element {
  opacity: 0.5;
}

/* 完全透明 */
.element {
  opacity: 0;
}

/* 完全不透明 */
.element {
  opacity: 1;
}
```

### flex-grow/flex-shrink

```css
/* 放大比例 */
.element {
  flex-grow: 1;
}

/* 缩小比例 */
.element {
  flex-shrink: 2;
}

/* 小数比例 */
.element {
  flex-grow: 1.5;
}
```

### transform

```css
/* 缩放 */
.element {
  transform: scale(1.5);
}

/* 旋转 */
.element {
  transform: rotate(0.5turn);
}
```

### animation

```css
/* 动画延迟 */
.element {
  animation-delay: 0.5s;
}

/* 动画持续时间 */
.element {
  animation-duration: 1.5s;
}
```

### calc()

```css
/* 计算 */
.element {
  width: calc(100% - 20px);
  margin: calc(10px * 2);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 3+ |

## 相关链接

- [MDN Web Docs: number](https://developer.mozilla.org/zh-CN/docs/Web/CSS/number)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#numbers)
