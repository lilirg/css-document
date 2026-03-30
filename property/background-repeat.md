# background-repeat

该属性设置背景图像的重复方式。

## 语法

```css
background-repeat: <repeat-style>#
```

其中 `<repeat-style>` 定义为：

```css
<repeat-style> = repeat | space | round | no-repeat | repeat-x | repeat-y
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `repeat`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 基本重复方式

| 值 | 说明 |
|------|------|
| `repeat` | 默认值。背景图像在水平和垂直方向都重复 |
| `repeat-x` | 背景图像只在水平方向重复 |
| `repeat-y` | 背景图像只在垂直方向重复 |
| `no-repeat` | 背景图像不重复 |

### 高级重复方式

| 值 | 说明 |
|------|------|
| `space` | 图像在两个方向都重复，图像之间均匀分布，不留空白 |
| `round` | 图像在两个方向都重复，如果空间不足会拉伸图像 |

### 组合值

可以指定两个值，分别控制水平和垂直方向的重复：

```css
background-repeat: repeat no-repeat;  /* 水平重复，垂直不重复 */
background-repeat: space round;       /* 水平 space，垂直 round */
```

## 注意

- 如果指定了多个背景层，每个层的重复方式用逗号分隔
- 当指定两个值时，第一个值控制水平方向，第二个值控制垂直方向
- 如果只指定一个值，另一个方向默认为 `no-repeat`

## 示例

```css
/* 双向重复 */
.el {
  background-repeat: repeat;
  background-image: url('pattern.png');
}

/* 水平重复 */
.el2 {
  background-repeat: repeat-x;
  background-image: url('stripe.png');
}

/* 垂直重复 */
.el3 {
  background-repeat: repeat-y;
  background-image: url('stripe.png');
}

/* 不重复 */
.el4 {
  background-repeat: no-repeat;
  background-image: url('logo.png');
}

/* 均匀分布 */
.el5 {
  background-repeat: space;
  background-image: url('icon.png');
}

/* 拉伸适应 */
.el6 {
  background-repeat: round;
  background-image: url('pattern.png');
}

/* 组合值 */
.el7 {
  background-repeat: repeat-x no-repeat;
  background-image: url('bg.png');
}

/* 多个背景层 */
.el8 {
  background-image: url('pattern1.png'), url('pattern2.png');
  background-repeat: repeat, no-repeat;
}
```

```html
<div class="el">repeat</div>
<div class="el2">repeat-x</div>
<div class="el3">repeat-y</div>
<div class="el4">no-repeat</div>
<div class="el5">space</div>
<div class="el6">round</div>
<div class="el7">组合</div>
<div class="el8">多个背景</div>
```

## 使用场景

```css
/* 平铺背景 */
.tiled-bg {
  background-image: url('pattern.png');
  background-repeat: repeat;
  background-size: 50px 50px;
}

/* 顶部边框 */
.top-border {
  background-image: url('border-top.png');
  background-repeat: repeat-x;
  background-position: top;
  padding-top: 10px;
}

/* 侧边栏背景 */
.sidebar {
  background-image: url('sidebar-bg.png');
  background-repeat: repeat-y;
  width: 250px;
}

/* 居中 Logo */
.header {
  background-image: url('logo.png');
  background-repeat: no-repeat;
  background-position: center;
  height: 80px;
}

/* 图标网格 */
.icon-grid {
  background-image: url('icons.png');
  background-repeat: space;
  padding: 20px;
}

/* 响应式图案 */
.responsive-pattern {
  background-image: url('pattern.png');
  background-repeat: round;
  background-size: 30px 30px;
}

/* 顶部渐变条 */
.gradient-bar {
  background-image: linear-gradient(to right, #ff6b6b, #4ecdc4);
  background-repeat: repeat-x;
  height: 5px;
}

/* 多背景不同重复 */
.complex-bg {
  background-image: 
    url('pattern.png'),
    url('photo.jpg');
  background-repeat: repeat, no-repeat;
  background-size: 50px 50px, cover;
}
