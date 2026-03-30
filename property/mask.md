# mask

该属性设置元素的遮罩，是遮罩相关属性的速记属性。

## 语法

```css
mask: <mask-layer>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 见各个独立属性 |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 组合值

`mask` 可以设置以下属性的组合：

| 属性 | 说明 |
|------|------|
| `mask-image` | 遮罩图像 |
| `mask-mode` | 遮罩模式 |
| `mask-position` | 遮罩位置 |
| `mask-size` | 遮罩尺寸 |
| `mask-repeat` | 遮罩重复方式 |
| `mask-origin` | 遮罩原点 |
| `mask-clip` | 遮罩裁剪区域 |

### 基本语法

```css
mask: <图像> <模式> / <尺寸> <位置> <原点> <裁剪> <重复>
```

## 注意

- 遮罩会隐藏元素的部分内容，而不是显示内容
- 使用 `mask-image` 设置遮罩图像
- 使用 `mask-mode` 设置遮罩模式（alpha、luminance、auto）

## 示例

```css
/* 基本用法 - 使用图像遮罩 */
.el1 {
  mask-image: url('mask.png');
  mask-size: cover;
  padding: 20px;
}

/* 使用渐变遮罩 */
.el2 {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  padding: 20px;
}

/* 使用径向渐变 */
.el3 {
  mask-image: radial-gradient(circle, black 50%, transparent 100%);
  padding: 20px;
}

/* 设置遮罩位置 */
.el4 {
  mask-image: url('mask.png');
  mask-position: center;
  mask-size: cover;
  padding: 20px;
}

/* 设置遮罩重复 */
.el5 {
  mask-image: url('mask.png');
  mask-repeat: repeat;
  padding: 20px;
}

/* 使用 alpha 模式 */
.el6 {
  mask-image: url('mask.png');
  mask-mode: alpha;
  padding: 20px;
}

/* 使用 luminance 模式 */
.el7 {
  mask-image: url('mask.png');
  mask-mode: luminance;
  padding: 20px;
}

/* 无遮罩 */
.el8 {
  mask-image: none;
  padding: 20px;
}
```

```html
<div class="el1">图像遮罩</div>
<div class="el2">渐变遮罩</div>
<div class="el3">径向渐变</div>
<div class="el4">位置</div>
<div class="el5">重复</div>
<div class="el6">alpha 模式</div>
<div class="el7">luminance 模式</div>
<div class="el8">无遮罩</div>
```

## 使用场景

```css
/* 渐隐效果 */
.fade-mask {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  padding: 20px;
}

/* 圆形遮罩 */
.circle-mask {
  width: 200px;
  height: 200px;
  mask-image: radial-gradient(circle, black 70%, transparent 100%);
  mask-size: cover;
}

/* 图片渐隐 */
.image-fade {
  mask-image: linear-gradient(to right, black 80%, transparent 100%);
  padding: 20px;
}

/* 边框渐隐 */
.border-fade {
  mask-image: linear-gradient(black, black),
              radial-gradient(ellipse at top, transparent, black),
              radial-gradient(ellipse at bottom, transparent, black),
              radial-gradient(ellipse at left, transparent, black),
              radial-gradient(ellipse at right, transparent, black);
  mask-mode: alpha;
  mask-composite: intersect;
  padding: 20px;
}

/* 文字遮罩 */
.text-mask {
  font-size: 48px;
  font-weight: bold;
  mask-image: linear-gradient(90deg, black 0%, transparent 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* 卡片遮罩 */
.card-mask {
  mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
  padding: 20px;
  border-radius: 12px;
}

/* 重复图案遮罩 */
.pattern-mask {
  mask-image: url('pattern.png');
  mask-repeat: repeat;
  mask-size: 50px 50px;
  padding: 20px;
}

/* 动态遮罩（配合动画） */
.animated-mask {
  mask-image: linear-gradient(to right, black 0%, transparent 100%);
  padding: 20px;
  animation: maskMove 3s infinite;
}

@keyframes maskMove {
  0%, 100% { mask-position: 0%; }
  50% { mask-position: 100%; }
}

/* 多图层遮罩 */
.multi-layer-mask {
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%),
              radial-gradient(circle, transparent 30%, black 70%);
  mask-mode: alpha, alpha;
  mask-composite: add;
  padding: 20px;
}

/* 形状遮罩 */
.shape-mask {
  mask-image: url('shape.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  padding: 20px;
}
