# align-self

`align-self` 属性用于设置弹性盒或网格容器中的单个项目在交叉轴上的对齐方式，覆盖容器的 `align-items` 设置。

## 语法

```css
align-self: auto | normal | stretch | center | flex-start | flex-end | start | end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | <alignment-value>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 弹性盒项目、网格项目 |
| 动画 | 是（可动画） |

## 值

### 基本对齐值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 默认值，继承父容器的 `align-items` 值 |
| `normal` | 根据布局要求对齐 |
| `stretch` | 拉伸以填满容器 |
| `center` | 交叉轴居中对齐 |
| `flex-start` | 交叉轴起始端对齐 |
| `flex-end` | 交叉轴结束端对齐 |
| `start` | 根据书写方向对齐到起始端 |
| `end` | 根据书写方向对齐到结束端 |
| `self-start` | 对齐到自身起始端 |
| `self-end` | 对齐到自身结束端 |

### 基线对齐

| 值 | 说明 |
| :--- | :--- |
| `baseline` | 基线对齐 |
| `first baseline` | 第一行基线对齐 |
| `last baseline` | 最后一行基线对齐 |

## 注意

- 仅对弹性盒或网格容器内的直接子元素生效
- 可以覆盖容器的 `align-items` 设置
- `auto` 值会继承父容器的对齐方式

## 示例

```css
/* 容器设置默认对齐 */
.flex-container {
  display: flex;
  align-items: flex-start;
  height: 200px;
}

/* 单个项目覆盖对齐方式 */
.flex-container .item-1 {
  align-self: center;
}

.flex-container .item-2 {
  align-self: flex-end;
}

.flex-container .item-3 {
  align-self: stretch;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div class="item-1">项目 1（居中）</div>
  <div class="item-2">项目 2（底部）</div>
  <div class="item-3">项目 3（拉伸）</div>
</div>
```

## 使用场景

```css
/* 1. 导航栏 - 特殊项目对齐 */
.nav {
  display: flex;
  align-items: center;
}

.nav-logo {
  align-self: flex-start;
}

.nav-menu {
  align-self: center;
}

.nav-user {
  align-self: flex-end;
}

/* 2. 表单布局 - 特殊输入框对齐 */
.form-row {
  display: flex;
  align-items: baseline;
}

.form-label {
  align-self: flex-start;
}

.form-input {
  flex: 1;
}

/* 3. 卡片布局 - 特殊内容对齐 */
.card {
  display: flex;
  align-items: stretch;
}

.card-image {
  align-self: flex-start;
}

.card-content {
  flex: 1;
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

- [`align-items`](align-items.md) - 容器对齐
- [`align-content`](align-content.md) - 多行对齐
- [`justify-content`](justify-content.md) - 主轴对齐
- [`justify-self`](justify-self.md) - 单个元素主轴对齐

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)