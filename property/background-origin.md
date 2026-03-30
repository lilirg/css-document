# background-origin

该属性设置背景图像的定位原点，即背景图像从哪个区域开始绘制。

## 语法

```css
background-origin: <box>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `padding-box`  |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<box>`

定义背景图像的定位区域。可选值包括：

| 值 | 说明 |
|------|------|
| `border-box` | 背景图像从边框的外边缘开始定位 |
| `padding-box` | 默认值。背景图像从内边距的外边缘开始定位 |
| `content-box` | 背景图像从内容区域开始定位 |

## 注意

- 如果指定了多个背景层，每个层的定位区域用逗号分隔
- `background-origin` 与 `background-position` 配合使用
- 当 `background-clip` 与 `background-origin` 设置不同的区域时，背景图像可能会被裁剪

## 示例

```css
/* 从边框开始定位 */
.el {
  background-origin: border-box;
  background-image: url('pattern.png');
  background-position: top left;
  background-repeat: no-repeat;
  border: 20px solid #ccc;
  padding: 20px;
}

/* 从内边距开始定位 */
.el2 {
  background-origin: padding-box;
  background-image: url('pattern.png');
  background-position: top left;
  background-repeat: no-repeat;
  border: 20px solid #ccc;
  padding: 20px;
}

/* 从内容区域开始定位 */
.el3 {
  background-origin: content-box;
  background-image: url('pattern.png');
  background-position: top left;
  background-repeat: no-repeat;
  border: 20px solid #ccc;
  padding: 20px;
}

/* 多个背景层，不同的定位区域 */
.el4 {
  background-image: url('pattern1.png'), url('pattern2.png');
  background-origin: border-box, content-box;
  background-position: top left, bottom right;
}
```

```html
<div class="el">border-box</div>
<div class="el2">padding-box</div>
<div class="el3">content-box</div>
<div class="el4">多个定位</div>
```

## 使用场景

```css
/* 边框内背景 */
.card {
  background-image: url('texture.png');
  background-origin: padding-box;
  background-clip: padding-box;
  background-size: cover;
  border: 5px solid #333;
  border-radius: 8px;
  padding: 20px;
}

/* 内容区域背景 */
.content-bg {
  background-image: url('pattern.png');
  background-origin: content-box;
  background-clip: content-box;
  background-size: 50px 50px;
  border: 10px solid #ccc;
  padding: 15px;
}

/* 边框背景 */
.framed {
  background-image: url('frame.png');
  background-origin: border-box;
  background-clip: border-box;
  background-size: cover;
  border: 30px solid transparent;
}

/* 多层背景不同定位 */
.complex-bg {
  background-image: 
    url('border-pattern.png'),
    url('content-pattern.png');
  background-origin: border-box, content-box;
  background-clip: border-box, content-box;
  background-size: cover, 30px 30px;
  border: 15px solid #eee;
  padding: 20px;
}

/* 内边距背景图 */
.inner-bg {
  background-image: url('inner-bg.jpg');
  background-origin: padding-box;
  background-clip: padding-box;
  background-size: cover;
  background-position: center;
  border: 10px solid #333;
  padding: 30px;
}
