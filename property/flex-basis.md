# flex-basis

`flex-basis` 属性用于设置弹性盒项目的初始主轴尺寸，在分配剩余空间之前。

## 语法

```css
flex-basis: auto | <length> | <percentage> | min-content | max-content | fit-content | fill
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 弹性盒项目 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 使用 `width`/`height` 的值作为基准 |
| `<length>` | 固定长度值（如 `100px`, `20rem`） |
| `<percentage>` | 相对于容器的百分比 |
| `min-content` | 内容所需的最小宽度 |
| `max-content` | 内容所需的最大宽度（不换行） |
| `fit-content` | 适应内容宽度 |
| `fill` | 填充可用空间 |
| `content` | 根据内容自动计算 |

## 注意

- 在主轴方向上生效（水平或垂直取决于 `flex-direction`）
- 是 `flex` 简写属性的第三个值
- 设置后会影响剩余空间的分配

## 示例

```css
/* 固定基准尺寸 */
.flex-item {
  flex-basis: 200px;
}

/* 使用内容宽度 */
.flex-item {
  flex-basis: auto;
}

/* 使用最小内容宽度 */
.flex-item {
  flex-basis: min-content;
}

/* 使用最大内容宽度 */
.flex-item {
  flex-basis: max-content;
}

/* 百分比基准 */
.flex-item {
  flex-basis: 50%;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div class="flex-item">固定 200px</div>
  <div class="flex-item">自动宽度</div>
  <div class="flex-item">50% 容器宽度</div>
</div>
```

## 使用场景

```css
/* 1. 固定宽度侧边栏 */
.layout {
  display: flex;
}

.sidebar {
  flex-basis: 250px;
  flex-grow: 0;
}

.main {
  flex: 1;
}

/* 2. 等分布局 */
.columns {
  display: flex;
}

.column {
  flex-basis: 0;
  flex-grow: 1;
}

/* 3. 内容自适应 */
.card-list {
  display: flex;
  gap: 20px;
}

.card {
  flex-basis: min-content;
  flex-grow: 1;
}

/* 4. 图片画廊 */
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  flex-basis: 200px;
  flex-grow: 1;
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
- [`flex-grow`](flex-grow.md) - 增长因子
- [`flex-shrink`](flex-shrink.md) - 收缩因子
- [`width`](width.md) - 宽度

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)