# mask-mode

该属性指定遮罩图像的计算方式。

## 语法

```css
mask-mode: <masking-mode> | <masking-mode>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `match-source` |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `alpha`

使用图像的 Alpha 通道作为遮罩。透明部分隐藏元素，不透明部分显示元素。

### `luminance`

使用图像的亮度值作为遮罩。白色部分显示元素，黑色部分隐藏元素。

### `luminance-alpha`

同时使用亮度和 Alpha 通道。

### `auto`

根据图像类型自动选择。SVG 图像使用 Alpha 通道，其他图像使用亮度。

### `match-source`

匹配源图像的模式。

### 多值语法

可以指定多个值对应多个遮罩图层：

```css
mask-mode: alpha, luminance;
```

## 注意

- 第一个值对应第一个遮罩图层
- 如果值数量少于图层数量，剩余图层使用最后一个值
- `alpha` 模式适合 PNG 图像
- `luminance` 模式适合灰度图像

## 示例

```css
/* 使用 alpha 模式 */
.el1 {
  mask-image: url('mask.png');
  mask-mode: alpha;
  padding: 20px;
}

/* 使用 luminance 模式 */
.el2 {
  mask-image: url('mask.png');
  mask-mode: luminance;
  padding: 20px;
}

/* 使用 auto 模式 */
.el3 {
  mask-image: url('mask.png');
  mask-mode: auto;
  padding: 20px;
}

/* 使用 match-source 模式 */
.el4 {
  mask-image: url('mask.png');
  mask-mode: match-source;
  padding: 20px;
}

/* 多图层不同模式 */
.el5 {
  mask-image: url('mask1.png'), url('mask2.png');
  mask-mode: alpha, luminance;
  padding: 20px;
}

/* 渐变使用 alpha 模式 */
.el6 {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-mode: alpha;
  padding: 20px;
}

/* 无遮罩 */
.el7 {
  mask-image: none;
  padding: 20px;
}
```

```html
<div class="el1">alpha</div>
<div class="el2">luminance</div>
<div class="el3">auto</div>
<div class="el4">match-source</div>
<div class="el5">多模式</div>
<div class="el6">渐变</div>
<div class="el7">无遮罩</div>
```

## 使用场景

```css
/* PNG 图像遮罩 - alpha 模式 */
.png-mask {
  mask-image: url('images/png-mask.png');
  mask-mode: alpha;
  padding: 20px;
}

/* 灰度图像遮罩 - luminance 模式 */
.grayscale-mask {
  mask-image: url('images/grayscale-mask.png');
  mask-mode: luminance;
  padding: 20px;
}

/* 自动模式 - 根据图像类型 */
.auto-mask {
  mask-image: url('images/mask.png');
  mask-mode: auto;
  padding: 20px;
}

/* 渐变遮罩 - alpha 模式 */
.gradient-mask {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-mode: alpha;
  padding: 20px;
}

/* 多图层混合模式 */
.multi-mode-mask {
  mask-image: url('images/alpha-mask.png'),
              url('images/luminance-mask.png');
  mask-mode: alpha, luminance;
  padding: 20px;
}

/* 圆形遮罩 */
.circle-mask {
  width: 200px;
  height: 200px;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
  mask-mode: alpha;
}

/* 渐隐效果 */
.fade-mask {
  mask-image: linear-gradient(to right, black 80%, transparent 100%);
  mask-mode: alpha;
  padding: 20px;
}

/* 条纹遮罩 */
.stripe-mask {
  mask-image: repeating-linear-gradient(
    45deg,
    black,
    black 10px,
    transparent 10px,
    transparent 20px
  );
  mask-mode: alpha;
  padding: 20px;
}

/* 动态模式（配合动画） */
.animated-mode {
  mask-image: url('mask.png');
  mask-mode: alpha;
  padding: 20px;
  animation: modeChange 3s infinite;
}

@keyframes modeChange {
  0%, 100% { mask-mode: alpha; }
  50% { mask-mode: luminance; }
}

/* 卡片遮罩 */
.card-mask {
  mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
  mask-mode: alpha;
  padding: 20px;
  border-radius: 12px;
}
