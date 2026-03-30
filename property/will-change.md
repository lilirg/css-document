# will-change

该属性用于告知浏览器元素即将发生的变化，以便提前优化渲染性能。

## 语法

```css
will-change: auto | <animateable-feature>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 否             |

## 值

### `auto`

浏览器自动优化。

### `<animateable-feature>`

即将变化的属性：

- `scroll-position` - 滚动位置
- `contents` - 元素内容
- `<custom-ident>` - 自定义属性名

## 注意

- 不要过度使用
- 在变化前设置
- 变化后移除

## 示例

```css
/* 即将变换 */
.will-transform {
  will-change: transform;
}

/* 即将滚动 */
.will-scroll {
  will-change: scroll-position;
}

/* 即将改变内容 */
.will-contents {
  will-change: contents;
}
```

```html
<!-- 即将变化示例 -->
<div class="will-change-element">变化元素</div>
```

## 使用场景

```css
/* 变换优化 */
.transform-optimize {
  will-change: transform;
}

/* 透明度优化 */
.opacity-optimize {
  will-change: opacity;
}

/* 滚动优化 */
.scroll-optimize {
  will-change: scroll-position;
}

/* 内容优化 */
.contents-optimize {
  will-change: contents;
}

/* 多个属性 */
.multi-optimize {
  will-change: transform, opacity;
}

/* 悬停优化 */
.hover-optimize {
  will-change: transform, opacity;
  transition: transform 0.3s, opacity 0.3s;
}

.hover-optimize:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

/* 动画优化 */
.animation-optimize {
  will-change: transform;
  animation: move 2s infinite;
}

@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

/* 过渡优化 */
.transition-optimize {
  will-change: transform;
  transition: transform 0.5s ease;
}

/* 3D 变换优化 */
.transform-3d-optimize {
  will-change: transform;
  transform-style: preserve-3d;
}

/* 卡片悬停 */
.card-hover {
  will-change: transform;
  transition: transform 0.3s;
}

.card-hover:hover {
  transform: translateY(-10px);
}

/* 按钮悬停 */
.button-hover {
  will-change: transform;
  transition: transform 0.2s;
}

.button-hover:hover {
  transform: scale(1.05);
}

/* 加载动画 */
.loading-optimize {
  will-change: transform;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

/* 淡入动画 */
.fade-in {
  will-change: opacity;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 淡出动画 */
.fade-out {
  will-change: opacity;
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* 缩放动画 */
.scale-animation {
  will-change: transform;
  animation: scale 1s infinite;
}

@keyframes scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* 旋转动画 */
.rotate-animation {
  will-change: transform;
  animation: rotate 2s infinite;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

/* 平移动画 */
.translate-animation {
  will-change: transform;
  animation: translate 2s infinite;
}

@keyframes translate {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(100px); }
}

/* 组合动画 */
.combined-animation {
  will-change: transform, opacity;
  animation: combined 2s infinite;
}

@keyframes combined {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

/* 模态框 */
.modal {
  will-change: transform, opacity;
  transition: transform 0.3s, opacity 0.3s;
}

.modal.show {
  transform: scale(1);
  opacity: 1;
}

/* 下拉菜单 */
.dropdown {
  will-change: transform;
  transition: transform 0.3s;
}

.dropdown.open {
  transform: translateY(0);
}

/* 侧边栏 */
.sidebar {
  will-change: transform;
  transition: transform 0.3s;
}

.sidebar.open {
  transform: translateX(0);
}

/* 轮播图 */
.carousel {
  will-change: transform;
  transition: transform 0.5s;
}

/* 视差滚动 */
.parallax {
  will-change: transform;
}

/* 固定定位优化 */
.fixed-optimize {
  will-change: transform;
  position: fixed;
}

/* 响应式优化 */
.responsive-optimize {
  will-change: auto;
}

@media (min-width: 768px) {
  .responsive-optimize {
    will-change: transform;
  }
}

/* 性能提示 */
.performance-hint {
  will-change: transform;
}

/* 移除优化 */
.remove-optimize {
  will-change: auto;
}

/* 自动优化 */
.auto-optimize {
  will-change: auto;
}
