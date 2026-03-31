# flex-grow

`flex-grow` 属性用于设置弹性盒项目的增长因子，决定当有剩余空间时项目如何分配空间。

## 语法

```css
flex-grow: <number>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 弹性盒项目 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 非负数字，表示增长比例（默认 0） |

### 示例说明

| `flex-grow` 值 | 说明 |
| :--- | :--- |
| `0` | 不增长（默认） |
| `1` | 按比例增长 |
| `2` | 增长比例是 `1` 的两倍 |
| `3` | 增长比例是 `1` 的三倍 |

## 注意

- 只接受非负数字
- 值越大，分配的剩余空间越多
- 所有项目的 `flex-grow` 总和决定分配比例
- 是 `flex` 简写属性的第一个值

## 示例

```css
/* 不增长 */
.flex-item {
  flex-grow: 0;
}

/* 按比例增长 */
.flex-item {
  flex-grow: 1;
}

/* 双倍增长 */
.flex-item-large {
  flex-grow: 2;
}

/* 三倍增长 */
.flex-item-xlarge {
  flex-grow: 3;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div class="item-1">项目 1 (grow: 1)</div>
  <div class="item-2">项目 2 (grow: 2)</div>
  <div class="item-3">项目 3 (grow: 1)</div>
</div>
```

## 使用场景

```css
/* 1. 等分布局 */
.columns {
  display: flex;
}

.column {
  flex-grow: 1;
}

/* 2. 主内容占据剩余空间 */
.layout {
  display: flex;
}

.sidebar {
  flex-grow: 0;
  width: 250px;
}

.main {
  flex-grow: 1;
}

/* 3. 按比例分配 */
.proportional {
  display: flex;
}

.part-1 {
  flex-grow: 1; /* 占 25% */
}

.part-2 {
  flex-grow: 2; /* 占 50% */
}

.part-3 {
  flex-grow: 1; /* 占 25% */
}

/* 4. 导航栏 */
.nav {
  display: flex;
}

.nav-logo {
  flex-grow: 0;
}

.nav-menu {
  flex-grow: 1;
}

.nav-user {
  flex-grow: 0;
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

- [`flex`](flex.md) - 弹性简写
- [`flex-shrink`](flex-shrink.md) - 收缩因子
- [`flex-basis`](flex-basis.md) - 基准尺寸
- [`justify-content`](justify-content.md) - 主轴对齐

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)