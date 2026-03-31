# inset()

`inset()` 函数用于定义一个矩形的形状，通常与 `shape-outside` 属性一起使用，以实现文本环绕矩形元素的效果。

## 语法

```css
/* 基本语法 */
inset(rect)

/* 矩形参数 */
inset(10px 20px 30px 40px)  /* 上右下左 */
inset(10px 20px)            /* 上下10px，左右20px */
inset(10px)                 /* 四边都是10px */
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `inset(0px 0px 0px 0px)` |
| 适用HTML元素 | 所有元素（主要用于浮动元素） |
| 动画 | 支持 |

## 属性值

`inset()` 函数接受 1 到 4 个长度值或百分比，按顺时针方向定义矩形的边：

### 单个值

```css
inset(10px)  /* 四边都是 10px */
```

### 两个值

```css
inset(10px 20px)  /* 上下 10px，左右 20px */
```

### 三个值

```css
inset(10px 20px 30px)  /* 上 10px，左右 20px，下 30px */
```

### 四个值

```css
inset(10px 20px 30px 40px)  /* 上 10px，右 20px，下 30px，左 40px */
```

### 单位

- **长度单位**：`px`、`em`、`rem`、`pt` 等
- **百分比**：相对于包含块的百分比

## 示例

### 基本矩形

```css
/* 矩形四边都是 20px */
.shape {
  shape-outside: inset(20px);
  float: left;
  width: 200px;
  height: 200px;
  background: #9b59b6;
}
```

```html
<div class="shape"></div>
<p>这段文字将环绕矩形元素排列...</p>
```

### 不同边距

```css
/* 上下 10px，左右 30px */
.rectangle {
  shape-outside: inset(10px 30px);
  float: left;
  width: 200px;
  height: 100px;
}
```

### 四边不同

```css
/* 上 10px，右 20px，下 30px，左 40px */
.irregular {
  shape-outside: inset(10px 20px 30px 40px);
  float: left;
  width: 200px;
  height: 150px;
}
```

### 百分比

```css
/* 四边都是容器的 10% */
.percent {
  shape-outside: inset(10%);
  float: left;
  width: 200px;
  height: 100px;
}
```

### 与 shape-margin 配合使用

```css
/* 矩形加上外边距 */
.rectangle-with-margin {
  shape-outside: inset(20px);
  shape-margin: 10px;
  float: left;
  width: 200px;
  height: 100px;
}
```

### 圆角矩形

```css
/* 矩形加上圆角 */
.rounded-rectangle {
  shape-outside: inset(10px round 20px);
  float: left;
  width: 200px;
  height: 100px;
  border-radius: 20px;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 37+ | 完全支持 |
| Firefox | 62+ | 完全支持 |
| Safari | 7+ | 完全支持 |
| Edge | 79+ | 完全支持 |
| IE | 不支持 | 无 |

## 相关链接

- [MDN: inset()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside#inset)
- [W3C: CSS Shapes Module Level 1 - inset()](https://www.w3.org/TR/css-shapes-1/#inset-function)
