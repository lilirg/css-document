# 优先级（Specificity）

优先级是 CSS 层叠机制中的一个重要概念，用于确定当多个规则匹配同一元素时，哪个规则应该生效。

## 优先级计算

CSS 优先级使用四元组 `(a, b, c, d)` 表示，从左到右比较：

| 组件 | 含义 | 示例 |
| :--- | :--- | :--- |
| a | 内联样式数量 | `style="..."` |
| b | ID 选择器数量 | `#header` |
| c | 类/伪类/属性选择器数量 | `.class`, `:hover`, `[type]` |
| d | 元素/伪元素选择器数量 | `p`, `::before` |

### 计算规则

1. **内联样式** - 每个内联样式增加 `a`
2. **ID 选择器** - 每个 ID 选择器增加 `b`
3. **类/伪类/属性选择器** - 每个增加 `c`
4. **元素/伪元素选择器** - 每个增加 `d`
5. **通配符选择器** - 不影响优先级

### 优先级示例

```css
/* 优先级: (0,0,0,0) */
* { color: red; }

/* 优先级: (0,0,0,1) */
p { color: red; }

/* 优先级: (0,0,1,0) */
.container { color: red; }

/* 优先级: (0,0,1,1) */
.container p { color: red; }

/* 优先级: (0,1,0,0) */
#header { color: red; }

/* 优先级: (0,1,1,0) */
#header .nav { color: red; }

/* 优先级: (1,0,0,0) */
<div style="color: red;">文本</div>

/* 优先级: (0,0,2,0) */
.container.special { color: red; }

/* 优先级: (0,0,1,2) */
.container p::before { color: red; }
```

### 优先级比较

优先级从左到右比较，数值大的优先级更高：

```
(0,0,0,1) < (0,0,1,0) < (0,1,0,0) < (1,0,0,0)
(0,0,1,1) < (0,0,1,2) < (0,0,2,0)
(0,1,0,0) > (0,0,9,9)  /* ID 选择器优先级高于 9 个类选择器 */
```

## 特殊情况

### `!important`

`!important` 会覆盖所有非 `!important` 的声明：

```css
p { color: red !important; }  /* 优先级最高 */
p { color: blue; }            /* 被覆盖 */
```

### 继承

继承的样式优先级最低：

```css
p { color: red; }              /* 直接应用 */
.container p { color: blue; }  /* 继承的优先级更低 */
```

### 同一选择器

同一选择器的声明，后出现的优先级更高：

```css
p { color: red; }
p { color: blue; }  /* 最终为蓝色 */
```

## 优先级计算工具

可以使用以下方法计算优先级：

1. **手动计算** - 按照规则计算四元组
2. **在线工具** - 使用 CSS 优先级计算器
3. **浏览器开发者工具** - 查看应用的样式和优先级

## 最佳实践

1. **避免使用 `!important`** - 除非必要
2. **使用类选择器** - 避免过度使用 ID 选择器
3. **保持选择器简洁** - 避免过深的嵌套
4. **使用 BEM 命名** - 通过命名约定控制优先级

## 相关链接

- [MDN: 选择器特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
- [CSS-Tricks: Specificity](https://css-tricks.com/specifics-on-css-specificity/)