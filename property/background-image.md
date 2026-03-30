# background-image

该属性设置元素的背景图像。

## 语法

```css
background-image: <bg-image># | none
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<bg-image>`

定义背景图像。可选值包括：

| 值 | 说明 |
|------|------|
| `url()` | 指定图像文件的路径 |
| `linear-gradient()` | 线性渐变 |
| `radial-gradient()` | 径向渐变 |
| `repeating-linear-gradient()` | 重复线性渐变 |
| `repeating-radial-gradient()` | 重复径向渐变 |
| `image-set()` | 根据设备像素密度选择图像 |
| `none` | 无背景图像 |

### `url()`

指定图像文件的路径。

```css
background-image: url('image.jpg');
```

支持的路径：
- 相对路径：`url('../images/bg.png')`
- 绝对路径：`url('/images/bg.png')`
- 完整 URL：`url('https://example.com/image.jpg')`

### 渐变函数

**线性渐变**：
```css
background-image: linear-gradient(to right, red, blue);
```

**径向渐变**：
```css
background-image: radial-gradient(circle, red, blue);
```

## 注意

- 可以指定多个背景图像，用逗号分隔
- 第一个图像在最上层，最后一个图像在最底层
- 如果 `url()` 加载失败，会显示下一个背景图像或背景颜色

## 示例

```css
/* 单张背景图像 */
.el {
  background-image: url('bg.jpg');
}

/* 多张背景图像 */
.el2 {
  background-image: 
    url('pattern.png'),
    url('bg.jpg');
}

/* 线性渐变 */
.el3 {
  background-image: linear-gradient(to right, #ff6b6b, #4ecdc4);
}

/* 径向渐变 */
.el4 {
  background-image: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

/* 重复渐变 */
.el5 {
  background-image: repeating-linear-gradient(
    45deg,
    #ff6b6b,
    #ff6b6b 10px,
    #4ecdc4 10px,
    #4ecdc4 20px
  );
}

/* 图像 + 渐变 */
.el6 {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('photo.jpg');
}

/* 无背景图像 */
.el7 {
  background-image: none;
}
```

```html
<div class="el">单张图像</div>
<div class="el2">多张图像</div>
<div class="el3">线性渐变</div>
<div class="el4">径向渐变</div>
<div class="el5">重复渐变</div>
<div class="el6">图像 + 遮罩</div>
<div class="el7">无图像</div>
```

## 使用场景

```css
/* 全屏背景图 */
.hero {
  height: 100vh;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

/* 渐变遮罩 */
.text-overlay {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('photo.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
}

/* 条纹背景 */
.striped {
  background-image: repeating-linear-gradient(
    45deg,
    #3498db,
    #3498db 20px,
    #2980b9 20px,
    #2980b9 40px
  );
}

/* 圆形渐变背景 */
.circle-bg {
  background-image: radial-gradient(
    circle at center,
    #3498db 0%,
    #2980b9 100%
  );
  height: 200px;
}

/* 图案叠加 */
.pattern-overlay {
  background-image: 
    url('pattern.png'),
    linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url('bg.jpg');
  background-size: 100px 100px, cover, cover;
}
