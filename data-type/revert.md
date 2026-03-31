# revert

`revert` 关键字用于将属性重置为其在级联规则中定义的值。它会撤销当前样式表中对该属性的任何修改，并回退到浏览器样式表或用户样式表中定义的值。

## 语法

```css
/* 基本用法 */
.element {
  margin: revert;
  padding: revert;
  color: revert;
}

/* 在特定上下文中使用 */
.element {
  /* 重置为浏览器默认值 */
  display: revert;
  
  /* 重置为继承值（如果适用） */
  color: revert;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 示例

### 重置 margin 和 padding

```css
/* 重置所有 margin */
.element {
  margin: revert;
}

/* 重置特定方向的 margin */
.element {
  margin-top: revert;
  margin-right: revert;
  margin-bottom: revert;
  margin-left: revert;
}

/* 重置 padding */
.element {
  padding: revert;
}
```

### 重置 display

```css
/* 重置为浏览器默认 display 值 */
.element {
  display: revert;
}
```

### 重置 color

```css
/* 重置为继承值 */
.element {
  color: revert;
}
```

### 实用示例

```css
/* 重置按钮样式 */
.button {
  /* 重置为浏览器默认按钮样式 */
  display: revert;
  margin: revert;
  padding: revert;
  border: revert;
  background-color: revert;
  color: revert;
  font-family: revert;
  font-size: revert;
}

/* 重置列表样式 */
.list {
  /* 重置为浏览器默认列表样式 */
  list-style: revert;
  margin: revert;
  padding: revert;
}

/* 重置表单元素样式 */
.input {
  /* 重置为浏览器默认输入框样式 */
  border: revert;
  padding: revert;
  margin: revert;
  font-family: revert;
  font-size: revert;
}
```

## revert vs initial vs unset

| 关键字 | 行为 |
| :--- | :--- |
| `initial` | 设置为属性的初始值（CSS规范定义） |
| `unset` | 如果属性是继承的，则设置为`inherit`；否则设置为`initial` |
| `revert` | 回退到浏览器样式表或用户样式表中定义的值 |

### 示例对比

```css
/* initial - 设置为CSS规范定义的初始值 */
.element {
  color: initial; /* 通常是黑色 */
}

/* unset - 如果继承则为inherit，否则为initial */
.element {
  color: unset; /* 如果父元素有color，则继承；否则为黑色 */
}

/* revert - 回退到浏览器默认值 */
.element {
  color: revert; /* 浏览器默认颜色 */
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 85+ |
| Firefox | 73+ |
| Safari | 14.1+ |
| Edge | 85+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: revert](https://developer.mozilla.org/zh-CN/docs/Web/CSS/revert)
- [CSS Cascading and Inheritance Level 4](https://www.w3.org/TR/css-cascade-4/#revert)
