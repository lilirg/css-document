# text-size-adjust

`text-size-adjust` 属性控制文本大小在移动设备上的自动调整行为，用于优化移动设备上的文本可读性。

## 语法

```css
text-size-adjust: auto | none | <percentage>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 浏览器自动调整文本大小（默认，移动设备） |
| `none` | 禁用文本大小自动调整 |
| `<percentage>` | 设置文本大小调整的百分比（100% 表示不调整） |

## 示例

### 禁用自动调整

```css
.no-adjust {
  text-size-adjust: none;
}
```

### 设置调整比例

```css
.partial-adjust {
  text-size-adjust: 80%;
}
```

### 允许自动调整

```css
.auto-adjust {
  text-size-adjust: auto;
}
```

### 移动端优化

```css
.mobile-optimized {
  /* 禁用 iOS 的自动文本调整 */
  -webkit-text-size-adjust: none;
  /* 标准属性 */
  text-size-adjust: none;
}
```

### HTML 示例

```html
<p class="no-adjust">禁用调整文本</p>
<p class="partial-adjust">部分调整文本</p>
<p class="auto-adjust">自动调整文本</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 55+ |
| Firefox | 不支持 |
| Safari | 需要 -webkit- 前缀 |
| Edge | 79+ |
| Opera | 42+ |
| iOS Safari | 需要 -webkit- 前缀 |
| Android Browser | 55+ |

**注意**：在 iOS Safari 中需要使用 `-webkit-text-size-adjust` 前缀。

## 注意事项

1. **移动设备**：此属性主要用于移动设备，桌面浏览器通常忽略此属性
2. **iOS 行为**：iOS Safari 默认会放大横屏模式下的小字号文本
3. **禁用影响**：禁用自动调整可能导致小字号文本在移动设备上难以阅读
4. **前缀支持**：iOS Safari 需要 `-webkit-` 前缀
5. **与 viewport 配合**：通常与 `<meta name="viewport">` 配合使用
6. **推荐值**：通常使用 `none` 或 `100%` 来禁用自动调整

## 相关属性

- [`font-size`](font-size.md) - 字体大小
- [`viewport`](viewport.md) - 视口设置

## 规范链接

- [CSS Mobile Text Size Adjustment](https://www.w3.org/TR/css-mobile-text-size-adjust/)