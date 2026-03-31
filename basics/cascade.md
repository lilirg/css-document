# CSS 层叠、优先级和继承

CSS 的层叠（Cascading）、优先级（Specificity）和继承（Inheritance）是 CSS 样式应用的核心机制，理解这些概念对于编写有效的 CSS 至关重要。

## 层叠（Cascading）

层叠是指当多个样式规则应用于同一个元素时，浏览器如何决定最终应用的样式。

### 层叠顺序

当多个规则匹配同一个元素时，CSS 按照以下顺序决定哪个规则生效：

1. **重要性**：`!important` 声明具有最高优先级
2. **来源**：用户代理样式表 < 用户样式表 < 作者样式表
3. **特异性**：特异性高的选择器覆盖特异性低的选择器
4. **源代码顺序**：后出现的规则覆盖先出现的规则

### 层叠示例

```css
/* 规则 1 */
p {
  color: red;
}

/* 规则 2 - 覆盖规则 1，因为后出现 */
p {
  color: blue;
}
```

```html
<p>这段文字是蓝色的</p>
```

## 优先级（Specificity）

优先级是 CSS 选择器的一种计算方式，用于确定当多个选择器匹配同一个元素时，哪个选择器的样式会被应用。

### 优先级计算

优先级由四个值组成，从左到右依次是：

| 位置 | 说明 | 值 |
| :--- | :--- | :--- |
| 第一列 | 内联样式 | 1,0,0,0 |
| 第二列 | ID 选择器 | 0,1,0,0 |
| 第三列 | 类选择器、属性选择器、伪类 | 0,0,1,0 |
| 第四列 | 类型选择器、伪元素 | 0,0,0,1 |

### 优先级计算示例

| 选择器 | 优先级 |
| :--- | :--- |
| `*` | 0,0,0,0 |
| `element` | 0,0,0,1 |
| `.class` | 0,0,1,0 |
| `#id` | 0,1,0,0 |
| `element.class` | 0,0,1,1 |
| `element#id` | 0,1,0,1 |
| `.class1.class2` | 0,0,2,0 |
| `element element` | 0,0,0,2 |
| `element > element` | 0,0,0,2 |
| `:hover` | 0,0,1,0 |
| `::before` | 0,0,0,1 |
| `[type="text"]` | 0,0,1,0 |
| `:not(.class)` | 0,0,1,0 |

### 优先级示例

```css
/* 优先级：0,0,0,1 */
p {
  color: red;
}

/* 优先级：0,0,1,0 - 覆盖上面的规则 */
.paragraph {
  color: blue;
}

/* 优先级：0,0,0,2 - 覆盖上面的规则 */
p.paragraph {
  color: green;
}

/* 优先级：0,1,0,0 - 覆盖上面的规则 */
#main p {
  color: orange;
}
```

```html
<p class="paragraph" id="main">这段文字是橙色的</p>
```

## 继承（Inheritance）

继承是指某些 CSS 属性会自动从父元素传递给子元素。

### 可继承的属性

以下属性通常会被继承：

| 属性类别 | 属性示例 |
| :--- | :--- |
| 字体相关 | `font-family`, `font-size`, `font-weight`, `font-style` |
| 文本相关 | `color`, `text-align`, `text-indent`, `line-height` |
| 列表相关 | `list-style`, `list-style-type` |
| 其他 | `visibility`, `cursor` |

### 不可继承的属性

以下属性通常不会被继承：

| 属性类别 | 属性示例 |
| :--- | :--- |
| 盒模型 | `margin`, `padding`, `border`, `width`, `height` |
| 背景 | `background`, `background-color` |
| 定位 | `position`, `top`, `left`, `right`, `bottom` |
| 浮动 | `float`, `clear` |
| 显示 | `display` |

### 继承示例

```css
/* 字体和颜色会被继承 */
.parent {
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 16px;
}
```

```html
<div class="parent">
  <p>这段文字会继承父元素的字体和颜色</p>
  <span>这段文字也会继承</span>
</div>
```

## !important

`!important` 是一个特殊的关键字，用于提高声明的优先级。

### 使用示例

```css
/* 普通声明 */
p {
  color: red;
}

/* 使用 !important */
p {
  color: blue !important;
}

/* 即使有更高的优先级，蓝色也会生效 */
#main p {
  color: green;
}
```

### 注意事项

- 尽量避免使用 `!important`，因为它会使样式难以维护
- 如果必须使用，确保有充分的理由
- 不要对 `!important` 声明再次使用 `!important`

## 层叠上下文

层叠上下文（Stacking Context）是 CSS 中的一个三维概念，它决定了元素在 z 轴上的显示顺序。

### 创建层叠上下文的条件

- `position` 值为 `relative`、`absolute` 或 `fixed`，且 `z-index` 不为 `auto`
- `position` 值为 `sticky`
- `z-index` 值不为 `auto` 的 flex 或 grid 子项
- `opacity` 小于 1
- `transform` 不为 `none`
- `filter` 不为 `none`
- `will-change` 为 `opacity` 或 `transform`
- `overflow` 不为 `visible`

### 层叠顺序

在同一个层叠上下文中，元素的层叠顺序从后到前是：

1. 层叠上下文根元素（背景/边框）
2. 负 z-index 值
3. 块级盒
4. 浮动盒
5. 行内盒
6. z-index: 0
7. 正 z-index 值

## 最佳实践

1. **保持选择器简单**：避免过度复杂的选择器
2. **使用合理的优先级**：不要过度依赖 `!important`
3. **利用继承**：合理设置可继承属性，减少重复代码
4. **使用 CSS 变量**：便于统一管理和修改
5. **遵循 BEM 等命名规范**：提高代码可维护性

## 相关链接

- [MDN: 层叠和继承](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade)
- [MDN: 优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)
- [W3C CSS Cascading Level 4](https://www.w3.org/TR/css-cascade-4/)