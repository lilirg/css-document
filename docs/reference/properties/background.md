# background

background 属性是 background-color、background-image、background-repeat、background-position、background-size、background-attachment、background-origin、background-clip 的简写属性。

## 语法

```css
background: <bg-layer>#;
<bg-layer> = <bg-image> || <bg-position> [ / <bg-size> ]? || <bg-repeat> || <bg-attachment> || <bg-origin> || <bg-clip> || <bg-color>
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<bg-color>` | 背景颜色 | `background: #fff` |
| `<bg-image>` | 背景图像 | `background: url(image.png)` |
| `<bg-repeat>` | 背景重复 | `background: repeat` |
| `<bg-position>` | 背景位置 | `background: center center` |
| `<bg-size>` | 背景大小 | `background: cover` |
| `<bg-attachment>` | 背景附着 | `background: fixed` |
| `<bg-origin>` | 背景原点 | `background: padding-box` |
| `<bg-clip>` | 背景裁剪 | `background: border-box` |

## 示例

### 基础用法

```css
/* 背景颜色 */
.color {
  background: #fff;
}

/* 背景图像 */
.image {
  background: url(image.png);
}

/* 背景重复 */
.repeat {
  background: repeat;
}

/* 背景位置 */
.position {
  background: center center;
}

/* 背景大小 */
.size {
  background: cover;
}

/* 背景附着 */
.attachment {
  background: fixed;
}

/* 背景原点 */
.origin {
  background: padding-box;
}

/* 背景裁剪 */
.clip {
  background: border-box;
}
```

### 高级用法

```css
/* 容器 */
.container {
  background: #fff url(image.png) repeat center center / cover fixed padding-box border-box;
}

/* 背景颜色 */
.color {
  background: #fff;
}

/* 背景图像 */
.image {
  background: url(image.png);
}

/* 背景重复 */
.repeat {
  background: repeat;
}

/* 背景位置 */
.position {
  background: center center;
}

/* 背景大小 */
.size {
  background: cover;
}

/* 背景附着 */
.attachment {
  background: fixed;
}

/* 背景原点 */
.origin {
  background: padding-box;
}

/* 背景裁剪 */
.clip {
  background: border-box;
}

/* 响应式布局 */
.responsive {
  background: #fff;
}

/* 卡片布局 */
.card {
  background: #fff;
}

/* 表单布局 */
.form {
  background: #fff;
}

/* 图片画廊 */
.gallery {
  background: #fff;
}

/* 混合单位 */
.mixed-units {
  background: #fff;
}

/* 带命名的项目 */
.named-items {
  background: #fff;
}

/* 悬停效果 */
.card {
  transition: background 0.3s ease-in-out;
}

.card:hover {
  background: #f00;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `background` 可以用于任何元素
- `background` 是 background-color、background-image、background-repeat、background-position、background-size、background-attachment、background-origin、background-clip 的简写属性
- 默认值为 `transparent none repeat 0% 0% auto auto padding-box border-box`
- 可以指定多个背景层

## 相关属性

- [`background-color`](./background-color)
- [`background-image`](./background-image)
- [`background-repeat`](./background-repeat)
- [`background-position`](./background-position)
- [`background-size`](./background-size)
- [`background-attachment`](./background-attachment)
- [`background-origin`](./background-origin)
- [`background-clip`](./background-clip)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)
- [CSS-Tricks: background](https://css-tricks.com/almanac/properties/b/background/)
- [W3C CSS Backgrounds](https://www.w3.org/TR/css-backgrounds-3/)