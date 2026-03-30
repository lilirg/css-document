# transition-duration

该属性指定过渡效果完成所需的时间。

## 语法

```css
transition-duration: <time>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0s`           |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<time>`

定义过渡效果从开始到结束所需的时间长度。

- 可以使用 `s`（秒）或 `ms`（毫秒）作为单位
- 值不能为负数
- 如果值为 `0`（默认值），则不会显示过渡效果

## 注意

- 如果指定了多个过渡，每个过渡的持续时间用逗号分隔
- 持续时间必须大于 0 才能看到过渡效果
- 较短的持续时间会使过渡效果更快完成
- 在 `transition` 速记属性中，第一个时间值是持续时间

## 示例

```css
/* 过渡持续 0.3 秒 */
.el {
  transition-duration: 0.3s;
}

/* 过渡持续 500 毫秒 */
.el2 {
  transition-duration: 500ms;
}

/* 过渡持续 1 秒 */
.el3 {
  transition-duration: 1s;
}

/* 多个过渡，不同的持续时间 */
.el4 {
  transition: background-color 0.3s, transform 0.5s;
}

/* 使用速记属性 */
.el5 {
  transition: background-color 0.3s ease;
  /* 0.3s 是持续时间 */
}
```

```html
<div class="el">0.3 秒过渡</div>
<div class="el2">500 毫秒过渡</div>
<div class="el3">1 秒过渡</div>
<div class="el4">多个过渡</div>
<div class="el5">速记属性</div>
```

## 使用场景

```css
/* 按钮悬停效果 */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition-duration: 0.3s;
  transition-property: background-color, transform;
  transition-timing-function: ease;
}

.button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* 卡片悬停效果 */
.card {
  transition-duration: 0.4s;
  transition-property: box-shadow, transform;
}

.card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

/* 不同的过渡时间 */
.multi-transition {
  transition: 
    opacity 0.2s ease,
    transform 0.4s ease,
    background-color 0.6s ease;
}
