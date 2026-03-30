# mask-clip

该属性用于设置遮罩的裁剪区域，即遮罩应用于元素的哪个区域。

## 语法

```css
mask-clip: <box>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `border-box` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### border-box
裁剪到边框盒（默认值）：
- 遮罩应用于边框区域
- 包括边框本身

### padding-box
裁剪到内边距盒：
- 遮罩应用于内边距区域
- 不包括边框

### content-box
裁剪到内容盒：
- 遮罩应用于内容区域
- 不包括内边距和边框

### fill-box
裁剪到 SVG 填充边界框：
- 仅适用于 SVG 元素
- 使用填充边界框

### stroke-box
裁剪到 SVG 描边边界框：
- 仅适用于 SVG 元素
- 使用描边边界框

### view-box
裁剪到 SVG 视口：
- 仅适用于 SVG 元素
- 使用最近的视口

### no-clip
不裁剪：
- 遮罩可以超出元素边界
- 允许遮罩溢出

## 注意
- 该属性通常与 `mask-image` 配合使用
- 可以设置多个值对应多个遮罩图像
- SVG 相关的值（`fill-box`, `stroke-box`, `view-box`）仅适用于 SVG 元素
- `no-clip` 允许遮罩超出元素边界

## 示例

```css
/* 裁剪到边框盒（默认） */
.box {
  mask-image: url('mask.png');
  mask-clip: border-box;
}

/* 裁剪到内边距盒 */
.box {
  mask-image: url('mask.png');
  mask-clip: padding-box;
}

/* 裁剪到内容盒 */
.box {
  mask-image: url('mask.png');
  mask-clip: content-box;
}

/* 不裁剪 */
.box {
  mask-image: url('mask.png');
  mask-clip: no-clip;
}

/* 多个裁剪区域 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-clip: border-box, padding-box;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 边框区域遮罩 */
.border-mask {
  mask-image: url('mask.png');
  mask-clip: border-box;
  border: 10px solid #333;
}

/* 2. 内边距区域遮罩 */
.padding-mask {
  mask-image: url('mask.png');
  mask-clip: padding-box;
  padding: 20px;
}

/* 3. 内容区域遮罩 */
.content-mask {
  mask-image: url('mask.png');
  mask-clip: content-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 4. 溢出遮罩 */
.overflow-mask {
  mask-image: url('mask.png');
  mask-clip: no-clip;
}

/* 5. 多图层不同裁剪 */
.multi-clip {
  mask-image: 
    url('pattern.png'),
    url('gradient.png');
  mask-clip: padding-box, content-box;
}

/* 6. SVG 遮罩 */
.svg-mask {
  mask-image: url('mask.svg');
  mask-clip: fill-box;
}

/* 7. 带圆角的遮罩 */
.rounded-mask {
  mask-image: url('mask.png');
  mask-clip: border-box;
  border-radius: 10px;
}

/* 8. 内边距填充遮罩 */
.inset-mask {
  mask-image: url('mask.png');
  mask-clip: padding-box;
  background: #f0f0f0;
  padding: 15px;
}
