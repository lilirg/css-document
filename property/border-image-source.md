# border-image-source

该属性设置用于元素边框的图像。

## 语法

```css
border-image-source: none | <image>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `none`

不使用图像作为边框。这是默认值。

### `<image>`

指定用作边框的图像。可以是：

| 类型 | 示例 |
|------|------|
| URL | `url('border.png')` |
| 渐变 | `linear-gradient(...)`、`radial-gradient(...)` |
| 图像函数 | `image-set(...)`, `element(...)` |

## 注意

- 必须设置 `border-style` 为 `solid` 或其他非 `none` 值才能显示边框图像
- 如果图像无法加载，将不会显示边框图像
- 可以与 `border-image-slice` 配合使用来切割图像

## 示例

```css
/* 使用图片 */
.el1 {
  border: 20px solid transparent;
  border-image-source: url('border.png');
  border-image-slice: 30;
  padding: 20px;
}

/* 使用线性渐变 */
.el2 {
  border: 20px solid transparent;
  border-image-source: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  padding: 20px;
}

/* 使用径向渐变 */
.el3 {
  border: 20px solid transparent;
  border-image-source: radial-gradient(circle, #ff6b6b, #4ecdc4);
  padding: 20px;
}

/* 使用圆锥渐变 */
.el4 {
  border: 20px solid transparent;
  border-image-source: conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #ff6b6b);
  padding: 20px;
}

/* 使用重复线性渐变 */
.el5 {
  border: 20px solid transparent;
  border-image-source: repeating-linear-gradient(90deg, #ff6b6b, #ff6b6b 10px, #4ecdc4 10px, #4ecdc4 20px);
  padding: 20px;
}

/* 不使用图像 */
.el6 {
  border: 20px solid #333;
  border-image-source: none;
  padding: 20px;
}

/* 使用 image-set */
.el7 {
  border: 20px solid transparent;
  border-image-source: image-set(
    url('border-1x.png') 1x,
    url('border-2x.png') 2x
  );
  border-image-slice: 30;
  padding: 20px;
}
```

```html
<div class="el1">图片</div>
<div class="el2">线性渐变</div>
<div class="el3">径向渐变</div>
<div class="el4">圆锥渐变</div>
<div class="el5">重复渐变</div>
<div class="el6">无图像</div>
<div class="el7">image-set</div>
```

## 使用场景

```css
/* 渐变边框 */
.gradient-border {
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  padding: 20px;
  border-radius: 8px;
}

/* 彩虹边框 */
.rainbow-border {
  border: 4px solid transparent;
  border-image-source: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  padding: 20px;
  border-radius: 8px;
}

/* 金属边框 */
.metal-border {
  border: 5px solid transparent;
  border-image-source: linear-gradient(180deg, #silver, #gray, #silver);
  padding: 20px;
}

/* 霓虹边框 */
.neon-border {
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #00ff00, #00ffff, #ff00ff);
  padding: 20px;
  border-radius: 8px;
}

/* 图片边框 */
.image-border {
  border: 20px solid transparent;
  border-image-source: url('images/border.png');
  border-image-slice: 30;
  padding: 20px;
}

/* 响应式图片边框 */
.responsive-border {
  border: 20px solid transparent;
  border-image-source: image-set(
    url('border-1x.png') 1x,
    url('border-2x.png') 2x,
    url('border-3x.png') 3x
  );
  border-image-slice: 30;
  padding: 20px;
}

/* 卡片边框 */
.card-border {
  border: 2px solid transparent;
  border-image-source: linear-gradient(90deg, #6f42c1, #007bff);
  padding: 20px;
  border-radius: 12px;
  background-color: white;
}

/* 按钮边框 */
.btn-border {
  border: 2px solid transparent;
  border-image-source: linear-gradient(90deg, #28a745, #20c997);
  padding: 10px 20px;
  border-radius: 6px;
  background-color: white;
  font-weight: bold;
}

/* 警告边框 */
.warning-border {
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #ffc107, #ff9800);
  padding: 15px;
  border-radius: 8px;
  background-color: #fff3cd;
}

/* 成功边框 */
.success-border {
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #28a745, #20c997);
  padding: 15px;
  border-radius: 8px;
  background-color: #d4edda;
}

/* 错误边框 */
.error-border {
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #dc3545, #fd7e14);
  padding: 15px;
  border-radius: 8px;
  background-color: #f8d7da;
}

/* 信息边框 */
.info-border {
  border: 3px solid transparent;
  border-image-source: linear-gradient(90deg, #17a2b8, #0dcaf0);
  padding: 15px;
  border-radius: 8px;
  background-color: #d1ecf1;
}
