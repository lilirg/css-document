# border-image-width

该属性指定边框图像的宽度。

## 语法

```css
border-image-width: <number> | <length> | auto | <number> | <length> | auto [ <number> | <length> | auto ]{1,3}
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `1`            |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<number>`

无单位数字，表示边框图像宽度相对于 `border-image-slice` 切割出的边框区域宽度的倍数。

### `<length>`

具体长度值，如 `10px`、`2em` 等。

### `auto`

使用 `border-image-slice` 的值作为边框图像宽度。

### 多值语法

可以指定 1 到 4 个值，分别设置不同边的宽度：

```css
border-image-width: 1;              /* 所有边 */
border-image-width: 1 2;            /* 上下，左右 */
border-image-width: 1 2 3;          /* 上，左右，下 */
border-image-width: 1 2 3 4;        /* 上，右，下，左 */
```

## 注意

- 默认值为 `1`，表示使用切片区域的完整宽度
- 值大于 `1` 会使边框图像向外扩展
- 值小于 `1` 会使边框图像向内收缩

## 示例

```css
/* 单值 - 所有边相同 */
.el1 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1;
  padding: 20px;
}

/* 双值 - 上下和左右 */
.el2 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1 2;
  padding: 20px;
}

/* 三值 - 上、左右、下 */
.el3 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1 2 3;
  padding: 20px;
}

/* 四值 - 上、右、下、左 */
.el4 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1 2 3 4;
  padding: 20px;
}

/* 使用 auto */
.el5 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: auto;
  padding: 20px;
}

/* 使用长度值 */
.el6 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 20px;
  padding: 20px;
}

/* 大于 1 的值 - 向外扩展 */
.el7 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 2;
  padding: 20px;
}

/* 小于 1 的值 - 向内收缩 */
.el8 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 0.5;
  padding: 20px;
}
```

```html
<div class="el1">1</div>
<div class="el2">1 2</div>
<div class="el3">1 2 3</div>
<div class="el4">1 2 3 4</div>
<div class="el5">auto</div>
<div class="el6">20px</div>
<div class="el7">2</div>
<div class="el8">0.5</div>
```

## 使用场景

```css
/* 标准边框宽度 */
.standard-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1;
  padding: 20px;
}

/* 加粗边框 */
.thick-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 2;
  padding: 20px;
}

/* 细边框 */
.thin-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 0.5;
  padding: 20px;
}

/* 不对称边框宽度 */
.asymmetric-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1 2 1 2;
  padding: 20px;
}

/* 顶部加粗边框 */
.top-thick {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 2 1 1 1;
  padding: 20px;
}

/* 使用 auto 自动适配 */
.auto-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: auto;
  padding: 20px;
}

/* 使用像素值 */
.pixel-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 15px;
  padding: 20px;
}

/* 卡片边框 */
.card-width {
  border: 25px solid transparent;
  border-image-source: url('images/card-border.png');
  border-image-slice: 25;
  border-image-width: 1;
  padding: 20px;
  border-radius: 12px;
}

/* 按钮边框 */
.btn-width {
  border: 15px solid transparent;
  border-image-source: url('images/btn-border.png');
  border-image-slice: 15;
  border-image-width: 1;
  padding: 10px 20px;
}

/* 动态宽度（配合动画） */
.animated-width {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-width: 1;
  padding: 20px;
  animation: widthChange 3s infinite;
}

@keyframes widthChange {
  0%, 100% { border-image-width: 1; }
  50% { border-image-width: 2; }
}
