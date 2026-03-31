# :target

`:target` 伪类匹配当前 URL 目标的元素（例如如果它有一个匹配当前 URL 分段的元素）。

## 语法

```css
:target {
  /* CSS properties */
}
```

## 描述

`:target` 伪类匹配当前 URL 的片段标识符（fragment identifier）所指向的元素。当 URL 中包含 `#id` 形式的片段时，具有对应 `id` 属性的元素会被匹配。

## 示例

```css
/* 当 URL 为 page.html#section1 时，匹配 id="section1" 的元素 */
:target {
  background-color: yellow;
  border: 2px solid blue;
}

/* 实际应用示例 */
section:target {
  background-color: #fff3cd;
  padding: 20px;
  border-left: 4px solid #ffc107;
}
```

```html
<!-- HTML 示例 -->
<nav>
  <a href="#section1">跳转到第一节</a>
  <a href="#section2">跳转到第二节</a>
</nav>

<section id="section1">
  <h2>第一节</h2>
  <p>这是第一节的内容...</p>
</section>

<section id="section2">
  <h2>第二节</h2>
  <p>这是第二节的内容...</p>
</section>
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 完全支持 | IE 9+ |

## 相关链接

- [MDN: :target](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target)
- [CSS Selectors Level 3 - :target](https://www.w3.org/TR/selectors-3/#target-pseudo)