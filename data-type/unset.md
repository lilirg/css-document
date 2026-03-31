# unset

`unset` 关键字用于将属性重置为其自然值。如果属性是继承的，则设置为`inherit`；如果属性不是继承的，则设置为`initial`。

## 语法

```css
/* 基本用法 */
.element {
  margin: unset;
  padding: unset;
  color: unset;
}

/* 在特定上下文中使用 */
.element {
  /* 如果继承则为inherit，否则为initial */
  color: unset;
  font-size: unset;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 示例

### 继承属性

```css
/* color 是继承属性 */
.parent {
  color: blue;
}

.child {
  color: unset; /* 会继承父元素的 blue */
}
```

### 非继承属性

```css
/* margin 是非继承属性 */
.parent {
  margin: 20px;
}

.child {
  margin: unset; /* 会设置为 initial（0） */
}
```

### 实用示例

```css
/* 重置按钮样式 */
.button {
  /* color 是继承属性，会继承父元素颜色 */
  color: unset;
  
  /* margin 是非继承属性，会设置为 0 */
  margin: unset;
  
  /* padding 是非继承属性，会设置为 0 */
  padding: unset;
}

/* 重置列表样式 */
.list {
  /* list-style 是继承属性 */
  list-style: unset;
  
  /* margin 是非继承属性 */
  margin: unset;
  
  /* padding 是非继承属性 */
  padding: unset;
}
```

## unset vs initial vs revert

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
| Chrome | 4+ |
| Firefox | 4+ |
| Safari | 5.1+ |
| Edge | 12+ |
| IE | 不支持 |

## 相关链接

- [MDN Web Docs: unset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)
- [CSS Cascading and Inheritance Level 3](https://www.w3.org/TR/css-cascade-3/#unset)
