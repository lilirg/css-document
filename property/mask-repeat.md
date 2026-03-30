# mask-repeat

该属性用于设置遮罩图像的重复方式。

## 语法

```css
mask-repeat: <repeat-style>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `repeat` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### repeat
在水平和垂直方向都重复（默认值）。

### repeat-x
仅在水平方向重复。

### repeat-y
仅在垂直方向重复。

### no-repeat
不重复，只显示一次。

### space
均匀分布，不裁剪：
- 图像在两个方向均匀分布
- 完整图像显示，不留空白

### round
均匀分布，拉伸适应：
- 图像在两个方向均匀分布
- 图像会拉伸以适应空间

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 两个方向使用相同重复方式 |
| 2 个值 | 第一个值为水平方向，第二个值为垂直方向 |

## 注意
- 该属性通常与 `mask-image` 配合使用
- 可以设置多个值对应多个遮罩图像
- 重复方式影响遮罩图像的平铺效果
- `space` 和 `round` 会调整图像间距

## 示例

```css
/* 在两个方向重复（默认） */
.box {
  mask-image: url('mask.png');
  mask-repeat: repeat;
}

/* 仅在水平方向重复 */
.box {
  mask-image: url('mask.png');
  mask-repeat: repeat-x;
}

/* 仅在垂直方向重复 */
.box {
  mask-image: url('mask.png');
  mask-repeat: repeat-y;
}

/* 不重复 */
.box {
  mask-image: url('mask.png');
  mask-repeat: no-repeat;
}

/* 均匀分布不裁剪 */
.box {
  mask-image: url('mask.png');
  mask-repeat: space;
}

/* 均匀分布拉伸适应 */
.box {
  mask-image: url('mask.png');
  mask-repeat: round;
}

/* 两个方向不同重复方式 */
.box {
  mask-image: url('mask.png');
  mask-repeat: repeat-x no-repeat;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 平铺图案遮罩 */
.pattern-mask {
  mask-image: url('pattern.png');
  mask-repeat: repeat;
}

/* 2. 水平条纹遮罩 */
.horizontal-stripe {
  mask-image: url('stripe.png');
  mask-repeat: repeat-x;
}

/* 3. 垂直条纹遮罩 */
.vertical-stripe {
  mask-image: url('stripe.png');
  mask-repeat: repeat-y;
}

/* 4. 中心图案遮罩 */
.center-pattern {
  mask-image: url('pattern.png');
  mask-repeat: no-repeat;
  mask-position: center;
}

/* 5. 均匀分布遮罩 */
.space-mask {
  mask-image: url('icon.png');
  mask-repeat: space;
}

/* 6. 拉伸适应遮罩 */
.round-mask {
  mask-image: url('pattern.png');
  mask-repeat: round;
}

/* 7. 渐变不重复 */
.gradient-mask {
  mask-image: linear-gradient(to right, black, transparent);
  mask-repeat: no-repeat;
}

/* 8. 混合重复方式 */
.mixed-mask {
  mask-image: url('pattern.png');
  mask-repeat: repeat-x no-repeat;
}
