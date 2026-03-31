# user-ident

`user-ident` 数据类型表示用户标识符值，用于标识用户定义的自定义属性。

## 语法

```css
/* 自定义属性 */
:root {
  --custom-color: blue;
  --custom-size: 16px;
}

/* 使用自定义属性 */
.element {
  color: var(--custom-color);
  font-size: var(--custom-size);
}

/* 自定义属性名 */
.element {
  --my-property: value;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 示例

### 自定义属性定义

```css
/* 在 :root 中定义全局自定义属性 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

/* 在特定元素中定义自定义属性 */
.card {
  --card-title-color: #333;
  --card-bg: #fff;
}
```

### var() 函数

```css
/* 使用 var() 函数访问自定义属性 */
.element {
  color: var(--primary-color);
  background-color: var(--card-bg);
  padding: var(--spacing-unit);
}

/* 带默认值的 var() */
.element {
  color: var(--custom-color, blue);
  margin: var(--spacing, 10px);
}
```

### calc() 与自定义属性

```css
/* 在 calc() 中使用自定义属性 */
.element {
  width: calc(100% - var(--sidebar-width));
  margin: calc(var(--spacing) * 2);
}

/* 响应式自定义属性 */
:root {
  --container-width: 1200px;
}

@media (max-width: 768px) {
  :root {
    --container-width: 100%;
  }
}

.container {
  max-width: var(--container-width);
}
```

### 动态更新

```css
/* 通过 JavaScript 动态更新自定义属性 */
:root {
  --theme-color: blue;
}

/* 在 JavaScript 中 */
document.documentElement.style.setProperty('--theme-color', 'red');
```

### 实用示例

```css
/* 主题切换 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --text-color: #333;
  --bg-color: #fff;
}

/* 暗色主题 */
:root.dark {
  --text-color: #fff;
  --bg-color: #333;
}

/* 使用自定义属性 */
body {
  color: var(--text-color);
  background-color: var(--bg-color);
}

.button {
  background-color: var(--primary-color);
  color: white;
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

- [MDN Web Docs: 自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)
- [CSS Custom Properties for Cascading Variables Module Level 1](https://www.w3.org/TR/css-cascade-4/#custom-properties)
