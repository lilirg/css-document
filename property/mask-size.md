# mask-size

该属性设置遮罩图像的尺寸。

## 语法

```css
mask-size: <mask-size> | <length> | <percentage>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 关键字尺寸

| 值 | 说明 |
|------|------|
| `auto` | 保持图像原始尺寸（默认） |
| `cover` | 缩放图像以完全覆盖元素 |
| `contain` | 缩放图像以完整显示在元素内 |

### 长度值

| 值 | 说明 |
|------|------|
| `<length>` | 具体长度值（如 `100px`、`2em`） |
| `<percentage>` | 相对于元素尺寸的百分比 |

### 组合语法

```css
mask-size: auto;              /* 单个值 - 保持原始尺寸 */
mask-size: cover;             /* 覆盖整个元素 */
mask-size: contain;           /* 完整显示在元素内 */
mask-size: 100px;             /* 宽度 100px，高度自动 */
mask-size: 100px 50px;        /* 宽度 100px，高度 50px */
mask-size: 50% 50%;           /* 宽度和高度都是元素的 50% */
```

## 注意

- 第一个值表示宽度
- 第二个值表示高度
- 如果只指定一个值，第二个值默认为 `auto`
- `cover` 和 `contain` 会保持图像的宽高比

## 示例

```css
/* 自动尺寸 */
.el1 {
  mask-image: url('mask.png');
  mask-size: auto;
  padding: 20px;
}

/* 覆盖整个元素 */
.el2 {
  mask-image: url('mask.png');
  mask-size: cover;
  padding: 20px;
}

/* 完整显示在元素内 */
.el3 {
  mask-image: url('mask.png');
  mask-size: contain;
  padding: 20px;
}

/* 固定宽度 */
.el4 {
  mask-image: url('mask.png');
  mask-size: 100px;
  padding: 20px;
}

/* 固定宽高 */
.el5 {
  mask-image: url('mask.png');
  mask-size: 100px 50px;
  padding: 20px;
}

/* 百分比尺寸 */
.el6 {
  mask-image: url('mask.png');
  mask-size: 50% 50%;
  padding: 20px;
}

/* 宽度百分比，高度自动 */
.el7 {
  mask-image: url('mask.png');
  mask-size: 100% auto;
  padding: 20px;
}

/* 使用 em 单位 */
.el8 {
  mask-image: url('mask.png');
  mask-size: 10em 5em;
  padding: 20px;
}
```

```html
<div class="el1">auto</div>
<div class="el2">cover</div>
<div class="el3">contain</div>
<div class="el4">100px</div>
<div class="el5">100px 50px</div>
<div class="el6">50% 50%</div>
<div class="el7">100% auto</div>
<div class="el8">10em 5em</div>
```

## 使用场景

```css
/* 覆盖整个元素 */
.cover-mask {
  mask-image: url('images/mask.png');
  mask-size: cover;
  padding: 20px;
}

/* 完整显示在元素内 */
.contain-mask {
  mask-image: url('images/mask.png');
  mask-size: contain;
  padding: 20px;
}

/* 固定尺寸遮罩 */
.fixed-mask {
  mask-image: url('images/mask.png');
  mask-size: 200px 100px;
  padding: 20px;
}

/* 宽度自适应 */
.width-mask {
  mask-image: url('images/mask.png');
  mask-size: 100% auto;
  padding: 20px;
}

/* 高度自适应 */
.height-mask {
  mask-image: url('images/mask.png');
  mask-size: auto 100%;
  padding: 20px;
}

/* 百分比遮罩 */
.percentage-mask {
  mask-image: url('images/mask.png');
  mask-size: 50% 50%;
  padding: 20px;
}

/* 卡片遮罩 */
.card-mask {
  mask-image: url('images/card-mask.png');
  mask-size: cover;
  padding: 20px;
  border-radius: 12px;
}

/* 重复图案遮罩 */
.pattern-mask {
  mask-image: url('images/pattern.png');
  mask-size: 50px 50px;
  mask-repeat: repeat;
  padding: 20px;
}

/* 动态尺寸（配合动画） */
.animated-size {
  mask-image: url('images/mask.png');
  mask-size: contain;
  padding: 20px;
  animation: sizeChange 3s infinite;
}

@keyframes sizeChange {
  0%, 100% { mask-size: contain; }
  50% { mask-size: cover; }
}

/* 响应式遮罩 */
.responsive-mask {
  mask-image: url('images/mask.png');
  mask-size: contain;
  padding: 20px;
}

@media (min-width: 768px) {
  .responsive-mask {
    mask-size: cover;
  }
}
