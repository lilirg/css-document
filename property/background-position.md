# background-position

该属性设置背景图像的起始位置。

## 语法

```css
background-position: <position>#
```

其中 `<position>` 定义为：

```css
<position> = [
  <percentage> | <length> | left | center | right | top | bottom |
  <percentage> | <length> | left | center | right | top | bottom
]?
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0% 0%`        |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 关键字位置

| 值 | 说明 |
|------|------|
| `left` | 左边缘（等同于 `0%`） |
| `center` | 中心（等同于 `50%`） |
| `right` | 右边缘（等同于 `100%`） |
| `top` | 上边缘（等同于 `0%`） |
| `bottom` | 下边缘（等同于 `100%`） |

### 百分比

- 第一个值：水平位置
- 第二个值：垂直位置
- `0% 0%` 表示左上角
- `50% 50%` 表示中心
- `100% 100%` 表示右下角

### 长度值

- 使用 `px`、`em`、`rem` 等单位
- 正值：从左上角向右/向下偏移
- 负值：从右下角向左/向上偏移

### 单值

如果只指定一个值，第二个值默认为 `center`。

## 注意

- 如果指定了多个背景层，每个层的位置用逗号分隔
- 值可以混合使用关键字、百分比和长度
- 背景位置相对于背景绘制区域（由 `background-origin` 决定）

## 示例

```css
/* 关键字位置 */
.el {
  background-position: center;
  background-image: url('bg.jpg');
}

.el2 {
  background-position: left top;
  background-image: url('bg.jpg');
}

.el3 {
  background-position: right bottom;
  background-image: url('bg.jpg');
}

/* 百分比位置 */
.el4 {
  background-position: 50% 50%;
  background-image: url('bg.jpg');
}

.el5 {
  background-position: 25% 75%;
  background-image: url('bg.jpg');
}

/* 长度值 */
.el6 {
  background-position: 100px 50px;
  background-image: url('bg.jpg');
}

.el7 {
  background-position: -50px -50px;
  background-image: url('bg.jpg');
}

/* 混合使用 */
.el8 {
  background-position: right 20px bottom 20px;
  background-image: url('bg.jpg');
}

/* 多个背景层 */
.el9 {
  background-image: url('pattern.png'), url('bg.jpg');
  background-position: 0 0, center;
}
```

```html
<div class="el">center</div>
<div class="el2">left top</div>
<div class="el3">right bottom</div>
<div class="el4">50% 50%</div>
<div class="el5">25% 75%</div>
<div class="el6">100px 50px</div>
<div class="el7">-50px -50px</div>
<div class="el8">right 20px bottom 20px</div>
<div class="el9">多个背景</div>
```

## 使用场景

```css
/* 居中背景图 */
.hero {
  height: 100vh;
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center center;
}

/* 右下角背景 */
.watermark {
  background-image: url('logo.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  padding: 20px;
}

/* 背景图精灵 */
.icon-home {
  width: 32px;
  height: 32px;
  background-image: url('sprite.png');
  background-position: 0 0;
  background-repeat: no-repeat;
}

.icon-search {
  width: 32px;
  height: 32px;
  background-image: url('sprite.png');
  background-position: -32px 0;
  background-repeat: no-repeat;
}

.icon-user {
  width: 32px;
  height: 32px;
  background-image: url('sprite.png');
  background-position: -64px 0;
  background-repeat: no-repeat;
}

/* 偏移背景 */
.offset-bg {
  background-image: url('pattern.png');
  background-position: 50px 50px;
  background-repeat: repeat;
}

/* 多背景不同位置 */
.complex-bg {
  background-image: 
    url('gradient.png'),
    url('pattern.png'),
    url('photo.jpg');
  background-position: 
    center,
    0 0,
    center center;
  background-size: cover, 50px 50px, cover;
}
