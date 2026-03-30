# border-top

该属性用于设置元素上边框的所有属性（宽度、样式、颜色）的速记属性。

## 语法

```css
border-top: width style color
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各属性初始值 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 取决于各组成部分 |

## 值

### width
边框宽度：
- `length` - 具体长度值（如 `1px`, `2pt`）
- `thin` - 细边框
- `medium` - 中等边框（默认）
- `thick` - 粗边框

### style
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

### color
边框颜色：
- 颜色值（如 `#ff0000`, `red`, `rgb(255,0,0)`, `rgba(255,0,0,0.5)`）
- 透明色 `transparent`

## 注意
- 必须指定 `style` 值，否则边框不会显示（默认 `none`）
- 值的顺序可以互换，但通常按 `width style color` 书写
- 未指定的属性将使用其初始值
- 可以使用 `border` 速记属性同时设置四个边框

## 示例

```css
/* 基本用法 */
.box {
  border-top: 2px solid #333;
}

/* 只设置样式和颜色（宽度为默认 medium） */
.box {
  border-top: solid red;
}

/* 只设置样式（颜色和宽度为默认值） */
.box {
  border-top: dashed;
}

/* 使用关键字宽度 */
.box {
  border-top: thick double blue;
}

/* 透明边框 */
.box {
  border-top: 4px solid transparent;
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
/* 1. 卡片顶部装饰线 */
.card {
  border-top: 4px solid #0066cc;
  padding-top: 15px;
}

/* 2. 导航栏顶部边框 */
.navbar {
  border-top: 3px solid #0066cc;
}

/* 3. 活动状态指示器 */
.tab {
  border-top: 0 solid transparent;
  transition: border-top 0.2s ease;
}
.tab.active {
  border-top: 3px solid #0066cc;
}

/* 4. 警告提示框 */
.warning {
  border-top: 6px solid #f57c00;
  padding-top: 15px;
}

/* 5. 成功提示框 */
.success {
  border-top: 4px solid #388e3c;
  padding-top: 15px;
}
