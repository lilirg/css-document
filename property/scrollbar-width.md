# scrollbar-width

`scrollbar-width` 属性用于设置滚动条的宽度。

## 语法

```css
scrollbar-width: auto | thin | none
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 支持滚动条的元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 使用用户代理的默认宽度 |
| `thin` | 使用较窄的滚动条 |
| `none` | 隐藏滚动条（但仍可滚动） |

## 注意

- 此属性主要用于 Firefox 浏览器
- Chrome/Edge 需要使用 `::-webkit-scrollbar` 伪元素
- `none` 值会隐藏滚动条但保留滚动功能

## 示例

```css
/* 使用细滚动条 */
.element {
  scrollbar-width: thin;
}

/* 隐藏滚动条 */
.element {
  scrollbar-width: none;
}

/* 默认滚动条 */
.element {
  scrollbar-width: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="element" style="height: 200px; overflow: auto;">
  <!-- 长内容 -->
</div>
```

## 使用场景

```css
/* 1. 细滚动条 - 节省空间 */
.sidebar {
  scrollbar-width: thin;
}

/* 2. 隐藏滚动条 - 美观设计 */
.hidden-scrollbar {
  scrollbar-width: none;
}

/* 3. 自定义滚动条宽度（WebKit） */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

/* 4. 响应式滚动条 */
@media (min-width: 768px) {
  .responsive {
    scrollbar-width: thin;
  }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 不支持（需用 WebKit 伪元素） |
| Edge | 不支持（需用 WebKit 伪元素） |
| Firefox | 64+ |
| Safari | 不支持 |
| Opera | 不支持 |

## 相关属性

- [`scrollbar-color`](scrollbar-color.md) - 滚动条颜色
- [`::-webkit-scrollbar`](::-webkit-scrollbar) - WebKit 滚动条伪元素

## 规范

- [CSS Scrollbars Styling Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)