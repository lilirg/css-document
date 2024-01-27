# color

用于设置文本的颜色，也可以用于设置 `text-decoration` 对文本修饰的颜色。

这是一个历史悠久的属性，它的兼容性非常好。

这个属性接受的颜色，可以是半透明的，甚至是全透明的，但不能是渐变，因为渐变属于`<image>`数据类型。

元素自身和继承`color`属性的子元素可以通过`currentColor`关键字来继承父元素的颜色。这个值，可以用于其他接受`<color>`数据类型的属性。

另外值得注意的是：

- `alt`属性的文本，会继承父元素的颜色。
- 列表项（`li`）的标记或项目符号、数字标记，会继承父元素的颜色。
- 如果`currentColor`被应用于`color`,将被视为：`color: inherit`,浏览器认为这个属性的值继承于父级元素的设置。

## 语法

```css
.el{
  color: <color>
}
```
| 语法特性     | 说明                                                      |
| :----------- | :-------------------------------------------------------- |
| 默认值       | 初始值由浏览器定义。在大多数浏览器中，它被设置为“black”。 |
| 适用HTML元素 | 所有元素                                                  |
| 动画         | 是                                                          |

## 属性值

参考[数据类型`<color>`](../data-type/lt_color_gt.md)

## 示例
```css
.el{
  color: deepPink;                /* color keyword */
  color: #fff;                    /* 3-letter hexadecimal notation */
  color: #f5f5f5;                 /* hexadecimal notation */
  color: rgba(0,0,0);             /* rgba() notation */
  color: rgba(0,0,0,0.5);         /* sets text color to a translucent black color */
  color: hsl(200, 50%, 80%);      /* hsl() notation */
  color: hsla(140, 30%, 50%, 0.4);/* translucent color */
}
```
