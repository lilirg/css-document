# border-color

该属性用于设置元素四个边框的颜色，可以是一个、两个、三个或四个值。

## 语法

```css
border-color: <color>{1,4}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 元素 `color` 属性的值 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### color
颜色值：
- 颜色名称（如 `red`, `blue`, `green`）
- 十六进制（如 `#ff0000`, `#f00`）
- RGB（如 `rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)`）
- HSL（如 `hsl(0, 100%, 50%)`, `hsla(0, 100%, 50%, 0.5)`）
- 透明色 `transparent`

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边框使用相同颜色 |
| 2 个值 | 上下边框使用第一个值，左右边框使用第二个值 |
| 3 个值 | 上边框使用第一个值，左右边框使用第二个值，下边框使用第三个值 |
| 4 个值 | 上、右、下、左边框分别使用对应值（顺时针） |

## 注意
- 边框宽度必须大于 0 才能显示（`border-width` 不能为 0）
- 边框样式必须不是 `none` 才能显示（`border-style` 不能为 `none`）
- 可以使用 `border-top-color`, `border-right-color`, `border-bottom-color`, `border-left-color` 分别设置
- 3D 边框效果（`groove`, `ridge`, `inset`, `outset`）会根据颜色值自动计算明暗

## 示例

```css
/* 1 个值 - 所有边框相同颜色 */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #333;
}

/* 2 个值 - 上下 / 左右 */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #333 #666;
}

/* 3 个值 - 上 / 左右 / 下 */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #333 #666 #999;
}

/* 4 个值 - 上 / 右 / 下 / 左 */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #333 #666 #999 #ccc;
}

/* 透明边框 */
.transparent {
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
}

/* 使用 RGBA */
.rgba {
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 102, 204, 0.5);
}
```

```html
<!-- HTML 示例 -->
<div class="box">单色边框</div>
<div class="dual">双色边框</div>
<div class="triple">三色边框</div>
<div class="quad">四色边框</div>
<div class="transparent">透明边框</div>
<div class="rgba">半透明边框</div>
```

## 使用场景

```css
/* 1. 渐变边框效果 */
.gradient-border {
  border-width: 4px;
  border-style: solid;
  border-color: #ff6b6b #feca57 #48dbfb #ff9ff4;
}

/* 2. 重点边框（上边框突出） */
.highlight {
  border-width: 2px;
  border-style: solid;
  border-color: #0066cc transparent transparent transparent;
}

/* 3. 卡片边框 */
.card {
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
}

/* 4. 错误状态边框 */
.error {
  border-width: 2px;
  border-style: solid;
  border-color: #e74c3c;
}

/* 5. 成功状态边框 */
.success {
  border-width: 2px;
  border-style: solid;
  border-color: #2ecc71;
}
