# position

该属性指定元素在文档流中的定位方式。

## 语法

```css
position: static | relative | absolute | fixed | sticky | inherit
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `static` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `static`
默认值，元素按照正常文档流排列。

### `relative`
相对定位，相对于元素在正常文档流中的位置进行偏移。

### `absolute`
绝对定位，相对于最近的已定位（非 static）祖先元素进行定位。

### `fixed`
固定定位，相对于浏览器窗口进行定位。

### `sticky`
粘性定位，在滚动到特定阈值之前表现为相对定位，之后表现为固定定位。

## 注意

- `absolute`、`fixed`、`sticky` 定位的元素会脱离正常文档流
- 配合 `top`、`right`、`bottom`、`left` 属性使用
- `sticky` 定位需要设置滚动容器

## 示例

```css
/* CSS 示例 */
.relative-box {
  position: relative;
  top: 10px;
  left: 20px;
}

.absolute-box {
  position: absolute;
  top: 0;
  right: 0;
}

.fixed-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.sticky-box {
  position: sticky;
  top: 0;
}
```

```html
<!-- HTML 示例 -->
<div class="relative-box">相对定位</div>
<div class="absolute-box">绝对定位</div>
<div class="fixed-box">固定定位</div>
<div class="sticky-box">粘性定位</div>
```

## 使用场景

```css
/* 1. 相对定位 - 微调元素位置 */
微调 {
  position: relative;
  top: 5px;
}

/* 2. 绝对定位 - 模态框 */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* 3. 固定定位 - 导航栏 */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

/* 4. 粘性定位 - 吸顶标题 */
.sticky-header {
  position: sticky;
  top: 0;
  background: white;
}

/* 5. 绝对定位 - 徽章 */
.badge {
  position: absolute;
  top: -5px;
  right: -5px;
}
