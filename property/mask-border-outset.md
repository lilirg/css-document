# mask-border-outset

该属性用于设置遮罩边框的外扩距离，即边框向外延伸的距离。

## 语法

```css
mask-border-outset: <length> | <number> {1,4}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### length
长度值：
- 绝对单位（如 `10px`, `2em`）
- 相对单位（如 `1rem`, `50%`）
- 正值向外延伸，负值向内收缩

### number
数字值（无单位）：
- 相对于 `mask-border-width` 的倍数
- 例如：`2` 表示边框宽度的两倍

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边使用相同外扩 |
| 2 个值 | 上下使用第一个值，左右使用第二个值 |
| 3 个值 | 上、左右、下分别使用对应值 |
| 4 个值 | 上、右、下、左分别使用对应值（顺时针） |

## 注意
- 该属性通常与 `mask-border-width` 配合使用
- 正值使边框向外延伸，负值使边框向内收缩
- 数字值相对于边框宽度计算
- 外扩不会影响元素的布局尺寸
- 可以设置多个值对应不同边框

## 示例

```css
/* 无外扩（默认） */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 0;
}

/* 长度值外扩 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 5px;
}

/* 数字值外扩 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 0.5;
}

/* 1 个值 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-outset: 5px;
}

/* 2 个值 - 上下 / 左右 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-outset: 5px 10px;
}

/* 3 个值 - 上 / 左右 / 下 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-outset: 5px 10px 15px;
}

/* 4 个值 - 上 / 右 / 下 / 左 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-outset: 5px 10px 15px 20px;
}

/* 负值内缩 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-outset: -5px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩边框内容</div>
```

## 使用场景

```css
/* 1. 外扩边框 */
.outset-border {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 5px;
}

/* 2. 内缩边框 */
.inset-border {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: -5px;
}

/* 3. 不对称外扩 */
.asymmetric-outset {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 5px 10px 15px 20px;
}

/* 4. 数字倍数外扩 */
.multiplier-outset {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 0.5;
}

/* 5. 水平外扩 */
.horizontal-outset {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 0 10px;
}

/* 6. 垂直外扩 */
.vertical-outset {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 10px 0;
}

/* 7. 相对单位外扩 */
.relative-outset {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 0.5em;
}

/* 8. 响应式外扩 */
.responsive-outset {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
  mask-border-outset: 5px;
}
@media (min-width: 768px) {
  .responsive-outset {
    mask-border-outset: 10px;
  }
}
