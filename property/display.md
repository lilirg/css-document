# display

这是一个最具传奇性的属性，他没有波澜壮阔的故事，但是他似乎无所不能，他可以让你在页面上挥斥方遒，也可以让你的努力付之东流。🤣

页面上所有的元素都是一个矩形的 `box`，而 `display`属性就是用来控制这个矩形的外观和行为的。

CSS中有两个主要的 `box`格式：`inline`和 `block`。

**Inline** 盒子，也可称之为“内联元素”、行内元素，在一个自然的行中“流动”，其宽度随内容的多少而变化，高度和宽度都由内容决定。比如：`<span>`、`<em>`、`<img>`等。这些元素是行的一部分，不会导致“行”的换行。

他们有自己的 `padding`和 `margin`，可以设置上下左右的内边距和外边距，但是不能有真正的 `width`和 `height`，通过CSS定义的 `width`和 `height`属性不会影响元素尺寸。

同时设置 `padding`和 `margin`时，真正生效的只是文本流的方向(左右方向)的设置，垂直方向(上下)的并没有被接受。

如果希望能够设置一个*内联元素*的宽高内外边距，可以扩展 `inline`,把这个值设置为 `inline-block`。

**Block** 盒子，也可称之为“块级元素”、块元素，在一个自然的块中“堆叠”，占据明确的空间，换行显示（独占一行）。比如：`<div>`、`<p>`、`<h1>`等。这些元素是块的组成部分，会导致“行”的换行。

**None** 是隐藏元素，元素不会显示，也不会占据空间，从文档“流”中消失移除。相较于之前描述的两个值，这个值的概念更加特殊，他不是简单的看不见（那种效果，我们应该使用[`visibility:hidden;`](./visibility.md)来隐藏元素），`display:none`是没有产生任何可视相关的信息，没有颜色、尺寸、位置等信息，是完全消失了。如果一个元素的 `display`从 `none`变成其他值，会触发浏览器回流，重新渲染，这会导致页面的渲染效率下降。这样的开销并非不可接受，可以根据实际业务取舍。

除此之外，CSS3还引入了一些新的 `display`属性值，比如 `flex`、`grid`、`table`等。

**注意**  你可能在某些互联网教程中见过 `display:run-in;`这个属性，这个属性的作用是将一行内的多个元素显示为一个块级元素，但是这个属性已经被废弃了，因为它不符合W3C的标准。`

**注意**  `position`、`float`会影响 `display`属性的效果，具体请参考[w3c的相关文档](https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo)。**这部分可以说是CSS最复杂却最有用的部分，也是CSS的精髓所在。**

## 语法

```css
.el{
  display: inline | block | list-item | inline-block | run-in | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | none | inherit
}
```

| 语法特性     | 说明     |
| :----------- | :------- |
| 默认值       | inline   |
| 适用HTML元素 | 所有元素 |
| 动画         | 不支持   |

默认情况下，大多数浏览器都有所谓“用户代理样式表”，就是我们常说的浏览器默认样式，这是一个特定于浏览器的样式表。大多数用户代理样式表会对特定元素覆盖CSS的默认值，尤其是一些HTML5的新元素，如：`header`、`footer`等。

## 属性值

- `none`：将元素隐藏，元素不会显示，也不会占据空间，从文档“流”中消失移除。
- `inline`：将元素显示为行内元素，元素前后没有换行符，元素的宽度随内容的多少而变化，高度和宽度都由内容决定。
- `inline-block`：将元素显示为内联块级元素，元素前后没有换行符，元素的宽度随内容的多少而变化，高度和宽度都由内容决定。
- `block`：将元素显示为块级元素，元素前后有换行符，元素占据明确的空间，换行显示（独占一行）。
- `list-item`：将元素显示为列表项，元素前后有换行符，元素的宽度随内容的多少而变化，高度和宽度都由内容决定。
- ~~`run-in`：将元素显示为内联块级元素，元素前后没有换行符，元素的宽度随内容的多少而变化，高度和宽度都由内容决定。~~
- `table`：将元素显示为表格，元素的宽度和高度都由内容决定。
- `inline-table`：将元素显示为内联表格，元素的宽度和高度都由内容决定。
- `table-row-group`：将元素显示为表格行组，元素的宽度和高度都由内容决定。
- `table-header-group`：将元素显示为表格标题组，元素的宽度和高度都由内容决定。
- `table-footer-group`：将元素显示为表格脚注组，元素的宽度和高度都由内容决定。
- `table-row`：将元素显示为表格行，元素的宽度和高度都由内容决定。
- `table-column-group`：将元素显示为表格列组，元素的宽度和高度都由内容决定。
- `table-column`：将元素显示为表格列，元素的宽度和高度都由内容决定。
- `table-cell`：将元素显示为表格单元格，元素的宽度和高度都由内容决定。
- `table-caption`：将元素显示为表格标题，元素的宽度和高度都由内容决定。
- `inherit`：继承父元素的 `display` 属性值。
- `initial`：恢复为默认值。
- `flex`：将元素显示为弹性盒子，可以进行布局。
- `inline-flex`：将元素显示为内联弹性盒子，可以进行布局。
- `grid`：将元素显示为网格，可以进行布局。
- `inline-grid`：将元素显示为内联网格，可以进行布局。

## 示例

```css
img {
    display: block;
}

div {
    display: inline-block;
}

.element {
    display: inline;
}

.removed {
    display: none;
}

.container {
    display: table;
}

.child {
    display: table-cell;
    vertical-align: middle;
}
```
