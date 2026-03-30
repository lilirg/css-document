# border-bottom-style

该属性用于设置元素下边框的样式。

## 语法

```css
border-bottom-style: style
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### none
无边框（默认值）。即使设置了 `border-bottom-width`，也不会显示边框。

### hidden
与 `hidden` 类似，但在处理边框冲突时优先级更高。

### dotted
点状边框。

### dashed
虚线边框。

### solid
实线边框。

### double
双线边框。两条线的宽度加上中间的间隙等于 `border-width` 的值。

### groove
3D 凹槽边框。凹槽的颜色取决于 `border-color` 的值。

### ridge
3D 凸槽边框。与 `groove` 相反。

### inset
3D 内嵌边框。内嵌的颜色取决于 `border-color` 的值。

### outset
3D 外凸边框。与 `inset` 相反。

## 注意
- 如果设置为 `none` 或 `hidden`，边框不会显示，即使设置了宽度
- `double` 样式需要至少 4px 的宽度才能正确显示
- 3D 效果（`groove`, `ridge`, `inset`, `outset`）依赖于边框颜色
- 可以使用 `border-style` 速记属性同时设置四个边框的样式

## 示例

```css
/* 基本用法 */
.box {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #333;
}

/* 各种样式 */
.dotted {
  border-bottom-style: dotted;
  border-bottom-width: 3px;
}

.dashed {
  border-bottom-style: dashed;
  border-bottom-width: 3px;
}

.double {
  border-bottom-style: double;
  border-bottom-width: 6px;
}

.groove {
  border-bottom-style: groove;
  border-bottom-width: 4px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">实线下边框</div>
<div class="dotted">点状下边框</div>
<div class="dashed">虚线下边框</div>
<div class="double">双线下边框</div>
<div class="groove">凹槽下边框</div>
```

## 使用场景

```css
/* 1. 导航栏底部边框 */
.nav {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
}

/* 2. 选项卡激活状态 */
.tab {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
}
.tab.active {
  border-bottom-color: #0066cc;
}

/* 3. 下划线效果 */
.underline {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #333;
}

/* 4. 分割线 */
.divider {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
  margin: 20px 0;
}

/* 5. 虚线边框 - 用于占位符 */
.placeholder {
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-bottom-color: #999;
  min-height: 100px;
}
