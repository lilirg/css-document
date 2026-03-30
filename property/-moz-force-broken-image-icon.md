# -moz-force-broken-image-icon

该属性控制 Firefox 浏览器中损坏图像的图标显示。

## 语法

```css
-moz-force-broken-image-icon: 0 | 1 | 2
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | `img` 元素 |
| 动画 | 否 |

## 值

### `0`
正常显示损坏图像的图标（默认）。

### `1`
强制显示损坏图像的图标，即使图像有 `alt` 文本。

### `2`
不显示损坏图像的图标。

## 注意
- 该属性是 Firefox 特有的属性
- 主要用于控制图像加载失败时的显示行为
- 通常用于需要统一显示损坏图像图标的场景

## 示例

```css
/* 强制显示损坏图像图标 */
img {
  -moz-force-broken-image-icon: 1;
}

/* 不显示损坏图像图标 */
img {
  -moz-force-broken-image-icon: 2;
}
```

## 使用场景

```css
/* 场景 1：确保所有损坏图像显示统一图标 */
.product-image {
  -moz-force-broken-image-icon: 1;
  width: 200px;
  height: 200px;
}

/* 场景 2：隐藏损坏图像图标（使用自定义错误处理） */
.custom-error-image {
  -moz-force-broken-image-icon: 2;
}

/* 场景 3：画廊中统一损坏图像显示 */
.gallery img {
  -moz-force-broken-image-icon: 1;
  border: 1px solid #ccc;
}