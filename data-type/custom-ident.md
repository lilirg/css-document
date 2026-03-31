# 自定义标识符（Custom Ident）

自定义标识符是 CSS 中用于表示自定义名称的数据类型。

## 自定义标识符语法

```css
/* 自定义标识符 */
.element {
  counter-increment: item;
  animation-name: my-animation;
}
```

## 自定义标识符应用

### 1. counter-increment

```css
/* 自定义计数器 */
.element {
  counter-increment: item;
  counter-increment: section;
  counter-increment: custom-name;
}
```

### 2. animation-name

```css
/* 自定义动画名称 */
@keyframes my-animation {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.element {
  animation-name: my-animation;
}
```

### 3. grid-template-areas

```css
/* 自定义网格区域 */
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

### 4. custom properties

```css
/* 自定义属性 */
:root {
  --custom-color: red;
  --custom-size: 20px;
}

.element {
  color: var(--custom-color);
  font-size: var(--custom-size);
}
```

## 自定义标识符示例

```css
/* 计数器 */
.list {
  counter-increment: item;
}

/* 动画名称 */
@keyframes slide-in {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.element {
  animation-name: slide-in;
}

/* 网格区域 */
.container {
  grid-template-areas:
    "header header"
    "sidebar main";
}

/* 自定义属性 */
:root {
  --primary-color: blue;
}

.element {
  color: var(--primary-color);
}
```

## 自定义标识符规则

1. **不能是保留字** - 如 `red`, `blue`, `10px`
2. **不能以数字开头** - 如 `1item`
3. **不能包含特殊字符** - 如 `item-name`（可以使用连字符）
4. **区分大小写** - `Item` 和 `item` 不同

## 最佳实践

1. **使用有意义的名称** - 易于理解
2. **避免保留字** - 不与 CSS 关键字冲突
3. **使用连字符** - 多单词名称
4. **了解规则** - 正确使用自定义标识符

## 相关链接

- [MDN: 自定义标识符](https://developer.mozilla.org/zh-CN/docs/Web/CSS/custom-ident)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)