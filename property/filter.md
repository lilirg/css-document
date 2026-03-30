# filter

该属性为元素应用图形滤镜效果，如模糊、亮度、对比度等。

## 语法

```css
filter: none | <filter-function>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
不应用任何滤镜（默认）。

### `<filter-function>`
滤镜函数，可组合使用：

| 函数 | 说明 |
| :--- | :--- |
| `blur()` | 模糊效果 |
| `brightness()` | 亮度调整 |
| `contrast()` | 对比度调整 |
| `drop-shadow()` | 投影效果 |
| `grayscale()` | 灰度效果 |
| `hue-rotate()` | 色相旋转 |
| `invert()` | 颜色反转 |
| `opacity()` | 透明度调整 |
| `saturate()` | 饱和度调整 |
| `sepia()` | 棕褐色效果 |

## 注意

- 多个滤镜函数可以组合使用，用空格分隔
- `drop-shadow()` 与 `box-shadow` 不同，它支持透明形状
- 滤镜效果可能影响性能

## 示例

```css
/* CSS 示例 */
.blurred {
  filter: blur(5px);
}

.grayscale {
  filter: grayscale(100%);
}

.combined {
  filter: blur(2px) brightness(1.2);
}
```

```html
<!-- HTML 示例 -->
<img class="grayscale" src="photo.jpg" alt="黑白图片">
<div class="blurred">模糊内容</div>
```

## 使用场景

```css
/* 1. 图片悬停模糊 */
.image-hover:hover {
  filter: blur(3px);
}

/* 2. 灰度图片 */
.gray-image {
  filter: grayscale(100%);
}

/* 3. 增强对比度 */
.high-contrast {
  filter: contrast(150%);
}

/* 4. 图片投影 */
.shadow-image {
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.3));
}

/* 5. 复古效果 */
.vintage {
  filter: sepia(60%) saturate(120%);
}
