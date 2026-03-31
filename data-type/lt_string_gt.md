# string

`string` 数据类型表示字符串值，用于需要文本的属性。

## 语法

```css
/* 基本用法 */
.element {
  content: "Hello";
}

/* 引用属性值 */
.element {
  content: attr(data-label);
}

/* 特殊字符 */
.element {
  content: "\2022";
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 示例

### content

```css
/* 基本字符串 */
.element::before {
  content: "Hello";
}

/* 空字符串 */
.element::after {
  content: "";
}

/* 引用属性值 */
.element::before {
  content: attr(data-label);
}

/* 特殊字符 */
.element::before {
  content: "\2022"; /* 圆点 */
}

/* 换行 */
.element::after {
  content: "\A";
  white-space: pre;
}
```

### quotes

```css
/* 引号样式 */
.element {
  quotes: "«" "»" "‹" "›";
}

/* 无引号 */
.element {
  quotes: none;
}
```

### cursor

```css
/* 自定义光标 */
.element {
  cursor: url('cursor.png'), auto;
}
```

### 实用示例

```css
/* 引用计数器 */
.element::before {
  content: counter(section) ". ";
}

/* 引用属性值 */
.tooltip::before {
  content: attr(data-tooltip);
}

/* 响应式内容 */
.element::after {
  content: " (new)";
  color: red;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 8+ |

## 相关链接

- [MDN Web Docs: string](https://developer.mozilla.org/zh-CN/docs/Web/CSS/string)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#strings)
