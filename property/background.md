# background

该属性是用于设置CSS背景属性的速记属性。

这是一个历史悠久的属性，它的兼容性非常好。

就像其他背景属性一样，它可以采用多个逗号分隔的值，其中每个值对应于一个背景层。

如：
```css
.el{
  background: [ <bg-layer> , ]* <final-bg-layer>
}
```
每个背景层定义了 `background-image`, `background-color`, `background-position`, `background-size`, `background-repeat`, `background-origin`, `background-clip` 和 `background-attachment` 属性。

- `background-image`：设置背景图像。
- `background-color`：设置背景颜色。
- `background-position`：设置背景图像的位置。
- `background-size`：设置背景图像的大小。
- `background-repeat`：设置背景图像的重复方式。
- `background-origin`：设置背景图像的定位原点。
- `background-clip`：设置背景图像的裁剪区域。
- `background-attachment`：设置背景图像是否固定或者随着页面的其余部分滚动。

最后，`final-bg-layer` 是最后一个背景层，它可以设置 `background-color` 和 `background-image`，但不能设置其他属性。

注意，如果我们只在`background`中仅设置了一个背景属性，而不是全部的，我们在设置多个层时，会重置这个属性。

注意，背景颜色只能在最后一个背景图层上定义，因为整个元素只有一种背景颜色。

## 语法

```css
.el{
  background: [ <bg-layer> , ]* <final-bg-layer>
}
```

- 层定义：
  <bg-layer> = <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2}
- 默认层定义：
  <final-bg-layer> = <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2} || <'background-color'>

各属性默认值

- `background-image: none`
- `background-position: 0% 0%`
- `background-size: auto auto`
- `background-repeat: repeat`
- `background-origin: padding-box`
- `background-clip: border-box`
- `background-attachment: scroll`
- `background-color: transparent`

适用于：所有元素

只有`background-color`、`background-position`和`background-size`支持动画

## 值

- <'background-image'>：设置背景图像。
- <'background-position'>: 设置背景图像的位置。
- <'background-size'>: 设置背景图像的大小。
- <'background-repeat'>: 设置背景图像的重复方式。
- <'background-origin'>: 设置背景图像的定位原点。
- <'background-clip'>: 设置背景图像的裁剪区域。
- <'background-attachment'>: 设置背景图像是否固定或者随着页面的其余部分滚动。
- <'background-color'>: 设置背景颜色。

注意：各个背景属性的值可以被打乱（重新排序）。唯一的要求是必须在 `background-position` 属性之后指定 `background-size` 属性，并且必须用“`/`”字符分隔它们。除非还指定了背景位置，否则不能在速记属性中指定背景大小，否则声明无效。


## 示例

```css
/* 单层背景 */
.el{
  background: url('bg.jpg') no-repeat center center / cover;
}

/* 多层背景 */
.el{
  background: url('bg1.jpg') no-repeat center center / cover,
              url('bg2.jpg') no-repeat top left / 50% 50%,
              linear-gradient(to bottom, #f00, #0f0);
}

/* 多层背景，颜色在最后 */
.el{
  background: url('bg1.jpg') no-repeat center center / cover,
              url('bg2.jpg') no-repeat top left / 50% 50%,
              linear-gradient(to bottom, #f00, #0f0),
              #000;
}
```

