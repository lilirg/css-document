# inset

`inset` CSS 属性是一个简写属性，用于同时设置 `top`、`right`、`bottom` 和 `left` 属性。

## 语法

```css
/* 一个值 - 应用于所有四个方向 */
inset: 10px;

/* 两个值 - 上下 | 左右 */
inset: 10px 20px;

/* 三个值 - 上 | 左右 | 下 */
inset: 10px 20px 30px;

/* 四个值 - 上 | 右 | 下 | 左（顺时针） */
inset: 10px 20px 30px 40px;

/* 使用关键字值 */
inset: auto;
inset: auto 10px;

/* 逻辑属性版本 */
inset-block: 10px;
inset-inline: 20px;
```

## 值

### 长度值

任何有效的 CSS 长度单位（`px`、`em`、`rem`、`%` 等）。

```css
inset: 10px;
inset: 5%;
inset: 1em;
```

### `auto`

使用元素的默认定位值。

```css
inset: auto;
inset: auto 10px;
```

## 简写规则

`inset` 的简写规则与 `margin` 和 `padding` 相同：

| 值数量 | 含义 |
|--------|------|
| 1 个值 | 应用于所有四个方向 |
| 2 个值 | 第一个：上下，第二个：左右 |
| 3 个值 | 第一个：上，第二个：左右，第三个：下 |
| 4 个值 | 上 → 右 → 下 → 左（顺时针） |

### 示例

```css
/* 所有方向都是 10px */
.inset-1 {
  inset: 10px;
  /* 等同于 */
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
}

/* 上下 10px，左右 20px */
.inset-2 {
  inset: 10px 20px;
  /* 等同于 */
  top: 10px;
  bottom: 10px;
  right: 20px;
  left: 20px;
}

/* 上 10px，左右 20px，下 30px */
.inset-3 {
  inset: 10px 20px 30px;
  /* 等同于 */
  top: 10px;
  right: 20px;
  left: 20px;
  bottom: 30px;
}

/* 上 10px，右 20px，下 30px，左 40px */
.inset-4 {
  inset: 10px 20px 30px 40px;
  /* 等同于 */
  top: 10px;
  right: 20px;
  bottom: 30px;
  left: 40px;
}
```

## 示例

### 固定定位元素

```css
/* 固定在视口右上角 */
.close-button {
  position: fixed;
  inset: 20px;
  width: 40px;
  height: 40px;
}

/* 固定在底部居中 */
.bottom-bar {
  position: fixed;
  inset: auto 0 0;
  height: 50px;
}
```

### 绝对定位元素

```css
/* 相对于父元素定位 */
.tooltip {
  position: absolute;
  inset: 100% 0 0 0;
}

/* 居中定位 */
.centered {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 200px;
  height: 200px;
}
```

### 逻辑属性版本

```css
/* 使用逻辑属性支持不同书写模式 */
.logical-inset {
  position: absolute;
  inset-block-start: 10px;
  inset-inline-start: 20px;
}

/* 或使用简写 */
.logical-inset-2 {
  position: absolute;
  inset-block: 10px;
  inset-inline: 20px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 87+ |
| Edge | 87+ |
| Firefox | 87+ |
| Safari | 14.1+ |
| Opera | 73+ |

## 注意事项

1. **需要定位上下文**：`inset` 只对 `position` 值为 `relative`、`absolute`、`fixed` 或 `sticky` 的元素有效。

2. **逻辑属性**：可以使用 `inset-block` 和 `inset-inline` 来支持不同的书写模式。

3. **与 margin 的区别**：`inset` 设置的是元素相对于定位父元素的位置，而 `margin` 设置的是元素之间的间距。

4. **现代替代**：`inset` 是 `top`、`right`、`bottom`、`left` 的现代简写方式。

## 相关属性

- [`top`](top.md) - 顶部定位
- [`right`](right.md) - 右侧定位
- [`bottom`](bottom.md) - 底部定位
- [`left`](left.md) - 左侧定位
- [`position`](position.md) - 定位方式
- [`inset-block`](inset-block.md) - 块方向定位
- [`inset-inline`](inset-inline.md) - 行内方向定位

## 规范

- [CSS Positioning Module Level 3](https://www.w3.org/TR/css-position-3/#inset-properties)