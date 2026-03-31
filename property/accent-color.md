# accent-color

`accent-color` CSS 属性用于设置用户界面元素的强调色，自动应用于表单控件等 UI 元素。

## 语法

```css
/* 颜色值 */
accent-color: auto;
accent-color: red;
accent-color: #007bff;
accent-color: rgb(0, 123, 255);
accent-color: var(--primary-color);
```

## 值

### `auto`

使用浏览器默认的强调色。这是默认值。

```css
accent-color: auto;
```

### 颜色值

任何有效的 CSS 颜色值。

```css
accent-color: red;
accent-color: #007bff;
accent-color: rgb(0, 123, 255);
accent-color: hsl(217, 89%, 61%);
accent-color: var(--primary-color);
```

## 示例

### 基本用法

```css
/* 设置强调色 */
.form-container {
  accent-color: #007bff;
}

/* 所有表单控件都会使用这个强调色 */
input[type="checkbox"],
input[type="radio"],
input[type="range"],
progress,
input[type="color"] {
  /* 自动继承父元素的 accent-color */
}
```

### 表单控件

```css
/* 复选框和单选框 */
.form-group {
  accent-color: #28a745;
}

.form-group input[type="checkbox"],
.form-group input[type="radio"] {
  /* 使用绿色作为强调色 */
}
```

### 滑块控件

```css
/* 范围滑块 */
.slider-container {
  accent-color: #ffc107;
}

.slider-container input[type="range"] {
  /* 使用黄色作为强调色 */
}
```

### 进度条

```css
/* 进度条 */
.progress-container {
  accent-color: #17a2b8;
}

.progress-container progress {
  /* 使用青色作为强调色 */
}
```

### 主题切换

```css
/* 浅色主题 */
.light-theme {
  accent-color: #007bff;
}

/* 深色主题 */
.dark-theme {
  accent-color: #4da3ff;
}

/* 使用 CSS 变量 */
:root {
  --accent-color: #007bff;
}

.theme-custom {
  accent-color: var(--accent-color);
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 93+ |
| Edge | 93+ |
| Firefox | 92+ |
| Safari | 15+ |
| Opera | 79+ |

## 注意事项

1. **自动应用**：`accent-color` 会自动应用于以下元素：
   - `input[type="checkbox"]`
   - `input[type="radio"]`
   - `input[type="range"]`
   - `progress`
   - `input[type="color"]`

2. **继承性**：该属性是可继承的，可以设置在父元素上。

3. **简化样式**：无需为每个表单控件单独设置样式。

4. **主题一致性**：有助于保持整个应用的强调色一致性。

5. **可访问性**：确保强调色有足够的对比度，以满足可访问性要求。

## 相关属性

- [`color`](color.md) - 文本颜色
- [`background-color`](background-color.md) - 背景颜色
- [`border-color`](border-color.md) - 边框颜色

## 规范

- [CSS Color Module Level 5](https://www.w3.org/TR/css-color-5/#accent-color)