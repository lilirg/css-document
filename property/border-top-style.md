# border-top-style

该属性设置元素的上边框样式。

## 语法

```css
border-top-style: <line-style>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<line-style>`

定义上边框的样式。可选值包括：

| 值 | 说明 |
|------|------|
| `none` | 无边框（不绘制边框） |
| `hidden` | 隐藏边框（用于表格边框冲突解决） |
| `dotted` | 点状边框 |
| `dashed` | 虚线边框 |
| `solid` | 实线边框 |
| `double` | 双线边框 |
| `groove` | 3D 凹槽边框 |
| `ridge` | 3D 凸脊边框 |
| `inset` | 3D 内嵌边框 |
| `outset` | 3D 外凸边框 |

## 注意

- 如果边框颜色未设置，边框颜色默认为元素的 `color` 值
- `none` 和 `hidden` 的区别：`hidden` 在表格边框冲突时优先
- 必须设置 `border-top-width` 才能显示边框（`none` 除外）

## 示例

```css
/* 无边框 */
.el1 {
  border-top-style: none;
  border-top-width: 5px;
  border-top-color: #333;
}

/* 点状边框 */
.el2 {
  border-top-style: dotted;
  border-top-width: 2px;
  border-top-color: #333;
}

/* 虚线边框 */
.el3 {
  border-top-style: dashed;
  border-top-width: 2px;
  border-top-color: #333;
}

/* 实线边框 */
.el4 {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #333;
}

/* 双线边框 */
.el5 {
  border-top-style: double;
  border-top-width: 5px;
  border-top-color: #333;
}

/* 3D 凹槽边框 */
.el6 {
  border-top-style: groove;
  border-top-width: 5px;
  border-top-color: #333;
}

/* 3D 凸脊边框 */
.el7 {
  border-top-style: ridge;
  border-top-width: 5px;
  border-top-color: #333;
}

/* 3D 内嵌边框 */
.el8 {
  border-top-style: inset;
  border-top-width: 5px;
  border-top-color: #333;
}

/* 3D 外凸边框 */
.el9 {
  border-top-style: outset;
  border-top-width: 5px;
  border-top-color: #333;
}
```

```html
<div class="el1">none</div>
<div class="el2">dotted</div>
<div class="el3">dashed</div>
<div class="el4">solid</div>
<div class="el5">double</div>
<div class="el6">groove</div>
<div class="el7">ridge</div>
<div class="el8">inset</div>
<div class="el9">outset</div>
```

## 使用场景

```css
/* 点状顶部 - 提示区域 */
.hint-top {
  border-top-style: dotted;
  border-top-width: 1px;
  border-top-color: #ffc107;
  padding-top: 15px;
  background-color: #fff3cd;
}

/* 虚线顶部 - 可拖拽区域 */
.draggable-top {
  border-top-style: dashed;
  border-top-width: 2px;
  border-top-color: #007bff;
  padding-top: 20px;
  text-align: center;
}

/* 实线顶部 - 卡片 */
.card-top {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #dee2e6;
  padding-top: 20px;
}

/* 双线顶部 - 强调内容 */
.emphasized-top {
  border-top-style: double;
  border-top-width: 4px;
  border-top-color: #28a745;
  padding-top: 20px;
}

/* 凹槽顶部 - 凹陷效果 */
.inset-top {
  border-top-style: groove;
  border-top-width: 4px;
  border-top-color: #6c757d;
  padding-top: 20px;
}

/* 凸脊顶部 - 凸起效果 */
.outset-top {
  border-top-style: ridge;
  border-top-width: 4px;
  border-top-color: #6c757d;
  padding-top: 20px;
}

/* 内嵌顶部 - 输入框效果 */
.input-top {
  border-top-style: inset;
  border-top-width: 2px;
  border-top-color: #ced4da;
  padding-top: 10px;
}

/* 外凸顶部 - 按钮效果 */
.button-top {
  border-top-style: outset;
  border-top-width: 2px;
  border-top-color: #007bff;
  padding-top: 10px;
}
