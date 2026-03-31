# mask

`mask` 属性是遮罩的速记属性，用于设置元素的遮罩效果。

## 语法

```css
mask: [ <mask-reference> || <position> || <repeat-style> || <box> || <composite-mode> ]#
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 参见各个独立属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 取决于各个独立属性 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<mask-reference>` | 遮罩图像，`none` 或 `url()` |
| `<position>` | 遮罩图像位置 |
| `<repeat-style>` | 遮罩图像重复方式 |
| `<box>` | 遮罩参考框：`border-box`、`padding-box`、`content-box` |
| `<composite-mode>` | 遮罩合成模式 |

## 注意

- `mask` 是多个遮罩相关属性的速记
- 可以设置多个遮罩层，用逗号分隔
- 现代推荐使用 `mask-image`、`mask-position` 等独立属性

## 示例

```css
/* 使用图像作为遮罩 */
.element {
  mask: url('mask.svg') no-repeat center;
}

/* 使用渐变作为遮罩 */
.element {
  mask: linear-gradient(to bottom, black 50%, transparent 100%);
}

/* 多个遮罩层 */
.element {
  mask: 
    url('mask1.svg) no-repeat left,
    url('mask2.svg) no-repeat right;
}
```

## 使用场景

```css
/* 文字遮罩效果 */
.masked-text {
  mask: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  -webkit-mask: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}

/* 圆形遮罩 */
.circle-mask {
  mask: radial-gradient(circle, black 50%, transparent 51%);
  -webkit-mask: radial-gradient(circle, black 50%, transparent 51%);
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
- [`mask-position`](mask-position.md) - 遮罩位置
- [`mask-size`](mask-size.md) - 遮罩尺寸
- [`mask-repeat`](mask-repeat.md) - 遮罩重复
- [`mask-clip`](mask-clip.md) - 遮罩裁剪
- [`mask-origin`](mask-origin.md) - 遮罩原点
- [`mask-mode`](mask-mode.md) - 遮罩模式
- [`mask-composite`](mask-composite.md) - 遮罩合成

## 规范

- [CSS Masking Module Level 1](https://www.w3.org/TR/css-masking-1/)
