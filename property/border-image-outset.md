# border-image-outset

该属性指定边框图像向外延伸的距离。

## 语法

```css
border-image-outset: <length> | <number> | <length> | <number> [ <length> | <number> ]{1,3}
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<number>`

无单位数字，表示边框图像相对于边框盒向外延伸的倍数。

### `<length>`

具体长度值，如 `10px`、`2em` 等。

### 多值语法

可以指定 1 到 4 个值，分别设置不同边的外扩：

```css
border-image-outset: 10px;          /* 所有边 */
border-image-outset: 10px 20px;     /* 上下，左右 */
border-image-outset: 10px 20px 30px;  /* 上，左右，下 */
border-image-outset: 10px 20px 30px 40px;  /* 上，右，下，左 */
```

## 注意

- 默认值为 `0`，表示不向外延伸
- 值可以为负数，使边框图像向内收缩
- 外扩部分不会影响元素的布局尺寸

## 示例

```css
/* 单值 - 所有边相同 */
.el1 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 10px;
  padding: 20px;
}

/* 双值 - 上下和左右 */
.el2 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 10px 20px;
  padding: 20px;
}

/* 三值 - 上、左右、下 */
.el3 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 10px 20px 30px;
  padding: 20px;
}

/* 四值 - 上、右、下、左 */
.el4 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 10px 20px 30px 40px;
  padding: 20px;
}

/* 使用数字值 */
.el5 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 0.5;
  padding: 20px;
}

/* 零外扩 */
.el6 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 0;
  padding: 20px;
}

/* 负外扩 - 向内收缩 */
.el7 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: -5px;
  padding: 20px;
}
```

```html
<div class="el1">10px</div>
<div class="el2">10px 20px</div>
<div class="el3">10px 20px 30px</div>
<div class="el4">10px 20px 30px 40px</div>
<div class="el5">0.5</div>
<div class="el6">0</div>
<div class="el7">-5px</div>
```

## 使用场景

```css
/* 标准外扩 */
.standard-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 5px;
  padding: 20px;
}

/* 大外扩 */
.large-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 15px;
  padding: 20px;
}

/* 小外扩 */
.small-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 2px;
  padding: 20px;
}

/* 不对称外扩 */
.asymmetric-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 5px 10px 5px 10px;
  padding: 20px;
}

/* 顶部外扩 */
.top-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 10px 0 0 0;
  padding: 20px;
}

/* 无外扩 */
.no-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 0;
  padding: 20px;
}

/* 向内收缩 */
.inset-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: -5px;
  padding: 20px;
}

/* 卡片边框 */
.card-outset {
  border: 25px solid transparent;
  border-image-source: url('images/card-border.png');
  border-image-slice: 25;
  border-image-outset: 5px;
  padding: 20px;
  border-radius: 12px;
}

/* 按钮边框 */
.btn-outset {
  border: 15px solid transparent;
  border-image-source: url('images/btn-border.png');
  border-image-slice: 15;
  border-image-outset: 3px;
  padding: 10px 20px;
}

/* 动态外扩（配合动画） */
.animated-outset {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-outset: 5px;
  padding: 20px;
  animation: outsetChange 3s infinite;
}

@keyframes outsetChange {
  0%, 100% { border-image-outset: 5px; }
  50% { border-image-outset: 15px; }
}
