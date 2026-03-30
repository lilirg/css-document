# transition-timing-function

该属性指定过渡效果的速度曲线。

## 语法

```css
transition-timing-function: function
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `ease` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### linear
线性速度，过渡以恒定速度进行。

### ease
缓动效果（默认值），开始慢，中间快，结束慢。

### ease-in
渐入效果，开始慢，然后加速。

### ease-out
渐出效果，开始快，然后减速。

### ease-in-out
渐入渐出效果，开始慢，中间快，结束慢。

### cubic-bezier(x1, y1, x2, y2)
自定义贝塞尔曲线：
- x1, x2 必须在 0 到 1 之间
- y1, y2 可以是任何值

### steps(number, direction)
阶梯函数，将过渡分成若干步。

## 注意
- 贝塞尔曲线的 x 值必须在 0 到 1 之间
- 可以使用在线工具生成自定义贝塞尔曲线
- `steps()` 函数的第二个参数可以是 `start` 或 `end`
- 可以指定多个时间函数，用逗号分隔

## 示例

```css
/* 基本用法 */
.box {
  transition-timing-function: ease;
  transition-duration: 0.3s;
}

/* 线性过渡 */
.linear {
  transition-timing-function: linear;
}

/* 自定义贝塞尔曲线 */
.custom {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 阶梯效果 */
.stepped {
  transition-timing-function: steps(5, end);
}
```

```html
<!-- HTML 示例 -->
<div class="box">悬停我</div>
```

## 使用场景

```css
/* 1. 按钮点击效果 - 使用 ease-out */
.btn {
  transition-timing-function: ease-out;
  transition-duration: 0.2s;
}
.btn:active {
  transform: scale(0.95);
}

/* 2. 卡片悬停 - 使用 ease-in-out */
.card {
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}

/* 3. 弹跳效果 - 使用自定义贝塞尔曲线 */
.bounce {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-duration: 0.5s;
}

/* 4. 加载动画 - 使用线性 */
.spinner {
  transition-timing-function: linear;
  animation: rotate 1s infinite;
}

/* 5. 阶梯式进度 */
.progress {
  transition-timing-function: steps(10, end);
  transition-duration: 1s;
}

/* 6. 缓入效果 - 用于淡入 */
.fade-in {
  transition-timing-function: ease-in;
  transition-duration: 0.4s;
}
