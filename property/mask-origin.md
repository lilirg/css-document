# mask-origin

该属性用于设置遮罩图像的定位原点，即遮罩位置相对于哪个区域计算。

## 语法

```css
mask-origin: <box>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `border-box` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### border-box
相对于边框盒定位（默认值）：
- 遮罩位置从边框外边缘开始计算
- 包括边框区域

### padding-box
相对于内边距盒定位：
- 遮罩位置从内边距外边缘开始计算
- 不包括边框

### content-box
相对于内容盒定位：
- 遮罩位置从内容区域开始计算
- 不包括内边距和边框

### fill-box
相对于 SVG 填充边界框定位：
- 仅适用于 SVG 元素
- 使用填充边界框

### stroke-box
相对于 SVG 描边边界框定位：
- 仅适用于 SVG 元素
- 使用描边边界框

### view-box
相对于 SVG 视口定位：
- 仅适用于 SVG 元素
- 使用最近的视口

## 注意
- 该属性通常与 `mask-image` 和 `mask-position` 配合使用
- 可以设置多个值对应多个遮罩图像
- 与 `mask-clip` 配合使用可以精确控制遮罩效果
- SVG 相关的值仅适用于 SVG 元素

## 示例

```css
/* 相对于边框盒定位（默认） */
.box {
  mask-image: url('mask.png');
  mask-origin: border-box;
}

/* 相对于内边距盒定位 */
.box {
  mask-image: url('mask.png');
  mask-origin: padding-box;
}

/* 相对于内容盒定位 */
.box {
  mask-image: url('mask.png');
  mask-origin: content-box;
}

/* 配合位置使用 */
.box {
  mask-image: url('mask.png');
  mask-origin: padding-box;
  mask-position: center;
}

/* 多个遮罩不同原点 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-origin: border-box, padding-box;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 边框内遮罩 */
.border-origin {
  mask-image: url('mask.png');
  mask-origin: border-box;
  border: 10px solid #333;
}

/* 2. 内边距内遮罩 */
.padding-origin {
  mask-image: url('mask.png');
  mask-origin: padding-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 3. 内容区遮罩 */
.content-origin {
  mask-image: url('mask.png');
  mask-origin: content-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 4. 中心对齐遮罩 */
.center-origin {
  mask-image: url('mask.png');
  mask-origin: padding-box;
  mask-position: center;
  mask-size: cover;
}

/* 5. 多图层不同原点 */
.multi-origin {
  mask-image: 
    url('pattern.png'),
    url('gradient.png');
  mask-origin: content-box, padding-box;
}

/* 6. 带圆角遮罩 */
.rounded-origin {
  mask-image: url('mask.png');
  mask-origin: border-box;
  border-radius: 10px;
}

/* 7. SVG 元素遮罩 */
.svg-origin {
  mask-image: url('mask.svg');
  mask-origin: fill-box;
}

/* 8. 响应式遮罩原点 */
.responsive-origin {
  mask-image: url('mask.png');
  mask-origin: content-box;
}
@media (min-width: 768px) {
  .responsive-origin {
    mask-origin: padding-box;
  }
}
