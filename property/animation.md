# animation

该属性是用于设置CSS动画属性的速记属性

* [`animation-name`](./animation-name.md)
* [`animation-duration`](./animation-duration.md)
* [`animation-timing-function`](./animation-timing-function.md)
* [`animation-delay`](./animation-delay.md)
* [`animation-iteration-count`](./animation-iteration-count.md)
* [`animation-direction`](./animation-direction.md)
* [`animation-fill-mode`](./animation-fill-mode.md)
* [`animation-play-state`](./animation-play-state.md)

## 语法

它采用一个或多个逗号分隔值，其中每个值使用手绘动画属性调用和控制 [`@keyframes`](../rule/keyframes.md) 动画。[`@keyframes`](../rule/keyframes.md) 规则定义实际的动画序列，并由动画属性控制。

- 定义一个动画
  ```css
  .el{
    animation: [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] [animation-fill-mode] [animation-play-state];
  }
  ```
- 定义两个动画
  ```css
  .el{
    animation: [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] [animation-fill-mode] [animation-play-state],
               [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] [animation-fill-mode] [animation-play-state];
  }
  ```

属性是空格分隔的，它们的顺序无关紧要，除非同时使用 `animation-duration` 和 `animation-delay`，它们需要按该顺序排列。因此，如果在定义中指定两个 `时间`值，则第一个值将被视为动画持续时间，第二个值将被视为动画延迟。

## 示例

```css
.el{
  animation: bounce .3s ease-in-out 1s infinite;
}

.el2{
  animation: shake .3s alternate,
             jump 1s cubic-bezier(.17,.67,.85,.06) alternate;
}
```

`animation: bounce .3s ease-in-out 1s infinite;`相当于

```css
.el{
  animation-name: bounce;
  animation-duration: .3s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
}
```
