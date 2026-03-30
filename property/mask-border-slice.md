# mask-border-slice

该属性用于定义遮罩边框图像的切片区域，将图像分割为九个区域。

## 语法

```css
mask-border-slice: <number> | <percentage>{1,4} | fill
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### number
数字值（无单位）：
- 表示图像尺寸的百分比
- 范围：0 到 100
- 例如：`30` 表示 30%

### percentage
百分比值：
- 表示图像尺寸的百分比
- 范围：0% 到 100%
- 例如：`30%`

### fill
填充模式：
- 中心区域作为填充
- 默认情况下中心区域被丢弃

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边使用相同切片值 |
| 2 个值 | 上下使用第一个值，左右使用第二个值 |
| 3 个值 | 上、左右、下分别使用对应值 |
| 4 个值 | 上、右、下、左分别使用对应值（顺时针） |

## 注意
- 切片值定义图像的边界区域
- 四个角区域不会被拉伸
- 边区域会根据 `mask-border-repeat` 设置进行拉伸或重复
- 中心区域默认被丢弃，除非使用 `fill`
- 切片值过大可能导致区域重叠

## 示例

```css
/* 1 个值 - 所有边相同 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
}

/* 2 个值 - 上下 / 左右 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30 20;
}

/* 3 个值 - 上 / 左右 / 下 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30 20 10;
}

/* 4 个值 - 上 / 右 / 下 / 左 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30 20 10 15;
}

/* 使用百分比 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 25%;
}

/* 使用 fill */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30 fill;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩边框内容</div>
```

## 使用场景

```css
/* 1. 对称切片 */
.symmetric-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
}

/* 2. 不对称切片 */
.asymmetric-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 40 20 30 25;
  mask-border-width: 10px;
}

/* 3. 百分比切片 */
.percentage-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 25%;
  mask-border-width: 10px;
}

/* 4. 带填充的切片 */
.fill-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30 fill;
  mask-border-width: 10px;
}

/* 5. 小切片值 */
.small-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 10;
  mask-border-width: 5px;
}

/* 6. 大切片值 */
.large-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 50;
  mask-border-width: 20px;
}

/* 7. 水平切片大于垂直 */
.horizontal-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 20 40;
  mask-border-width: 10px;
}

/* 8. 垂直切片大于水平 */
.vertical-slice {
  mask-border-image-source: url('border.png');
  mask-border-slice: 40 20;
  mask-border-width: 10px;
}
