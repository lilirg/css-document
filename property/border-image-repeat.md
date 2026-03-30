# border-image-repeat

该属性指定边框图像在四个边的重复方式。

## 语法

```css
border-image-repeat: stretch | repeat | round | space [ stretch | repeat | round | space ]?
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `stretch`      |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `stretch`

拉伸图像以填充边框区域。这是默认值。

### `repeat`

重复图像以填充边框区域。如果图像不能完全填充，会裁剪多余部分。

### `round`

重复图像以填充边框区域。如果图像不能完全填充，会缩放图像以适应。

### `space`

重复图像以填充边框区域。如果图像不能完全填充，会在图像之间添加空白。

### 多值语法

可以指定 1 或 2 个值：

```css
border-image-repeat: stretch;           /* 所有边 */
border-image-repeat: stretch repeat;    /* 水平，垂直 */
```

## 注意

- 第一个值用于水平边（上、下）
- 第二个值用于垂直边（左、右）
- 如果只指定一个值，则应用于所有边

## 示例

```css
/* 拉伸 - 默认 */
.el1 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: stretch;
  padding: 20px;
}

/* 重复 */
.el2 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: repeat;
  padding: 20px;
}

/* 圆整 */
.el3 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: round;
  padding: 20px;
}

/* 空间 */
.el4 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: space;
  padding: 20px;
}

/* 水平拉伸，垂直重复 */
.el5 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: stretch repeat;
  padding: 20px;
}

/* 水平重复，垂直圆整 */
.el6 {
  border: 30px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  border-image-repeat: repeat round;
  padding: 20px;
}

/* 使用渐变 */
.el7 {
  border: 30px solid transparent;
  border-image-source: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  border-image-slice: 30;
  border-image-repeat: stretch;
  padding: 20px;
}
```

```html
<div class="el1">stretch</div>
<div class="el2">repeat</div>
<div class="el3">round</div>
<div class="el4">space</div>
<div class="el5">stretch repeat</div>
<div class="el6">repeat round</div>
<div class="el7">渐变</div>
```

## 使用场景

```css
/* 拉伸边框 - 适合渐变 */
.stretch-border {
  border: 30px solid transparent;
  border-image-source: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  border-image-slice: 30;
  border-image-repeat: stretch;
  padding: 20px;
  border-radius: 8px;
}

/* 重复边框 - 适合图案 */
.repeat-border {
  border: 30px solid transparent;
  border-image-source: url('images/pattern.png');
  border-image-slice: 30;
  border-image-repeat: repeat;
  padding: 20px;
}

/* 圆整边框 - 自动适配 */
.round-border {
  border: 30px solid transparent;
  border-image-source: url('images/pattern.png');
  border-image-slice: 30;
  border-image-repeat: round;
  padding: 20px;
}

/* 空间边框 - 留白效果 */
.space-border {
  border: 30px solid transparent;
  border-image-source: url('images/icon.png');
  border-image-slice: 30;
  border-image-repeat: space;
  padding: 20px;
}

/* 混合重复方式 */
.mixed-repeat {
  border: 30px solid transparent;
  border-image-source: url('images/pattern.png');
  border-image-slice: 30;
  border-image-repeat: stretch round;
  padding: 20px;
}

/* 卡片边框 */
.card-border {
  border: 25px solid transparent;
  border-image-source: linear-gradient(90deg, #6f42c1, #007bff);
  border-image-slice: 25;
  border-image-repeat: stretch;
  padding: 20px;
  border-radius: 12px;
}

/* 按钮边框 */
.btn-border {
  border: 15px solid transparent;
  border-image-source: linear-gradient(90deg, #28a745, #20c997);
  border-image-slice: 15;
  border-image-repeat: stretch;
  padding: 10px 20px;
  border-radius: 6px;
}

/* 图案边框 */
.pattern-border {
  border: 30px solid transparent;
  border-image-source: url('images/dot-pattern.png');
  border-image-slice: 30;
  border-image-repeat: round;
  padding: 20px;
}

/* 图标边框 */
.icon-border {
  border: 30px solid transparent;
  border-image-source: url('images/star.png');
  border-image-slice: 30;
  border-image-repeat: space;
  padding: 20px;
}

/* 渐变文字边框 */
.gradient-text {
  font-size: 48px;
  font-weight: bold;
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  border-image-slice: 3;
  border-image-repeat: stretch;
  -webkit-background-clip: text;
  background-clip: text;
}
