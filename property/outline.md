# outline

该属性是轮廓的速记属性，用于设置元素周围的线条。

## 语法

```css
outline: <outline-color> || <outline-style> || <outline-width>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 各属性的初始值 |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### 组成部分

| 属性 | 说明 |
| :--- | :--- |
| `outline-color` | 轮廓颜色 |
| `outline-style` | 轮廓样式 |
| `outline-width` | 轮廓宽度 |

### 样式值

| 值 | 说明 |
| :--- | :--- |
| `none` | 无轮廓 |
| `solid` | 实线 |
| `dashed` | 虚线 |
| `dotted` | 点线 |
| `double` | 双线 |
| `groove` | 凹槽 |
| `ridge` | 脊线 |
| `inset` | 内嵌 |
| `outset` | 外凸 |

## 注意

- 轮廓不占用空间，不影响布局
- 轮廓绘制在边框之外
- 常用于焦点状态
- 与 `border` 不同，轮廓不占据文档流空间

## 示例

```css
/* 基本轮廓 */
.el1 {
  outline: 2px solid blue;
}

/* 虚线轮廓 */
.el2 {
  outline: 2px dashed red;
}

/* 点线轮廓 */
.el3 {
  outline: 2px dotted green;
}

/* 无轮廓 */
.el4 {
  outline: none;
}
```

```html
<!-- 轮廓示例 -->
<button class="outline-button">按钮</button>
<div class="outline-box">盒子</div>
```

## 使用场景

```css
/* 焦点轮廓 */
input:focus,
button:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}

/* 自定义焦点 */
.custom-focus {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}

/* 移除轮廓 */
.no-outline {
  outline: none;
}

/* 虚线轮廓 */
.dashed-outline {
  outline: 2px dashed #666;
}

/* 点线轮廓 */
.dotted-outline {
  outline: 2px dotted #666;
}

/* 双线轮廓 */
.double-outline {
  outline: 4px double #666;
}

/* 凹槽轮廓 */
.groove-outline {
  outline: 4px groove #666;
}

/* 脊线轮廓 */
.ridge-outline {
  outline: 4px ridge #666;
}

/* 内嵌轮廓 */
.inset-outline {
  outline: 4px inset #666;
}

/* 外凸轮廓 */
.outset-outline {
  outline: 4px outset #666;
}

/* 悬停轮廓 */
.hover-outline {
  outline: none;
  transition: outline 0.3s;
}

.hover-outline:hover {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* 激活轮廓 */
.active-outline {
  outline: 3px solid #00cc66;
  outline-offset: -2px;
}

/* 响应式轮廓 */
.responsive-outline {
  outline: 2px solid blue;
}

@media (max-width: 768px) {
  .responsive-outline {
    outline: 3px solid blue;
  }
}

/* 动画轮廓 */
.animated-outline {
  outline: 2px solid blue;
  animation: outlineChange 3s infinite;
}

@keyframes outlineChange {
  0%, 100% { outline: 2px solid blue; }
  50% { outline: 2px solid red; }
}

/* 可访问性焦点 */
.accessible-focus {
  outline: 3px solid #ffcc00;
  outline-offset: 2px;
}

/* 错误状态 */
.error-outline {
  outline: 2px solid red;
  outline-offset: 2px;
}

/* 成功状态 */
.success-outline {
  outline: 2px solid green;
  outline-offset: 2px;
}
