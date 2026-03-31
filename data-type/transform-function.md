# 变换函数（Transform Function）

变换函数是 CSS 中用于表示变换操作的数据类型。

## 变换函数类型

### 1. translate()

```css
/* 2D 平移 */
.element {
  transform: translate(10px, 20px);
  transform: translateX(10px);
  transform: translateY(20px);
}

/* 3D 平移 */
.element {
  transform: translateZ(30px);
  transform: translate3d(10px, 20px, 30px);
}
```

### 2. scale()

```css
/* 2D 缩放 */
.element {
  transform: scale(2);
  transform: scaleX(2);
  transform: scaleY(2);
}

/* 3D 缩放 */
.element {
  transform: scaleZ(2);
  transform: scale3d(2, 2, 2);
}
```

### 3. rotate()

```css
/* 2D 旋转 */
.element {
  transform: rotate(45deg);
}

/* 3D 旋转 */
.element {
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
  transform: rotate3d(1, 1, 1, 45deg);
}
```

### 4. skew()

```css
/* 2D 倾斜 */
.element {
  transform: skew(30deg);
  transform: skewX(30deg);
  transform: skewY(30deg);
}
```

### 5. matrix()

```css
/* 2D 变换矩阵 */
.element {
  transform: matrix(1, 0, 0, 1, 0, 0);
}

/* 3D 变换矩阵 */
.element {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}
```

## 变换函数应用

### 1. transform

```css
/* 平移 */
.translate {
  transform: translate(10px, 20px);
}

/* 缩放 */
.scale {
  transform: scale(2);
}

/* 旋转 */
.rotate {
  transform: rotate(45deg);
}

/* 倾斜 */
.skew {
  transform: skew(30deg);
}

/* 矩阵 */
.matrix {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
```

### 2. transform-origin

```css
/* 变换原点 */
.origin {
  transform: rotate(45deg);
  transform-origin: 0% 0%;
}
```

## 变换函数示例

```css
/* 平移 */
.translate {
  transform: translate(10px, 20px);
}

/* 缩放 */
.scale {
  transform: scale(2);
}

/* 旋转 */
.rotate {
  transform: rotate(45deg);
}

/* 倾斜 */
.skew {
  transform: skew(30deg);
}

/* 矩阵 */
.matrix {
  transform: matrix(1, 0, 0, 1, 0, 0);
}
```

## 最佳实践

1. **使用简写函数** - 更易读
2. **避免过度使用** - 性能影响
3. **了解限制** - 浏览器兼容性
4. **考虑响应式** - 使用相对单位

## 相关链接

- [MDN: 变换函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function)
- [W3C: CSS Transforms](https://www.w3.org/TR/css-transforms-1/)