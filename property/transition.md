# transition

该属性是用于设置 CSS 过渡属性的速记属性。

* [`transition-property`](./transition-property.md)
* [`transition-duration`](./transition-duration.md)
* [`transition-timing-function`](./transition-timing-function.md)
* [`transition-delay`](./transition-delay.md)

## 语法

```css
transition: <transition>#
```

其中 `<transition>` 定义为：

```css
<transition> = <transition-property> || <transition-duration> || <transition-timing-function> || <transition-delay>
```

可以指定多个过渡，用逗号分隔：

```css
transition: <transition>, <transition>, ...
```

## 各属性说明

- `transition-property`：指定应用过渡的 CSS 属性名称
- `transition-duration`：指定过渡效果完成所需的时间
- `transition-timing-function`：指定过渡的速度曲线
- `transition-delay`：指定过渡开始前的延迟时间

## 默认值

- `transition-property: all`
- `transition-duration: 0s`
- `transition-timing-function: ease`
- `transition-delay: 0s`

## 注意

- 如果指定了多个过渡，每个过渡的属性用逗号分隔
- 如果 `transition-duration` 和 `transition-delay` 都是时间值，第一个值被视为持续时间，第二个值被视为延迟
- 如果 `transition-property` 为 `none`，其他属性将被忽略

## 示例

```css
/* 简单的过渡效果 */
.el {
  transition: all 0.3s ease;
}

/* 指定特定属性的过渡 */
.el2 {
  transition: background-color 0.5s, transform 0.3s;
}

/* 带延迟的过渡 */
.el3 {
  transition: opacity 0.5s ease 0.2s;
}

/* 多个过渡效果 */
.el4 {
  transition: 
    background-color 0.3s ease,
    transform 0.5s ease-in-out,
    opacity 0.2s linear 0.1s;
}

/* 无过渡 */
.el5 {
  transition: none;
}
```

```html
<div class="el">所有属性过渡</div>
<div class="el2">特定属性过渡</div>
<div class="el3">带延迟过渡</div>
<div class="el4">多个过渡</div>
<div class="el5">无过渡</div>
```

## 使用场景

```css
/* 鼠标悬停效果 */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* 焦点状态过渡 */
.input {
  border: 1px solid #ccc;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}
