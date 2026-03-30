# animation-iteration-count

该属性指定动画播放的次数。

## 语法

```css
animation-iteration-count: <number> | infinite
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `1`            |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<number>`

定义动画播放的次数。

- 可以是正整数（如 `1`、`2`、`3`）
- 也可以是小数（如 `2.5` 表示播放 2 次半）
- 值不能为负数或零

### `infinite`

动画无限次循环播放。

## 注意

- 如果指定了多个动画，每个动画的迭代次数用逗号分隔
- 默认值为 `1`，即只播放一次
- 使用 `infinite` 时，通常需要配合 `animation-play-state` 来控制播放和暂停

## 示例

```css
/* 播放一次（默认值） */
.el {
  animation-iteration-count: 1;
}

/* 播放 3 次 */
.el2 {
  animation-iteration-count: 3;
}

/* 播放 2.5 次 */
.el3 {
  animation-iteration-count: 2.5;
}

/* 无限循环播放 */
.el4 {
  animation-iteration-count: infinite;
}

/* 多个动画，不同的迭代次数 */
.el5 {
  animation-name: slide, fade;
  animation-iteration-count: 3, infinite;
}
```

```html
<div class="el">播放 1 次</div>
<div class="el2">播放 3 次</div>
<div class="el3">播放 2.5 次</div>
<div class="el4">无限循环</div>
<div class="el5">多个动画</div>
