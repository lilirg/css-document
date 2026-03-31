# scrollbar-color

`scrollbar-color` 属性用于设置滚动条的颜色。

## 语法

```css
scrollbar-color: auto | <color> <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 支持滚动条的元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 使用用户代理的默认颜色 |
| `<color>` | 滚动条轨道和滑块的颜色 |

第一个 `<color>` 值设置滚动条滑块（thumb）的颜色，第二个 `<color>` 值设置滚动条轨道（track）的颜色。

## 注意

- 此属性主要用于 WebKit 浏览器（Chrome、Edge、Safari）
- Firefox 需要单独使用 `scrollbar-color` 属性
- 当值为 `auto` 时，使用浏览器默认颜色

## 示例

```css
/* 设置滚动条颜色 */
.element {
  scrollbar-color: #888 #f1f1f1;
}

/* 滑块颜色 + 轨道颜色 */
.element {
  scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
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
/* 1. 浅色主题滚动条 */
.light-theme {
  scrollbar-color: #999 #f5f5f5;
}

/* 2. 深色主题滚动条 */
.dark-theme {
  scrollbar-color: #666 #333;
}

/* 3. 品牌色滚动条 */
.brand-theme {
  scrollbar-color: #007bff #e9ecef;
}

/* 4. 透明滑块 */
.transparent-thumb {
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 121+ |
| Edge | 121+ |
| Firefox | 64+ |
| Safari | 不支持 |
| Opera | 107+ |

## 相关属性

- [`scrollbar-width`](scrollbar-width.md) - 滚动条宽度
- [`::-webkit-scrollbar`](::-webkit-scrollbar) - WebKit 滚动条伪元素

## 规范

- [CSS Scrollbars Styling Module Level 1](https://drafts.csswg.org/css-scrollbars-1/)