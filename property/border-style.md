# border-style

该属性设置元素的边框样式。

## 语法

```css
border-style: <line-style>{1,4}
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 否             |

## 值

### `<line-style>`

定义边框的样式。可选值包括：

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

### 多值语法

可以指定 1 到 4 个值，分别设置不同边的样式：

```css
border-style: solid;              /* 所有边 */
border-style: solid dashed;       /* 上下，左右 */
border-style: solid dashed dotted;  /* 上，左右，下 */
border-style: solid dashed dotted groove;  /* 上，右，下，左 */
```

## 注意

- 如果边框颜色未设置，边框颜色默认为元素的 `color` 值
- `none` 和 `hidden` 的区别：`hidden` 在表格边框冲突时优先
- 必须设置 `border-width` 才能显示边框（`none` 除外）

## 示例

```css
/* 无边框 */
.el1 {
  border-style: none;
  border-width: 5px;
  border-color: #333;
}

/* 点状边框 */
.el2 {
  border-style: dotted;
  border-width: 2px;
  border-color: #333;
}

/* 虚线边框 */
.el3 {
  border-style: dashed;
  border-width: 2px;
  border-color: #333;
}

/* 实线边框 */
.el4 {
  border-style: solid;
  border-width: 2px;
  border-color: #333;
}

/* 双线边框 */
.el5 {
  border-style: double;
  border-width: 5px;
  border-color: #333;
}

/* 3D 凹槽边框 */
.el6 {
  border-style: groove;
  border-width: 5px;
  border-color: #333;
}

/* 3D 凸脊边框 */
.el7 {
  border-style: ridge;
  border-width: 5px;
  border-color: #333;
}

/* 3D 内嵌边框 */
.el8 {
  border-style: inset;
  border-width: 5px;
  border-color: #333;
}

/* 3D 外凸边框 */
.el9 {
  border-style: outset;
  border-width: 5px;
  border-color: #333;
}

/* 多值设置 */
.el10 {
  border-style: solid dashed dotted groove;
  border-width: 2px;
  border-color: #333;
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
<div class="el10">多值设置</div>
```

## 使用场景

```css
/* 点状边框 - 提示区域 */
.hint-box {
  border-style: dotted;
  border-width: 1px;
  border-color: #ffc107;
  padding: 15px;
  background-color: #fff3cd;
}

/* 虚线边框 - 可拖拽区域 */
.draggable {
  border-style: dashed;
  border-width: 2px;
  border-color: #007bff;
  padding: 20px;
  text-align: center;
}

/* 实线边框 - 卡片 */
.card {
  border-style: solid;
  border-width: 1px;
  border-color: #dee2e6;
  padding: 20px;
  border-radius: 8px;
}

/* 双线边框 - 强调内容 */
.emphasized {
  border-style: double;
  border-width: 4px;
  border-color: #28a745;
  padding: 20px;
}

/* 凹槽边框 - 凹陷效果 */
.inset-box {
  border-style: groove;
  border-width: 4px;
  border-color: #6c757d;
  padding: 20px;
}

/* 凸脊边框 - 凸起效果 */
.outset-box {
  border-style: ridge;
  border-width: 4px;
  border-color: #6c757d;
  padding: 20px;
}

/* 内嵌边框 - 输入框效果 */
.input-effect {
  border-style: inset;
  border-width: 2px;
  border-color: #ced4da;
  padding: 10px;
}

/* 外凸边框 - 按钮效果 */
.button-effect {
  border-style: outset;
  border-width: 2px;
  border-color: #007bff;
  padding: 10px 20px;
}

/* 混合边框 - 特殊设计 */
.mixed-border {
  border-style: solid dashed solid dashed;
  border-width: 2px;
  border-color: #333;
  padding: 20px;
}
