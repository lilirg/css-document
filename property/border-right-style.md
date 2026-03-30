# border-right-style

该属性设置元素的右边框样式。

## 语法

```css
border-right-style: <line-style>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<line-style>`

定义右边框的样式。可选值包括：

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
- 必须设置 `border-right-width` 才能显示边框（`none` 除外）

## 示例

```css
/* 无边框 */
.el1 {
  border-right-style: none;
  border-right-width: 5px;
  border-right-color: #333;
}

/* 点状边框 */
.el2 {
  border-right-style: dotted;
  border-right-width: 2px;
  border-right-color: #333;
}

/* 虚线边框 */
.el3 {
  border-right-style: dashed;
  border-right-width: 2px;
  border-right-color: #333;
}

/* 实线边框 */
.el4 {
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: #333;
}

/* 双线边框 */
.el5 {
  border-right-style: double;
  border-right-width: 5px;
  border-right-color: #333;
}

/* 3D 凹槽边框 */
.el6 {
  border-right-style: groove;
  border-right-width: 5px;
  border-right-color: #333;
}

/* 3D 凸脊边框 */
.el7 {
  border-right-style: ridge;
  border-right-width: 5px;
  border-right-color: #333;
}

/* 3D 内嵌边框 */
.el8 {
  border-right-style: inset;
  border-right-width: 5px;
  border-right-color: #333;
}

/* 3D 外凸边框 */
.el9 {
  border-right-style: outset;
  border-right-width: 5px;
  border-right-color: #333;
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
/* 点状右侧 - 提示区域 */
.hint-right {
  border-right-style: dotted;
  border-right-width: 1px;
  border-right-color: #ffc107;
  padding-right: 15px;
  background-color: #fff3cd;
}

/* 虚线右侧 - 可拖拽区域 */
.draggable-right {
  border-right-style: dashed;
  border-right-width: 2px;
  border-right-color: #007bff;
  padding-right: 20px;
  text-align: center;
}

/* 实线右侧 - 卡片 */
.card-right {
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: #dee2e6;
  padding-right: 20px;
}

/* 双线右侧 - 强调内容 */
.emphasized-right {
  border-right-style: double;
  border-right-width: 4px;
  border-right-color: #28a745;
  padding-right: 20px;
}

/* 凹槽右侧 - 凹陷效果 */
.inset-right {
  border-right-style: groove;
  border-right-width: 4px;
  border-right-color: #6c757d;
  padding-right: 20px;
}

/* 凸脊右侧 - 凸起效果 */
.outset-right {
  border-right-style: ridge;
  border-right-width: 4px;
  border-right-color: #6c757d;
  padding-right: 20px;
}

/* 内嵌右侧 - 输入框效果 */
.input-right {
  border-right-style: inset;
  border-right-width: 2px;
  border-right-color: #ced4da;
  padding-right: 10px;
}

/* 外凸右侧 - 按钮效果 */
.button-right {
  border-right-style: outset;
  border-right-width: 2px;
  border-right-color: #007bff;
  padding-right: 10px;
}
