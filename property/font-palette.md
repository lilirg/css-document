# font-palette

`font-palette` 属性用于选择彩色字体（如 COLRv1、SVG-in-OpenType 字体）中的颜色调色板，允许更改字体内置的颜色方案。

## 语法

```css
font-palette: normal | light | dark | <palette-identifier>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 使用字体的默认调色板 |
| `light` | 使用浅色调色板（如果字体提供） |
| `dark` | 使用深色调色板（如果字体提供） |
| `<palette-identifier>` | 使用 `@font-palette-values` 规则定义的调色板名称 |

## 示例

### 使用内置调色板

```css
.colored-text {
  font-family: "Noto Color Emoji", sans-serif;
  font-palette: dark;
}
```

### 自定义调色板

```css
@font-palette-values --MyPalette {
  font-family: "My Color Font";
  palette: 2;
}

.custom-palette {
  font-palette: --MyPalette;
}
```

### 深色模式适配

```css
/* 默认使用浅色调色板 */
.colored-icon {
  font-family: "Emoji Color", sans-serif;
  font-palette: light;
}

/* 深色模式下使用深色调色板 */
@media (prefers-color-scheme: dark) {
  .colored-icon {
    font-palette: dark;
  }
}
```

### 覆盖调色板颜色

```css
@font-palette-values --Custom {
  font-family: "My Color Font";
  palette: 1;
  override-colors:
    0 #FF0000,  /* 颜色 0 改为红色 */
    1 #00FF00,  /* 颜色 1 改为绿色 */
    2 #0000FF;  /* 颜色 2 改为蓝色 */
}

.custom-colored {
  font-palette: --Custom;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 111+ |
| Firefox | 115+ |
| Safari | 16.4+ |
| Edge | 111+ |
| Opera | 97+ |
| iOS Safari | 16.4+ |
| Android Browser | 111+ |

## 注意事项

1. **彩色字体支持**：仅对彩色字体（COLRv1、SVG-in-OpenType、CBDT/CBLC 等）有效
2. **字体提供调色板**：字体必须包含多个调色板才能使用 `light`/`dark` 值
3. **@font-palette-values**：CSS Fonts Module Level 4 引入的新规则，用于定义自定义调色板
4. **颜色索引**：`override-colors` 使用 0 起始的索引来覆盖特定颜色
5. **渐进增强**：不支持的浏览器会忽略此属性，使用默认颜色

## 相关属性

- [`font-family`](font-family.md) - 字体系列
- [`color`](color.md) - 文本颜色

## 规范链接

- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#font-palette-prop)
- [@font-palette-values](https://www.w3.org/TR/css-fonts-4/#font-palette-values-rule)