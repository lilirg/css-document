# text-emphasis-color

`text-emphasis-color` 属性设置文本强调标记的颜色，用于在文本上添加强调标记（如点、圈等）。

## 语法

```css
text-emphasis-color: <color>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<color>` | 任何有效的 CSS 颜色值 |

### 颜色值类型

| 类型 | 示例 |
| --- | --- |
| 颜色关键字 | `red`, `blue`, `green` |
| 十六进制 | `#ff0000`, `#00f` |
| RGB | `rgb(255, 0, 0)`, `rgb(100% 0% 0%)` |
| RGBA | `rgba(255, 0, 0, 0.5)` |
| HSL | `hsl(0, 100%, 50%)` |
| HSLA | `hsla(0, 100%, 50%, 0.5)` |

## 示例

### 基本用法

```css
.red-emphasis {
  text-emphasis-style: dot;
  text-emphasis-color: red;
}
```

### 使用十六进制颜色

```css
.hex-emphasis {
  text-emphasis-style: circle;
  text-emphasis-color: #ff6600;
}
```

### 使用 RGBA 颜色（半透明）

```css
.transparent-emphasis {
  text-emphasis-style: triangle;
  text-emphasis-color: rgba(0, 128, 255, 0.6);
}
```

### 使用 HSL 颜色

```css
.hsl-emphasis {
  text-emphasis-style: sesame;
  text-emphasis-color: hsl(120, 100%, 25%);
}
```

### 继承当前文本颜色

```css
.inherit-color {
  text-emphasis-style: dot;
  text-emphasis-color: currentColor;
}
```

### HTML 示例

```html
<p class="red-emphasis">红色强调</p>
<p class="hex-emphasis">橙色强调</p>
<p class="transparent-emphasis">半透明强调</p>
<p class="inherit-color">继承颜色强调</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 25+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 不支持 |
| Opera | 14.1+ |
| iOS Safari | 不支持 |
| Android Browser | 4.4+ |

**注意**：此属性在 Firefox 和 Safari 中需要前缀：
- Firefox: `-moz-text-emphasis-color`
- Safari: `-webkit-text-emphasis-color`

## 注意事项

1. **与 text-emphasis-style 配合使用**：必须先设置 `text-emphasis-style` 才能看到效果
2. **currentColor**：使用 `currentColor` 可以让强调标记颜色跟随文本颜色变化
3. **透明度**：支持带透明度的颜色值，可以创建半透明强调效果
4. **东亚文字**：此属性主要用于中文、日文、韩文等东亚文字的排版
5. **前缀支持**：某些浏览器需要添加 `-webkit-` 或 `-moz-` 前缀

## 相关属性

- [`text-emphasis`](text-emphasis.md) - 强调标记速记
- [`text-emphasis-style`](text-emphasis-style.md) - 强调标记样式
- [`text-emphasis-position`](text-emphasis-position.md) - 强调标记位置
- [`color`](color.md) - 文本颜色

## 规范链接

- [CSS Text Decoration Module Level 3](https://www.w3.org/TR/css-text-decor-3/#text-emphasis-color-prop)