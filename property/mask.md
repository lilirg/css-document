# mask

该属性用于设置元素遮罩的所有属性（图像、位置、尺寸、重复等）的速记属性。

## 语法

```css
mask: [ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <box> || <composite-mode> ]#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各属性初始值 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 取决于各组成部分 |

## 值

### mask-reference
遮罩源：
- `none` - 无遮罩
- `<image>` - 遮罩图像（URL 或渐变）

### position
遮罩位置：
- `center`, `top`, `bottom`, `left`, `right`
- `<length>`, `<percentage>`

### bg-size
遮罩尺寸：
- `auto`, `cover`, `contain`
- `<length>`, `<percentage>`

### repeat-style
重复方式：
- `repeat`, `repeat-x`, `repeat-y`, `no-repeat`, `space`, `round`

### box
定位框：
- `border-box`, `padding-box`, `content-box`

### composite-mode
混合模式：
- `add`, `subtract`, `intersect`, `exclude`

## 注意
- 速记属性会重置所有未指定的遮罩属性为其初始值
- 可以使用 `mask-image`, `mask-mode`, `mask-repeat`, `mask-position`, `mask-clip`, `mask-origin`, `mask-size` 分别设置
- 遮罩图像可以是 SVG、PNG 或 CSS 渐变
- 遮罩支持 alpha 通道和亮度值

## 示例

```css
/* 基本用法 - 使用图像遮罩 */
.box {
  mask: url('mask.png') no-repeat center / cover;
}

/* 使用渐变遮罩 */
.box {
  mask: linear-gradient(to bottom, black, transparent);
}

/* 多个遮罩 */
.box {
  mask: 
    url('mask1.png') no-repeat left / 50%,
    url('mask2.png') no-repeat right / 50%;
}

/* 使用 RGBA 图像 */
.box {
  mask: url('mask.png');
  mask-mode: alpha;
}

/* 使用亮度遮罩 */
.box {
  mask: url('mask.png');
  mask-mode: luminance;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 圆形遮罩（圆形图片） */
.circle-mask {
  mask: url('circle-mask.png') no-repeat center / contain;
}

/* 2. 渐隐效果 */
.fade-mask {
  mask: linear-gradient(to bottom, black 0%, transparent 100%);
}

/* 3. 文字遮罩效果 */
.text-mask {
  mask: url('text-mask.svg') no-repeat center / contain;
}

/* 4. 边缘渐隐 */
.edge-fade {
  mask: radial-gradient(
    circle at center,
    black 0%,
    black 70%,
    transparent 100%
  );
}

/* 5. 水平渐隐 */
.horizontal-fade {
  mask: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

/* 6. 多图像遮罩 */
.multi-mask {
  mask: 
    url('mask1.png') no-repeat left top / 50%,
    url('mask2.png') no-repeat right bottom / 50%;
}

/* 7. 形状遮罩 */
.shape-mask {
  mask: url('star-mask.svg') no-repeat center / contain;
}

/* 8. 视频遮罩（动态内容） */
.video-mask {
  mask: url('video-mask.png');
  mask-mode: alpha;
}
