# position

`position` 数据类型表示位置值，用于指定元素的位置。

## 语法

```css
/* 关键字 */
.element {
  position: static;
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
}

/* 偏移 */
.element {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* z-index */
.element {
  z-index: 10;
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | `static` |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分属性） |

## 位置类型

| 类型 | 描述 |
| :--- | :--- |
| `static` | 静态定位（默认） |
| `relative` | 相对定位 |
| `absolute` | 绝对定位 |
| `fixed` | 固定定位 |
| `sticky` | 粘性定位 |

## 示例

### static

```css
/* 静态定位（默认） */
.element {
  position: static;
}
```

### relative

```css
/* 相对定位 */
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### absolute

```css
/* 绝对定位 */
.element {
  position: absolute;
  top: 0;
  left: 0;
}

/* 相对最近的定位祖先元素 */
.container {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

### fixed

```css
/* 固定定位 */
.element {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* 悬浮按钮 */
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

### sticky

```css
/* 粘性定位 */
.element {
  position: sticky;
  top: 0;
}

/* 导航栏 */
.nav {
  position: sticky;
  top: 0;
  background-color: white;
}
```

### z-index

```css
/* 层级顺序 */
.element {
  z-index: 10;
}

/* 负层级 */
.element {
  z-index: -1;
}
```

### 实用示例

```css
/* 模态框 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

/* 悬浮提示 */
.tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 4+ |

## 相关链接

- [MDN Web Docs: position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
- [CSS Positioning Module Level 3](https://www.w3.org/TR/css-position-3/)
