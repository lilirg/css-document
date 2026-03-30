# animation-direction

该属性指定动画是否应该反向播放或在各交替循环中反向播放。

## 语法

```css
animation-direction: normal | reverse | alternate | alternate-reverse
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `normal`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `normal`

默认值。动画按正常方向播放（从 0% 到 100%）。每次循环都从开始到结束。

### `reverse`

动画反向播放（从 100% 到 0%）。每次循环都从结束到开始。

### `alternate`

动画交替播放。奇数次循环正常播放（0% 到 100%），偶数次循环反向播放（100% 到 0%）。

### `alternate-reverse`

动画交替反向播放。奇数次循环反向播放（100% 到 0%），偶数次循环正常播放（0% 到 100%）。

## 注意

- 如果指定了多个动画，每个动画的方向用逗号分隔
- `alternate` 和 `alternate-reverse` 在 `animation-iteration-count` 为 `infinite` 时效果最明显

## 示例

```css
/* 正常方向播放 */
.el {
  animation-direction: normal;
}

/* 反向播放 */
.el2 {
  animation-direction: reverse;
}

/* 交替播放：奇数次正向，偶数次反向 */
.el3 {
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

/* 交替反向播放：奇数次反向，偶数次正向 */
.el4 {
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}

/* 多个动画，不同的方向 */
.el5 {
  animation-name: slide, fade;
  animation-direction: normal, alternate;
}
```

```html
<div class="el">正常方向</div>
<div class="el2">反向播放</div>
<div class="el3">交替播放</div>
<div class="el4">交替反向</div>
<div class="el5">多个动画</div>
