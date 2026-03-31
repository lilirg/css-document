# align-items

`align-items` 属性用于设置弹性盒或网格容器中的项目在交叉轴上的对齐方式。

## 语法

```css
align-items: normal | stretch | center | flex-start | flex-end | start | end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | <alignment-value>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 弹性容器、网格容器、多列容器 |
| 动画 | 是（可动画） |

## 值

### 基本对齐值

| 值 | 说明 |
| :--- | :--- |
| `normal` | 默认值，根据布局要求对齐 |
| `stretch` | 拉伸以填满容器（默认行为） |
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

### 安全对齐

| 值 | 说明 |
| :--- | :--- |
| `safe center` | 安全居中对齐，防止溢出 |
| `unsafe center` | 不安全居中对齐，可能溢出 |

## 注意

- 控制单行内所有项目的对齐方式
- 单个项目可使用 `align-self` 覆盖
- 在交叉轴上生效（Flexbox 中为垂直方向）

## 示例

```css
/* 交叉轴居中对齐 */
.flex-container {
  display: flex;
  align-items: center;
  height: 200px;
}

/* 交叉轴起始对齐 */
.flex-container {
  display: flex;
  align-items: flex-start;
  height: 200px;
}

/* 基线对齐 */
.flex-container {
  display: flex;
  align-items: baseline;
}

/* 拉伸填充（默认） */
.flex-container {
  display: flex;
  align-items: stretch;
}
```

```html
<!-- HTML 示例 -->
<div class="flex-container">
  <div style="height: 50px">项目 1</div>
  <div style="height: 100px">项目 2</div>
  <div style="height: 75px">项目 3</div>
</div>
```

## 使用场景

```css
/* 1. 导航栏 - 垂直居中 */
.nav {
  display: flex;
  align-items: center;
  height: 60px;
}

/* 2. 按钮组 - 顶部对齐 */
.button-group {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

/* 3. 表单标签 - 基线对齐 */
.form-row {
  display: flex;
  align-items: baseline;
  gap: 15px;
}

/* 4. 卡片内容 - 拉伸填充 */
.card {
  display: flex;
  align-items: stretch;
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

- [`align-content`](align-content.md) - 多行对齐
- [`align-self`](align-self.md) - 单个元素对齐
- [`justify-content`](justify-content.md) - 主轴对齐
- [`flex-direction`](flex-direction.md) - 主轴方向

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)