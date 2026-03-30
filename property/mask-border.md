# mask-border

该属性用于设置元素遮罩边框的所有属性（图像、切片、宽度、外扩、重复）的速记属性。

## 语法

```css
mask-border: <mask-border-source> || <mask-border-slice> [ / <mask-border-width> ]? || <mask-border-outset> || <mask-border-repeat> || <mask-border-mode>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各属性初始值 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 取决于各组成部分 |

## 值

### mask-border-source
遮罩边框图像：
- `none` - 无图像
- `<image>` - 图像 URL

### mask-border-slice
图像切片：
- `<number>` - 像素值
- `<percentage>` - 百分比值

### mask-border-width
边框宽度：
- `<number>` - 倍数
- `<length>` - 具体长度
- `auto` - 自动

### mask-border-outset
边框外扩：
- `<length>` - 外扩距离

### mask-border-repeat
重复方式：
- `stretch` - 拉伸
- `repeat` - 重复
- `round` - 圆整
- `space` - 间距

### mask-border-mode
遮罩模式：
- `alpha` - Alpha 通道
- `luminance` - 亮度值

## 注意
- 速记属性会重置所有未指定的遮罩边框属性为其初始值
- 可以使用 `mask-border-image-source`, `mask-border-slice`, `mask-border-width`, `mask-border-outset`, `mask-border-repeat`, `mask-border-mode` 分别设置
- 遮罩边框图像通常是一个九宫格图像
- 切片值定义图像的边界

## 示例

```css
/* 基本用法 */
.box {
  mask-border: url('mask-border.png') 30;
}

/* 指定切片和宽度 */
.box {
  mask-border: url('mask-border.png') 30 / 10px;
}

/* 指定重复方式 */
.box {
  mask-border: url('mask-border.png') 30 / 10px / 2 stretch;
}

/* 使用 Alpha 模式 */
.box {
  mask-border: url('mask-border.png') 30 / 10px / 2 stretch alpha;
}

/* 无图像 */
.box {
  mask-border: none;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩边框内容</div>
```

## 使用场景

```css
/* 1. 简单遮罩边框 */
.simple-border {
  mask-border: url('border.png') 30;
}

/* 2. 带宽度的遮罩边框 */
.width-border {
  mask-border: url('border.png') 30 / 10px;
}

/* 3. 拉伸模式 */
.stretch-border {
  mask-border: url('border.png') 30 / 10px / 2 stretch;
}

/* 4. 重复模式 */
.repeat-border {
  mask-border: url('border.png') 30 / 10px / 2 repeat;
}

/* 5. 圆整模式 */
.round-border {
  mask-border: url('border.png') 30 / 10px / 2 round;
}

/* 6. 间距模式 */
.space-border {
  mask-border: url('border.png') 30 / 10px / 2 space;
}

/* 7. Alpha 模式 */
.alpha-border {
  mask-border: url('border.png') 30 / 10px / 2 stretch alpha;
}

/* 8. 亮度模式 */
.luminance-border {
  mask-border: url('border.png') 30 / 10px / 2 stretch luminance;
}
