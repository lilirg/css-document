# flex-direction

`flex-direction` 属性用于设置弹性盒容器的主轴方向，决定项目的排列方向。

## 语法

```css
flex-direction: row | row-reverse | column | column-reverse
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `row` |
| 适用 HTML 元素 | 弹性容器 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 | 主轴方向 | 起始位置 |
| :--- | :--- | :--- | :--- |
| `row` | 行（默认） | 水平方向 | 左侧 |
| `row-reverse` | 反向行 | 水平方向 | 右侧 |
| `column` | 列 | 垂直方向 | 顶部 |
| `column-reverse` | 反向列 | 垂直方向 | 底部 |

## 注意

- 决定主轴的方向
- 影响 `justify-content` 的对齐方向
- 影响 `align-items` 的交叉轴方向

## 示例

```css
/* 水平排列（默认） */
.flex-container {
  display: flex;
  flex-direction: row;
}

/* 水平反向排列 */
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}

/* 垂直排列 */
.flex-container {
  display: flex;
  flex-direction: column;
}

/* 垂直反向排列 */
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 水平导航栏 */
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* 2. 垂直列表 */
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 3. 时间线（从下到上） */
.timeline {
  display: flex;
  flex-direction: column-reverse;
}

/* 4. 反向排列的画廊 */
.gallery {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}

/* 5. 侧边栏布局 */
.layout {
  display: flex;
  flex-direction: row;
}

.sidebar {
  order: -1; /* 侧边栏在前 */
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Edge | 12+ |
| Firefox | 20+ |
| Safari | 9+ |
| Opera | 16+ |

## 相关属性

- [`flex-wrap`](flex-wrap.md) - 换行控制
- [`flex-flow`](flex-flow.md) - 方向和换行简写
- [`justify-content`](justify-content.md) - 主轴对齐
- [`align-items`](align-items.md) - 交叉轴对齐

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)