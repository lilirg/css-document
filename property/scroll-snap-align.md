# scroll-snap-align

`scroll-snap-align` CSS 属性指定元素的滚动捕捉对齐方式，定义元素在滚动容器中如何对齐到捕捉点。

## 语法

```css
/* 无捕捉 */
scroll-snap-align: none;

/* 单一值 - 应用于两个轴 */
scroll-snap-align: start;
scroll-snap-align: center;
scroll-snap-align: end;

/* 两个值 - 第一个：X 轴，第二个：Y 轴 */
scroll-snap-align: start center;
scroll-snap-align: center end;
```

## 值

### `none`

元素不作为捕捉点。这是默认值。

```css
scroll-snap-align: none;
```

### `start`

元素的起始边与容器的起始边对齐。

```css
scroll-snap-align: start;
```

**效果**：
- 水平方向：元素的左边与容器的左边对齐
- 垂直方向：元素的顶部与容器的顶部对齐

### `center`

元素的中心与容器的中心对齐。

```css
scroll-snap-align: center;
```

**效果**：
- 水平方向：元素的中心与容器的中心对齐
- 垂直方向：元素的中心与容器的中心对齐

### `end`

元素的结束边与容器的结束边对齐。

```css
scroll-snap-align: end;
```

**效果**：
- 水平方向：元素的右边与容器的右边对齐
- 垂直方向：元素的底部与容器的底部对齐

## 示例

### 横向轮播

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.carousel-item {
  flex: 0 0 100%;
  scroll-snap-align: center;
  /* 每个项目居中捕捉 */
}
```

### 垂直分页

```css
.page-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.page {
  height: 100vh;
  scroll-snap-align: start;
  /* 每页从顶部开始捕捉 */
}
```

### 卡片网格

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  scroll-snap-type: both mandatory;
  height: 400px;
  width: 400px;
}

.grid-item {
  scroll-snap-align: center center;
  /* 在两个轴上都居中捕捉 */
}
```

### 不同的对齐方式

```css
/* 左对齐 */
.align-start {
  scroll-snap-align: start;
}

/* 右对齐 */
.align-end {
  scroll-snap-align: end;
}

/* 水平居中，垂直顶部对齐 */
.align-mixed {
  scroll-snap-align: center start;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 72+ |
| Edge | 79+ |
| Firefox | 68+ |
| Safari | 13+ |
| Opera | 59+ |

## 注意事项

1. **需要父容器**：`scroll-snap-align` 需要在设置了 `scroll-snap-type` 的容器内的子元素上使用。

2. **书写模式**：在垂直书写模式下，`start`、`center`、`end` 的含义会相应调整。

3. **与 scroll-snap-type 的关系**：父容器的 `scroll-snap-type` 决定捕捉是否启用，子元素的 `scroll-snap-align` 决定捕捉位置。

4. **多个值**：可以指定两个值来分别控制 X 轴和 Y 轴的捕捉对齐。

5. **性能考虑**：过多的捕捉点可能会影响滚动性能。

## 相关属性

- [`scroll-snap-type`](scroll-snap-type.md) - 滚动容器捕捉类型
- [`scroll-snap-stop`](scroll-snap-stop.md) - 捕捉严格程度
- [`scroll-behavior`](scroll-behavior.md) - 滚动行为

## 规范

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1/#scroll-snap-align)