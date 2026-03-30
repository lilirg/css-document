# background-blend-mode

该属性指定背景图像与背景颜色或其他背景图像的混合模式。

## 语法

```css
background-blend-mode: <blend-mode>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `normal`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<blend-mode>`

指定混合模式。可选值包括：

| 值 | 说明 |
|------|------|
| `normal` | 默认值。不混合，显示顶层图像 |
| `multiply` | 正片叠底。使颜色变暗 |
| `screen` | 滤色。使颜色变亮 |
| `overlay` | 叠加。根据底层颜色混合 |
| `darken` | 变暗。选择较暗的颜色 |
| `lighten` | 变亮。选择较亮的颜色 |
| `color-dodge` | 颜色减淡。使颜色更亮 |
| `color-burn` | 颜色加深。使颜色更暗 |
| `hard-light` | 强光。根据顶层颜色混合 |
| `soft-light` | 柔光。柔和的混合效果 |
| `difference` | 差值。显示颜色差异 |
| `exclusion` | 排除。类似差值但对比度更低 |
| `hue` | 色相。使用顶层的色相 |
| `saturation` | 饱和度。使用顶层的饱和度 |
| `color` | 颜色。使用顶层的色相和饱和度 |
| `luminosity` | 亮度。使用顶层的亮度 |

## 注意

- 如果指定了多个背景层，每个层的混合模式用逗号分隔
- 混合模式的数量必须与背景层的数量匹配
- 混合模式与 `background-image` 和 `background-color` 配合使用

## 示例

```css
/* 正常混合 */
.el {
  background-image: url('image.png');
  background-color: #ff0000;
  background-blend-mode: normal;
}

/* 正片叠底 */
.el2 {
  background-image: url('image.png');
  background-color: #0000ff;
  background-blend-mode: multiply;
}

/* 滤色 */
.el3 {
  background-image: url('image.png');
  background-color: #ffff00;
  background-blend-mode: screen;
}

/* 叠加 */
.el4 {
  background-image: url('image.png');
  background-color: #00ff00;
  background-blend-mode: overlay;
}

/* 多个背景层，不同的混合模式 */
.el5 {
  background-image: url('pattern.png'), url('image.jpg');
  background-color: #ff0000;
  background-blend-mode: multiply, screen;
}
```

```html
<div class="el">normal</div>
<div class="el2">multiply</div>
<div class="el3">screen</div>
<div class="el4">overlay</div>
<div class="el5">多个混合</div>
```

## 使用场景

```css
/* 图片叠加颜色遮罩 */
.image-overlay {
  background-image: url('photo.jpg');
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
}

/* 创建复古效果 */
.vintage {
  background-image: url('photo.jpg');
  background-color: #ffcc00;
  background-blend-mode: overlay;
  background-size: cover;
}

/* 文字背景效果 */
.text-bg {
  background-image: url('texture.png');
  background-color: #333;
  background-blend-mode: soft-light;
  padding: 20px;
}

/* 多层背景混合 */
.complex-bg {
  background-image: 
    url('gradient.png'),
    url('pattern.png'),
    url('photo.jpg');
  background-color: #1a1a2e;
  background-blend-mode: overlay, multiply, normal;
  background-size: cover;
}
