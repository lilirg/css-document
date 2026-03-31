# scroll-behavior

`scroll-behavior` CSS 属性控制滚动容器在通过 CSS 或 JavaScript 触发滚动时的行为。

## 语法

```css
/* 关键字值 */
scroll-behavior: auto;
scroll-behavior: smooth;
```

## 值

### `auto`

滚动立即发生，没有动画效果。这是默认值。

```css
scroll-behavior: auto;
```

### `smooth`

滚动以平滑的动画效果发生。

```css
scroll-behavior: smooth;
```

**效果**：
- 滚动以动画形式平滑过渡
- 动画时长由浏览器决定
- 可以通过 `scroll-timeline` 进一步控制

## 示例

### 平滑滚动到锚点

```css
/* 为整个页面启用平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 导航链接点击后平滑滚动到目标位置 */
.nav-link {
  /* 点击后会自动平滑滚动到对应的锚点 */
}
```

### 特定容器平滑滚动

```css
/* 侧边栏导航 */
.sidebar {
  overflow-y: auto;
  scroll-behavior: smooth;
  height: 100vh;
}

/* 模态框内容区域 */
.modal-content {
  overflow-y: auto;
  scroll-behavior: smooth;
  max-height: 80vh;
}
```

### 与 JavaScript 配合使用

```css
.scroll-container {
  overflow-y: auto;
  scroll-behavior: smooth;
}
```

```javascript
// JavaScript 控制平滑滚动
const element = document.querySelector('.target');
element.scrollIntoView({
  behavior: 'smooth', // 与 CSS 的 scroll-behavior 一致
  block: 'start'
});
```

### 禁用平滑滚动（针对用户偏好）

```css
/* 尊重用户的减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 61+ |
| Edge | 79+ |
| Firefox | 36+ |
| Safari | 15.4+ |
| Opera | 48+ |

## 注意事项

1. **仅影响编程式滚动**：`scroll-behavior` 只影响通过 CSS 锚点或 JavaScript API 触发的滚动，用户手动滚动不受影响。

2. **用户偏好**：应尊重用户的 `prefers-reduced-motion` 偏好设置。

3. **性能考虑**：平滑滚动可能会影响性能，特别是在低性能设备上。

4. **与 JavaScript 的关系**：JavaScript 的 `scrollIntoView()` 方法可以覆盖 CSS 设置。

5. **锚点滚动**：当点击页面内的锚点链接时，`scroll-behavior: smooth` 会使滚动平滑过渡。

## 相关属性

- [`overflow`](overflow.md) - 溢出处理
- [`scroll-snap-type`](scroll-snap-type.md) - 滚动捕捉类型
- [`scroll-margin`](scroll-margin.md) - 滚动外边距

## 规范

- [CSS Scroll Animations Module Level 1](https://www.w3.org/TR/css-scroll-anim-1/)