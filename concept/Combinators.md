# 关系选择器 (Combinators)

关系选择器（Combinators）用于定义元素之间的关系，从而选择特定的元素。

## 语法

```css
/* 后代选择器（空格） */
ancestor descendant { }

/* 子元素选择器（>） */
parent > child { }

/* 相邻兄弟选择器（+） */
prev + next { }

/* 通用兄弟选择器（~） */
prev ~ siblings { }
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 关系选择器类型

| 选择器 | 描述 | 示例 |
| :--- | :--- | :--- |
| ` ` (空格) | 后代选择器 - 选择指定元素的所有后代元素 | `.container p` 选择 `.container` 内的所有 `<p>` 元素 |
| `>` | 子元素选择器 - 选择指定元素的直接子元素 | `.container > p` 选择 `.container` 的直接子元素 `<p>` |
| `+` | 相邻兄弟选择器 - 选择紧接在指定元素后的兄弟元素 | `h1 + p` 选择紧接在 `<h1>` 后的 `<p>` 元素 |
| `~` | 通用兄弟选择器 - 选择指定元素后的所有兄弟元素 | `h1 ~ p` 选择 `<h1>` 后的所有 `<p>` 兄弟元素 |

## 示例

### 后代选择器

```html
<!-- HTML -->
<div class="container">
  <p>段落 1</p>
  <div class="inner">
    <p>段落 2</p>
  </div>
</div>
```

```css
/* 选择 .container 内的所有 p 元素 */
.container p {
  color: blue;
}

/* 上面的选择器会匹配两个 p 元素 */
```

### 子元素选择器

```html
<!-- HTML -->
<ul class="menu">
  <li>项目 1</li>
  <li>项目 2
    <ul>
      <li>子项目 2-1</li>
      <li>子项目 2-2</li>
    </ul>
  </li>
</ul>
```

```css
/* 只选择 .menu 的直接子元素 li */
.menu > li {
  font-weight: bold;
}

/* 不会匹配子列表中的 li 元素 */
```

### 相邻兄弟选择器

```html
<!-- HTML -->
<h1>标题</h1>
<p>第一段</p>
<p>第二段</p>
<div>分隔符</div>
<p>第三段</p>
```

```css
/* 只选择紧接在 h1 后的 p 元素 */
h1 + p {
  margin-top: 0;
  font-weight: bold;
}

/* 只匹配第一段 */
```

### 通用兄弟选择器

```html
<!-- HTML -->
<h2>标题</h2>
<p>段落 1</p>
<p>段落 2</p>
<div>分隔符</div>
<p>段落 3</p>
```

```css
/* 选择 h2 后的所有 p 兄弟元素 */
h2 ~ p {
  color: gray;
}

/* 匹配所有三个 p 元素 */
```

### 组合使用

```html
<!-- HTML -->
<div class="article">
  <h2>文章标题</h2>
  <p>第一段</p>
  <div class="sidebar">
    <p>侧边栏段落</p>
  </div>
  <h3>子标题</h3>
  <p>第二段</p>
</div>
```

```css
/* 选择 .article 内的直接子元素 p */
.article > p {
  font-size: 1.1em;
}

/* 选择 h3 后的所有 p 兄弟元素 */
.article h3 ~ p {
  color: #666;
}
```

### CSS 选择器优先级

关系选择器本身的特异性为 (0, 0, 0)，但会与选择器组合计算：
- `.container p` - (0, 1, 1) - 类选择器 + 元素选择器
- `.container > p` - (0, 1, 1) - 类选择器 + 元素选择器
- `h1 + p` - (0, 0, 2) - 两个元素选择器
- `h1 ~ p` - (0, 0, 2) - 两个元素选择器

## 浏览器兼容性

| 浏览器 | 后代选择器 | 子元素选择器 | 相邻兄弟选择器 | 通用兄弟选择器 |
| :--- | :--- | :--- | :--- | :--- |
| Chrome | 1+ | 1+ | 1+ | 2+ |
| Firefox | 1+ | 1+ | 1+ | 2+ |
| Safari | 1+ | 1+ | 1+ | 3.2+ |
| Edge | 12+ | 12+ | 12+ | 12+ |
| IE | 6+ | 7+ | 7+ | 7+ |

## 相关链接

- [MDN Web Docs: 关系选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#%E5%85%B3%E7%B3%BB%E9%80%89%E6%8B%A9%E5%99%A8)
- [CSS Selectors Level 3](https://www.w3.org/TR/CSS2/selector.html#child-selectors)
- [CSS Selectors Level 4](https://www.w3.org/TR/selectors-4/#combinators)
