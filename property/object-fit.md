# object-fit

该属性设置替换元素（如 `<img>` 或 `<video>`）内容如何调整大小以适合其容器。

## 语法

```css
object-fit: fill | contain | cover | none | scale-down
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `fill` |
| 适用 HTML 元素 | 替换元素（img、video、object 等） |
| 动画 | 是 |

## 值

### `fill`
默认值。内容拉伸以填充整个容器，可能改变宽高比。

### `contain`
内容完整显示在容器内，保持宽高比，可能有空白区域。

### `cover`
内容填充整个容器，保持宽高比，可能被裁剪。

### `none`
内容保持原始大小，不调整。

### `scale-down`
相当于 `none` 或 `contain` 中较小的一个。

## 注意

- 通常与 `object-position` 配合使用
- 仅适用于替换元素
- 容器需要有明确的宽高

## 示例

```css
/* CSS 示例 */
img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}
```

```html
<!-- HTML 示例 -->
<img src="image.jpg" alt="示例图片" />
```

## 使用场景

```css
/* 1. 封面图片（填充并裁剪） */
.cover-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

/* 2. 完整显示图片 */
.full-image {
  width: 300px;
  height: 200px;
  object-fit: contain;
}

/* 3. 保持原始大小 */
.original-size {
  width: 300px;
  height: 200px;
  object-fit: none;
}

/* 4. 头像圆形裁剪 */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

/* 5. 视频适配 */
.video-thumbnail {
  width: 400px;
  height: 225px;
  object-fit: cover;
}
