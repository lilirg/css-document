# animation-delay

该属性指定动画开始播放的延迟时间。

## 语法

```css
animation-delay: <time>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0s`           |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<time>`

定义动画开始播放前需要等待的时间。

- 可以使用 `s`（秒）或 `ms`（毫秒）作为单位
- 正值：延迟指定时间后开始播放
- 负值：动画立即开始，但会从时间轴的指定位置开始播放

## 注意

- 如果指定了多个动画，每个动画的延迟时间用逗号分隔
- 负延迟值会导致动画立即开始，并从计算出的时间点开始播放

## 示例

```css
/* 延迟 1 秒后开始播放 */
.el {
  animation-delay: 1s;
}

/* 延迟 500 毫秒后开始播放 */
.el2 {
  animation-delay: 500ms;
}

/* 负延迟：动画立即开始，从 2 秒处开始播放 */
.el3 {
  animation-delay: -2s;
}

/* 多个动画，不同的延迟时间 */
.el4 {
  animation-name: slide, fade;
  animation-duration: 2s, 3s;
  animation-delay: 1s, 0.5s;
}
```

```html
<div class="el">延迟 1 秒</div>
<div class="el2">延迟 500 毫秒</div>
<div class="el3">负延迟 -2 秒</div>
<div class="el4">多个动画</div>
