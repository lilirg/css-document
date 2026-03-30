# border-radius

该属性设置元素的圆角边框。

## 语法

```css
border-radius: <length>{1,4} [ / <length>{1,4} ]?
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 所有元素（不包括 `table` 元素在 `border-collapse: collapse` 时） |
| 动画         | 是             |

## 值

### `<length>`

定义圆角的半径。可以使用任何有效的 CSS 长度值：

| 值 | 说明 |
|------|------|
| `0` | 无圆角（直角） |
| `<length>` | 具体长度值（如 `5px`、`0.5em`） |
| `<percentage>` | 相对于元素宽度的百分比 |

### 多值语法

可以指定 1 到 4 个值，分别设置不同角的圆角：

```css
/* 四个角相同 */
border-radius: 10px;

/* 上下，左右 */
border-radius: 10px 20px;

/* 上左，左右，下 */
border-radius: 10px 20px 30px;

/* 左上，右上，右下，左下 */
border-radius: 10px 20px 30px 40px;
```

### 椭圆圆角（斜杠语法）

使用斜杠指定水平和垂直半径：

```css
/* 水平半径 / 垂直半径 */
border-radius: 100px / 50px;

/* 四个角：左上 / 右上 / 右下 / 左下 */
border-radius: 10px 20px 30px 40px / 5px 10px 15px 20px;
```

## 注意

- 值不能为负数
- 圆角半径不能超过元素宽度/高度的一半
- 椭圆圆角可以创建更复杂的形状

## 示例

```css
/* 无圆角 */
.el1 {
  border-radius: 0;
  border: 2px solid #333;
  padding: 20px;
}

/* 小圆角 */
.el2 {
  border-radius: 5px;
  border: 2px solid #333;
  padding: 20px;
}

/* 中等圆角 */
.el3 {
  border-radius: 10px;
  border: 2px solid #333;
  padding: 20px;
}

/* 大圆角 */
.el4 {
  border-radius: 20px;
  border: 2px solid #333;
  padding: 20px;
}

/* 完全圆角（圆形） */
.el5 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #333;
}

/* 单个角 */
.el6 {
  border-top-left-radius: 20px;
  border: 2px solid #333;
  padding: 20px;
}

/* 两个角 */
.el7 {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 2px solid #333;
  padding: 20px;
}

/* 多值设置 */
.el8 {
  border-radius: 10px 20px 30px 40px;
  border: 2px solid #333;
  padding: 20px;
}

/* 椭圆圆角 */
.el9 {
  border-radius: 100px / 50px;
  border: 2px solid #333;
  padding: 20px;
}

/* 百分比圆角 */
.el10 {
  border-radius: 25%;
  border: 2px solid #333;
  padding: 20px;
}
```

```html
<div class="el1">0</div>
<div class="el2">5px</div>
<div class="el3">10px</div>
<div class="el4">20px</div>
<div class="el5">50%</div>
<div class="el6">左上角</div>
<div class="el7">上边两角</div>
<div class="el8">10 20 30 40</div>
<div class="el9">椭圆</div>
<div class="el10">25%</div>
```

## 使用场景

```css
/* 按钮圆角 */
.btn {
  border-radius: 5px;
  border: 1px solid #007bff;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
}

/* 卡片圆角 */
.card {
  border-radius: 10px;
  border: 1px solid #dee2e6;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 胶囊按钮 */
.btn-capsule {
  border-radius: 50px;
  border: 1px solid #28a745;
  padding: 10px 30px;
  background-color: #28a745;
  color: white;
}

/* 圆形头像 */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #007bff;
  object-fit: cover;
}

/* 圆角输入框 */
.input-rounded {
  border-radius: 25px;
  border: 1px solid #ced4da;
  padding: 10px 20px;
}

/* 圆角标签 */
.tag {
  border-radius: 15px;
  border: 1px solid #6c757d;
  padding: 5px 15px;
  background-color: #f8f9fa;
}

/* 不对称圆角 */
.asymmetric {
  border-radius: 10px 30px 10px 30px;
  border: 2px solid #333;
  padding: 20px;
}

/* 椭圆圆角 - 药丸形状 */
.pill {
  border-radius: 100px / 50px;
  border: 2px solid #ff6b6b;
  padding: 20px 40px;
}

/* 仅顶部圆角 */
.top-rounded {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 2px solid #333;
  border-bottom: none;
  padding: 20px;
}

/* 仅底部圆角 */
.bottom-rounded {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 2px solid #333;
  border-top: none;
  padding: 20px;
}
