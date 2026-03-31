# scroll-snap-type

`scroll-snap-type` CSS 属性为滚动容器启用滚动捕捉，使滚动在特定位置自动对齐。

## 语法

```css
/* 无捕捉 */
scroll-snap-type: none;

/* X 轴捕捉 */
scroll-snap-type: x mandatory;
scroll-snap-type: x proximity;

/* Y 轴捕捉 */
scroll-snap-type: y mandatory;
scroll-snap-type: y proximity;

/* 双向捕捉 */
scroll-snap-type: both mandatory;
scroll-snap-type: both proximity;
```

## 值

### `none`

不启用滚动捕捉。这是默认值。

```css
scroll-snap-type: none;
```

### `x`

在 X 轴（水平方向）上启用滚动捕捉。

```css
scroll-snap-type: x mandatory;
```

### `y`

在 Y 轴（垂直方向）上启用滚动捕捉。

```css
scroll-snap-type: y mandatory;
```

### `both`

在 X 轴和 Y 轴上都启用滚动捕捉。

```css
scroll-snap-type: both mandatory;
```

### `mandatory`

强制捕捉。滚动停止时，内容必须对齐到捕捉点。

```css
scroll-snap-type: x mandatory;
```

**效果**：
- 滚动停止后自动对齐到最近的捕捉点
- 提供确定的用户体验

### `proximity`

接近捕捉。只有当内容接近捕捉点时才会捕捉。

```css
scroll-snap-type: x proximity;
```

**效果**：
- 接近捕捉点时自动对齐
- 远离捕捉点时不强制对齐
- 提供更灵活的滚动体验

## 示例

### 横向轮播

```css
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.carousel-item {
  flex: 0 0 100%;
  scroll-snap-align: center;
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
}
```

### 网格捕捉

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
  scroll-snap-align: center;
}
```

### 接近捕捉（更灵活）

```css
.flexible-scroll {
  overflow-y: auto;
  scroll-snap-type: y proximity;
}

.section {
  scroll-snap-align: start;
}
```

## 相关属性

- [`scroll-snap-align`](scroll-snap-align.md) - 设置元素的捕捉对齐方式
- [`scroll-snap-stop`](scroll-snap-stop.md) - 控制捕捉的严格程度
- [`scroll-behavior`](scroll-behavior.md) - 滚动行为

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 72+ |
| Edge | 79+ |
| Firefox | 68+ |
| Safari | 13+ |
| Opera | 59+ |

## 注意事项

1. **需要配合使用**：`scroll-snap-type` 需要在滚动容器上设置，同时需要在子元素上设置 `scroll-snap-align`。

2. **overflow 要求**：容器必须有 `overflow` 设置为 `auto`、`scroll` 或 `overlay`。

3. **性能考虑**：滚动捕捉可能会影响滚动性能，特别是在移动设备上。

4. **用户偏好**：应尊重用户的 `prefers-reduced-motion` 偏好设置。

5. **与滚动条的关系**：滚动捕捉不影响滚动条的显示。

## 规范

- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1/)