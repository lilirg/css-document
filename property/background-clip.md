# background-clip

该属性设置背景的绘制区域，即背景图像或颜色可以显示的区域。

## 语法

```css
background-clip: <box>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `border-box`   |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<box>`

定义背景的裁剪区域。可选值包括：

| 值 | 说明 |
|------|------|
| `border-box` | 默认值。背景绘制到边框的外边缘（边框下可见） |
| `padding-box` | 背景绘制到内边距的外边缘（边框下不可见） |
| `content-box` | 背景只绘制到内容区域 |
| `text` | 背景只绘制到文本前景（需要配合 `-webkit-background-clip`） |

## 注意

- 如果指定了多个背景层，每个层的裁剪区域用逗号分隔
- `text` 值需要配合 `color: transparent` 使用才能看到效果
- `text` 值在某些浏览器中需要添加 `-webkit-` 前缀

## 示例

```css
/* 背景延伸到边框 */
.el {
  background-clip: border-box;
  background-color: #007bff;
  border: 10px solid #ccc;
  padding: 20px;
}

/* 背景延伸到内边距 */
.el2 {
  background-clip: padding-box;
  background-color: #007bff;
  border: 10px solid #ccc;
  padding: 20px;
}

/* 背景只延伸到内容区域 */
.el3 {
  background-clip: content-box;
  background-color: #007bff;
  border: 10px solid #ccc;
  padding: 20px;
}

/* 文本背景效果 */
.el4 {
  background-image: url('gradient.jpg');
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 48px;
  font-weight: bold;
}
```

```html
<div class="el">border-box</div>
<div class="el2">padding-box</div>
<div class="el3">content-box</div>
<div class="el4">text</div>
```

## 使用场景

```css
/* 卡片内边距背景 */
.card {
  background-color: #fff;
  background-image: url('pattern.png');
  background-clip: padding-box;
  border: 2px solid #eee;
  border-radius: 8px;
  padding: 20px;
}

/* 文本渐变效果 */
.gradient-text {
  background-image: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 36px;
  font-weight: bold;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 内容区域背景 */
.content-box {
  background-color: #f0f0f0;
  background-clip: content-box;
  border: 5px solid #333;
  padding: 15px;
}

/* 多层背景不同的裁剪区域 */
.multi-clip {
  background-image: url('pattern.png'), url('image.jpg');
  background-clip: content-box, padding-box;
  background-size: cover;
  border: 10px solid #ccc;
  padding: 20px;
}
