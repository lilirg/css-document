# clip-path

该属性用于创建一个裁剪路径，只有路径内的内容才可见。

## 语法

```css
clip-path: <clip-source> | [ <basic-shape> || <geometry-box> ] | none
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<clip-source>`
引用 SVG 裁剪路径的 URL。

### `<basic-shape>`
基本形状函数：

| 函数 | 说明 |
| :--- | :--- |
| `inset()` | 矩形裁剪 |
| `circle()` | 圆形裁剪 |
| `ellipse()` | 椭圆裁剪 |
| `polygon()` | 多边形裁剪 |
| `path()` | 路径裁剪 |

### `<geometry-box>`
参考框：

| 值 | 说明 |
| :--- | :--- |
| `margin-box` | 使用 margin 区域作为参考框 |
| `border-box` | 使用边框区域作为参考框 |
| `padding-box` | 使用内边距区域作为参考框 |
| `fill-box` | 使用 SVG 填充边界作为参考框 |
| `stroke-box` | 使用 SVG 描边边界作为参考框 |
| `view-box` | 使用 SVG 视口作为参考框 |

### `none`
不应用裁剪。

## 基本形状

### `inset()`
矩形裁剪，参数为 `top right bottom left`。

```css
clip-path: inset(10% 20% 30% 40%);
```

### `circle()`
圆形裁剪，参数为 `半径 at 中心点`。

```css
clip-path: circle(50% at 50% 50%);
```

### `ellipse()`
椭圆裁剪，参数为 `x 半径 y 半径 at 中心点`。

```css
clip-path: ellipse(50% 30% at 50% 50%);
```

### `polygon()`
多边形裁剪，参数为多个坐标点。

```css
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
```

### `path()`
SVG 路径裁剪。

```css
clip-path: path("M50 0 L100 100 L0 100 Z");
```

## 注意

- 裁剪区域外的内容完全不可见，不占用布局空间
- 支持动画效果
- 被裁剪的元素仍然可以接收事件，除非使用 `pointer-events: none`
- 现代浏览器支持良好

## 示例

```css
/* CSS 示例 */
.circle {
  clip-path: circle(50% at 50% 50%);
}

.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

```html
<!-- HTML 示例 -->
<div class="circle">圆形裁剪</div>
<div class="triangle">三角形裁剪</div>
```

## 使用场景

```css
/* 1. 圆形头像 */
.avatar {
  width: 150px;
  height: 150px;
  clip-path: circle(50% at 50% 50%);
}

/* 2. 菱形卡片 */
.diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* 3. 三角形按钮 */
.triangle-btn {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* 4. 不规则形状 */
.custom-shape {
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

/* 5. 内边距裁剪 */
.padding-crop {
  clip-path: inset(10px 20px 10px 20px border-box);
}
