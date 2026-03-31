# mask-border

`mask-border` 属性是遮罩边框的速记属性，用于使用图像创建元素的边框遮罩效果。

## 语法

```css
mask-border: <mask-border-source> || <mask-border-slice> || <mask-border-width> || <mask-border-outset> || <mask-border-repeat> || <mask-border-mode>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 参见各个独立属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 取决于各个独立属性 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<mask-border-source>` | 遮罩边框图像源：`none` 或 `url()` |
| `<mask-border-slice>` | 图像切片比例 |
| `<mask-border-width>` | 边框宽度 |
| `<mask-border-outset>` | 边框外扩距离 |
| `<mask-border-repeat>` | 图像重复方式：`stretch`、`repeat`、`round`、`space` |
| `<mask-border-mode>` | 遮罩模式：`alpha` 或 `luminance` |

## 注意

- `mask-border` 是多个遮罩边框相关属性的速记
- 类似于 `border-image`，但用于遮罩效果
- 使用 SVG 或图像创建复杂的边框遮罩

## 示例

```css
/* 使用图像作为遮罩边框 */
.element {
  mask-border: url('border-mask.svg') 30 stretch;
}

/* 完整语法 */
.element {
  mask-border: url('border-mask.svg') 30% / 20px / 5px space alpha;
}
```

## 使用场景

```css
/* 装饰性边框遮罩效果 */
.framed-box {
  mask-border: url('ornament-mask.svg') 40% / 30px / 10px round alpha;
  border: 30px solid transparent;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 不支持 |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 不支持 |

## 相关属性

- [`mask-border-source`](mask-border-source.md) - 遮罩边框源
- [`mask-border-slice`](mask-border-slice.md) - 遮罩边框切片
- [`mask-border-width`](mask-border-width.md) - 遮罩边框宽度
- [`mask-border-outset`](mask-border-outset.md) - 遮罩边框外扩
- [`mask-border-repeat`](mask-border-repeat.md) - 遮罩边框重复
- [`mask-border-mode`](mask-border-mode.md) - 遮罩边框模式

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/)
