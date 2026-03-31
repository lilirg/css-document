# inset-inline

`inset-inline` 属性是 CSS 逻辑属性，用于设置行内方向定位（在垂直书写模式下是左右定位，在水平书写模式下是上下定位）的速记属性。

## 语法

```css
inset-inline: <length-percentage>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<length-percentage>` | 一个或两个长度/百分比值，分别对应行内起始和行内结束定位 |

### 值数量

| 数量 | 说明 |
| --- | --- |
| 1 个 | 起始和结束使用相同值 |
| 2 个 | 第一个值用于起始，第二个值用于结束 |

## 示例

### 单值定位

```css
.single-inset {
  position: absolute;
  inset-inline: 10px;
}
```

### 双值定位

```css
.double-inset {
  position: absolute;
  inset-inline: 10px 20px;
}
```

### 使用百分比

```css
.percentage-inset {
  position: absolute;
  inset-inline: 10% 20%;
}
```

### 与其他定位组合

```css
.combined-inset {
  position: absolute;
  inset-block: 10px;
  inset-inline: 20px;
}
```

### HTML 示例

```html
<div class="single-inset">单值行内定位</div>
<div class="double-inset">双值行内定位</div>
<div class="percentage-inset">百分比行内定位</div>
<div class="combined-inset">组合定位</div>
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

1. **书写模式**：在水平书写模式（`writing-mode: horizontal-tb`）下，对应 `left` 和 `right`
2. **垂直书写**：在垂直书写模式下，对应 `top` 和 `bottom`（根据书写方向）
3. **需要定位**：必须设置 `position` 为非 `static` 值才能生效
4. **简写属性**：可以使用 `inset` 速记属性同时设置所有方向
5. **国际化**：逻辑属性适合多语言网站，自动适应不同书写方向

## 相关属性

- [`inset`](inset.md) - 定位速记
- [`inset-inline-start`](inset-inline-start.md) - 行内起始定位
- [`inset-inline-end`](inset-inline-end.md) - 行内结束定位
- [`inset-block`](inset-block.md) - 块定位速记
- [`position`](position.md) - 定位方式

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#inset-logical)