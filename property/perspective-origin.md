# perspective-origin

该属性定义 3D 变换元素的透视原点位置，即观察者视角的中心点。

## 语法

```css
perspective-origin: <position>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `50% 50%` |
| 适用 HTML 元素 | 非替换元素 |
| 动画 | 是 |

## 值

### `<position>`
使用位置关键字或坐标值定义透视原点。

| 值 | 说明 |
| :--- | :--- |
| `center` | 中心点（默认） |
| `top` | 顶部 |
| `bottom` | 底部 |
| `left` | 左侧 |
| `right` | 右侧 |
| `<length>` | 固定坐标值 |
| `<percentage>` | 百分比坐标 |

## 注意

- 第一个值为 X 轴位置，第二个值为 Y 轴位置
- 与 `perspective` 属性配合使用
- 影响 3D 变换的视觉效果

## 示例

```css
/* CSS 示例 */
.container {
  perspective: 500px;
  perspective-origin: left top;
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
/* 1. 左上角透视原点 */
.top-left {
  perspective-origin: left top;
}

/* 2. 右下角透视原点 */
.bottom-right {
  perspective-origin: right bottom;
}

/* 3. 自定义坐标透视原点 */
.custom {
  perspective-origin: 25% 75%;
}

/* 4. 左侧透视原点 */
.left-origin {
  perspective-origin: left center;
}

/* 5. 顶部透视原点 */
.top-origin {
  perspective-origin: center top;
}
