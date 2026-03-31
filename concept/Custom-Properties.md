# 自定义属性 (Custom Properties)

CSS 自定义属性（也称为 CSS 变量）允许您定义可重用的值，并在文档中多次使用。

## 语法

```css
/* 定义自定义属性 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
}

/* 使用自定义属性 */
.element {
  color: var(--primary-color);
  font-size: var(--font-size-base);
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（需要使用 `animation-timing-function`） |

## 自定义属性语法

| 语法 | 描述 |
| :--- | :--- |
| `--name` | 自定义属性名称（必须以 `--` 开头） |
| `var(--name)` | 使用自定义属性 |
| `var(--name, fallback)` | 使用自定义属性，如果不存在则使用回退值 |

## 示例

### 基本用法

```css
/* 定义自定义属性 */
:root {
  --main-color: #3498db;
  --spacing: 16px;
  --border-radius: 4px;
}

/* 使用自定义属性 */
.button {
  background-color: var(--main-color);
  padding: var(--spacing);
  border-radius: var(--border-radius);
}

.card {
  border: 1px solid var(--main-color);
  border-radius: var(--border-radius);
  padding: var(--spacing);
}
```

### 回退值

```css
/* 如果 --primary-color 未定义，则使用默认值 */
.element {
  color: var(--primary-color, #000);
}

/* 多级回退 */
.element {
  color: var(--primary-color, var(--secondary-color, #000));
}
```

### 动态修改

```css
/* 在不同主题下修改自定义属性 */
:root {
  --bg-color: #fff;
  --text-color: #000;
}

.dark-theme {
  --bg-color: #000;
  --text-color: #fff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

```html
<!-- HTML -->
<body class="dark-theme">
  <!-- 内容 -->
</body>
```

### JavaScript 交互

```css
/* CSS */
.element {
  --custom-width: 200px;
  width: var(--custom-width);
}
```

```javascript
// JavaScript
const element = document.querySelector('.element');
element.style.setProperty('--custom-width', '300px');
```

### 响应式设计

```css
:root {
  --container-width: 1200px;
}

@media (max-width: 768px) {
  :root {
    --container-width: 100%;
  }
}

.container {
  width: var(--container-width);
  max-width: 1200px;
  margin: 0 auto;
}
```

### 计算属性值

```css
:root {
  --base-size: 16px;
  --spacing-unit: 8px;
}

.element {
  padding: calc(var(--spacing-unit) * 2);
  font-size: calc(var(--base-size) * 1.25);
}
```

### 作用域

```css
:root {
  --global-color: blue;
}

.container {
  --local-color: green;
}

/* 使用全局变量 */
.global {
  color: var(--global-color);
}

/* 使用局部变量 */
.local {
  color: var(--local-color);
}

/* 继承局部变量 */
.child {
  color: var(--local-color); /* 继承 .container 的 --local-color */
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 49+ |
| Firefox | 31+ |
| Safari | 9.1+ |
| Edge | 15+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: CSS 自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-cascade-5/)
