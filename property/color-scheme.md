# color-scheme

`color-scheme` CSS 属性用于指定元素支持的颜色方案（浅色、深色或两者），并影响浏览器自动应用的默认样式。

## 语法

```css
/* 单一颜色方案 */
color-scheme: normal;
color-scheme: light;
color-scheme: dark;

/* 多个颜色方案 */
color-scheme: light dark;

/* 仅支持指定方案 */
color-scheme: only light;
color-scheme: only dark;
```

## 值

### `normal`

不声明对任何颜色方案的支持。这是默认值。

```css
color-scheme: normal;
```

### `light`

声明支持浅色颜色方案。

```css
color-scheme: light;
```

### `dark`

声明支持深色颜色方案。

```css
color-scheme: dark;
```

### `light dark`

声明同时支持浅色和深色颜色方案。浏览器会根据用户的系统设置自动选择。

```css
color-scheme: light dark;
```

### `only light` / `only dark`

声明仅支持指定的颜色方案，不允许浏览器使用其他方案。

```css
color-scheme: only dark;
```

## 示例

### 基本用法

```css
/* 声明支持深色模式 */
.dark-mode {
  color-scheme: dark;
  background-color: #1a1a1a;
  color: #ffffff;
}

/* 声明同时支持浅色和深色模式 */
.auto-mode {
  color-scheme: light dark;
}
```

### 响应深色模式

```css
/* 声明支持两种模式 */
:root {
  color-scheme: light dark;
}

/* 浅色模式（默认） */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

### 表单控件自动适配

```css
/* 声明支持深色模式，表单控件会自动适配 */
.form-container {
  color-scheme: dark;
}

/* 复选框、单选框等会自动使用深色主题 */
input[type="checkbox"],
input[type="radio"] {
  /* 无需额外样式 */
}
```

### 仅支持深色模式

```css
/* 强制使用深色模式 */
.dark-only {
  color-scheme: only dark;
  background-color: #000000;
  color: #ffffff;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 81+ |
| Edge | 81+ |
| Firefox | 95+ |
| Safari | 13.1+ |
| Opera | 68+ |

## 注意事项

1. **自动样式**：`color-scheme` 会影响浏览器自动应用的默认样式，包括滚动条、表单控件等。

2. **与 media query 配合**：通常与 `@media (prefers-color-scheme: dark)` 配合使用。

3. **继承性**：该属性是可继承的。

4. **表单控件**：设置 `color-scheme` 后，表单控件会自动使用相应的颜色方案。

5. **仅支持**：使用 `only` 关键字可以防止浏览器使用其他颜色方案。

6. **性能**：声明支持的颜色方案可以帮助浏览器优化渲染。

## 相关属性

- [`prefers-color-scheme`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) - 媒体查询
- [`background-color`](background-color.md) - 背景颜色
- [`color`](color.md) - 文本颜色

## 规范

- [CSS Color Adjustment Module Level 1](https://www.w3.org/TR/css-color-adjust-1/#color-scheme)