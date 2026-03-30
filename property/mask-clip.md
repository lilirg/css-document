# mask-clip

该属性设置遮罩的裁剪区域。

## 语法

```css
mask-clip: <clip-box>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `border-box`   |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 裁剪区域

| 值 | 说明 |
|------|------|
| `border-box` | 在边框区域内裁剪（默认） |
| `padding-box` | 在内边距区域内裁剪 |
| `content-box` | 在内容区域内裁剪 |
| `fill-box` | 在 SVG 填充边界框内裁剪 |
| `stroke-box` | 在 SVG 描边边界框内裁剪 |
| `view-box` | 在 SVG 视口内裁剪 |
| `no-clip` | 不裁剪，允许超出元素边界 |

## 注意

- 该属性控制遮罩在哪个区域内生效
- 默认值 `border-box` 表示遮罩在边框区域内裁剪
- `no-clip` 允许遮罩超出元素边界

## 示例

```css
/* 在边框区域内裁剪 */
.el1 {
  mask-image: url('mask.png');
  mask-clip: border-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 在内边距区域内裁剪 */
.el2 {
  mask-image: url('mask.png');
  mask-clip: padding-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 在内容区域内裁剪 */
.el3 {
  mask-image: url('mask.png');
  mask-clip: content-box;
  padding: 20px;
  border: 10px solid #333;
}

/* 不裁剪 */
.el4 {
  mask-image: url('mask.png');
  mask-clip: no-clip;
  padding: 20px;
  border: 10px solid #333;
}

/* 渐变遮罩 */
.el5 {
  mask-image: linear-gradient(to right, black 50%, transparent 100%);
  mask-clip: content-box;
  padding: 20px;
}
```

```html
<div class="el1">border-box</div>
<div class="el2">padding-box</div>
<div class="el3">content-box</div>
<div class="el4">no-clip</div>
<div class="el5">渐变</div>
```

## 使用场景

```css
/* 边框内裁剪 */
.border-clip {
  mask-image: url('images/mask.png');
  mask-clip: border-box;
  mask-size: cover;
  padding: 20px;
  border: 10px solid #333;
}

/* 内边距内裁剪 */
.padding-clip {
  mask-image: url('images/mask.png');
  mask-clip: padding-box;
  mask-size: cover;
  padding: 20px;
  border: 10px solid #333;
}

/* 内容区内裁剪 */
.content-clip {
  mask-image: url('images/mask.png');
  mask-clip: content-box;
  mask-size: cover;
  padding: 20px;
  border: 10px solid #333;
}

/* 不裁剪 - 允许超出 */
.no-clip {
  mask-image: url('images/mask.png');
  mask-clip: no-clip;
  mask-size: cover;
  padding: 20px;
}

/* 卡片遮罩 */
.card-clip {
  mask-image: url('images/card-mask.png');
  mask-clip: padding-box;
  mask-size: cover;
  padding: 20px;
  border-radius: 12px;
}

/* 渐变遮罩 */
.gradient-clip {
  mask-image: linear-gradient(to right, black 50%, transparent 100%);
  mask-clip: content-box;
  padding: 20px;
}

/* 图片渐隐 */
.image-fade {
  mask-image: url('images/fade.png');
  mask-clip: padding-box;
  mask-size: 100% 100%;
  padding: 20px;
}

/* 边框渐隐 */
.border-fade {
  mask-image: linear-gradient(black, black),
              radial-gradient(ellipse at top, transparent, black);
  mask-clip: border-box;
  padding: 20px;
}

/* 响应式裁剪 */
.responsive-clip {
  mask-image: url('images/mask.png');
  mask-clip: content-box;
  mask-size: cover;
  padding: 20px;
}

@media (min-width: 768px) {
  .responsive-clip {
    mask-clip: padding-box;
  }
}

/* 动态裁剪（配合动画） */
.animated-clip {
  mask-image: url('images/mask.png');
  mask-clip: border-box;
  padding: 20px;
  animation: clipChange 3s infinite;
}

@keyframes clipChange {
  0%, 100% { mask-clip: border-box; }
  50% { mask-clip: content-box; }
}
