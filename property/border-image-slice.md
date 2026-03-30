# border-image-slice

该属性指定用于切割边框图像的切片位置。

## 语法

```css
border-image-slice: <number> | <percentage> | fill [ <number> | <percentage> | fill ]{1,3}
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `10`           |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<number>`

定义从图像边缘向内切割的像素值。

### `<percentage>`

定义相对于图像宽度和高度的百分比。

### `fill`

保留图像的中间部分，不填充边框中间区域。

### 多值语法

可以指定 1 到 4 个值，分别设置不同边的切片：

```css
border-image-slice: 30;              /* 所有边 */
border-image-slice: 30 20;          /* 上下，左右 */
border-image-slice: 30 20 10;       /* 上，左右，下 */
border-image-slice: 30 20 10 40;    /* 上，右，下，左 */
```

## 注意

- 值表示从图像边缘向内切割的距离
- 如果切片值大于图像尺寸，图像会被缩放
- 中间部分默认用于填充元素背景，使用 `fill` 可保留

## 示例

```css
/* 单值 - 所有边相同 */
.el1 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  padding: 20px;
}

/* 双值 - 上下和左右 */
.el2 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30 20;
  padding: 20px;
}

/* 三值 - 上、左右、下 */
.el3 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30 20 10;
  padding: 20px;
}

/* 四值 - 上、右、下、左 */
.el4 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30 20 10 40;
  padding: 20px;
}

/* 使用百分比 */
.el5 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 33% 25% 17% 50%;
  padding: 20px;
}

/* 使用 fill 保留中间 */
.el6 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30 fill;
  padding: 20px;
}

/* 大切片值 */
.el7 {
  border: 50px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 50;
  padding: 20px;
}
```

```html
<div class="el1">30</div>
<div class="el2">30 20</div>
<div class="el3">30 20 10</div>
<div class="el4">30 20 10 40</div>
<div class="el5">百分比</div>
<div class="el6">fill</div>
<div class="el7">50</div>
```

## 使用场景

```css
/* 九宫格边框 - 标准切片 */
.nine-grid-border {
  border: 30px solid transparent;
  border-image-source: url('images/nine-grid.png');
  border-image-slice: 30;
  padding: 20px;
}

/* 不对称边框切片 */
.asymmetric-border {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 40 20 30 25;
  padding: 20px;
}

/* 保留中间内容的边框 */
.fill-border {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30 fill;
  padding: 20px;
}

/* 小切片边框 */
.small-slice {
  border: 20px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 10;
  padding: 20px;
}

/* 大切片边框 */
.large-slice {
  border: 60px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 60;
  padding: 20px;
}

/* 百分比切片 - 响应式 */
.percentage-slice {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 25% 25% 25% 25%;
  padding: 20px;
}

/* 卡片边框 */
.card-border {
  border: 25px solid transparent;
  border-image-source: url('images/card-border.png');
  border-image-slice: 25;
  padding: 20px;
  border-radius: 12px;
}

/* 按钮边框 */
.btn-border {
  border: 15px solid transparent;
  border-image-source: url('images/btn-border.png');
  border-image-slice: 15;
  padding: 10px 20px;
}

/* 图片画廊边框 */
.gallery-border {
  border: 40px solid transparent;
  border-image-source: url('images/gallery-border.png');
  border-image-slice: 40 fill;
  padding: 20px;
}

/* 动态切片（配合动画） */
.animated-slice {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  padding: 20px;
  animation: sliceChange 3s infinite;
}

@keyframes sliceChange {
  0%, 100% { border-image-slice: 30; }
  50% { border-image-slice: 50; }
}
