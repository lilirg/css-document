# mask-size

该属性用于设置遮罩图像的尺寸。

## 语法

```css
mask-size: <mask-size>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### auto
保持图像原始尺寸（默认值）。

### cover
缩放图像以覆盖整个区域：
- 保持图像宽高比
- 图像完全覆盖元素
- 可能裁剪部分图像

### contain
缩放图像以适应整个区域：
- 保持图像宽高比
- 图像完整显示
- 可能有空白区域

### length
具体长度值：
- `<length>` - 绝对长度（如 `100px`, `2em`）
- `<percentage>` - 相对于元素尺寸的百分比

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 宽度和高度相同，或只设置宽度（高度为 auto） |
| 2 个值 | 第一个值为宽度，第二个值为高度 |

## 注意
- 该属性通常与 `mask-image` 配合使用
- 可以设置多个值对应多个遮罩图像
- 使用百分比时，相对于元素尺寸计算
- `cover` 和 `contain` 保持图像宽高比

## 示例

```css
/* 原始尺寸 */
.box {
  mask-image: url('mask.png');
  mask-size: auto;
}

/* 覆盖整个区域 */
.box {
  mask-image: url('mask.png');
  mask-size: cover;
}

/* 适应整个区域 */
.box {
  mask-image: url('mask.png');
  mask-size: contain;
}

/* 具体尺寸 */
.box {
  mask-image: url('mask.png');
  mask-size: 100px 50px;
}

/* 百分比尺寸 */
.box {
  mask-image: url('mask.png');
  mask-size: 50% 100%;
}

/* 单值（宽度，高度为 auto） */
.box {
  mask-image: url('mask.png');
  mask-size: 50%;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 全尺寸遮罩 */
.full-mask {
  mask-image: url('mask.png');
  mask-size: cover;
}

/* 2. 完整显示遮罩 */
.complete-mask {
  mask-image: url('mask.png');
  mask-size: contain;
}

/* 3. 固定尺寸遮罩 */
.fixed-mask {
  mask-image: url('mask.png');
  mask-size: 200px 100px;
}

/* 4. 相对尺寸遮罩 */
.relative-mask {
  mask-image: url('mask.png');
  mask-size: 50% 50%;
}

/* 5. 宽度固定，高度自适应 */
.width-fixed {
  mask-image: url('mask.png');
  mask-size: 100px auto;
}

/* 6. 高度固定，宽度自适应 */
.height-fixed {
  mask-image: url('mask.png');
  mask-size: auto 50px;
}

/* 7. 平铺小图案 */
.tile-pattern {
  mask-image: url('pattern.png');
  mask-size: 20px 20px;
  mask-repeat: repeat;
}

/* 8. 响应式遮罩 */
.responsive-mask {
  mask-image: url('mask.png');
  mask-size: cover;
}
@media (max-width: 768px) {
  .responsive-mask {
    mask-size: contain;
  }
}
