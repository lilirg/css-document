# percentage

`percentage` 数据类型表示百分比值。

## 语法

```css
/* 基本用法 */
.element {
  width: 50%;
  height: 100%;
  margin: 10%;
  padding: 5%;
}

/* 计算 */
.element {
  width: calc(100% - 20px);
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（部分属性） |

## 示例

### 宽度和高度

```css
/* 相对父元素宽度 */
.element {
  width: 50%;
}

/* 相对父元素高度 */
.element {
  height: 100%;
}

/* 响应式宽度 */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
```

### 边距和内边距

```css
/* 相对父元素宽度 */
.element {
  margin: 10%;
  padding: 5%;
}

/* 不同方向 */
.element {
  margin-top: 5%;
  margin-right: 10%;
  margin-bottom: 5%;
  margin-left: 10%;
}
```

### 字体大小

```css
/* 相对父元素字体大小 */
.element {
  font-size: 150%;
}
```

### 背景位置

```css
/* 百分比位置 */
.element {
  background-position: 50% 50%;
}
```

### transform

```css
/* 百分比变换 */
.element {
  transform: translate(50%, 50%);
}
```

### 实用示例

```css
/* 响应式布局 */
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 30%;
  margin: 1.5%;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| IE | 3+ |

## 相关链接

- [MDN Web Docs: percentage](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#percentages)
