# mask-border-width

该属性用于设置遮罩边框的宽度。

## 语法

```css
mask-border-width: <number> | <length> | auto {1,4}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### number
数字值（无单位）：
- 相对于 `mask-border-slice` 定义的区域的倍数
- 例如：`2` 表示切片区域的两倍

### length
长度值：
- 绝对单位（如 `10px`, `2em`）
- 相对单位（如 `1rem`, `50%`）

### auto
自动宽度（默认值）：
- 使用 `mask-border-slice` 定义的区域尺寸
- 自动计算边框宽度

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边使用相同宽度 |
| 2 个值 | 上下使用第一个值，左右使用第二个值 |
| 3 个值 | 上、左右、下分别使用对应值 |
| 4 个值 | 上、右、下、左分别使用对应值（顺时针） |

## 注意
- 该属性通常与 `mask-border-image-source` 配合使用
- 数字值相对于切片区域计算
- 长度值为绝对宽度
- `auto` 值使用切片区域的尺寸
- 可以设置多个值对应不同边框

## 示例

```css
/* 自动宽度（默认） */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: auto;
}

/* 数字值 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 2;
}

/* 长度值 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
}

/* 1 个值 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-width: 10px;
}

/* 2 个值 - 上下 / 左右 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-width: 10px 20px;
}

/* 3 个值 - 上 / 左右 / 下 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-width: 10px 20px 15px;
}

/* 4 个值 - 上 / 右 / 下 / 左 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-width: 10px 20px 15px 25px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩边框内容</div>
```

## 使用场景

```css
/* 1. 等宽边框 */
.equal-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
}

/* 2. 水平边框更宽 */
.horizontal-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px 30px;
}

/* 3. 垂直边框更宽 */
.vertical-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 30px 10px;
}

/* 4. 不对称边框 */
.asymmetric-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 20px 10px 15px 25px;
}

/* 5. 自动宽度 */
.auto-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: auto;
}

/* 6. 数字倍数 */
.multiplier-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 2;
}

/* 7. 相对单位 */
.relative-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 2em;
}

/* 8. 响应式边框宽度 */
.responsive-width {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-width: 10px;
}
@media (min-width: 768px) {
  .responsive-width {
    mask-border-width: 20px;
  }
}
