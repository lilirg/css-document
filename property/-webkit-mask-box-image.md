# -webkit-mask-box-image

该属性指定 WebKit 浏览器中使用图像作为元素的遮罩边框（速记属性）。

## 语法

```css
-webkit-mask-box-image: [source] [slice] [width] [outset] [repeat]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 参见各个简写属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### source
遮罩图像源：
- `url()` - 图像 URL
- `none` - 无图像

### slice
图像切片值（1-4 个值）：
- 定义图像如何切割成 9 个区域

### width
边框宽度：
- 长度值或百分比

### outset
边框外扩：
- 长度值

### repeat
边框重复方式：
- `stretch` - 拉伸
- `repeat` - 重复
- `round` - 圆整
- `space` - 间距

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 类似于 `border-image`，但用于遮罩
- 现代开发中建议使用标准的 `mask-border` 属性

## 示例

```css
/* 使用图像作为遮罩边框 */
.element {
  -webkit-mask-box-image: url("mask.png") 30 stretch;
}

/* 完整语法 */
.element {
  -webkit-mask-box-image: url("mask.png") 30 30 30 30 / 10px 10px 10px 10px 0 stretch stretch;
}
```

## 使用场景

```css
/* 场景 1：装饰性边框遮罩 */
.decorated-box {
  -webkit-mask-box-image: url("border-mask.png") 30 stretch;
  width: 200px;
  height: 150px;
}

/* 场景 2：圆角边框效果 */
.rounded-border {
  -webkit-mask-box-image: url("rounded-mask.png") 20 / 10px stretch;
}

/* 场景 3：渐变边框遮罩 */
.gradient-border {
  -webkit-mask-box-image: linear-gradient(to right, transparent, black) 1 / 2px stretch;
}

/* 场景 4：卡片边框效果 */
.card {
  -webkit-mask-box-image: url("card-border.png") 25 round;
  padding: 20px;
}