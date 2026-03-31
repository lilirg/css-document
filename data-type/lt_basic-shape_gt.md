# basic-shape

`basic-shape` 数据类型表示基本形状，常用于 `clip-path`、`shape-outside` 等属性。

## 语法

```css
/* 矩形 */
.element {
  clip-path: inset(10px 20px 30px 40px);
}

/* 圆形 */
.element {
  clip-path: circle(50% at 50% 50%);
}

/* 椭圆 */
.element {
  clip-path: ellipse(30% 50% at 50% 50%);
}

/* 多边形 */
.element {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分函数） |

## 函数

| 函数 | 描述 |
| :--- | :--- |
| `inset()` | 矩形，定义内边距 |
| `circle()` | 圆形 |
| `ellipse()` | 椭圆 |
| `polygon()` | 多边形 |

## 示例

### 矩形 (inset)

```css
/* inset(top right bottom left) */
.element {
  clip-path: inset(10px 20px 30px 40px);
}

/* 带圆角 */
.element {
  clip-path: inset(10px round 5px);
}
```

### 圆形 (circle)

```css
/* circle(radius at position) */
.element {
  clip-path: circle(50%);
}

/* 圆心在中心 */
.element {
  clip-path: circle(50% at 50% 50%);
}

/* 圆心在左上角 */
.element {
  clip-path: circle(50% at 0% 0%);
}
```

### 椭圆 (ellipse)

```css
/* ellipse(radius-x radius-y at position) */
.element {
  clip-path: ellipse(30% 50% at 50% 50%);
}
```

### 多边形 (polygon)

```css
/* polygon(x1 y1, x2 y2, ...) */
.element {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* 三角形 */
.element {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* 六边形 */
.element {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
```

### shape-outside

```css
/* 让文本环绕形状 */
.element {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  height: 200px;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 37+ |
| Firefox | 51+ |
| Safari | 9+ |
| Edge | 79+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: basic-shape](https://developer.mozilla.org/zh-CN/docs/Web/CSS/basic-shape)
- [CSS Shapes Module Level 1](https://www.w3.org/TR/css-shapes-1/)
