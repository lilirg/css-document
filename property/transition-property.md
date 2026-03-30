# transition-property

该属性指定应用过渡效果的 CSS 属性名称。

## 语法

```css
transition-property: none | <single-transition-property>#
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `all`          |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `none`

不应用任何过渡效果。即使指定了其他过渡属性，也不会产生过渡效果。

### `<single-transition-property>`

指定要应用过渡效果的 CSS 属性名称。

- 可以是任何可动画的 CSS 属性（如 `color`、`background-color`、`transform` 等）
- 可以指定多个属性，用逗号分隔
- 使用 `all` 表示所有可动画的属性

### `all`

默认值。对所有可动画的 CSS 属性应用过渡效果。

## 可动画的属性

并非所有 CSS 属性都支持过渡。以下是一些常见的可动画属性：

| 类别 | 属性示例 |
|------|----------|
| 颜色 | `color`、`background-color`、`border-color` |
| 尺寸 | `width`、`height`、`font-size` |
| 位置 | `top`、`left`、`right`、`bottom` |
| 变换 | `transform`、`translate`、`rotate`、`scale` |
| 不透明度 | `opacity` |
| 阴影 | `box-shadow`、`text-shadow` |
| 背景 | `background-position`、`background-size` |

## 注意

- 如果指定了多个过渡，每个过渡的属性用逗号分隔
- 如果属性不可动画，则该属性的过渡将被忽略
- 使用 `all` 可能会影响性能，建议只指定需要的属性

## 示例

```css
/* 所有属性过渡 */
.el {
  transition-property: all;
}

/* 特定属性过渡 */
.el2 {
  transition-property: background-color;
}

/* 多个属性过渡 */
.el3 {
  transition-property: background-color, transform, opacity;
}

/* 无过渡 */
.el4 {
  transition-property: none;
}

/* 完整的过渡设置 */
.el5 {
  transition-property: background-color, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
```

```html
<div class="el">所有属性</div>
<div class="el2">背景颜色</div>
<div class="el3">多个属性</div>
<div class="el4">无过渡</div>
<div class="el5">完整设置</div>
```

## 使用场景

```css
/* 按钮悬停效果 */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition-property: background-color, transform;
  transition-duration: 0.3s;
}

.button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* 卡片悬停效果 */
.card {
  transition-property: box-shadow, transform;
  transition-duration: 0.4s;
}

.card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

/* 输入框焦点效果 */
.input {
  border: 1px solid #ccc;
  transition-property: border-color, box-shadow;
  transition-duration: 0.2s;
}

.input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}
