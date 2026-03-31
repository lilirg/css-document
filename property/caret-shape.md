# caret-shape

`caret-shape` 属性定义光标（插入点）的形状，控制文本输入时显示的光标外观。

## 语法

```css
caret-shape: auto | block | bar | underline;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 使用默认形状（默认） |
| `block` | 块状光标（实心方块） |
| `bar` | 条形光标（竖线） |
| `underline` | 下划线光标 |

## 示例

### 基本用法

```css
.block-caret {
  caret-shape: block;
}

.bar-caret {
  caret-shape: bar;
}

.underline-caret {
  caret-shape: underline;
}
```

### 配合颜色

```css
.custom-caret {
  caret-shape: bar;
  caret-color: #007bff;
}
```

### 编辑器样式

```css
.code-editor {
  caret-shape: block;
  caret-color: #fff;
  background-color: #1e1e1e;
  color: #d4d4d4;
}
```

### HTML 示例

```html
<input type="text" class="block-caret" placeholder="块状光标">
<input type="text" class="bar-caret" placeholder="条形光标">
<input type="text" class="underline-caret" placeholder="下划线光标">
<input type="text" class="custom-caret" placeholder="自定义样式">
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
3. **配合颜色**：常与 `caret-color` 配合使用
4. **浏览器支持**：浏览器支持有限
5. **用户体验**：可增强可访问性和视觉反馈

## 相关属性

- [`caret`](caret.md) - 光标简写
- [`caret-color`](caret-color.md) - 光标颜色
- [`cursor`](cursor.md) - 鼠标光标

## 规范链接

- [CSS UI Module Level 4](https://www.w3.org/TR/css-ui-4/#caret-shape)