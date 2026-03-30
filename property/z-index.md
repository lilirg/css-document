# z-index

该属性设置定位元素的堆叠顺序。

## 语法

```css
z-index: auto | <integer>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 定位元素（`position` 不为 `static`） |
| 动画 | 是 |

## 值

### `auto`
元素不创建新的堆叠上下文，继承父元素的堆叠顺序。

### `<integer>`
整数值，值越大越靠近观察者（显示在上方）。

## 注意

- 仅对 `position` 不为 `static` 的元素有效
- 负值会使元素显示在父元素内容下方
- 创建新的堆叠上下文

## 示例

```css
/* CSS 示例 */
.overlay {
  position: absolute;
  z-index: 100;
}

.background {
  position: absolute;
  z-index: -1;
}
```

```html
<!-- HTML 示例 -->
<div class="container">
  <div class="background">背景层</div>
  <div class="overlay">覆盖层</div>
</div>
```

## 使用场景

```css
/* 1. 模态框 - 最高层级 */
.modal {
  position: fixed;
  z-index: 1000;
}

/* 2. 导航栏 - 高层级 */
.navbar {
  position: fixed;
  z-index: 999;
}

/* 3. 下拉菜单 - 中层级 */
.dropdown {
  position: absolute;
  z-index: 100;
}

/* 4. 背景层 - 负层级 */
.background {
  position: absolute;
  z-index: -1;
}

/* 5. 工具提示 - 高层级 */
.tooltip {
  position: absolute;
  z-index: 10000;
}
