# backdrop-filter

该属性允许我们使用 CSS 将滤镜效果应用于元素z-轴之下的内容。

这个属性是定义滤镜属性的扩展，它使用`filter`相同的语法，但它只应用于元素的背景。

这种效果常见于`iOS7`以上版本的设备以及`OS X Yosemite`以上更高版本的设备界面中。如果没有这个属性，我们只有使用图片裁剪及js消耗大量性能来实现类似毛玻璃的效果。

需要注意的是：

- 该属性仅适用于元素的背景，因此它不会影响元素的边框或内容。
- 该属性只能应用于元素的背景，因此需要元素背景有半透明效果，否则不会显示效果。
- 该属性可能会对性能产生不利影响，尤其是在应用于大量元素或大面积元素时。

## 语法

```css
.el{
  backdrop-filter: none | <filter-function-list>
}
```

| 语法特性     | 说明                                                            |
| :----------- | --------------------------------------------------------------- |
| 默认值       | -                                                               |
| 适用HTML元素 | 所有元素，在SVG中，它适用于没有`<defs>`的容器元素和所有图形元素 |
| 动画         | 是                                                              |

## 值

- none: 不应用任何滤镜效果。
- `<filter-function-list>`: 一个或多个滤镜函数的列表，它们将应用于元素的背景。
  - blur()
  - brightness()
  - contrast()
  - grayscale()
  - hue-rotate()
  - invert()
  - opacity()
  - saturate()
  - sepia()
  - drop-shadow()
  - url()


## 示例

```css
.el{
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
}
```