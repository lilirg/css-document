# font-variation-settings

`font-variation-settings` 属性用于控制可变字体（Variable Fonts）的变体轴，允许精确调整字体的粗细、宽度、倾斜度等特征。

## 语法

```css
font-variation-settings: normal | "<axis-tag>" <number>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 使用字体的默认变体设置 |
| `"<axis-tag>" <number>` | 指定变体轴标签和对应的数值 |

### 常见变体轴

| 轴标签 | 说明 | 典型范围 |
| --- | --- | --- |
| `"wght"` | 字重（Weight） | 100-900 |
| `"wdth"` | 字宽（Width） | 50-200 |
| `"slnt"` | 倾斜度（Slant） | -20 到 20 度 |
| `"ital"` | 斜体（Italic） | 0 或 1 |
| `"opsz"` | 光学尺寸（Optical Size） | 8-144 |
| `"GRAD"` | 字阶（Grade） | 0-1000 |
| `"XTRA"` | 额外参数 | 取决于字体 |
| `"XOPQ"` | 横向粗细 | 取决于字体 |
| `"YOPQ"` | 纵向粗细 | 取决于字体 |
| `"YTLC"` | 小写字母高度 | 取决于字体 |
| `"YTUC"` | 大写字母高度 | 取决于字体 |
| `"YTAS"` | 上升部高度 | 取决于字体 |
| `"YTDE"` | 下降部深度 | 取决于字体 |

## 示例

### 设置字重

```css
.variable-weight {
  font-family: "Inter", sans-serif;
  font-variation-settings: "wght" 450;
}
```

### 设置字宽

```css
.variable-width {
  font-family: "Roboto Flex", sans-serif;
  font-variation-settings: "wdth" 125;
}
```

### 设置倾斜度

```css
.variable-slant {
  font-family: "Roboto Flex", sans-serif;
  font-variation-settings: "slnt" -10;
}
```

### 组合多个变体轴

```css
.custom-variable {
  font-family: "Roboto Flex", sans-serif;
  font-variation-settings: 
    "wght" 600,   /* 字重 600 */
    "wdth" 90,    /* 字宽 90% */
    "slnt" -5;    /* 倾斜 -5 度 */
}
```

### 动态调整（配合 JavaScript）

```html
<input type="range" min="100" max="900" value="400" id="weightSlider">
<div class="variable-text" id="text">可变字体示例</div>
```

```css
.variable-text {
  font-family: "Inter", sans-serif;
  font-variation-settings: "wght" 400;
  transition: font-variation-settings 0.3s;
}
```

```javascript
const slider = document.getElementById('weightSlider');
const text = document.getElementById('text');

slider.addEventListener('input', (e) => {
  text.style.fontVariationSettings = `"wght" ${e.target.value}`;
});
```

### 动画效果

```css
@keyframes weightAnimation {
  0% {
    font-variation-settings: "wght" 100;
  }
  50% {
    font-variation-settings: "wght" 900;
  }
  100% {
    font-variation-settings: "wght" 100;
  }
}

.animated-text {
  font-family: "Inter", sans-serif;
  animation: weightAnimation 3s infinite;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 62+ |
| Firefox | 62+ |
| Safari | 11+ |
| Edge | 17+ |
| Opera | 49+ |
| iOS Safari | 11+ |
| Android Browser | 62+ |

## 注意事项

1. **可变字体支持**：仅对可变字体有效，普通字体忽略此属性
2. **轴标签区分大小写**：必须使用字体定义的确切标签
3. **数值范围**：每个轴都有特定的有效范围，超出范围可能被限制
4. **性能考虑**：频繁改变变体设置可能影响渲染性能
5. **字体加载**：确保可变字体已完全加载后再应用变体设置

## 相关属性

- [`font-weight`](font-weight.md) - 字体粗细
- [`font-stretch`](font-stretch.md) - 字体宽度
- [`font-style`](font-style.md) - 字体样式
- [`font-optical-sizing`](font-optical-sizing.md) - 光学尺寸调整

## 规范链接

- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#font-variation-settings-prop)
- [OpenType Variable Fonts](https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview)