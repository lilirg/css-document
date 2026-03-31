# mask-repeat

`mask-repeat` 属性定义遮罩图像的重复方式。

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

| 值 | 说明 |
| :--- | :--- |
| `repeat` | 双向重复（默认） |
| `repeat-x` | 水平重复 |
| `repeat-y` | 垂直重复 |
| `no-repeat` | 不重复 |
| `round` | 伸缩重复 |
| `space` | 间距重复 |

## 注意

- 可以指定一个或两个值，分别控制水平和垂直方向
- 可以指定多个值，对应多个遮罩层
- 类似于 `background-repeat` 的行为

## 示例

```css
/* 遮罩不重复 */
.element {
  mask-repeat: no-repeat;
  mask-image: url('mask.svg);
}

/* 水平重复 */
.element {
  mask-repeat: repeat-x;
  mask-image: url('mask.svg);
}

/* 多个遮罩层，不同的重复方式 */
.element {
  mask-repeat: repeat, no-repeat;
  mask-image: url('mask1.svg), url('mask2.svg);
}
```

## 使用场景

```css
/* 图案遮罩效果 */
.pattern-mask {
  mask-repeat: repeat;
  mask-size: 50px 50px;
  mask-image: url('pattern.svg);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持（需 -webkit- 前缀） |
| Firefox | 支持 |
| Safari | 支持（需 -webkit- 前缀） |
| Edge | 支持 |

## 相关属性

- [`mask-image`](mask-image.md) - 遮罩图像
- [`mask-size`](mask-size.md) - 遮罩尺寸
- [`mask-position`](mask-position.md) - 遮罩位置
- [`mask`](mask.md) - 遮罩速记

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-repeat)
