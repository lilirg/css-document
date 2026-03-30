# mask-border-repeat

该属性用于设置遮罩边框图像的重复方式。

## 语法

```css
mask-border-repeat: stretch | repeat | round | space {1,2}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `stretch` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### stretch
拉伸（默认值）：
- 将边区域拉伸以适应边框宽度
- 可能改变图像比例

### repeat
重复：
- 重复显示图像
- 可能裁剪部分图像

### round
圆整：
- 重复显示图像
- 调整图像大小以适应空间
- 保持图像完整显示

### space
间距：
- 重复显示图像
- 在图像之间均匀分布空白
- 保持图像完整显示

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边使用相同重复方式 |
| 2 个值 | 第一个值为水平方向，第二个值为垂直方向 |

## 注意
- 该属性通常与 `mask-border-image-source` 配合使用
- 只影响边区域，不影响角区域
- `stretch` 是默认值，最简单但可能失真
- `round` 和 `space` 保持图像完整但可能改变间距

## 示例

```css
/* 拉伸（默认） */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: stretch;
}

/* 重复 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: repeat;
}

/* 圆整 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: round;
}

/* 间距 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: space;
}

/* 两个方向不同 */
.box {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: repeat stretch;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩边框内容</div>
```

## 使用场景

```css
/* 1. 拉伸边框 */
.stretch-border {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: stretch;
  mask-border-width: 10px;
}

/* 2. 重复边框 */
.repeat-border {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: repeat;
  mask-border-width: 10px;
}

/* 3. 圆整边框 */
.round-border {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: round;
  mask-border-width: 10px;
}

/* 4. 间距边框 */
.space-border {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: space;
  mask-border-width: 10px;
}

/* 5. 水平重复垂直拉伸 */
.horizontal-repeat {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: repeat stretch;
  mask-border-width: 10px;
}

/* 6. 水平拉伸垂直重复 */
.vertical-repeat {
  mask-border-image-source: url('border.png');
  mask-border-slice: 30;
  mask-border-repeat: stretch repeat;
  mask-border-width: 10px;
}

/* 7. 图案边框 */
.pattern-border {
  mask-border-image-source: url('pattern.png');
  mask-border-slice: 20;
  mask-border-repeat: round;
  mask-border-width: 10px;
}

/* 8. 图标边框 */
.icon-border {
  mask-border-image-source: url('icons.png');
  mask-border-slice: 30;
  mask-border-repeat: space;
  mask-border-width: 10px;
}
