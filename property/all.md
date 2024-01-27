# all

该属性是一个速记属性，可用于重置元素上的所有 CSS 属性，但 `direction` 和 `unicode-bidi` 除外。

它可用于将属性重置为其初始值，或强制这些属性从级联继承其值。

## 语法

```css
all: inherit | initial | unset
```

| 语法特性     | 说明     |
| :----------- | :------- |
| 默认值       | -        |
| 适用HTML元素 | 所有元素 |
| 动画         | -        |

## 值

### inherit

`direction` 和 `unicode-bidi` 之外属性均设置为默认值

### initial

`direction` 和 `unicode-bidi` 之外属性均设置为继承父级

### unset

这个值实际上是对应了 `initial`，可以清除 `initial` 带来的继承

## 示例

示例中，`.element` 的 `all` 属性设置为 `inherit`, 其余属性均被重置为默认值。

```css
.element {
  padding: 1em;
  background-color: #222;
  color: #fff;
  all: inherit;
}
```

```html
<div class="container">
  <div class="element">
    <p>This is the child container.</p>
    <p>lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, quos, quas, repellat, quod, natus, debitis, expedita, obcaecati, dolorum, quaerat, quasi, repudiandae, sapiente.</p>
  </div>
</div>
```
