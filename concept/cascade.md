# 层叠（Cascade）

层叠是 CSS 的核心机制之一，它决定了当多个样式规则匹配同一元素时，哪个规则最终生效。

## 层叠过程

CSS 层叠遵循以下步骤：

1. **确定来源** - 确定每个声明的来源（用户代理、用户、作者）
2. **确定重要性** - 检查声明是否标记为 `!important`
3. **确定特异性** - 计算选择器的特异性
4. **确定源顺序** - 比较声明在样式表中的出现顺序

## 层叠来源

CSS 声明可以来自以下来源：

| 来源 | 说明 | 优先级 |
| :--- | :--- | :--- |
| 用户代理样式 | 浏览器默认样式 | 最低 |
| 用户样式 | 用户自定义样式 | 中等 |
| 作者样式 | 开发者编写的样式 | 最高 |

## 层叠步骤

### 1. 确定来源

每个 CSS 声明都有一个来源：

```css
/* 用户代理样式（浏览器默认） */
p { margin: 1em 0; }

/* 用户样式（用户自定义） */
p { color: blue !important; }

/* 作者样式（开发者编写） */
p { color: red; }
```

### 2. 确定重要性

`!important` 标记会提高声明的优先级：

```css
p {
  color: red !important;  /* 优先级更高 */
  color: blue;            /* 被覆盖 */
}
```

### 3. 确定特异性

特异性（Specificity）用于比较相同来源和重要性的声明：

| 选择器类型 | 特异性值 | 示例 |
| :--- | :--- | :--- |
| 通配符选择器 | (0,0,0,0) | `*` |
| 元素选择器 | (0,0,0,1) | `p` |
| 类选择器 | (0,0,1,0) | `.container` |
| 伪类 | (0,0,1,0) | `:hover` |
| 属性选择器 | (0,0,1,0) | `[type="text"]` |
| ID 选择器 | (0,1,0,0) | `#header` |
| 内联样式 | (1,0,0,0) | `style="color: red"` |

特异性比较规则：
- 从左到右比较
- 数值大的优先级更高
- 相等时比较下一个值

```css
/* 特异性: (0,0,1,0) */
.container { color: red; }

/* 特异性: (0,1,0,0) */
#header { color: blue; }  /* 胜出 */

/* 特异性: (1,0,0,0) */
<div style="color: green;">文本</div>  /* 胜出 */
```

### 4. 确定源顺序

当来源、重要性和特异性都相同时，后出现的声明胜出：

```css
p { color: red; }
p { color: blue; }  /* 最终颜色为蓝色 */
```

## 层叠示例

```css
/* 用户代理样式 */
p { margin: 1em 0; color: black; }

/* 作者样式 */
p { color: red; }
#main p { color: blue; }
p.special { color: green !important; }

/* 最终结果 */
<p>默认段落 - 蓝色（ID 选择器特异性更高）</p>
<p class="special">特殊段落 - 绿色（!important 优先级最高）</p>
```

## 相关链接

- [MDN: CSS 层叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade)
- [W3C: CSS Cascading and Inheritance Level 6](https://www.w3.org/TR/css-cascade-6/)