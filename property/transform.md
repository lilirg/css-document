# transform

该属性允许对元素进行旋转、缩放、倾斜或平移。

## 语法

```css
transform: none | <transform-function>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `none`

不应用任何变换。

### `<transform-function>`

变换函数：

- `matrix()` - 2D 变换矩阵
- `translate()` - 平移
- `translateX()` - 水平平移
- `translateY()` - 垂直平移
- `scale()` - 缩放
- `scaleX()` - 水平缩放
- `scaleY()` - 垂直缩放
- `rotate()` - 旋转
- `skew()` - 倾斜
- `skewX()` - 水平倾斜
- `skewY()` - 垂直倾斜
- `matrix3d()` - 3D 变换矩阵
- `translate3d()` - 3D 平移
- `translateZ()` - Z 轴平移
- `scale3d()` - 3D 缩放
- `scaleZ()` - Z 轴缩放
- `rotate3d()` - 3D 旋转
- `rotateX()` - X 轴旋转
- `rotateY()` - Y 轴旋转
- `rotateZ()` - Z 轴旋转

## 注意

- 变换不会改变文档流
- 与 `transform-origin` 配合使用
- 与 `transform-style` 配合使用

## 示例

```css
/* 旋转 */
.rotate {
  transform: rotate(45deg);
}

/* 缩放 */
.scale {
  transform: scale(1.5);
}

/* 平移 */
.translate {
  transform: translate(100px, 50px);
}

/* 倾斜 */
.skew {
  transform: skew(20deg, 10deg);
}
```

```html
<!-- 变换示例 -->
<div class="transform-element">变换元素</div>
```

## 使用场景

```css
/* 2D 旋转 */
.rotate-2d {
  transform: rotate(45deg);
}

/* 2D 缩放 */
.scale-2d {
  transform: scale(1.5, 0.8);
}

/* 2D 平移 */
.translate-2d {
  transform: translate(100px, 50px);
}

/* 2D 倾斜 */
.skew-2d {
  transform: skew(20deg);
}

/* 3D 旋转 */
.rotate-3d {
  transform: rotate3d(1, 1, 1, 45deg);
}

/* 3D 缩放 */
.scale-3d {
  transform: scale3d(1.5, 1.5, 1.5);
}

/* 3D 平移 */
.translate-3d {
  transform: translate3d(100px, 50px, 20px);
}

/* 组合变换 */
.combined {
  transform: translate(50px) rotate(45deg) scale(1.2);
}

/* 悬停效果 */
.hover-effect {
  transition: transform 0.3s;
}

.hover-effect:hover {
  transform: scale(1.1);
}

/* 翻转卡片 */
.flip-card {
  transform: rotateY(180deg);
}

/* 镜像效果 */
.mirror {
  transform: scaleX(-1);
}

/* 垂直镜像 */
.mirror-vertical {
  transform: scaleY(-1);
}

/* 按钮悬停 */
.button-hover {
  transition: transform 0.2s;
}

.button-hover:hover {
  transform: translateY(-2px);
}

/* 卡片悬停 */
.card-hover {
  transition: transform 0.3s;
}

.card-hover:hover {
  transform: scale(1.05);
}

/* 加载动画 */
.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

/* 弹跳动画 */
.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* 脉冲动画 */
.pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* 摇晃动画 */
.shake {
  animation: shake 0.5s infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* 淡入淡出 */
.fade {
  animation: fade 2s infinite;
}

@keyframes fade {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 3D 立方体 */
.cube {
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(45deg);
}

/* 视差效果 */
.parallax {
  transform: translateZ(-100px) scale(2);
}

/* 响应式变换 */
.responsive-transform {
  transform: scale(1);
}

@media (min-width: 768px) {
  .responsive-transform {
    transform: scale(1.2);
  }
}

/* 矩阵变换 */
.matrix-transform {
  transform: matrix(1, 0, 0, 1, 50, 0);
}

/* 3D 矩阵 */
.matrix3d-transform {
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 0, 0, 1);
}
