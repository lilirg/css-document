# font-kerning

`font-kerning` 属性控制字体字距调整（kerning）的启用与否，字距调整是调整特定字母对之间间距以改善视觉效果的技术。

## 语法

```css
font-kerning: normal | none | auto;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 启用字距调整，浏览器使用字体提供的字距信息 |
| `none` | 禁用字距调整，不使用任何字距调整信息 |
| `auto` | 浏览器根据字体和上下文自动决定是否启用字距调整（默认） |

## 示例

### 启用字距调整

```css
.kerned-text {
  font-family: "Georgia", serif;
  font-kerning: normal;
  font-size: 48px;
}
```

### 禁用字距调整

```css
.no-kerning {
  font-family: "Georgia", serif;
  font-kerning: none;
  font-size: 48px;
}
```

### 自动字距调整

```css
.auto-kerning {
  font-family: "Helvetica", sans-serif;
  font-kerning: auto;
}
```

### 对比示例

```html
<div class="with-kerning">AVC Test</div>
<div class="without-kerning">AVC Test</div>
```

```css
.with-kerning {
  font-family: "Times New Roman", serif;
  font-kerning: normal;
  font-size: 72px;
}

.without-kerning {
  font-family: "Times New Roman", serif;
  font-kerning: none;
  font-size: 72px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 33+ |
| Firefox | 32+ |
| Safari | 9+ |
| Edge | 14+ |
| Opera | 20+ |
| iOS Safari | 9+ |
| Android Browser | 5+ |

## 注意事项

1. **字体支持**：字距调整效果取决于字体是否包含字距调整表（kern 表）
2. **大字号效果明显**：字距调整在大字号下效果更明显
3. **常见需要字距调整的字母对**：
   - AV、AW、TA、TW、YA
   - To、Te、Wa、Ya
4. **性能考虑**：禁用字距调整可能略微提升渲染性能
5. **设计一致性**：在某些设计场景下，可能需要禁用字距调整以保持精确的间距控制

## 相关属性

- [`font-feature-settings`](font-feature-settings.md) - OpenType 字体特性
- [`font-variant`](font-variant.md) - 字体变体速记

## 规范链接

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/#font-kerning-prop)