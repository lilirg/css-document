# caret

`caret` 属性定义光标（插入点）的样式，控制文本输入时显示的光标外观。

## 语法

```css
caret: <caret-color> || <caret-shape>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<caret-color>` | 光标颜色 |
| `auto` | 自动颜色（默认） |
| `<color>` | 指定颜色 |
| `<caret-shape>` | 光标形状 |
| `block` | 块状光标 |
| `bar` | 条形光标 |
| `underline` | 下划线光标 |

## 示例

### 基本用法

```css
.input-field {
  caret: red block;
}
```

### 仅设置颜色

```css
.colored-caret {
  caret-color: blue;
}
```

### 仅设置形状

```css
.bar-caret {
  caret-shape: bar;
}
```

### HTML 示例

```html
<input type="text" class="input-field" placeholder="红色块状光标">
<input type="text" class="colored-caret" placeholder="蓝色光标">
<input type="text" class="bar-caret" placeholder="条形光标">
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 116+ |
| Firefox | 113+ |
| Safari | 17.4+ |
| Edge | 116+ |
| Opera | 102+ |
| iOS Safari | 17.4+ |
| Android Browser | 116+ |

## 注意事项

1. **实验性功能**：此属性仍处于实验阶段
2. **输入元素**：主要用于可编辑元素（input、textarea、contenteditable）
3. **简写属性**：是 `caret-color` 和 `caret-shape` 的简写
4. **浏览器支持**：浏览器支持有限
5. **用户体验**：可增强可访问性和视觉反馈

## 相关属性

- [`caret-color`](caret-color.md) - 光标颜色
- [`caret-shape`](caret-shape.md) - 光标形状
- [`cursor`](cursor.md) - 鼠标光标

## 规范链接

- [CSS UI Module Level 4](https://www.w3.org/TR/css-ui-4/#caret)