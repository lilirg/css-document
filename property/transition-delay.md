# transition-delay

该属性指定过渡效果开始前的延迟时间。

## 语法

```css
transition-delay: <time>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0s`           |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<time>`

定义过渡效果开始前的延迟时间。

- 可以使用 `s`（秒）或 `ms`（毫秒）作为单位
- 正值：延迟指定时间后开始过渡
- 负值：过渡立即开始，但会从时间轴的指定位置开始（部分效果可能跳过）

## 注意

- 如果指定了多个过渡，每个过渡的延迟时间用逗号分隔
- 负延迟值会导致过渡立即开始，并从计算出的时间点开始播放
- 在 `transition` 速记属性中，如果同时指定了两个时间值，第一个是持续时间，第二个是延迟

## 示例

```css
/* 延迟 0.5 秒后开始过渡 */
.el {
  transition-delay: 0.5s;
}

/* 延迟 500 毫秒后开始过渡 */
.el2 {
  transition-delay: 500ms;
}

/* 负延迟：过渡立即开始，从 0.3 秒处开始 */
.el3 {
  transition-delay: -0.3s;
}

/* 多个过渡，不同的延迟时间 */
.el4 {
  transition: background-color 0.3s, transform 0.5s;
  transition-delay: 0.2s, 0.4s;
}

/* 使用速记属性 */
.el5 {
  transition: background-color 0.3s ease 0.5s;
  /* 0.3s 是持续时间，0.5s 是延迟 */
}
```

```html
<div class="el">延迟 0.5 秒</div>
<div class="el2">延迟 500 毫秒</div>
<div class="el3">负延迟 -0.3 秒</div>
<div class="el4">多个过渡</div>
<div class="el5">速记属性</div>
```

## 使用场景

```css
/* 悬停延迟效果 */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transition-delay: 0.1s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 离开时快速，进入时延迟 */
.tooltip {
  transition: opacity 0.2s ease;
  transition-delay: 0.3s;
}

.tooltip:hover {
  opacity: 1;
}
