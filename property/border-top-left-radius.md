# border-top-left-radius

该属性设置元素的左上角圆角。

## 语法

```css
border-top-left-radius: <length> | <percentage>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `0`            |
| 适用 HTML 元素 | 所有元素（不包括 `table` 元素在 `border-collapse: collapse` 时） |
| 动画         | 是             |

## 值

### `<length>`

定义左上角圆角的半径。可以使用任何有效的 CSS 长度值：

| 值 | 说明 |
|------|------|
| `0` | 无圆角（直角） |
| `<length>` | 具体长度值（如 `5px`、`0.5em`） |
| `<percentage>` | 相对于元素宽度的百分比 |

### 椭圆圆角

可以使用两个值指定水平和垂直半径：

```css
border-top-left-radius: 100px 50px;  /* 水平半径 垂直半径 */
```

## 注意

- 值不能为负数
- 圆角半径不能超过元素宽度/高度的一半
- 椭圆圆角可以创建更复杂的形状

## 示例

```css
/* 无圆角 */
.el1 {
  border-top-left-radius: 0;
  border: 2px solid #333;
  padding: 20px;
}

/* 小圆角 */
.el2 {
  border-top-left-radius: 5px;
  border: 2px solid #333;
  padding: 20px;
}

/* 中等圆角 */
.el3 {
  border-top-left-radius: 10px;
  border: 2px solid #333;
  padding: 20px;
}

/* 大圆角 */
.el4 {
  border-top-left-radius: 20px;
  border: 2px solid #333;
  padding: 20px;
}

/* 百分比圆角 */
.el5 {
  border-top-left-radius: 25%;
  border: 2px solid #333;
  padding: 20px;
}

/* 椭圆圆角 */
.el6 {
  border-top-left-radius: 100px 50px;
  border: 2px solid #333;
  padding: 20px;
}

/* 使用 em 单位 */
.el7 {
  border-top-left-radius: 1em;
  border: 2px solid #333;
  padding: 20px;
}

/* 使用 rem 单位 */
.el8 {
  border-top-left-radius: 2rem;
  border: 2px solid #333;
  padding: 20px;
}
```

```html
<div class="el1">0</div>
<div class="el2">5px</div>
<div class="el3">10px</div>
<div class="el4">20px</div>
<div class="el5">25%</div>
<div class="el6">椭圆</div>
<div class="el7">1em</div>
<div class="el8">2rem</div>
```

## 使用场景

```css
/* 卡片左上角圆角 */
.card {
  border-top-left-radius: 10px;
  border: 1px solid #dee2e6;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 按钮左上角圆角 */
.btn {
  border-top-left-radius: 5px;
  border: 1px solid #007bff;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
}

/* 标签左上角圆角 */
.tag {
  border-top-left-radius: 15px;
  border: 1px solid #6c757d;
  padding: 5px 15px;
  background-color: #f8f9fa;
}

/* 椭圆左上角 */
.ellipse-top-left {
  border-top-left-radius: 100px 50px;
  border: 2px solid #333;
  padding: 20px;
}

/* 完全圆角左上角 */
.full-circle-top-left {
  width: 100px;
  height: 100px;
  border-top-left-radius: 50%;
  border: 2px solid #333;
}

/* 不对称圆角 */
.asymmetric {
  border-top-left-radius: 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 10px;
  border: 2px solid #333;
  padding: 20px;
}

/* 动态圆角（配合动画） */
.animated {
  border-top-left-radius: 10px;
  border: 2px solid #333;
  padding: 20px;
  animation: radiusChange 2s infinite;
}

@keyframes radiusChange {
  0%, 100% { border-top-left-radius: 10px; }
  50% { border-top-left-radius: 30px; }
}
