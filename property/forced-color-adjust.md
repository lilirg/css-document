# forced-color-adjust

`forced-color-adjust` 属性定义在强制颜色模式（如 Windows 高对比度模式）下，作者样式是否可以被用户代理调整。

## 语法

```css
forced-color-adjust: auto | none;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 用户代理可以调整颜色以适应强制颜色模式（默认） |
| `none` | 禁止用户代理调整作者指定的颜色 |

## 示例

### 基本用法

```css
.button {
  forced-color-adjust: none;
  background-color: #007bff;
  color: white;
  border: 2px solid #0056b3;
}
```

### 允许调整

```css
.adaptive-element {
  forced-color-adjust: auto;
  background-color: #f0f0f0;
  color: #333;
}
```

### 高对比度模式优化

```css
@media (forced-colors: active) {
  .high-contrast {
    forced-color-adjust: auto;
    border: 3px solid CanvasText;
  }
}

.normal-mode {
  forced-color-adjust: none;
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
```

### HTML 示例

```html
<button class="button">自定义按钮</button>
<div class="adaptive-element">自适应元素</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 76+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 79+ |
| Opera | 63+ |
| iOS Safari | 不支持 |
| Android Browser | 76+ |

## 注意事项

1. **辅助功能**：主要用于支持高对比度模式等辅助功能
2. **强制颜色模式**：当用户启用系统高对比度时生效
3. **颜色调整**：`auto` 允许浏览器优化颜色对比度
4. **设计控制**：`none` 保持设计原样，可能影响可读性
5. **媒体查询**：可与 `forced-colors` 媒体查询配合使用

## 相关属性

- [`color-scheme`](color-scheme.md) - 颜色方案
- [`accent-color`](accent-color.md) - 强调色

## 规范链接

- [CSS Color Adjustment Module Level 1](https://www.w3.org/TR/css-color-adjust-1/#forced-color-adjust)