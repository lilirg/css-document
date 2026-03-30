# border-style

该属性用于设置元素四个边框的样式，可以是一个、两个、三个或四个值。

## 语法

```css
border-style: <line-style>{1,4}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### none
无边框，不绘制边框。

### hidden
与 `none` 类似，但在表格单元格冲突解决中优先级更高。

### dotted
点状边框，由点组成。

### dashed
虚线边框，由短线段组成。

### solid
实线边框，单实线。

### double
双线边框，两条实线加中间间隙。

### groove
凹槽边框，3D 凹陷效果。

### ridge
凸槽边框，3D 凸起效果。

### inset
内嵌边框，3D 内陷效果。

### outset
外凸边框，3D 外凸效果。

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边框使用相同样式 |
| 2 个值 | 上下边框使用第一个值，左右边框使用第二个值 |
| 3 个值 | 上边框使用第一个值，左右边框使用第二个值，下边框使用第三个值 |
| 4 个值 | 上、右、下、左边框分别使用对应值（顺时针） |

## 注意
- 边框宽度必须大于 0 才能显示（`border-width` 不能为 0 或 `medium` 以外的默认值）
- `none` 和 `hidden` 的区别在于表格边框冲突解决时的优先级
- 3D 效果（`groove`, `ridge`, `inset`, `outset`）的颜色由 `border-color` 决定
- 可以使用 `border-top-style`, `border-right-style`, `border-bottom-style`, `border-left-style` 分别设置

## 示例

```css
/* 1 个值 - 所有边框相同样式 */
.box {
  border-width: 2px;
  border-style: solid;
}

/* 2 个值 - 上下 / 左右 */
.box {
  border-width: 2px;
  border-style: solid dashed;
}

/* 3 个值 - 上 / 左右 / 下 */
.box {
  border-width: 2px;
  border-style: solid dashed dotted;
}

/* 4 个值 - 上 / 右 / 下 / 左 */
.box {
  border-width: 2px;
  border-style: solid dashed dotted double;
}

/* 3D 效果边框 */
.groove {
  border-width: 4px;
  border-style: groove;
}

.ridge {
  border-width: 4px;
  border-style: ridge;
}

.inset {
  border-width: 4px;
  border-style: inset;
}

.outset {
  border-width: 4px;
  border-style: outset;
}
```

```html
<!-- HTML 示例 -->
<div class="solid">实线边框</div>
<div class="dashed">虚线边框</div>
<div class="dotted">点状边框</div>
<div class="double">双线边框</div>
<div class="groove">凹槽边框</div>
<div class="ridge">凸槽边框</div>
<div class="inset">内嵌边框</div>
<div class="outset">外凸边框</div>
```

## 使用场景

```css
/* 1. 简单实线边框 */
.card {
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
}

/* 2. 虚线边框（可点击区域提示） */
.clickable {
  border-width: 2px;
  border-style: dashed;
  border-color: #0066cc;
}

/* 3. 重点强调边框 */
.important {
  border-width: 3px;
  border-style: solid;
  border-color: #f57c00;
}

/* 4. 装饰性双线边框 */
.decorative {
  border-width: 4px;
  border-style: double;
  border-color: #333;
}

/* 5. 混合边框设计 */
.mixed {
  border-width: 2px;
  border-style: solid dashed solid dashed;
  border-color: #0066cc;
}
