# visibility

该属性设置元素的可见性。

## 语法

```css
visibility: visible | hidden | collapse
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `visible`      |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `visible`

元素可见。

### `hidden`

元素隐藏，但保留空间。

### `collapse`

用于表格元素，移除表格行/列。

## 注意

- 与 `display: none` 不同
- 隐藏元素仍占据空间
- 子元素可以覆盖父元素的可见性

## 示例

```css
/* 可见 */
.visible {
  visibility: visible;
}

/* 隐藏 */
.hidden {
  visibility: hidden;
}

/* 表格行 */
.table-row {
  visibility: collapse;
}
```

```html
<!-- 可见性示例 -->
<div class="visible">可见元素</div>
<div class="hidden">隐藏元素</div>
```

## 使用场景

```css
/* 可见元素 */
.visible-element {
  visibility: visible;
}

/* 隐藏元素 */
.hidden-element {
  visibility: hidden;
}

/* 隐藏但保留空间 */
.hidden-space {
  visibility: hidden;
}

/* 显示元素 */
.show-element {
  visibility: visible;
}

/* 切换可见性 */
.toggle-visibility {
  visibility: hidden;
}

.toggle-visibility.active {
  visibility: visible;
}

/* 悬停显示 */
.hover-visible {
  visibility: hidden;
}

.hover-visible:hover {
  visibility: visible;
}

/* 工具提示 */
.tooltip {
  visibility: hidden;
  position: absolute;
}

.tooltip.show {
  visibility: visible;
}

/* 下拉菜单 */
.dropdown-menu {
  visibility: hidden;
}

.dropdown-menu.open {
  visibility: visible;
}

/* 模态框 */
.modal {
  visibility: hidden;
  position: fixed;
}

.modal.show {
  visibility: visible;
}

/* 加载状态 */
.loading {
  visibility: hidden;
}

.loading.loaded {
  visibility: visible;
}

/* 表格行隐藏 */
.table-row-hidden {
  visibility: collapse;
}

/* 表格列隐藏 */
.table-col-hidden {
  visibility: collapse;
}

/* 动画可见性 */
.animated-visibility {
  visibility: hidden;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to { visibility: visible; }
}

/* 淡入淡出 */
.fade-visibility {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
}

.fade-visibility.show {
  visibility: visible;
  opacity: 1;
}

/* 条件显示 */
.conditionally-visible {
  visibility: hidden;
}

.conditionally-visible.visible {
  visibility: visible;
}

/* 响应式可见性 */
.responsive-visibility {
  visibility: visible;
}

@media (max-width: 768px) {
  .responsive-visibility {
    visibility: hidden;
  }
}

/* 打印可见性 */
.print-visible {
  visibility: hidden;
}

@media print {
  .print-visible {
    visibility: visible;
  }
}

/* 打印隐藏 */
.print-hidden {
  visibility: visible;
}

@media print {
  .print-hidden {
    visibility: hidden;
  }
}

/* 焦点可见性 */
.focus-visible {
  visibility: hidden;
}

.focus-visible:focus {
  visibility: visible;
}

/* 激活可见性 */
.active-visible {
  visibility: hidden;
}

.active-visible:active {
  visibility: visible;
}

/* 禁用状态 */
.disabled {
  visibility: hidden;
}

.disabled.enabled {
  visibility: visible;
}

/* 错误状态 */
.error {
  visibility: hidden;
}

.error.show {
  visibility: visible;
}

/* 成功状态 */
.success {
  visibility: hidden;
}

.success.show {
  visibility: visible;
}

/* 警告状态 */
.warning {
  visibility: hidden;
}

.warning.show {
  visibility: visible;
}

/* 信息状态 */
.info {
  visibility: hidden;
}

.info.show {
  visibility: visible;
}

/* 通知 */
.notification {
  visibility: hidden;
  position: fixed;
}

.notification.show {
  visibility: visible;
}

/* 进度条 */
.progress-bar {
  visibility: hidden;
}

.progress-bar.active {
  visibility: visible;
}

/* 加载指示器 */
.loading-indicator {
  visibility: hidden;
}

.loading-indicator.loading {
  visibility: visible;
}

/* 骨架屏 */
.skeleton {
  visibility: hidden;
}

.skeleton.loaded {
  visibility: visible;
}

/* 占位符 */
.placeholder {
  visibility: hidden;
}

.placeholder.show {
  visibility: visible;
}
