# float

该属性指定元素是否浮动以及浮动方向。

## 语法

```css
float: none | left | right | inline-start | inline-end
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 否 |

## 值

### `none`
默认值。元素不浮动。

### `left`
元素向左浮动。

### `right`
元素向右浮动。

### `inline-start`
根据书写模式，相当于 `left`（LTR）或 `right`（RTL）。

### `inline-end`
根据书写模式，相当于 `right`（LTR）或 `left`（RTL）。

## 注意

- 浮动元素会脱离正常文档流
- 后续内容会环绕浮动元素
- 需要使用 `clear` 清除浮动影响
- 现代布局推荐使用 Flexbox 或 Grid

## 示例

```css
/* CSS 示例 */
.left-float {
  float: left;
  margin-right: 20px;
}

.right-float {
  float: right;
  margin-left: 20px;
}
```

```html
<!-- HTML 示例 -->
<img class="left-float" src="image.jpg" alt="图片">
<p>文本内容会环绕在图片右侧...</p>
```

## 使用场景

```css
/* 1. 左浮动图片 */
.float-left {
  float: left;
  margin: 0 20px 20px 0;
}

/* 2. 右浮动图片 */
.float-right {
  float: right;
  margin: 0 0 20px 20px;
}

/* 3. 清除浮动 */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* 4. 传统导航栏 */
.nav {
  overflow: hidden;
}
.nav-item {
  float: left;
}

/* 5. 文字环绕 */
.text-wrap {
  float: left;
  margin-right: 15px;
}
