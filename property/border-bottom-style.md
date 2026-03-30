# border-bottom-style

该属性设置元素的下边框样式。

## 语法

```css
border-bottom-style: <line-style>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<line-style>`

定义下边框的样式。可选值包括：

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
- 必须设置 `border-bottom-width` 才能显示边框（`none` 除外）

## 示例

```css
/* 无边框 */
.el1 {
  border-bottom-style: none;
  border-bottom-width: 5px;
  border-bottom-color: #333;
}

/* 点状边框 */
.el2 {
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-bottom-color: #333;
}

/* 虚线边框 */
.el3 {
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-bottom-color: #333;
}

/* 实线边框 */
.el4 {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #333;
}

/* 双线边框 */
.el5 {
  border-bottom-style: double;
  border-bottom-width: 5px;
  border-bottom-color: #333;
}

/* 3D 凹槽边框 */
.el6 {
  border-bottom-style: groove;
  border-bottom-width: 5px;
  border-bottom-color: #333;
}

/* 3D 凸脊边框 */
.el7 {
  border-bottom-style: ridge;
  border-bottom-width: 5px;
  border-bottom-color: #333;
}

/* 3D 内嵌边框 */
.el8 {
  border-bottom-style: inset;
  border-bottom-width: 5px;
  border-bottom-color: #333;
}

/* 3D 外凸边框 */
.el9 {
  border-bottom-style: outset;
  border-bottom-width: 5px;
  border-bottom-color: #333;
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
/* 点状底部 - 提示区域 */
.hint-bottom {
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-bottom-color: #ffc107;
  padding-bottom: 15px;
  background-color: #fff3cd;
}

/* 虚线底部 - 可拖拽区域 */
.draggable-bottom {
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-bottom-color: #007bff;
  padding-bottom: 20px;
  text-align: center;
}

/* 实线底部 - 卡片 */
.card-bottom {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #dee2e6;
  padding-bottom: 20px;
}

/* 双线底部 - 强调内容 */
.emphasized-bottom {
  border-bottom-style: double;
  border-bottom-width: 4px;
  border-bottom-color: #28a745;
  padding-bottom: 20px;
}

/* 凹槽底部 - 凹陷效果 */
.inset-bottom {
  border-bottom-style: groove;
  border-bottom-width: 4px;
  border-bottom-color: #6c757d;
  padding-bottom: 20px;
}

/* 凸脊底部 - 凸起效果 */
.outset-bottom {
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-bottom-color: #6c757d;
  padding-bottom: 20px;
}

/* 内嵌底部 - 输入框效果 */
.input-bottom {
  border-bottom-style: inset;
  border-bottom-width: 2px;
  border-bottom-color: #ced4da;
  padding-bottom: 10px;
}

/* 外凸底部 - 按钮效果 */
.button-bottom {
  border-bottom-style: outset;
  border-bottom-width: 2px;
  border-bottom-color: #007bff;
  padding-bottom: 10px;
}
