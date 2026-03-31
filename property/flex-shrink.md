# flex-shrink

`flex-shrink` 属性用于设置弹性盒项目的收缩因子，决定当空间不足时项目如何收缩。

## 语法

```css
flex-shrink: <number>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `1` |
| 适用 HTML 元素 | 弹性盒项目 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<number>` | 非负数字，表示收缩比例（默认 1） |

### 示例说明

| `flex-shrink` 值 | 说明 |
| :--- | :--- |
| `0` | 不收缩 |
| `1` | 按比例收缩（默认） |
| `2` | 收缩比例是 `1` 的两倍 |
| `3` | 收缩比例是 `1` 的三倍 |

## 注意

- 只接受非负数字
- 值越大，收缩得越快
- 所有项目的 `flex-shrink` 总和决定收缩比例
- 是 `flex` 简写属性的第二个值
- 默认值为 `1`，与 `flex-grow` 不同

## 示例

```css
/* 不收缩 */
.flex-item {
  flex-shrink: 0;
}

/* 按比例收缩 */
.flex-item {
  flex-shrink: 1;
}

/* 快速收缩 */
.flex-item {
  flex-shrink: 2;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div class="item-1">项目 1 (shrink: 1)</div>
  <div class="item-2">项目 2 (shrink: 2)</div>
  <div class="item-3">项目 3 (shrink: 1)</div>
</div>
```

## 使用场景

```css
/* 1. 固定宽度项目不收缩 */
.layout {
  display: flex;
}

.sidebar {
  flex-shrink: 0;
  width: 250px;
}

.main {
  flex-shrink: 1;
}

/* 2. 标签不收缩 */
.tags {
  display: flex;
  gap: 10px;
}

.tag {
  flex-shrink: 0;
}

/* 3. 图片保持比例 */
.image-container {
  display: flex;
}

.image {
  flex-shrink: 0;
}

.caption {
  flex-shrink: 1;
}

/* 4. 导航栏 Logo 不收缩 */
.nav {
  display: flex;
}

.nav-logo {
  flex-shrink: 0;
}

.nav-menu {
  flex-shrink: 1;
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
- [`flex-basis`](flex-basis.md) - 基准尺寸
- [`min-width`](min-width.md) - 最小宽度

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)