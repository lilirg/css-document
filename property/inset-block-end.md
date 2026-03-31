# inset-block-end

`inset-block-end` 属性是 CSS 逻辑属性，用于设置块结束方向的定位值（在垂直书写模式下是底部定位，在水平书写模式下是右侧定位）。

## 语法

```css
inset-block-end: <length-percentage> | auto;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<length-percentage>` | 长度或百分比值，相对于包含块 |
| `auto` | 自动定位（默认） |

## 示例

### 固定距离

```css
.fixed-end {
  position: absolute;
  inset-block-end: 10px;
}
```

### 百分比定位

```css
.percentage-end {
  position: absolute;
  inset-block-end: 10%;
}
```

### 自动定位

```css
.auto-end {
  position: absolute;
  inset-block-end: auto;
}
```

### 与其他定位组合

```css
.combined-end {
  position: absolute;
  inset-block-start: 10px;
  inset-block-end: 20px;
  inset-inline-start: 15px;
}
```

### HTML 示例

```html
<div class="fixed-end">固定距离</div>
<div class="percentage-end">百分比定位</div>
<div class="auto-end">自动定位</div>
<div class="combined-end">组合定位</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 87+ |
| Firefox | 87+ |
| Safari | 14.1+ |
| Edge | 87+ |
| Opera | 73+ |
| iOS Safari | 14.5+ |
| Android Browser | 87+ |

## 注意事项

1. **书写模式**：在水平书写模式（`writing-mode: horizontal-tb`）下，对应 `bottom`
2. **垂直书写**：在垂直书写模式下，对应 `right` 或 `left`（根据书写方向）
3. **需要定位**：必须设置 `position` 为非 `static` 值才能生效
4. **负值**：支持负值，可以将元素移出包含块
5. **国际化**：逻辑属性适合多语言网站，自动适应不同书写方向

## 相关属性

- [`inset-block`](inset-block.md) - 块定位速记
- [`inset-block-start`](inset-block-start.md) - 块起始定位
- [`inset-inline-end`](inset-inline-end.md) - 行内结束定位
- [`bottom`](bottom.md) - 底部定位
- [`position`](position.md) - 定位方式

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#inset-logical)