# align-content

`align-content` 属性用于设置多行弹性盒或网格容器的行/列在交叉轴上的对齐方式。

## 语法

```css
align-content: normal | baseline | first baseline | last baseline | center | flex-start | flex-end | start | end | self-start | self-end | stretch | space-between | space-around | space-evenly | <alignment-value> || <overflow-position>
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
| `normal` | 默认值，元素根据布局要求对齐 |
| `center` | 交叉轴居中对齐 |
| `flex-start` | 交叉轴起始端对齐 |
| `flex-end` | 交叉轴结束端对齐 |
| `start` | 根据书写方向对齐到起始端 |
| `end` | 根据书写方向对齐到结束端 |
| `stretch` | 拉伸以填满容器（默认） |
| `space-between` | 均匀分布，首尾贴边 |
| `space-around` | 均匀分布，两侧间距为一半 |
| `space-evenly` | 均匀分布，所有间距相等 |

### 基线对齐

| 值 | 说明 |
| :--- | :--- |
| `baseline` | 基线对齐 |
| `first baseline` | 第一行基线对齐 |
| `last baseline` | 最后一行基线对齐 |

## 注意

- 仅当容器有多行内容时生效
- 单行弹性盒使用 `align-items` 控制对齐
- 在 Grid 布局中同样适用

## 示例

```css
/* 多行弹性盒 - 居中对齐 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 400px;
}

/* 多行弹性盒 - 均匀分布 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 400px;
}

/* 网格布局 - 拉伸填充 */
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  align-content: stretch;
  height: 400px;
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
  <div>项目 6</div>
</div>
```

## 使用场景

```css
/* 1. 多行导航栏 - 居中对齐 */
.nav-menu {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 10px;
}

/* 2. 卡片网格 - 均匀分布 */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  gap: 20px;
}

/* 3. 表单布局 - 起始对齐 */
.form-group {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 15px;
}

/* 4. 图片画廊 - 拉伸填充 */
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  gap: 10px;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Edge | 12+ |
| Firefox | 28+ |
| Safari | 9+ |
| Opera | 16+ |

## 相关属性

- [`align-items`](align-items.md) - 单行对齐
- [`align-self`](align-self.md) - 单个元素对齐
- [`justify-content`](justify-content.md) - 主轴对齐
- [`flex-wrap`](flex-wrap.md) - 换行控制

## 规范

- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)