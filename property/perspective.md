# perspective

该属性定义 3D 变换元素的透视距离，即观察者与 z=0 平面之间的距离。

## 语法

```css
perspective: none | <length>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 非替换元素 |
| 动画 | 是 |

## 值

### `none`
无透视效果。

### `<length>`
透视距离值。值越小，透视效果越强烈；值越大，透视效果越弱。

## 注意

- 该属性应用于包含 3D 变换的子元素
- 值必须为正数
- 与 `transform-style: preserve-3d` 配合使用效果更佳

## 示例

```css
/* CSS 示例 */
.container {
  perspective: 500px;
}

.box {
  transform: rotateY(45deg);
}
```

```html
<!-- HTML 示例 -->
<div class="container">
  <div class="box">3D 变换内容</div>
</div>
```

## 使用场景

```css
/* 1. 卡片翻转效果 */
.card-container {
  perspective: 1000px;
}

/* 2. 3D 旋转效果 */
.scene {
  perspective: 500px;
}

/* 3. 强烈透视效果 */
.strong-perspective {
  perspective: 200px;
}

/* 4. 弱透视效果 */
.weak-perspective {
  perspective: 2000px;
}

/* 5. 3D 按钮效果 */
.button-3d {
  perspective: 800px;
}
