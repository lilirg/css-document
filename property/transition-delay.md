# transition-delay

该属性指定过渡效果开始前的延迟时间。

## 语法

```css
transition-delay: time
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0s` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### time
延迟时间：
- 时间值（如 `0s`, `200ms`, `1s`）
- 可以为负值（过渡立即开始，但已经进行了一部分）
- 默认值为 `0s`

## 注意
- 负延迟值会使过渡立即开始，但已经进行了一部分
- 可以指定多个延迟值，用逗号分隔，对应多个过渡属性
- 延迟值从元素属性变化时开始计算
- 如果元素在延迟期间属性再次变化，延迟会重新开始

## 示例

```css
/* 基本用法 - 延迟 0.5 秒 */
.box {
  transition-delay: 0.5s;
  transition-property: background-color;
  transition-duration: 0.3s;
}

/* 多个延迟值 */
.multi {
  transition-delay: 0.1s, 0.2s, 0.3s;
  transition-property: background-color, transform, opacity;
  transition-duration: 0.3s;
}

/* 负延迟 - 立即开始但已进行一部分 */
.negative {
  transition-delay: -0.2s;
}
```

```html
<!-- HTML 示例 -->
<div class="box">悬停我</div>
```

## 使用场景

```css
/* 1. 延迟显示的提示框 */
.tooltip {
  transition-delay: 0.3s;
  transition: opacity 0.2s ease;
}
.tooltip.show {
  opacity: 1;
}

/* 2. 级联动画效果 */
.item:nth-child(1) { transition-delay: 0s; }
.item:nth-child(2) { transition-delay: 0.1s; }
.item:nth-child(3) { transition-delay: 0.2s; }
.item:nth-child(4) { transition-delay: 0.3s; }

/* 3. 避免误触的按钮效果 */
.btn {
  transition-delay: 0.1s;
  transition: transform 0.1s ease;
}
.btn:active {
  transform: scale(0.95);
}

/* 4. 菜单项依次展开 */
.menu-item {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.menu-item:nth-child(1) { transition-delay: 0s; }
.menu-item:nth-child(2) { transition-delay: 0.05s; }
.menu-item:nth-child(3) { transition-delay: 0.1s; }
.menu-item:nth-child(4) { transition-delay: 0.15s; }

/* 5. 加载动画的延迟 */
.loader-dot {
  animation: bounce 0.6s infinite;
}
.loader-dot:nth-child(1) { animation-delay: 0s; }
.loader-dot:nth-child(2) { animation-delay: 0.15s; }
.loader-dot:nth-child(3) { animation-delay: 0.3s; }
