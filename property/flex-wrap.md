# flex-wrap

`flex-wrap` 属性用于设置弹性盒容器是否换行，以及换行的方向。

## 语法

```css
flex-wrap: nowrap | wrap | wrap-reverse
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `nowrap` |
| 适用 HTML 元素 | 弹性容器 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 | 换行方向 |
| :--- | :--- | :--- |
| `nowrap` | 不换行（默认） | - |
| `wrap` | 换行 | 从上到下 |
| `wrap-reverse` | 反向换行 | 从下到上 |

## 注意

- 默认值 `nowrap` 会将所有项目放在一行
- 换行后，`align-content` 属性控制多行之间的对齐
- 与 `flex-direction` 配合使用决定换行方向

## 示例

```css
/* 不换行（默认） */
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}

/* 换行 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

/* 反向换行 */
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
  <div>项目 5</div>
</div>
```

## 使用场景

```css
/* 1. 响应式卡片布局 */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;
}

/* 2. 标签云 */
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 12px;
  background: #eee;
}

/* 3. 图片画廊 */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-item {
  flex: 1 1 200px;
  max-width: 300px;
}

/* 4. 不换行的导航栏 */
.nav {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto; /* 超出时滚动 */
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
- [`flex-flow`](flex-flow.md) - 方向和换行简写
- [`align-content`](align-content.md) - 多行对齐
- [`justify-content`](justify-content.md) - 主轴对齐

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)