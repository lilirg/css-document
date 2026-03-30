# transform-style

该属性指定子元素是否保留其 3D 变换。

## 语法

```css
transform-style: flat | preserve-3d
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `flat`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `flat`

子元素在父元素的平面上渲染。

### `preserve-3d`

子元素保留其 3D 变换。

## 注意

- 用于 3D 变换场景
- 与 `transform` 配合使用
- 与 `perspective` 配合使用

## 示例

```css
/* 保留 3D */
.preserve {
  transform-style: preserve-3d;
}

/* 平面渲染 */
.flat {
  transform-style: flat;
}
```

```html
<!-- 变换样式示例 -->
<div class="container">
  <div class="child">子元素</div>
</div>
```

## 使用场景

```css
/* 3D 容器 */
.container-3d {
  transform-style: preserve-3d;
}

/* 立方体 */
.cube {
  transform-style: preserve-3d;
  width: 100px;
  height: 100px;
}

.cube-face {
  position: absolute;
  width: 100px;
  height: 100px;
}

/* 立方体正面 */
.face-front {
  transform: translateZ(50px);
}

/* 立方体背面 */
.face-back {
  transform: rotateY(180deg) translateZ(50px);
}

/* 立方体左侧 */
.face-left {
  transform: rotateY(-90deg) translateZ(50px);
}

/* 立方体右侧 */
.face-right {
  transform: rotateY(90deg) translateZ(50px);
}

/* 立方体顶部 */
.face-top {
  transform: rotateX(90deg) translateZ(50px);
}

/* 立方体底部 */
.face-bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

/* 旋转立方体动画 */
.cube-spin {
  transform-style: preserve-3d;
  animation: spin 5s infinite linear;
}

@keyframes spin {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

/* 3D 卡片翻转 */
.card-flip {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-flip.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  backface-visibility: hidden;
  position: absolute;
}

.card-back {
  transform: rotateY(180deg);
}

/* 3D 场景 */
.scene {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* 3D 对象 */
.object-3d {
  transform-style: preserve-3d;
}

/* 层叠上下文 */
.stacking-context {
  transform-style: preserve-3d;
  transform: translateZ(0);
}

/* 3D 导航 */
.nav-3d {
  transform-style: preserve-3d;
}

.nav-item {
  transform: translateZ(50px);
}

/* 3D 菜单 */
.menu-3d {
  transform-style: preserve-3d;
}

.menu-item {
  transform: translateZ(20px);
}

/* 3D 轮播 */
.carousel-3d {
  transform-style: preserve-3d;
}

.carousel-item {
  transform: translateZ(100px);
}

/* 3D 画廊 */
.gallery-3d {
  transform-style: preserve-3d;
}

.gallery-item {
  transform: translateZ(50px);
}

/* 3D 时间线 */
.timeline-3d {
  transform-style: preserve-3d;
}

.timeline-item {
  transform: translateZ(30px);
}

/* 3D 列表 */
.list-3d {
  transform-style: preserve-3d;
}

.list-item {
  transform: translateZ(20px);
}

/* 3D 网格 */
.grid-3d {
  transform-style: preserve-3d;
}

.grid-cell {
  transform: translateZ(10px);
}

/* 3D 表格 */
.table-3d {
  transform-style: preserve-3d;
}

.table-row {
  transform: translateZ(5px);
}

/* 响应式 3D */
.responsive-3d {
  transform-style: flat;
}

@media (min-width: 768px) {
  .responsive-3d {
    transform-style: preserve-3d;
  }
}

/* 性能优化 */
.performance-optimized {
  transform-style: preserve-3d;
  will-change: transform;
}
