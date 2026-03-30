# border-left-style

该属性设置元素的左边框样式。

## 语法

```css
border-left-style: <line-style>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<line-style>`

定义左边框的样式。可选值包括：

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
- 必须设置 `border-left-width` 才能显示边框（`none` 除外）

## 示例

```css
/* 无边框 */
.el1 {
  border-left-style: none;
  border-left-width: 5px;
  border-left-color: #333;
}

/* 点状边框 */
.el2 {
  border-left-style: dotted;
  border-left-width: 2px;
  border-left-color: #333;
}

/* 虚线边框 */
.el3 {
  border-left-style: dashed;
  border-left-width: 2px;
  border-left-color: #333;
}

/* 实线边框 */
.el4 {
  border-left-style: solid;
  border-left-width: 2px;
  border-left-color: #333;
}

/* 双线边框 */
.el5 {
  border-left-style: double;
  border-left-width: 5px;
  border-left-color: #333;
}

/* 3D 凹槽边框 */
.el6 {
  border-left-style: groove;
  border-left-width: 5px;
  border-left-color: #333;
}

/* 3D 凸脊边框 */
.el7 {
  border-left-style: ridge;
  border-left-width: 5px;
  border-left-color: #333;
}

/* 3D 内嵌边框 */
.el8 {
  border-left-style: inset;
  border-left-width: 5px;
  border-left-color: #333;
}

/* 3D 外凸边框 */
.el9 {
  border-left-style: outset;
  border-left-width: 5px;
  border-left-color: #333;
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
/* 点状左侧 - 提示区域 */
.hint-left {
  border-left-style: dotted;
  border-left-width: 1px;
  border-left-color: #ffc107;
  padding-left: 15px;
  background-color: #fff3cd;
}

/* 虚线左侧 - 可拖拽区域 */
.draggable-left {
  border-left-style: dashed;
  border-left-width: 2px;
  border-left-color: #007bff;
  padding-left: 20px;
  text-align: center;
}

/* 实线左侧 - 卡片 */
.card-left {
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: #dee2e6;
  padding-left: 20px;
}

/* 双线左侧 - 强调内容 */
.emphasized-left {
  border-left-style: double;
  border-left-width: 4px;
  border-left-color: #28a745;
  padding-left: 20px;
}

/* 凹槽左侧 - 凹陷效果 */
.inset-left {
  border-left-style: groove;
  border-left-width: 4px;
  border-left-color: #6c757d;
  padding-left: 20px;
}

/* 凸脊左侧 - 凸起效果 */
.outset-left {
  border-left-style: ridge;
  border-left-width: 4px;
  border-left-color: #6c757d;
  padding-left: 20px;
}

/* 内嵌左侧 - 输入框效果 */
.input-left {
  border-left-style: inset;
  border-left-width: 2px;
  border-left-color: #ced4da;
  padding-left: 10px;
}

/* 外凸左侧 - 按钮效果 */
.button-left {
  border-left-style: outset;
  border-left-width: 2px;
  border-left-color: #007bff;
  padding-left: 10px;
}
