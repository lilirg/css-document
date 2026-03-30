# border

该属性用于设置元素四个边框的所有属性（宽度、样式、颜色）的速记属性。

## 语法

```css
border: <border-width> || <border-style> || <border-color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各属性初始值 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 取决于各组成部分 |

## 值

### border-width
边框宽度：
- `length` - 具体长度值（如 `1px`, `2pt`）
- `thin` - 细边框
- `medium` - 中等边框（默认）
- `thick` - 粗边框

### border-style
边框样式：
- `none` - 无边框
- `hidden` - 隐藏边框（用于表格）
- `dotted` - 点状边框
- `dashed` - 虚线边框
- `solid` - 实线边框
- `double` - 双线边框
- `groove` - 凹槽边框
- `ridge` - 凸槽边框
- `inset` - 内嵌边框
- `outset` - 外凸边框

### border-color
边框颜色：
- 颜色值（如 `#ff0000`, `red`, `rgb(255,0,0)`, `rgba(255,0,0,0.5)`）
- 透明色 `transparent`

## 注意
- 必须指定 `style` 值，否则边框不会显示（默认 `none`）
- 值的顺序可以互换，但通常按 `width style color` 书写
- 未指定的属性将使用其初始值
- 可以使用 `border-top`, `border-right`, `border-bottom`, `border-left` 分别设置单个边框
- 可以使用 `border-width`, `border-style`, `border-color` 分别设置所有边框的对应属性

## 示例

```css
/* 基本用法 */
.box {
  border: 2px solid #333;
}

/* 只设置样式和颜色（宽度为默认 medium） */
.box {
  border: solid red;
}

/* 只设置样式（颜色和宽度为默认值） */
.box {
  border: dashed;
}

/* 使用关键字宽度 */
.box {
  border: thick double blue;
}

/* 透明边框 */
.box {
  border: 4px solid transparent;
}

/* 单边设置 */
.top {
  border-top: 2px solid #333;
}

.right {
  border-right: 2px solid #333;
}

.bottom {
  border-bottom: 2px solid #333;
}

.left {
  border-left: 2px solid #333;
}
```

```html
<!-- HTML 示例 -->
<div class="box">基本边框</div>
<div class="red">红色边框</div>
<div class="dashed">虚线边框</div>
<div class="thick">粗双线边框</div>
<div class="transparent">透明边框</div>
```

## 使用场景

```css
/* 1. 卡片边框 */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* 2. 输入框边框 */
.input {
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
}

/* 3. 输入框聚焦状态 */
.input:focus {
  border: 2px solid #0066cc;
  outline: none;
}

/* 4. 警告提示框 */
.warning {
  border: 2px solid #f57c00;
  background-color: #fff3e0;
  padding: 15px;
  border-radius: 4px;
}

/* 5. 成功提示框 */
.success {
  border: 2px solid #388e3c;
  background-color: #e8f5e9;
  padding: 15px;
  border-radius: 4px;
}

/* 6. 错误提示框 */
.error {
  border: 2px solid #e74c3c;
  background-color: #fce4ec;
  padding: 15px;
  border-radius: 4px;
}

/* 7. 虚线边框（拖放区域） */
.drop-zone {
  border: 2px dashed #0066cc;
  padding: 40px;
  text-align: center;
}
