# flex

`flex` 属性是弹性盒项目的简写属性，用于设置项目的增长、收缩和基准尺寸。

## 语法

```css
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 详见各简写属性 |
| 适用 HTML 元素 | 弹性盒项目 |
| 动画 | 是（可动画） |

## 值

### 关键字值

| 值 | 说明 | `flex-grow` | `flex-shrink` | `flex-basis` |
| :--- | :--- | :--- | :--- | :--- |
| `none` | 不可伸缩 | 0 | 0 | `auto` |
| `auto` | 自动伸缩 | 1 | 1 | `auto` |

### 简写值

| 组合 | 说明 |
| :--- | :--- |
| `flex: 1` | `flex-grow: 1; flex-shrink: 1; flex-basis: 0%` |
| `flex: 2` | `flex-grow: 2; flex-shrink: 1; flex-basis: 0%` |
| `flex: 1 2` | `flex-grow: 1; flex-shrink: 2; flex-basis: 0%` |
| `flex: 1 2 100px` | `flex-grow: 1; flex-shrink: 2; flex-basis: 100px` |

### 单独值

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 设置 `flex-grow`，其他使用默认值 |
| `auto` | 设置 `flex-basis` 为 `auto` |
| `<length>` | 设置 `flex-basis` |
| `min-content` | `flex-basis` 为最小内容宽度 |
| `max-content` | `flex-basis` 为最大内容宽度 |
| `fit-content` | `flex-basis` 为适应内容宽度 |

## 注意

- 只能用于弹性盒容器的直接子元素
- 简写属性会重置未指定的值为初始值
- `flex: 1` 是最常用的写法，表示平均分配剩余空间

## 示例

```css
/* 等比例分配 */
.flex-item {
  flex: 1;
}

/* 双倍空间 */
.flex-item-large {
  flex: 2;
}

/* 固定基准，可伸缩 */
.flex-item {
  flex: 1 1 200px;
}

/* 不可伸缩 */
.flex-item-fixed {
  flex: none;
}

/* 自动大小 */
.flex-item-auto {
  flex: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div class="flex-item">项目 1</div>
  <div class="flex-item-large">项目 2（双倍）</div>
  <div class="flex-item">项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 等分布局 */
.equal-columns {
  display: flex;
}

.column {
  flex: 1;
}

/* 2. 侧边栏布局 */
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* 固定宽度 */
}

.main {
  flex: 1; /* 占据剩余空间 */
}

/* 3. 导航栏 */
.nav {
  display: flex;
  justify-content: space-between;
}

.nav-logo {
  flex: 0 0 auto;
}

.nav-menu {
  flex: 1;
}

/* 4. 卡片列表 */
.card-list {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* 最小 300px，可伸缩 */
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

- [`flex-grow`](flex-grow.md) - 增长因子
- [`flex-shrink`](flex-shrink.md) - 收缩因子
- [`flex-basis`](flex-basis.md) - 基准尺寸
- [`display`](display.md) - 显示类型

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)