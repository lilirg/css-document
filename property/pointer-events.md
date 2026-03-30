# pointer-events

该属性设置元素是否响应鼠标事件。

## 语法

```css
pointer-events: auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### HTML 元素常用值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 默认值。元素响应鼠标事件 |
| `none` | 元素不响应鼠标事件，事件穿透到下方元素 |

### SVG 元素专用值

| 值 | 说明 |
| :--- | :--- |
| `visiblePainted` | 仅可见且填充/描边区域响应事件 |
| `visibleFill` | 仅可见且填充区域响应事件 |
| `visibleStroke` | 仅可见且描边区域响应事件 |
| `visible` | 仅可见区域响应事件 |
| `painted` | 填充/描边区域响应事件 |
| `fill` | 填充区域响应事件 |
| `stroke` | 描边区域响应事件 |
| `all` | 所有区域响应事件 |

## 注意

- 该属性常用于禁用元素交互
- `none` 值使元素"透明"于鼠标事件
- 子元素可以重新启用事件响应
- 不影响键盘事件

## 示例

```css
/* 响应事件 */
.el1 {
  pointer-events: auto;
}

/* 不响应事件 */
.el2 {
  pointer-events: none;
}
```

```html
<!-- 指针事件示例 -->
<div class="interactive">可交互</div>
<div class="non-interactive">不可交互</div>
```

## 使用场景

```css
/* 禁用按钮 */
.disabled-button {
  pointer-events: none;
  opacity: 0.5;
}

/* 加载状态 */
.loading {
  pointer-events: none;
}

/* 遮罩层 */
.overlay {
  pointer-events: none;
}

.overlay .interactive {
  pointer-events: auto;
}

/* 图片画廊 */
.gallery-image {
  pointer-events: none;
}

.gallery-image:hover {
  pointer-events: auto;
}

/* 工具提示 */
.tooltip {
  pointer-events: none;
}

/* 背景元素 */
.background-element {
  pointer-events: none;
}

/* 水印 */
.watermark {
  pointer-events: none;
  position: absolute;
  opacity: 0.3;
}

/* 模态框内容 */
.modal-content {
  pointer-events: auto;
}

.modal-overlay {
  pointer-events: none;
}

/* 卡片悬停 */
.card {
  pointer-events: none;
}

.card:hover {
  pointer-events: auto;
}

/* 响应式指针 */
.responsive-pointer {
  pointer-events: auto;
}

@media (max-width: 768px) {
  .responsive-pointer {
    pointer-events: none;
  }
}

/* 动画指针 */
.animated-pointer {
  pointer-events: auto;
  animation: pointerChange 3s infinite;
}

@keyframes pointerChange {
  0%, 100% { pointer-events: auto; }
  50% { pointer-events: none; }
}

/* 可访问性焦点 */
.accessible-element {
  pointer-events: auto;
}

/* 错误状态 */
.error-state {
  pointer-events: none;
}

/* 成功状态 */
.success-state {
  pointer-events: auto;
}

/* 只读输入 */
.readonly-input {
  pointer-events: none;
}

/* 隐藏元素 */
.hidden-element {
  pointer-events: none;
  visibility: hidden;
}

/* 占位符 */
.placeholder {
  pointer-events: none;
  position: absolute;
}
