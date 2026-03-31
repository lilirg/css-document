# order

`order` 属性用于设置弹性盒或网格项目在主序中的顺序，不改变 HTML 结构即可重新排列项目。

## 语法

```css
order: <integer>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 弹性盒项目、网格项目 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<integer>` | 整数，值越小越靠前排列 |

### 排序规则

- 默认值为 `0`
- 负数排在前面
- 正数排在后面
- 相同值的项目按 HTML 顺序排列

## 注意

- 只改变视觉顺序，不影响 DOM 顺序
- 不影响辅助技术（如屏幕阅读器）的阅读顺序
- 与 `flex-direction` 配合使用

## 示例

```css
/* 默认顺序 */
.item-1 {
  order: 0;
}

.item-2 {
  order: 1;
}

.item-3 {
  order: 2;
}

/* 重新排序 */
.item-1 {
  order: 2; /* 排在最后 */
}

.item-2 {
  order: 0; /* 排在最前 */
}

.item-3 {
  order: 1; /* 排在中间 */
}

/* 负数排在最前 */
.priority-item {
  order: -1;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div class="item-1">项目 1</div>
  <div class="item-2">项目 2</div>
  <div class="item-3">项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 响应式布局 - 移动端调整顺序 */
.layout {
  display: flex;
}

.sidebar {
  order: 2; /* 桌面端在后 */
}

.main {
  order: 1;
}

@media (max-width: 768px) {
  .sidebar {
    order: 1; /* 移动端在前 */
  }
  
  .main {
    order: 2;
  }
}

/* 2. 导航栏 Logo 在前 */
.nav {
  display: flex;
}

.nav-logo {
  order: -1; /* 最前 */
}

.nav-menu {
  order: 0;
}

.nav-user {
  order: 1;
}

/* 3. 卡片布局 - 特殊卡片置顶 */
.card-list {
  display: flex;
  flex-wrap: wrap;
}

.card.featured {
  order: -1; /* 特色卡片置顶 */
}

.card {
  order: 0;
}

/* 4. 表单布局 */
.form {
  display: flex;
  flex-direction: column;
}

.form-submit {
  order: 2; /* 提交按钮在最后 */
}

.form-fields {
  order: 1;
}

.form-title {
  order: 0;
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

- [`flex-direction`](flex-direction.md) - 主轴方向
- [`flex-order`](flex-order.md) - （旧版）
- [`grid-area`](grid-area.md) - 网格区域

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)