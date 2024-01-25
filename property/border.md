# border

定义`<box>`边框样式的速记属性，用来定义四个`<box>`四个边的宽度、颜色、样式。

这是一个历史悠久的属性，它的兼容性非常好。

不同于`margin`和`padding`，`border`不会为四个边设置不同的值，如有不同的值，必须创建其他`border`的属性。

该属性可以接受一个、两个或三个参数作为值，省略的值将设置为其初始值。

## 语法


```css
.el{
  border: <line-width> || <line-style> || <color>
}
```
| 语法特性     | 说明                  |
| :----------- | --------------------- |
| 默认值       | `0 none currentColor` |
| 适用HTML元素 | 所有元素              |
| 动画         | `width`、`color`      |

## 属性值

- <line-width>:边框宽度
- <line-style>：边框样式
- <color>：边框颜色

## 示例

```css
.element {
    border: 1em; /* 边框style和color都被设置为默认值 */
    /* 或者 */
    border: solid orange; /* 边框宽度被设置为默认值 0,这意味着没有边框 */
    /* 或者 */
    border: 1px dotted #eee;
    /* 或者 */
    border: 5px solid teal;
}
```
