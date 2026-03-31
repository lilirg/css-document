# image

`image` 数据类型表示图像值，用于引用图像资源。

## 语法

```css
/* URL 图像 */
.element {
  background-image: url('image.png');
}

/* 渐变图像 */
.element {
  background-image: linear-gradient(to right, red, blue);
}

/* 多图像 */
.element {
  list-style-image: url('bullet.png');
}

/* 图像集 */
.element {
  image-set: url('image-1x.png') 1x, url('image-2x.png') 2x;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 图像类型

| 类型 | 描述 |
| :--- | :--- |
| `url()` | URL 图像 |
| `linear-gradient()` | 线性渐变 |
| `radial-gradient()` | 径向渐变 |
| `conic-gradient()` | 圆锥渐变 |
| `repeating-linear-gradient()` | 重复线性渐变 |
| `repeating-radial-gradient()` | 重复径向渐变 |
| `image-set()` | 图像集（响应式图像） |
| `element()` | 元素图像 |
| `cross-fade()` | 交叉淡入淡出 |

## 示例

### URL 图像

```css
/* 基本 URL */
.element {
  background-image: url('image.png');
}

/* 绝对路径 */
.element {
  background-image: url('/images/image.png');
}

/* 相对路径 */
.element {
  background-image: url('../images/image.png');
}

/* 数据 URI */
.element {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==');
}
```

### 渐变图像

```css
/* 线性渐变 */
.element {
  background-image: linear-gradient(to right, red, blue);
}

/* 径向渐变 */
.element {
  background-image: radial-gradient(circle, red, blue);
}
```

### image-set

```css
/* 响应式图像 */
.element {
  background-image: image-set(
    url('image-1x.png') 1x,
    url('image-2x.png') 2x,
    url('image-3x.png') 3x
  );
}
```

### 实用示例

```css
/* 背景图像 */
.element {
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* 列表图像 */
.element {
  list-style-image: url('bullet.png');
}

/* 光标图像 */
.element {
  cursor: url('cursor.png'), auto;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 3+ |

## 相关链接

- [MDN Web Docs: image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/image)
- [CSS Images Module Level 3](https://www.w3.org/TR/css-images-3/)
