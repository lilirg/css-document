# calc()

`calc()` 函数用于动态计算 CSS 属性的值，支持加、减、乘、除运算。

## 语法

```css
/* 基本语法 */
calc(expression)

/* 表达式可以包含以下运算符 */
calc(100% - 50px)
calc(2 * 30px)
calc(50px + 2em)
calc(100vh / 3)
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 支持（当计算结果为数值时） |

## 属性值

`calc()` 表达式可以包含以下运算符：

- `+`：加法
- `-`：减法
- `*`：乘法（第一个操作数必须是数值）
- `/`：除法（第二个操作数必须是数值）

### 运算规则

1. **加法和减法**：操作数必须具有相同的单位，或其中一个为数值
2. **乘法**：第一个操作数必须是数值，第二个操作数可以是任何值
3. **除法**：第二个操作数必须是数值
4. **括号**：可以使用括号改变运算优先级

## 示例

### 宽度计算

```css
/* 宽度为容器宽度减去 200px */
.container {
  width: calc(100% - 200px);
}

/* 两列布局，每列占一半减去 10px */
.column {
  width: calc(50% - 10px);
  float: left;
  margin-right: 20px;
}
```

### 边距计算

```css
/* 外边距为 10% 减去 50px */
.box {
  margin: calc(10% - 50px);
}

/* 内边距为 20px 加上 5% */
.content {
  padding: calc(20px + 5%);
}
```

### 位置计算

```css
/* 绝对定位，距离左侧 100px 加上 25% */
.element {
  position: absolute;
  left: calc(100px + 25%);
}

/* 距离顶部 50vh 减去 元素高度的一半 */
.center-vertical {
  position: absolute;
  top: calc(50vh - (height / 2));
}
```

### 字体大小计算

```css
/* 字体大小为视口宽度的 5% 加上 12px */
.responsive-text {
  font-size: calc(5vw + 12px);
}
```

### 复杂表达式

```css
/* 多重计算 */
.complex {
  width: calc((100% - 40px) / 3);
  padding: calc(10px * 2);
  margin: calc(100px / 4);
}
```

### 使用变量

```css
:root {
  --spacing: 20px;
}

.box {
  padding: calc(var(--spacing) + 10px);
  margin: calc(var(--spacing) * 2);
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 19+ | 完全支持 |
| Firefox | 4+ | 完全支持 |
| Safari | 6+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 9+ | 完全支持 |

## 相关链接

- [MDN: calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)
- [W3C: CSS Values and Units Module Level 3 - calc()](https://www.w3.org/TR/css-values-3/#calc)
