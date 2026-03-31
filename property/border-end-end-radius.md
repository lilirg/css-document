# border-end-end-radius

`border-end-end-radius` 属性是 CSS 逻辑属性，用于设置块结束 - 行内结束方向的边框圆角（在水平书写模式下是右下角圆角）。

## 语法

```css
border-end-end-radius: <length-percentage>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<length-percentage>` | 一个或两个长度/百分比值，分别控制水平和垂直方向的圆角半径 |

### 值数量

| 数量 | 说明 |
| --- | --- |
| 1 个 | 水平和垂直方向使用相同半径 |
| 2 个 | 第一个值控制水平半径，第二个值控制垂直半径 |

## 示例

### 单值圆角

```css
.single-radius {
  border-end-end-radius: 10px;
  border-end-end-style: solid;
}
```

### 双值圆角

```css
.double-radius {
  border-end-end-radius: 20px 10px;
  border-end-end-style: solid;
}
```

### 百分比圆角

```css
.percentage-radius {
  border-end-end-radius: 50%;
  border-end-end-style: solid;
}
```

### 与其他圆角组合

```css
.combined-radius {
  border-start-start-radius: 10px;
  border-start-end-radius: 20px;
  border-end-start-radius: 15px;
  border-end-end-radius: 25px;
}
```

### HTML 示例

```html
<div class="single-radius">单值圆角</div>
<div class="double-radius">双值圆角</div>
<div class="percentage-radius">百分比圆角</div>
<div class="combined-radius">组合圆角</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 69+ |
| Firefox | 66+ |
| Safari | 12.1+ |
| Edge | 79+ |
| Opera | 56+ |
| iOS Safari | 12.2+ |
| Android Browser | 69+ |

## 注意事项

1. **书写模式**：在水平书写模式（`writing-mode: horizontal-tb`）下，对应 `border-bottom-right-radius`
2. **垂直书写**：在垂直书写模式下，对应关系会根据书写方向变化
3. **需要边框**：必须同时设置边框样式才能看到圆角效果
4. **百分比参考**：百分比值相对于元素的宽度（水平）或高度（垂直）
5. **国际化**：逻辑属性适合多语言网站，自动适应不同书写方向

## 相关属性

- [`border-start-start-radius`](border-start-start-radius.md) - 开始开始圆角
- [`border-start-end-radius`](border-start-end-radius.md) - 开始结束圆角
- [`border-end-start-radius`](border-end-start-radius.md) - 结束开始圆角
- [`border-end-end-radius`](border-end-end-radius.md) - 结束结束圆角
- [`border-radius`](border-radius.md) - 圆角速记
- [`writing-mode`](writing-mode.md) - 书写模式

## 规范链接

- [CSS Logical Properties Level 1](https://www.w3.org/TR/css-logical-1/#border-radius-logical)