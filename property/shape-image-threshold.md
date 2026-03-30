# shape-image-threshold

该属性设置用于形状外部功能的图像阈值。

## 语法

```css
shape-image-threshold: <alpha-value>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 是             |

## 值

### `<alpha-value>`

透明度阈值，范围从 `0` 到 `1`：
- `0` - 完全透明像素被视为形状外部
- `0.5` - 半透明像素作为边界
- `1` - 完全不透明像素被视为形状内部

也可以使用百分比：
- `0%` - 完全透明
- `50%` - 半透明
- `100%` - 完全不透明

## 注意

- 该属性与 `shape-outside` 配合使用
- 用于定义图像中哪些像素参与形状计算
- 仅适用于 `shape-outside: url()` 的情况

## 示例

```css
/* 低阈值 */
.el1 {
  shape-outside: url("image.png");
  shape-image-threshold: 0.1;
}

/* 中等阈值 */
.el2 {
  shape-outside: url("image.png");
  shape-image-threshold: 0.5;
}

/* 高阈值 */
.el3 {
  shape-outside: url("image.png");
  shape-image-threshold: 0.9;
}
```

```html
<!-- 形状图像阈值示例 -->
<div class="shape-container">
  <div class="floated">浮动元素</div>
  <p>文本内容环绕形状...</p>
</div>
```

## 使用场景

```css
/* 圆形图像 */
.circle-image {
  shape-outside: url("circle.png");
  shape-image-threshold: 0.5;
  float: left;
}

/* 透明 PNG */
.transparent-png {
  shape-outside: url("transparent.png");
  shape-image-threshold: 0.1;
  float: left;
}

/* 低阈值 */
.low-threshold {
  shape-outside: url("image.png");
  shape-image-threshold: 0.1;
  float: left;
}

/* 高阈值 */
.high-threshold {
  shape-outside: url("image.png");
  shape-image-threshold: 0.9;
  float: left;
}

/* 渐变阈值 */
.gradient-threshold {
  shape-outside: url("gradient.png");
  shape-image-threshold: 0.5;
  float: left;
}

/* 响应式阈值 */
.responsive-threshold {
  shape-outside: url("image.png");
  shape-image-threshold: 0.5;
  float: left;
}

@media (min-width: 768px) {
  .responsive-threshold {
    shape-image-threshold: 0.3;
  }
}

/* 动画阈值 */
.animated-threshold {
  shape-outside: url("image.png");
  shape-image-threshold: 0.5;
  float: left;
  animation: thresholdChange 3s infinite;
}

@keyframes thresholdChange {
  0%, 100% { shape-image-threshold: 0.5; }
  50% { shape-image-threshold: 0.1; }
}

/* 图片画廊 */
.gallery-image {
  shape-outside: url("image.png");
  shape-image-threshold: 0.5;
  float: left;
  margin: 10px;
}

/* 圆形头像 */
.circle-avatar {
  shape-outside: url("avatar.png");
  shape-image-threshold: 0.5;
  float: left;
  margin-right: 15px;
}

/* 不规则形状 */
.irregular-shape {
  shape-outside: url("shape.png");
  shape-image-threshold: 0.3;
  float: left;
}

/* 文本环绕 */
.text-wrap {
  shape-outside: url("image.png");
  shape-image-threshold: 0.5;
  float: left;
  width: 200px;
}
