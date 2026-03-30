# animation-duration

该属性指定动画完成一个播放周期所需的时间。

## 语法

```css
animation-duration: <time>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0s`           |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<time>`

定义动画播放周期所需的时间长度。

- 可以使用 `s`（秒）或 `ms`（毫秒）作为单位
- 值不能为负数
- 如果值为 `0`，则不会显示动画效果

## 注意

- 如果指定了多个动画，每个动画的持续时间用逗号分隔
- 持续时间必须大于 0 才能看到动画效果
- 较短的持续时间会使动画播放得更快

## 示例

```css
/* 动画持续 2 秒 */
.el {
  animation-duration: 2s;
}

/* 动画持续 500 毫秒 */
.el2 {
  animation-duration: 500ms;
}

/* 动画持续 1.5 秒（支持小数） */
.el3 {
  animation-duration: 1.5s;
}

/* 多个动画，不同的持续时间 */
.el4 {
  animation-name: slide, fade;
  animation-duration: 2s, 3s;
}
```

```html
<div class="el">2 秒动画</div>
<div class="el2">500 毫秒动画</div>
<div class="el3">1.5 秒动画</div>
<div class="el4">多个动画</div>
