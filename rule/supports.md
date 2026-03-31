# @supports

`@supports` 规则用于检测浏览器是否支持特定的 CSS 属性和值，实现渐进增强。

## 语法

```css
@supports (property: value) {
  /* CSS rules */
}

@supports not (property: value) {
  /* CSS rules */
}

@supports (property: value) or (property: value) {
  /* CSS rules */
}

@supports (property: value) and (property: value) {
  /* CSS rules */
}

/* 示例 */
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (backdrop-filter: none) {
  .overlay {
    background: rgba(0, 0, 0, 0.5);
  }
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 属性值

### property（属性）

要检测的 CSS 属性名称。

### value（值）

要检测的 CSS 属性值。

### 逻辑运算符

| 运算符 | 说明 |
| :--- | :--- |
| `not` | 否定检测结果 |
| `and` | 逻辑与（多个条件都必须支持） |
| `or` | 逻辑或（任一条件支持即可） |

## 示例

### 基本检测

```css
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}

/* 不支持 grid 的回退方案 */
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### not 运算符

```css
@supports not (backdrop-filter: none) {
  .modal {
    background: rgba(0, 0, 0, 0.5);
  }
}

@supports (backdrop-filter: none) {
  .modal {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
  }
}
```

### and 运算符

```css
@supports (display: grid) and (gap: 10px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}
```

### or 运算符

```css
@supports (display: flex) or (display: -webkit-flex) {
  .container {
    display: -webkit-flex;
    display: flex;
  }
}
```

### 复合检测

```css
@supports ((display: grid) and (gap: 10px)) or ((display: flex) and (gap: 10px)) {
  .container {
    display: grid;
    gap: 10px;
  }
}
```

### 自定义属性检测

```css
@supports (--custom-property: value) {
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
  }
  
  .btn {
    background-color: var(--primary-color);
    color: white;
  }
}
```

### 函数检测

```css
@supports (clip-path: polygon(50% 0%)) {
  .triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
}

@supports not (clip-path: polygon(50% 0%)) {
  .triangle {
    /* 回退方案 */
  }
}
```

### calc() 函数检测

```css
@supports (width: calc(100% - 20px)) {
  .container {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
}
```

### transform 检测

```css
@supports (transform: rotate(45deg)) {
  .icon {
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }
  
  .icon:hover {
    transform: rotate(90deg);
  }
}
```

### filter 检测

```css
@supports (filter: blur(5px)) {
  .blur {
    filter: blur(5px);
  }
}

@supports not (filter: blur(5px)) {
  .blur {
    /* 回退方案 */
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 28+ | 完全支持 |
| Firefox | 22+ | 完全支持 |
| Safari | 9+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 不支持 | 需要回退方案 |

## 相关链接

- [MDN: @supports](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@supports)
- [W3C: CSS Conditional Rules Module Level 3 - @supports](https://www.w3.org/TR/css-conditional-3/#at-supports)
