# outline-offset

该属性设置轮廓与元素边框之间的间距。

## 语法

```css
outline-offset: <length>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `<length>`

轮廓与边框之间的距离：
- 正值：轮廓向外扩展
- 负值：轮廓向内收缩
- `0`：轮廓紧贴边框

## 注意

- 该属性是 `outline` 速记属性的一部分
- 轮廓不占用空间，不影响布局
- 常用于提高焦点状态的可访问性
- 负值可能导致轮廓被裁剪

## 示例

```css
/* 正偏移 */
.el1 {
  outline: 2px solid blue;
  outline-offset: 4px;
}

/* 零偏移 */
.el2 {
  outline: 2px solid blue;
  outline-offset: 0;
}

/* 负偏移 */
.el3 {
  outline: 2px solid blue;
  outline-offset: -2px;
}
```

```html
<!-- 轮廓偏移示例 -->
<button class="offset-button">按钮</button>
<div class="offset-box">盒子</div>
```

## 使用场景

```css
/* 焦点偏移 */
input:focus {
  outline: 2px solid blue;
  outline-offset: 4px;
}

/* 悬停偏移 */
.hover-offset {
  outline: 2px solid blue;
  outline-offset: 0;
  transition: outline-offset 0.3s;
}

.hover-offset:hover {
  outline-offset: 4px;
}

/* 可访问性焦点 */
.accessible-focus {
  outline: 3px solid #ffcc00;
  outline-offset: 2px;
}

/* 外部轮廓 */
.external-offset {
  outline: 2px solid red;
  outline-offset: 6px;
}

/* 内部轮廓 */
.internal-offset {
  outline: 2px solid red;
  outline-offset: -2px;
}

/* 大偏移 */
.large-offset {
  outline: 2px solid blue;
  outline-offset: 10px;
}

/* 小偏移 */
.small-offset {
  outline: 2px solid blue;
  outline-offset: 1px;
}

/* 响应式偏移 */
.responsive-offset {
  outline: 2px solid blue;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .responsive-offset {
    outline-offset: 4px;
  }
}

/* 动画偏移 */
.animated-offset {
  outline: 2px solid blue;
  outline-offset: 0;
  animation: offsetChange 3s infinite;
}

@keyframes offsetChange {
  0%, 100% { outline-offset: 0; }
  50% { outline-offset: 8px; }
}

/* 错误状态 */
.error-offset {
  outline: 2px solid red;
  outline-offset: 2px;
}

/* 成功状态 */
.success-offset {
  outline: 2px solid green;
  outline-offset: 2px;
}

/* 警告状态 */
.warning-offset {
  outline: 2px solid orange;
  outline-offset: 2px;
}

/* 卡片高亮 */
.card-highlight {
  outline: 2px solid #0066cc;
  outline-offset: 4px;
}

/* 按钮焦点 */
.button-focus {
  outline: 2px solid #0066cc;
  outline-offset: 3px;
}
