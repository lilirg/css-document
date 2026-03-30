# background-size

该属性设置背景图像的大小。

## 语法

```css
background-size: <bg-size>#
```

其中 `<bg-size>` 定义为：

```css
<bg-size> = [ <length> | <percentage> | auto ]{1,2} | cover | contain
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto auto`    |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 关键字

| 值 | 说明 |
|------|------|
| `cover` | 缩放图像以覆盖整个背景区域，保持宽高比，可能裁剪图像 |
| `contain` | 缩放图像以完整显示，保持宽高比，可能留白 |

### 长度值

- 使用 `px`、`em`、`rem` 等单位
- 可以指定一个或两个值
- 一个值：第二个值默认为 `auto`

### 百分比

- 相对于背景定位区域的大小
- 可以指定一个或两个值

### `auto`

保持图像的原始尺寸。

### 组合

```css
background-size: 100px;        /* 宽度 100px，高度 auto */
background-size: 100px 50px;   /* 宽度 100px，高度 50px */
background-size: 50% auto;     /* 宽度 50%，高度 auto */
```

## 注意

- 如果指定了多个背景层，每个层的大小用逗号分隔
- `cover` 和 `contain` 会保持图像的原始宽高比
- 使用长度或百分比可以精确控制图像大小

## 示例

```css
/* 覆盖整个区域 */
.el {
  background-size: cover;
  background-image: url('bg.jpg');
  background-position: center;
}

/* 完整显示图像 */
.el2 {
  background-size: contain;
  background-image: url('logo.png');
  background-position: center;
  background-repeat: no-repeat;
}

/* 固定宽度 */
.el3 {
  background-size: 200px;
  background-image: url('bg.jpg');
}

/* 固定宽高 */
.el4 {
  background-size: 200px 100px;
  background-image: url('bg.jpg');
}

/* 百分比 */
.el5 {
  background-size: 50% 50%;
  background-image: url('bg.jpg');
}

/* 宽度固定，高度自动 */
.el6 {
  background-size: 100px auto;
  background-image: url('bg.jpg');
}

/* 宽度自动，高度固定 */
.el7 {
  background-size: auto 100px;
  background-image: url('bg.jpg');
}

/* 多个背景层 */
.el8 {
  background-image: url('pattern.png'), url('bg.jpg');
  background-size: 50px 50px, cover;
}
```

```html
<div class="el">cover</div>
<div class="el2">contain</div>
<div class="el3">200px</div>
<div class="el4">200px 100px</div>
<div class="el5">50% 50%</div>
<div class="el6">100px auto</div>
<div class="el7">auto 100px</div>
<div class="el8">多个背景</div>
```

## 使用场景

```css
/* 全屏背景图 */
.hero {
  height: 100vh;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center center;
}

/* Logo 背景 */
.header {
  height: 80px;
  background-image: url('logo.png');
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
}

/* 平铺图案 */
.pattern-bg {
  background-image: url('pattern.png');
  background-size: 50px 50px;
  background-repeat: repeat;
}

/* 响应式背景 */
.responsive-bg {
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
}

/* 卡片背景图 */
.card {
  height: 200px;
  background-image: url('card-bg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}

/* 多背景不同大小 */
.complex-bg {
  background-image: 
    url('gradient.png'),
    url('pattern.png'),
    url('photo.jpg');
  background-size: 
    100% 100%,
    30px 30px,
    cover;
  background-position: center;
}

/* 固定尺寸背景 */
.icon-bg {
  width: 64px;
  height: 64px;
  background-image: url('icon.png');
  background-size: 64px 64px;
  background-repeat: no-repeat;
}

/* 宽度自适应 */
.full-width-bg {
  background-image: url('bg.jpg');
  background-size: 100% auto;
  background-position: top;
}
