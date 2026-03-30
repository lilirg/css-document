# mask-position

该属性设置遮罩图像的初始位置。

## 语法

```css
mask-position: <position>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `center`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 关键字位置

| 值 | 说明 |
|------|------|
| `top` | 顶部 |
| `bottom` | 底部 |
| `left` | 左侧 |
| `right` | 右侧 |
| `center` | 中心（默认） |

### 长度值

| 值 | 说明 |
|------|------|
| `<length>` | 具体长度值（如 `10px`、`2em`） |
| `<percentage>` | 相对于元素和图像的百分比 |

### 组合语法

```css
mask-position: center;              /* 单个值 - 水平和垂直都是中心 */
mask-position: left top;            /* 两个值 - 水平 垂直 */
mask-position: 10px 20px;           /* 两个长度值 */
mask-position: 50% 50%;             /* 两个百分比值 */
mask-position: left 10px;           /* 关键字 + 长度 */
```

## 注意

- 第一个值表示水平位置
- 第二个值表示垂直位置
- 如果只指定一个值，垂直位置默认为 `center`

## 示例

```css
/* 中心位置 */
.el1 {
  mask-image: url('mask.png');
  mask-position: center;
  padding: 20px;
}

/* 左上角 */
.el2 {
  mask-image: url('mask.png');
  mask-position: left top;
  padding: 20px;
}

/* 右下角 */
.el3 {
  mask-image: url('mask.png');
  mask-position: right bottom;
  padding: 20px;
}

/* 使用长度值 */
.el4 {
  mask-image: url('mask.png');
  mask-position: 10px 20px;
  padding: 20px;
}

/* 使用百分比 */
.el5 {
  mask-image: url('mask.png');
  mask-position: 50% 50%;
  padding: 20px;
}

/* 左侧居中 */
.el6 {
  mask-image: url('mask.png');
  mask-position: left center;
  padding: 20px;
}

/* 顶部居中 */
.el7 {
  mask-image: url('mask.png');
  mask-position: center top;
  padding: 20px;
}

/* 单个值 */
.el8 {
  mask-image: url('mask.png');
  mask-position: 25%;
  padding: 20px;
}
```

```html
<div class="el1">center</div>
<div class="el2">left top</div>
<div class="el3">right bottom</div>
<div class="el4">10px 20px</div>
<div class="el5">50% 50%</div>
<div class="el6">left center</div>
<div class="el7">center top</div>
<div class="el8">25%</div>
```

## 使用场景

```css
/* 居中对齐遮罩 */
.center-mask {
  mask-image: url('images/mask.png');
  mask-position: center;
  mask-size: cover;
  padding: 20px;
}

/* 左上角对齐 */
.top-left-mask {
  mask-image: url('images/mask.png');
  mask-position: left top;
  mask-size: contain;
  padding: 20px;
}

/* 右下角对齐 */
.bottom-right-mask {
  mask-image: url('images/mask.png');
  mask-position: right bottom;
  mask-size: contain;
  padding: 20px;
}

/* 偏移遮罩 */
.offset-mask {
  mask-image: url('images/mask.png');
  mask-position: 10px 10px;
  padding: 20px;
}

/* 百分比定位 */
.percentage-mask {
  mask-image: url('images/mask.png');
  mask-position: 25% 75%;
  padding: 20px;
}

/* 左侧对齐 */
.left-mask {
  mask-image: url('images/mask.png');
  mask-position: left;
  padding: 20px;
}

/* 顶部对齐 */
.top-mask {
  mask-image: url('images/mask.png');
  mask-position: top;
  padding: 20px;
}

/* 动态位置（配合动画） */
.animated-position {
  mask-image: url('images/mask.png');
  mask-position: left;
  padding: 20px;
  animation: positionMove 3s infinite;
}

@keyframes positionMove {
  0%, 100% { mask-position: left; }
  50% { mask-position: right; }
}

/* 卡片遮罩 */
.card-mask {
  mask-image: url('images/card-mask.png');
  mask-position: center;
  mask-size: cover;
  padding: 20px;
  border-radius: 12px;
}

/* 渐变遮罩位置 */
.gradient-position {
  mask-image: linear-gradient(to right, black 50%, transparent 100%);
  mask-position: left;
  padding: 20px;
}
