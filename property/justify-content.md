# justify-content

`justify-content` 属性用于设置弹性盒或网格容器中的项目在主轴上的对齐方式。

## 语法

```css
justify-content: normal | flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right | <alignment-value>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 弹性容器、网格容器 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `normal` | 默认值，根据布局要求对齐 |
| `flex-start` | 主轴起始端对齐 |
| `flex-end` | 主轴结束端对齐 |
| `center` | 主轴居中对齐 |
| `space-between` | 均匀分布，首尾贴边 |
| `space-around` | 均匀分布，两侧间距为一半 |
| `space-evenly` | 均匀分布，所有间距相等 |
| `start` | 根据书写方向对齐到起始端 |
| `end` | 根据书写方向对齐到结束端 |
| `left` | 左对齐 |
| `right` | 右对齐 |

## 注意

- 在主轴方向上生效
- Flexbox 中，`flex-direction: row` 时为主轴水平方向
- 与 `align-items` 配合使用实现完全布局控制

## 示例

```css
/* 起始端对齐 */
.flex-container {
  display: flex;
  justify-content: flex-start;
}

/* 居中对齐 */
.flex-container {
  display: flex;
  justify-content: center;
}

/* 结束端对齐 */
.flex-container {
  display: flex;
  justify-content: flex-end;
}

/* 均匀分布 - 首尾贴边 */
.flex-container {
  display: flex;
  justify-content: space-between;
}

/* 均匀分布 - 两侧半间距 */
.flex-container {
  display: flex;
  justify-content: space-around;
}

/* 均匀分布 - 所有间距相等 */
.flex-container {
  display: flex;
  justify-content: space-evenly;
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
/* 1. 居中导航栏 */
.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* 2. 两端对齐导航 */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 3. 右对齐操作按钮 */
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* 4. 均匀分布的卡片 */
.card-row {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

/* 5. 完全均匀分布 */
.items {
  display: flex;
  justify-content: space-evenly;
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

- [`align-items`](align-items.md) - 交叉轴对齐
- [`align-content`](align-content.md) - 多行交叉轴对齐
- [`flex-direction`](flex-direction.md) - 主轴方向
- [`gap`](gap.md) - 间距

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)