# animation-fill-mode

该属性指定动画在播放前后如何应用样式。

## 语法

```css
animation-fill-mode: none | forwards | backwards | both
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `none`

默认值。动画在播放前后不应用任何样式。动画结束后，元素恢复到动画开始前的状态。

### `forwards`

动画结束后，元素保持动画结束时的状态（即最后一个关键帧的样式）。

### `backwards`

在动画延迟期间，元素应用第一个关键帧的样式。

### `both`

同时应用 `forwards` 和 `backwards` 的效果。动画延迟期间应用第一个关键帧的样式，动画结束后保持最后一个关键帧的样式。

## 注意

- 如果指定了多个动画，每个动画的填充模式用逗号分隔
- `forwards` 常用于让动画效果在结束后保持
- `backwards` 常用于确保延迟期间元素有正确的初始状态

## 示例

```css
/* 不应用填充模式 */
.el {
  animation-fill-mode: none;
}

/* 保持结束状态 */
.el2 {
  animation-fill-mode: forwards;
}

/* 延迟期间应用开始状态 */
.el3 {
  animation-fill-mode: backwards;
  animation-delay: 2s;
}

/* 同时应用开始和结束状态 */
.el4 {
  animation-fill-mode: both;
  animation-delay: 1s;
}

/* 多个动画，不同的填充模式 */
.el5 {
  animation-name: slide, fade;
  animation-fill-mode: forwards, both;
}
```

```html
<div class="el">none</div>
<div class="el2">forwards</div>
<div class="el3">backwards</div>
<div class="el4">both</div>
<div class="el5">多个动画</div>
