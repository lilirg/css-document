# touch-action

该属性用于指定在触摸设备上如何处理元素的触摸操作。

## 语法

```css
touch-action: auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] | pinch-zoom ] | manipulation
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `auto`

允许浏览器处理所有触摸操作。

### `none`

禁用所有触摸操作。

### `pan-x`

允许水平平移。

### `pan-y`

允许垂直平移。

### `pan-left`

允许向左平移。

### `pan-right`

允许向右平移。

### `pan-up`

允许向上平移。

### `pan-down`

允许向下平移。

### `pinch-zoom`

允许双指缩放。

### `manipulation`

允许平移和缩放，禁用双击缩放。

## 注意

- 主要用于移动设备
- 与 CSS 变换配合使用
- 影响浏览器默认行为

## 示例

```css
/* 禁用所有触摸 */
.no-touch {
  touch-action: none;
}

/* 仅允许水平平移 */
.pan-x {
  touch-action: pan-x;
}

/* 仅允许垂直平移 */
.pan-y {
  touch-action: pan-y;
}

/* 允许平移和缩放 */
.pan-zoom {
  touch-action: pan-x pan-y pinch-zoom;
}

/* 仅允许操作 */
.manipulation {
  touch-action: manipulation;
}
```

```html
<!-- 触摸操作示例 -->
<div class="touch-element">触摸测试</div>
```

## 使用场景

```css
/* 禁用触摸 */
.no-touch-action {
  touch-action: none;
}

/* 仅水平滚动 */
.horizontal-scroll {
  touch-action: pan-x;
}

/* 仅垂直滚动 */
.vertical-scroll {
  touch-action: pan-y;
}

/* 双向滚动 */
.both-scroll {
  touch-action: pan-x pan-y;
}

/* 允许缩放 */
.allow-zoom {
  touch-action: pan-x pan-y pinch-zoom;
}

/* 优化点击 */
.optimized-click {
  touch-action: manipulation;
}

/* 自定义手势 */
.custom-gesture {
  touch-action: none;
}

/* 地图容器 */
.map-container {
  touch-action: pan-x pan-y pinch-zoom;
}

/* 图片画廊 */
.image-gallery {
  touch-action: pan-x;
}

/* 幻灯片 */
.slider {
  touch-action: pan-x;
}

/* 可滚动区域 */
.scrollable {
  touch-action: pan-y;
  overflow-y: auto;
}

/* 横向滚动 */
.horizontal-container {
  touch-action: pan-x;
  overflow-x: auto;
}

/* 禁止缩放 */
.no-zoom {
  touch-action: pan-x pan-y;
}

/* 仅允许平移 */
.only-pan {
  touch-action: pan-x pan-y;
}

/* 响应式触摸 */
.responsive-touch {
  touch-action: auto;
}

@media (pointer: coarse) {
  .responsive-touch {
    touch-action: manipulation;
  }
}

/* 动画容器 */
.animated-container {
  touch-action: none;
  animation: move 3s infinite;
}

@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

/* 画布元素 */
.canvas-element {
  touch-action: none;
}

/* 游戏界面 */
.game-ui {
  touch-action: none;
}

/* 绘图区域 */
.drawing-area {
  touch-action: none;
}

/* 视频播放器 */
.video-player {
  touch-action: pan-x pan-y;
}

/* 表格横向滚动 */
.table-scroll {
  touch-action: pan-x;
  overflow-x: auto;
}
