# transition-timing-function

该属性指定过渡效果的速度曲线（缓动函数）。

## 语法

```css
transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) | steps(<number>[, <step-position>])
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `ease`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 预定义缓动函数

| 值 | 说明 |
|------|------|
| `ease` | 默认值。慢 - 快 - 慢（`cubic-bezier(0.25, 0.1, 0.25, 1.0)`） |
| `linear` | 匀速（`cubic-bezier(0.0, 0.0, 1.0, 1.0)`） |
| `ease-in` | 慢 - 快（`cubic-bezier(0.42, 0.0, 1.0, 1.0)`） |
| `ease-out` | 快 - 慢（`cubic-bezier(0.0, 0.0, 0.58, 1.0)`） |
| `ease-in-out` | 慢 - 快 - 慢（`cubic-bezier(0.42, 0.0, 0.58, 1.0)`） |

### `cubic-bezier()`

自定义贝塞尔曲线。

- 需要四个参数，都是 0 到 1 之间的值
- 前两个参数定义控制点 P1，后两个参数定义控制点 P2
- 例如：`cubic-bezier(0.68, -0.55, 0.265, 1.55)` 可以创建弹跳效果

### `steps()`

阶梯函数，将过渡分成若干步。

- 第一个参数：步数（正整数）
- 第二个参数（可选）：步进方向
  - `start`：在每步开始时应用值
  - `end`：在每步结束时应用值（默认）
  - `jump-start`：在第一步开始时立即应用
  - `jump-end`：在最后一步结束时立即应用
  - `jump-none`：不在任何步跳跃（默认）
  - `jump-both`：在第一步和最后一步都跳跃

## 注意

- 如果指定了多个过渡，每个过渡的缓动函数用逗号分隔
- 缓动函数影响过渡的速度，但不影响总时长

## 示例

```css
/* 预定义缓动函数 */
.el {
  transition-timing-function: ease;
}

.el2 {
  transition-timing-function: linear;
}

.el3 {
  transition-timing-function: ease-in;
}

.el4 {
  transition-timing-function: ease-out;
}

.el5 {
  transition-timing-function: ease-in-out;
}

/* 自定义贝塞尔曲线 */
.el6 {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 阶梯函数 */
.el7 {
  transition-timing-function: steps(5);
}

.el8 {
  transition-timing-function: steps(5, start);
}

/* 多个过渡，不同的缓动函数 */
.el9 {
  transition: 
    background-color 0.3s ease,
    transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

```html
<div class="el">ease</div>
<div class="el2">linear</div>
<div class="el3">ease-in</div>
<div class="el4">ease-out</div>
<div class="el5">ease-in-out</div>
<div class="el6">cubic-bezier</div>
<div class="el7">steps(5)</div>
<div class="el8">steps(5, start)</div>
<div class="el9">多个过渡</div>
```

## 使用场景

```css
/* 按钮悬停 - 使用 ease-out 让结束更平滑 */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-out, transform 0.2s ease-out;
}

.button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* 卡片悬停 - 使用 ease-in-out 让开始和结束都平滑 */
.card {
  transition: box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

/* 弹跳效果 - 使用自定义贝塞尔曲线 */
.bounce {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.bounce:hover {
  transform: translateY(-10px);
}

/* 阶梯效果 - 用于数字计数等 */
.counter {
  transition: font-size 1s steps(10);
}
