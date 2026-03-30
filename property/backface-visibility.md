# backface-visibility

该属性设置元素旋转时是否可见其背面。

## 语法

```css
backface-visibility: visible | hidden
```

| 语法特性       | 说明      |
| :------------- | :-------- |
| 初始值         | `visible` |
| 适用 HTML 元素 | 所有元素  |
| 动画           | 是        |

## 值

### `visible`

默认值。元素的背面可见。

### `hidden`

元素的背面不可见。

## 注意

- 该属性通常与 `transform` 配合使用
- 当元素旋转 180 度时，背面会朝向用户
- 隐藏背面可以提高性能
- 常用于 3D 翻转效果

## 示例

```css
/* 背面可见 */
.el1 {
  backface-visibility: visible;
  transform: rotateY(180deg);
}

/* 背面隐藏 */
.el2 {
  backface-visibility: hidden;
  transform: rotateY(180deg);
}
```

```html
<!-- 卡片翻转示例 -->
<div class="card">
  <div class="front">正面</div>
  <div class="back">背面</div>
</div>
```

## 使用场景

```css
/* 卡片翻转 */
.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover {
  transform: rotateY(180deg);
}

.card .front,
.card .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card .back {
  transform: rotateY(180deg);
}

/* 3D 立方体 */
.cube {
  transform-style: preserve-3d;
}

.cube .face {
  backface-visibility: hidden;
}

/* 翻转按钮 */
.flip-button {
  backface-visibility: hidden;
  transform: rotateY(0deg);
  transition: transform 0.3s;
}

.flip-button:hover {
  transform: rotateY(180deg);
}

/* 图片翻转画廊 */
.gallery-item {
  backface-visibility: hidden;
  transform: rotateY(0deg);
  transition: transform 0.5s;
}

.gallery-item:hover {
  transform: rotateY(180deg);
}

/* 3D 文字翻转 */
.flip-text {
  backface-visibility: hidden;
  transform: rotateY(0deg);
  animation: textFlip 3s infinite;
}

@keyframes textFlip {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

/* 响应式翻转 */
.responsive-flip {
  backface-visibility: hidden;
}

@media (min-width: 768px) {
  .responsive-flip {
    backface-visibility: visible;
  }
}

/* 性能优化 */
.performance-optimized {
  backface-visibility: hidden;
  transform: translateZ(0);
}
