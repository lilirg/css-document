# flex-flow

`flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 的简写属性，用于设置弹性盒容器的主轴方向和换行方式。

## 语法

```css
flex-flow: <flex-direction> || <flex-wrap>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `row nowrap` |
| 适用 HTML 元素 | 弹性容器 |
| 动画 | 是（可动画） |

## 值

### flex-direction 值

| 值 | 说明 |
| :--- | :--- |
| `row` | 水平方向（默认） |
| `row-reverse` | 水平反向 |
| `column` | 垂直方向 |
| `column-reverse` | 垂直反向 |

### flex-wrap 值

| 值 | 说明 |
| :--- | :--- |
| `nowrap` | 不换行（默认） |
| `wrap` | 换行 |
| `wrap-reverse` | 反向换行 |

## 注意

- 两个值可以任意顺序组合
- 省略的值使用初始值
- 等同于分别设置 `flex-direction` 和 `flex-wrap`

## 示例

```css
/* 水平换行 */
.flex-container {
  display: flex;
  flex-flow: row wrap;
}

/* 垂直换行 */
.flex-container {
  display: flex;
  flex-flow: column wrap;
}

/* 水平反向换行 */
.flex-container {
  display: flex;
  flex-flow: row-reverse wrap-reverse;
}

/* 只设置方向（不换行） */
.flex-container {
  display: flex;
  flex-flow: column;
}

/* 只设置换行（水平方向） */
.flex-container {
  display: flex;
  flex-flow: wrap;
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
  flex-flow: row wrap;
  gap: 20px;
}

/* 2. 标签云 */
.tag-cloud {
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
}

/* 3. 垂直列表（可换行） */
.menu {
  display: flex;
  flex-flow: column wrap;
  column-count: 3;
}

/* 4. 图片画廊 */
.gallery {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

/* 5. 反向排列的列表 */
.reverse-list {
  display: flex;
  flex-flow: column wrap-reverse;
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
- [`flex-wrap`](flex-wrap.md) - 换行控制
- [`flex`](flex.md) - 项目简写
- [`justify-content`](justify-content.md) - 主轴对齐

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)