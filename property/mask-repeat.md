# mask-repeat

该属性设置遮罩图像的重复方式。

## 语法

```css
mask-repeat: <repeat-style>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `repeat`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### 重复方式

| 值 | 说明 |
|------|------|
| `repeat` | 重复图像以填充整个区域（默认） |
| `repeat-x` | 仅在水平方向重复 |
| `repeat-y` | 仅在垂直方向重复 |
| `no-repeat` | 不重复图像 |
| `round` | 重复图像，缩放以适应 |
| `space` | 重复图像，添加空白 |

### 组合语法

```css
mask-repeat: repeat;            /* 所有方向重复 */
mask-repeat: repeat-x;          /* 水平重复 */
mask-repeat: repeat-y;          /* 垂直重复 */
mask-repeat: no-repeat;         /* 不重复 */
mask-repeat: repeat no-repeat;  /* 水平重复，垂直不重复 */
mask-repeat: no-repeat repeat;  /* 水平不重复，垂直重复 */
```

## 注意

- 第一个值表示水平方向
- 第二个值表示垂直方向
- 如果只指定一个值，应用于两个方向

## 示例

```css
/* 重复 - 默认 */
.el1 {
  mask-image: url('mask.png');
  mask-repeat: repeat;
  padding: 20px;
}

/* 水平重复 */
.el2 {
  mask-image: url('mask.png');
  mask-repeat: repeat-x;
  padding: 20px;
}

/* 垂直重复 */
.el3 {
  mask-image: url('mask.png');
  mask-repeat: repeat-y;
  padding: 20px;
}

/* 不重复 */
.el4 {
  mask-image: url('mask.png');
  mask-repeat: no-repeat;
  padding: 20px;
}

/* 圆整重复 */
.el5 {
  mask-image: url('mask.png');
  mask-repeat: round;
  padding: 20px;
}

/* 空间重复 */
.el6 {
  mask-image: url('mask.png');
  mask-repeat: space;
  padding: 20px;
}

/* 水平重复，垂直不重复 */
.el7 {
  mask-image: url('mask.png');
  mask-repeat: repeat no-repeat;
  padding: 20px;
}

/* 水平不重复，垂直重复 */
.el8 {
  mask-image: url('mask.png');
  mask-repeat: no-repeat repeat;
  padding: 20px;
}
```

```html
<div class="el1">repeat</div>
<div class="el2">repeat-x</div>
<div class="el3">repeat-y</div>
<div class="el4">no-repeat</div>
<div class="el5">round</div>
<div class="el6">space</div>
<div class="el7">repeat no-repeat</div>
<div class="el8">no-repeat repeat</div>
```

## 使用场景

```css
/* 平铺图案遮罩 */
.tile-mask {
  mask-image: url('images/pattern.png');
  mask-repeat: repeat;
  padding: 20px;
}

/* 水平条纹遮罩 */
.horizontal-stripe {
  mask-image: url('images/stripe.png');
  mask-repeat: repeat-x;
  padding: 20px;
}

/* 垂直条纹遮罩 */
.vertical-stripe {
  mask-image: url('images/stripe.png');
  mask-repeat: repeat-y;
  padding: 20px;
}

/* 单次显示遮罩 */
.single-mask {
  mask-image: url('images/mask.png');
  mask-repeat: no-repeat;
  mask-size: cover;
  padding: 20px;
}

/* 圆整图案遮罩 */
.round-mask {
  mask-image: url('images/pattern.png');
  mask-repeat: round;
  padding: 20px;
}

/* 空间图案遮罩 */
.space-mask {
  mask-image: url('images/icon.png');
  mask-repeat: space;
  padding: 20px;
}

/* 卡片遮罩 */
.card-mask {
  mask-image: url('images/card-mask.png');
  mask-repeat: no-repeat;
  mask-size: cover;
  padding: 20px;
  border-radius: 12px;
}

/* 渐变遮罩 */
.gradient-mask {
  mask-image: linear-gradient(to right, black 50%, transparent 100%);
  mask-repeat: no-repeat;
  padding: 20px;
}

/* 边框遮罩 */
.border-mask {
  mask-image: url('images/border-pattern.png');
  mask-repeat: repeat-x;
  padding: 20px;
}

/* 背景图案遮罩 */
.background-mask {
  mask-image: url('images/background-pattern.png');
  mask-repeat: round;
  padding: 20px;
}
