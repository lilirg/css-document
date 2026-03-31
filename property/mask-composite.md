# mask-composite

`mask-composite` 属性定义多个遮罩层之间的合成方式。

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

| 值 | 说明 |
| :--- | :--- |
| `add` | 添加模式，默认值 |
| `subtract` | 减去模式 |
| `intersect` | 交集模式 |
| `exclude` | 排除模式 |

## 注意

- 用于控制多个遮罩层如何组合
- 类似于 `mix-blend-mode` 但用于遮罩
- 每个遮罩层可以有不同的合成模式

## 示例

```css
/* 使用多个遮罩层，减去模式 */
.element {
  mask-image: url('mask1.svg), url('mask2.svg');
  mask-composite: subtract;
}

/* 交集模式 */
.element {
  mask-image: url('mask1.svg), url('mask2.svg');
  mask-composite: intersect;
}
```

## 使用场景

```css
/* 创建复杂遮罩效果 */
.complex-mask {
  mask-image: 
    url('base-mask.svg),
    url('detail-mask.svg),
    url('highlight-mask.svg');
  mask-composite: add, subtract;
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
- [`mask`](mask.md) - 遮罩速记
- [`mix-blend-mode`](mix-blend-mode.md) - 混合模式

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/#the-mask-composite)
