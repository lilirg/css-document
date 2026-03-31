# 变换原点（Transform Origin）

变换原点控制变换的参考点。

## transform-origin 属性

```css
.element {
  transform-origin: 50% 50%;  /* 中心（默认） */
  transform-origin: 0% 0%;    /* 左上角 */
  transform-origin: 100% 100%; /* 右下角 */
  transform-origin: 20px 30px; /* 固定坐标 */
}
```

### transform-origin 语法

```css
/* 单值 */
transform-origin: 50%;        /* x: 50%, y: 50% */
transform-origin: left;       /* x: 0%, y: 50% */
transform-origin: top;        /* x: 50%, y: 0% */

/* 双值 */
transform-origin: left top;   /* x: 0%, y: 0% */
transform-origin: right bottom; /* x: 100%, y: 100% */
transform-origin: 20px 30px;  /* x: 20px, y: 30px */

/* 三值（3D） */
transform-origin: 50% 50% 20px;  /* x: 50%, y: 50%, z: 20px */
```

### transform-origin 示例

```css
/* 默认中心旋转 */
.rotate-center {
  transform: rotate(45deg);
  transform-origin: 50% 50%;
}

/* 左上角旋转 */
.rotate-top-left {
  transform: rotate(45deg);
  transform-origin: 0% 0%;
}

/* 右下角旋转 */
.rotate-bottom-right {
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

/* 固定坐标缩放 */
.scale-fixed {
  transform: scale(2);
  transform-origin: 20px 30px;
}
```

## transform-origin 应用

### 1. 旋转

```css
.rotate {
  transform: rotate(45deg);
  transform-origin: 50% 50%;
}
```

### 2. 缩放

```css
.scale {
  transform: scale(2);
  transform-origin: 0% 0%;
}
```

### 3. 倾斜

```css
.skew {
  transform: skew(30deg);
  transform-origin: 50% 50%;
}
```

### 4. 3D 变换

```css
.transform-3d {
  transform: rotateX(45deg) rotateY(45deg);
  transform-origin: 50% 50% 20px;
}
```

## 最佳实践

1. **理解变换原点** - 正确控制变换
2. **使用百分比** - 响应式变换
3. **考虑 3D** - 3D 变换需要 z 值
4. **避免过度使用** - 性能影响

## 相关链接

- [MDN: transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)
- [W3C: CSS Transforms](https://www.w3.org/TR/css-transforms-1/)