# mask-mode

该属性用于指定遮罩图像是使用 Alpha 通道还是亮度值作为遮罩源。

## 语法

```css
mask-mode: <mask-source-type>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `match-source` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### alpha
使用图像的 Alpha 通道作为遮罩：
- 不透明区域显示内容
- 透明区域隐藏内容

### luminance
使用图像的亮度值作为遮罩：
- 白色（亮度 100%）显示内容
- 黑色（亮度 0%）隐藏内容
- 灰色根据亮度值部分显示

### match-source
自动匹配图像类型（默认值）：
- 对于带 Alpha 通道的图像使用 `alpha`
- 对于灰度图像使用 `luminance`

### discard
丢弃遮罩（不应用遮罩效果）

## 注意
- 该属性通常与 `mask-image` 配合使用
- 可以设置多个值对应多个遮罩图像
- `match-source` 是默认行为，通常不需要显式设置
- 使用 `luminance` 时，灰度图像的亮度决定遮罩强度

## 示例

```css
/* 使用 Alpha 通道 */
.box {
  mask-image: url('mask.png');
  mask-mode: alpha;
}

/* 使用亮度值 */
.box {
  mask-image: url('mask.png');
  mask-mode: luminance;
}

/* 自动匹配（默认） */
.box {
  mask-image: url('mask.png');
  mask-mode: match-source;
}

/* 多个遮罩图像使用不同模式 */
.box {
  mask-image: 
    url('alpha-mask.png'),
    url('luminance-mask.png');
  mask-mode: alpha, luminance;
}

/* 丢弃遮罩 */
.box {
  mask-image: url('mask.png');
  mask-mode: discard;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. PNG 透明遮罩 */
.png-mask {
  mask-image: url('mask.png');
  mask-mode: alpha;
}

/* 2. 灰度图像遮罩 */
.grayscale-mask {
  mask-image: url('grayscale-mask.png');
  mask-mode: luminance;
}

/* 3. SVG 遮罩 */
.svg-mask {
  mask-image: url('mask.svg');
  mask-mode: match-source;
}

/* 4. 渐变遮罩（使用亮度） */
.gradient-mask {
  mask-image: linear-gradient(to bottom, black, white);
  mask-mode: luminance;
}

/* 5. 多图层混合 */
.multi-mask {
  mask-image: 
    url('pattern.png'),
    url('gradient.png');
  mask-mode: alpha, luminance;
}

/* 6. 视频帧遮罩 */
.video-frame {
  mask-image: url('video-frame.png');
  mask-mode: alpha;
}

/* 7. 临时禁用遮罩 */
.no-mask {
  mask-image: url('mask.png');
  mask-mode: discard;
}
