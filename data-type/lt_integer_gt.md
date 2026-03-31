# integer

`integer` 数据类型表示整数值，用于需要整数的属性。

## 语法

```css
/* 基本用法 */
.element {
  z-index: 10;
  order: 1;
}

/* 负整数 */
.element {
  z-index: -1;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分属性） |

## 示例

### z-index

```css
/* 层级顺序 */
.element {
  z-index: 10;
}

/* 负层级 */
.element {
  z-index: -1;
}
```

### order

```css
/* Flexbox 顺序 */
.container {
  display: flex;
}

.item {
  order: 1;
}
```

### animation-iteration-count

```css
/* 动画次数 */
.element {
  animation-iteration-count: 3;
}

/* 无限循环 */
.element {
  animation-iteration-count: infinite;
}
```

### grid-column/grid-row

```css
/* 网格位置 */
.element {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

### counter-increment

```css
/* 计数器增量 */
.element {
  counter-increment: section 1;
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

- [MDN Web Docs: integer](https://developer.mozilla.org/zh-CN/docs/Web/CSS/integer)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#integers)
