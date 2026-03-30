# mask-composite

该属性用于设置多个遮罩图像的复合（混合）方式。

## 语法

```css
mask-composite: <composite-mode>#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `add` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### add
添加模式（默认值）：
- 将遮罩图像叠加在一起
- 遮罩值相加
- 结果更不透明

### subtract
减去模式：
- 从当前遮罩中减去新遮罩
- 新遮罩区域被隐藏
- 用于创建镂空效果

### intersect
交集模式：
- 只显示遮罩重叠的区域
- 非重叠区域被隐藏
- 用于精确遮罩控制

### exclude
排除模式：
- 显示非重叠区域
- 重叠区域被隐藏
- 用于创建异或效果

## 注意
- 该属性仅在设置多个遮罩图像时生效
- 复合方式按顺序应用于遮罩层
- 与 `mask-image` 配合使用
- 可以设置多个值对应多个遮罩图像

## 示例

```css
/* 添加模式（默认） */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-composite: add;
}

/* 减去模式 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-composite: subtract;
}

/* 交集模式 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-composite: intersect;
}

/* 排除模式 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png');
  mask-composite: exclude;
}

/* 多个复合方式 */
.box {
  mask-image: 
    url('mask1.png'),
    url('mask2.png'),
    url('mask3.png');
  mask-composite: add, subtract;
}
```

```html
<!-- HTML 示例 -->
<div class="box">遮罩内容</div>
```

## 使用场景

```css
/* 1. 叠加遮罩效果 */
.add-mask {
  mask-image: 
    url('pattern.png'),
    url('gradient.png');
  mask-composite: add;
}

/* 2. 镂空效果 */
.subtract-mask {
  mask-image: 
    url('base.png'),
    url('hole.png');
  mask-composite: subtract;
}

/* 3. 交集遮罩 */
.intersect-mask {
  mask-image: 
    url('shape1.png'),
    url('shape2.png');
  mask-composite: intersect;
}

/* 4. 异或遮罩 */
.exclude-mask {
  mask-image: 
    url('shape1.png'),
    url('shape2.png');
  mask-composite: exclude;
}

/* 5. 多图层复合 */
.multi-composite {
  mask-image: 
    url('layer1.png'),
    url('layer2.png'),
    url('layer3.png');
  mask-composite: add, subtract;
}

/* 6. 圆形镂空 */
.circle-hole {
  mask-image: 
    url('rectangle.png'),
    url('circle.png');
  mask-composite: subtract;
}

/* 7. 星形遮罩 */
.star-mask {
  mask-image: 
    url('circle.png'),
    url('star.png');
  mask-composite: intersect;
}

/* 8. 复杂复合 */
.complex-composite {
  mask-image: 
    url('base.png'),
    url('pattern.png'),
    url('gradient.png');
  mask-composite: add, intersect;
}
