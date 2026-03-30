# mask-position

该属性用于设置遮罩图像的起始位置。

## 语法

```css
mask-position: <position>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0% 0%` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### 关键字位置
- `center` - 中心（等同于 `50% 50%`）
- `top` - 顶部（等同于 `50% 0%`）
- `bottom` - 底部（等同于 `50% 100%`）
- `left` - 左侧（等同于 `0% 50%`）
- `right` - 右侧（等同于 `100% 50%`）

### 长度值
- `<length>` - 具体长度值（如 `10px`, `2em`）
- `<percentage>` - 百分比值（如 `25%`, `50%`）

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 第一个值为水平位置，垂直位置为 `50%` |
| 2 个值 | 第一个值为水平位置，第二个值为垂直位置 |

### 位置计算
- 第一个值：水平位置（0% = 左，50% = 中，100% = 右）
- 第二个值：垂直位置（0% = 上，50% = 中，100% = 下）

## 注意
- 该属性通常与 `mask-image` 配合使用
- 可以设置多个值对应多个遮罩图像
- 位置是相对于元素内容区域计算的
- 可以使用负值将图像移出可见区域

## 示例

```css
/* 中心位置 */
.box {
  mask-image: url('mask.png');
  mask-position: center;
}

/* 左上角 */
.box {
  mask-image: url('mask.png');
  mask-position: 0% 0%;
}

/* 右下角 */
.box {
  mask-image: url('mask.png');
  mask-position: 100% 100%;
}

/* 具体位置 */
.box {
  mask-image: url('mask.png');
  mask-position: 50px 100px;
}

/* 百分比位置 */
.box {
  mask-image: url('mask.png');
  mask-position: 25% 75%;
}

/* 混合关键字和百分比 */
.box {
  mask-image: url('mask.png');
  mask-position: left center;
}

/* 负值位置 */
.box {
  mask-image: url('mask.png');
  mask-position: -50px -50px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 中心对齐遮罩 */
.center-mask {
  mask-image: url('mask.png');
  mask-position: center;
  mask-repeat: no-repeat;
}

/* 2. 左上角遮罩 */
.top-left-mask {
  mask-image: url('mask.png');
  mask-position: top left;
}

/* 3. 右下角遮罩 */
.bottom-right-mask {
  mask-image: url('mask.png');
  mask-position: bottom right;
}

/* 4. 水平居中遮罩 */
.horizontal-center {
  mask-image: url('mask.png');
  mask-position: center top;
}

/* 5. 垂直居中遮罩 */
.vertical-center {
  mask-image: url('mask.png');
  mask-position: left center;
}

/* 6. 偏移遮罩 */
.offset-mask {
  mask-image: url('mask.png');
  mask-position: 20px 40px;
}

/* 7. 多图像不同位置 */
.multi-mask {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-position: 
    top left,
    bottom right;
}

/* 8. 动画遮罩位置 */
.animated-mask {
  mask-image: url('mask.png');
  mask-position: 0% 0%;
  animation: moveMask 3s infinite;
}

@keyframes moveMask {
  0% { mask-position: 0% 0%; }
  100% { mask-position: 100% 100%; }
}
