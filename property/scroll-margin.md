# scroll-margin

`scroll-margin` CSS 属性是一个简写属性，用于设置元素在滚动捕捉或锚点滚动时的外边距。

## 语法

```css
/* 一个值 - 应用于所有四个方向 */
scroll-margin: 20px;

/* 两个值 - 上下 | 左右 */
scroll-margin: 20px 30px;

/* 三个值 - 上 | 左右 | 下 */
scroll-margin: 20px 30px 40px;

/* 四个值 - 上 | 右 | 下 | 左（顺时针） */
scroll-margin: 20px 30px 40px 50px;

/* 单独方向 */
scroll-margin-top: 20px;
scroll-margin-right: 30px;
scroll-margin-bottom: 40px;
scroll-margin-left: 50px;
```

## 值

### 长度值

任何有效的 CSS 长度单位（`px`、`em`、`rem`、`%` 等）。

```css
scroll-margin: 20px;
scroll-margin: 5%;
scroll-margin: 1em;
```

### `auto`

使用默认的外边距值。

```css
scroll-margin: auto;
```

## 简写规则

`scroll-margin` 的简写规则与 `margin` 相同：

| 值数量 | 含义 |
|--------|------|
| 1 个值 | 应用于所有四个方向 |
| 2 个值 | 第一个：上下，第二个：左右 |
| 3 个值 | 第一个：上，第二个：左右，第三个：下 |
| 4 个值 | 上 → 右 → 下 → 左（顺时针） |

### 示例

```css
/* 所有方向都是 20px */
.margin-1 {
  scroll-margin: 20px;
  /* 等同于 */
  scroll-margin-top: 20px;
  scroll-margin-right: 20px;
  scroll-margin-bottom: 20px;
  scroll-margin-left: 20px;
}

/* 上下 20px，左右 30px */
.margin-2 {
  scroll-margin: 20px 30px;
  /* 等同于 */
  scroll-margin-top: 20px;
  scroll-margin-bottom: 20px;
  scroll-margin-right: 30px;
  scroll-margin-left: 30px;
}

/* 上 20px，左右 30px，下 40px */
.margin-3 {
  scroll-margin: 20px 30px 40px;
  /* 等同于 */
  scroll-margin-top: 20px;
  scroll-margin-right: 30px;
  scroll-margin-left: 30px;
  scroll-margin-bottom: 40px;
}

/* 上 20px，右 30px，下 40px，左 50px */
.margin-4 {
  scroll-margin: 20px 30px 40px 50px;
  /* 等同于 */
  scroll-margin-top: 20px;
  scroll-margin-right: 30px;
  scroll-margin-bottom: 40px;
  scroll-margin-left: 50px;
}
```

## 示例

### 锚点滚动偏移

```css
/* 为锚点元素设置滚动外边距 */
section[id] {
  scroll-margin-top: 80px;
  /* 点击锚点链接时，内容不会紧贴顶部，留出 80px 空间 */
}

/* 固定导航栏高度 */
header {
  height: 80px;
  position: fixed;
}
```

### 滚动捕捉偏移

```css
/* 滚动捕捉元素 */
.snap-item {
  scroll-snap-align: start;
  scroll-margin: 20px;
  /* 捕捉时与容器边缘保持 20px 间距 */
}
```

### 侧边栏导航

```css
/* 侧边栏链接 */
.sidebar-link {
  scroll-margin-top: 100px;
  scroll-margin-bottom: 100px;
}

/* 主内容区域 */
.main-content {
  scroll-behavior: smooth;
}
```

## 相关属性

- [`scroll-margin-top`](scroll-margin-top.md) - 顶部滚动外边距
- [`scroll-margin-right`](scroll-margin-right.md) - 右侧滚动外边距
- [`scroll-margin-bottom`](scroll-margin-bottom.md) - 底部滚动外边距
- [`scroll-margin-left`](scroll-margin-left.md) - 左侧滚动外边距
- [`scroll-padding`](scroll-padding.md) - 滚动内边距
- [`scroll-snap-type`](scroll-snap-type.md) - 滚动捕捉类型

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 69+ |
| Edge | 79+ |
| Firefox | 68+ |
| Safari | 14+ |
| Opera | 56+ |

## 注意事项

1. **锚点滚动**：`scroll-margin` 主要用于锚点滚动时控制目标元素与视口边缘的距离。

2. **滚动捕捉**：在滚动捕捉中，`scroll-margin` 影响捕捉点的位置计算。

3. **固定导航**：常用于解决固定导航栏遮挡锚点内容的问题。

4. **与 margin 的区别**：`scroll-margin` 不影响元素的布局，只影响滚动行为。

5. **逻辑属性**：可以使用 `scroll-margin-block` 和 `scroll-margin-inline` 来支持不同的书写模式。

## 规范

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1/#scroll-margin)