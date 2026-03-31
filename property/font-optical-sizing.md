# font-optical-sizing

`font-optical-sizing` 属性定义文本渲染是否应尝试根据显示大小调整字形外观，用于可变字体（Variable Fonts）。

## 语法

```css
font-optical-sizing: auto | none;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 浏览器根据文本大小优化字形渲染（默认） |
| `none` | 禁用光学尺寸调整，使用字体的默认设计 |

## 示例

### 启用光学尺寸调整

```css
.optimized-text {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-size: 16px;
}
```

### 禁用光学尺寸调整

```css
.no-optical-sizing {
  font-family: "Inter", sans-serif;
  font-optical-sizing: none;
  font-size: 16px;
}
```

### 不同字号的对比

```html
<div class="small">Inter 小字号示例</div>
<div class="large">Inter 大字号示例</div>
```

```css
.small {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-size: 12px;
}

.large {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-size: 72px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 60+ |
| Firefox | 62+ |
| Safari | 13+ |
| Edge | 60+ |
| Opera | 47+ |
| iOS Safari | 13+ |
| Android Browser | 60+ |

## 注意事项

1. **可变字体支持**：此属性仅对可变字体（Variable Fonts）有效
2. **自动优化**：浏览器会自动根据字号调整字形的粗细、对比度等特征
3. **小字号优化**：小字号时字形会更粗、更清晰
4. **大字号优化**：大字号时字形会展现更多细节和对比度
5. **性能考虑**：光学尺寸调整可能会略微增加渲染时间

## 相关属性

- [`font-variation-settings`](font-variation-settings.md) - 字体变体设置
- [`font-family`](font-family.md) - 字体系列

## 规范链接

- [CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#font-optical-sizing-prop)