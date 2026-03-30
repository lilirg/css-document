# border-image

该属性设置元素的边框图像，是边框图像相关属性的速记属性。

## 语法

```css
border-image: <border-image-source> || <border-image-slice> [ / <border-image-width> ]? || <border-image-outset> || <border-image-repeat>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 见各个独立属性 |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### 组合值

`border-image` 可以设置以下属性的组合：

| 属性 | 说明 |
|------|------|
| `border-image-source` | 边框图像源 |
| `border-image-slice` | 边框图像切片 |
| `border-image-width` | 边框图像宽度 |
| `border-image-outset` | 边框图像外扩 |
| `border-image-repeat` | 边框图像重复方式 |

### 基本语法

```css
border-image: <源> <切片> <宽度> <外扩> <重复方式>
```

## 注意

- 必须设置 `border-style` 为 `solid` 或其他非 `none` 值才能显示边框图像
- 如果图像无法加载，将使用普通边框
- `border-image` 会覆盖 `border-color`

## 示例

```css
/* 基本用法 */
.el1 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 stretch;
  padding: 20px;
}

/* 指定切片 */
.el2 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 20 stretch;
  padding: 20px;
}

/* 指定切片和宽度 */
.el3 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 / 10px stretch;
  padding: 20px;
}

/* 指定切片、宽度和外扩 */
.el4 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 / 10px / 5px stretch;
  padding: 20px;
}

/* 使用渐变 */
.el5 {
  border: 20px solid transparent;
  border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
  padding: 20px;
}

/* 使用径向渐变 */
.el6 {
  border: 20px solid transparent;
  border-image: radial-gradient(circle, #ff6b6b, #4ecdc4) 1;
  padding: 20px;
}

/* 重复方式 - repeat */
.el7 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 repeat;
  padding: 20px;
}

/* 重复方式 - round */
.el8 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 round;
  padding: 20px;
}

/* 重复方式 - space */
.el9 {
  border: 20px solid transparent;
  border-image: url('border.png') 30 space;
  padding: 20px;
}

/* 无图像（回退到普通边框） */
.el10 {
  border: 20px solid #333;
  border-image: none;
  padding: 20px;
}
```

```html
<div class="el1">基本用法</div>
<div class="el2">指定切片</div>
<div class="el3">指定切片和宽度</div>
<div class="el4">指定切片、宽度和外扩</div>
<div class="el5">线性渐变</div>
<div class="el6">径向渐变</div>
<div class="el7">repeat</div>
<div class="el8">round</div>
<div class="el9">space</div>
<div class="el10">无图像</div>
```

## 使用场景

```css
/* 渐变边框 */
.gradient-border {
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1) 1;
  padding: 20px;
  border-radius: 8px;
}

/* 彩虹边框 */
.rainbow-border {
  border: 4px solid transparent;
  border-image: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet) 1;
  padding: 20px;
  border-radius: 8px;
}

/* 金属边框 */
.metal-border {
  border: 5px solid transparent;
  border-image: linear-gradient(180deg, #silver, #gray, #silver) 1;
  padding: 20px;
}

/* 霓虹边框 */
.neon-border {
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #00ff00, #00ffff, #ff00ff) 1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

/* 图片边框 */
.image-border {
  border: 20px solid transparent;
  border-image: url('images/border.png') 30 stretch;
  padding: 20px;
}

/* 圆角渐变边框 */
.rounded-gradient {
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4) 1;
  padding: 20px;
  border-radius: 15px;
}

/* 渐变文字边框 */
.gradient-text-border {
  font-size: 48px;
  font-weight: bold;
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4) 1;
  -webkit-background-clip: text;
  background-clip: text;
}

/* 动态渐变边框 */
.animated-gradient {
  border: 3px solid transparent;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1) 1;
  padding: 20px;
  border-radius: 8px;
  animation: gradientRotate 3s linear infinite;
}

@keyframes gradientRotate {
  0% { border-image-source: linear-gradient(0deg, #ff6b6b, #4ecdc4); }
  100% { border-image-source: linear-gradient(360deg, #ff6b6b, #4ecdc4); }
}

/* 卡片边框 */
.card-border {
  border: 2px solid transparent;
  border-image: linear-gradient(90deg, #6f42c1, #007bff) 1;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
}

/* 按钮边框 */
.btn-border {
  border: 2px solid transparent;
  border-image: linear-gradient(90deg, #28a745, #20c997) 1;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: white;
  font-weight: bold;
}
