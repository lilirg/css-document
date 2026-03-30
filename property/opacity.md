# opacity

该属性设置元素的透明度。

## 语法

```css
opacity: <alpha-value>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `1`            |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<alpha-value>`

透明度值，范围从 `0` 到 `1`：
- `0` - 完全透明（不可见）
- `0.5` - 半透明
- `1` - 完全不透明（默认）

也可以使用百分比：
- `0%` - 完全透明
- `50%` - 半透明
- `100%` - 完全不透明

## 注意

- 该属性影响元素及其所有子元素
- 与 `background-color` 的 `rgba()` 不同，后者只影响背景
- 创建新的堆叠上下文
- 常用于淡入淡出动画

## 示例

```css
/* 完全透明 */
.el1 {
  opacity: 0;
}

/* 半透明 */
.el2 {
  opacity: 0.5;
}

/* 完全不透明 */
.el3 {
  opacity: 1;
}

/* 百分比 */
.el4 {
  opacity: 50%;
}
```

```html
<!-- 透明度示例 -->
<div class="opaque">不透明</div>
<div class="semi-transparent">半透明</div>
<div class="transparent">透明</div>
```

## 使用场景

```css
/* 淡入效果 */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* 淡出效果 */
.fade-out {
  opacity: 1;
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  to { opacity: 0; }
}

/* 悬停淡出 */
.hover-fade {
  opacity: 1;
  transition: opacity 0.3s;
}

.hover-fade:hover {
  opacity: 0.5;
}

/* 禁用状态 */
.disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* 加载状态 */
.loading {
  opacity: 0.7;
}

/* 模态框背景 */
.modal-overlay {
  opacity: 0.5;
  background: black;
  position: fixed;
}

/* 图片画廊 */
.gallery-item {
  opacity: 1;
  transition: opacity 0.3s;
}

.gallery-item:hover {
  opacity: 0.8;
}

/* 焦点高亮 */
.focused {
  opacity: 1;
}

.unfocused {
  opacity: 0.5;
}

/* 视差滚动 */
.parallax {
  opacity: 0.8;
}

/* 响应式透明度 */
.responsive-opacity {
  opacity: 1;
}

@media (max-width: 768px) {
  .responsive-opacity {
    opacity: 0.8;
  }
}

/* 动画透明度 */
.animated-opacity {
  opacity: 1;
  animation: opacityChange 3s infinite;
}

@keyframes opacityChange {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* 渐变透明度 */
.gradient-opacity {
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.5));
}

/* 卡片阴影 */
.card-shadow {
  opacity: 0.8;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* 工具提示 */
.tooltip {
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip.show {
  opacity: 1;
}
