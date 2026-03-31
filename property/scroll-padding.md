# scroll-padding

`scroll-padding` CSS 属性是一个简写属性，用于设置滚动容器的滚动内边距，定义滚动内容距离容器边缘的最小距离。

## 语法

```css
/* 一个值 - 应用于所有四个方向 */
scroll-padding: 20px;

/* 两个值 - 上下 | 左右 */
scroll-padding: 20px 30px;

/* 三个值 - 上 | 左右 | 下 */
scroll-padding: 20px 30px 40px;

/* 四个值 - 上 | 右 | 下 | 左（顺时针） */
scroll-padding: 20px 30px 40px 50px;

/* 单独方向 */
scroll-padding-top: 20px;
scroll-padding-right: 30px;
scroll-padding-bottom: 40px;
scroll-padding-left: 50px;
```

## 值

### 长度值

任何有效的 CSS 长度单位（`px`、`em`、`rem`、`%` 等）。

```css
scroll-padding: 20px;
scroll-padding: 5%;
scroll-padding: 1em;
```

### `auto`

使用默认的内边距值。

```css
scroll-padding: auto;
```

## 简写规则

`scroll-padding` 的简写规则与 `padding` 相同：

| 值数量 | 含义 |
|--------|------|
| 1 个值 | 应用于所有四个方向 |
| 2 个值 | 第一个：上下，第二个：左右 |
| 3 个值 | 第一个：上，第二个：左右，第三个：下 |
| 4 个值 | 上 → 右 → 下 → 左（顺时针） |

### 示例

```css
/* 所有方向都是 20px */
.padding-1 {
  scroll-padding: 20px;
  /* 等同于 */
  scroll-padding-top: 20px;
  scroll-padding-right: 20px;
  scroll-padding-bottom: 20px;
  scroll-padding-left: 20px;
}

/* 上下 20px，左右 30px */
.padding-2 {
  scroll-padding: 20px 30px;
  /* 等同于 */
  scroll-padding-top: 20px;
  scroll-padding-bottom: 20px;
  scroll-padding-right: 30px;
  scroll-padding-left: 30px;
}

/* 上 20px，左右 30px，下 40px */
.padding-3 {
  scroll-padding: 20px 30px 40px;
  /* 等同于 */
  scroll-padding-top: 20px;
  scroll-padding-right: 30px;
  scroll-padding-left: 30px;
  scroll-padding-bottom: 40px;
}

/* 上 20px，右 30px，下 40px，左 50px */
.padding-4 {
  scroll-padding: 20px 30px 40px 50px;
  /* 等同于 */
  scroll-padding-top: 20px;
  scroll-padding-right: 30px;
  scroll-padding-bottom: 40px;
  scroll-padding-left: 50px;
}
```

## 示例

### 固定导航栏偏移

```css
/* 为整个页面设置滚动内边距 */
html {
  scroll-padding-top: 80px;
  /* 锚点滚动时，内容不会紧贴顶部，留出 80px 给固定导航栏 */
}

/* 固定导航栏 */
header {
  height: 80px;
  position: fixed;
  top: 0;
}
```

### 滚动捕捉容器

```css
/* 滚动捕捉容器 */
.snap-container {
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-padding: 20px;
  /* 捕捉点与容器边缘保持 20px 间距 */
}

.snap-item {
  scroll-snap-align: start;
  height: 200px;
}
```

### 侧边栏布局

```css
/* 主内容区域 */
.main-content {
  scroll-behavior: smooth;
  scroll-padding: 100px 20px;
  /* 上下 100px，左右 20px */
}
```

## 相关属性

- [`scroll-padding-top`](scroll-padding-top.md) - 顶部滚动内边距
- [`scroll-padding-right`](scroll-padding-right.md) - 右侧滚动内边距
- [`scroll-padding-bottom`](scroll-padding-bottom.md) - 底部滚动内边距
- [`scroll-padding-left`](scroll-padding-left.md) - 左侧滚动内边距
- [`scroll-margin`](scroll-margin.md) - 滚动外边距
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

1. **滚动容器**：`scroll-padding` 应用于滚动容器（有 `overflow` 设置为 `auto` 或 `scroll` 的元素）。

2. **锚点滚动**：主要用于控制锚点滚动时目标元素与视口边缘的距离。

3. **与 padding 的区别**：`scroll-padding` 不影响元素的布局，只影响滚动行为。

4. **固定导航**：常用于解决固定导航栏遮挡锚点内容的问题。

5. **逻辑属性**：可以使用 `scroll-padding-block` 和 `scroll-padding-inline` 来支持不同的书写模式。

## 规范

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1/#scroll-padding)