# margin

该属性是外边距的速记属性，设置元素所有方向的外边距。

## 语法

```css
margin: <length> | <percentage> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### 一个值
应用于所有四个方向。

```css
margin: 10px; /* 上右下左都是 10px */
```

### 两个值
第一个值应用于上下，第二个值应用于左右。

```css
margin: 10px 20px; /* 上下 10px，左右 20px */
```

### 三个值
第一个值应用于上，第二个值应用于左右，第三个值应用于下。

```css
margin: 10px 20px 30px; /* 上 10px，左右 20px，下 30px */
```

### 四个值
按顺时针方向：上、右、下、左。

```css
margin: 10px 20px 30px 40px; /* 上 10px，右 20px，下 30px，左 40px */
```

### `auto`
自动计算外边距，常用于水平居中。

## 注意

- 外边距可能会折叠（margin collapse）
- 百分比值相对于父元素宽度计算
- 负值外边距可以创建特殊布局效果

## 示例

```css
/* CSS 示例 */
.box {
  margin: 20px;
}

.centered {
  margin: 0 auto;
}
```

```html
<!-- HTML 示例 -->
<div class="box">四周 20px 外边距</div>
<div class="centered">水平居中</div>
```

## 使用场景

```css
/* 1. 统一外边距 */
.uniform {
  margin: 15px;
}

/* 2. 垂直间距 */
.vertical {
  margin: 20px 0;
}

/* 3. 水平居中 */
.center {
  margin: 0 auto;
}

/* 4. 四边不同间距 */
.different {
  margin: 10px 20px 15px 5px;
}

/* 5. 负外边距 */
.negative {
  margin: -10px;
}

/* 6. 响应式外边距 */
.responsive {
  margin: 10px;
}
@media (min-width: 768px) {
  .responsive {
    margin: 20px 40px;
  }
}
