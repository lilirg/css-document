# border-width

该属性用于设置元素四个边框的宽度，可以是一个、两个、三个或四个值。

## 语法

```css
border-width: <line-width>{1,4}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `medium` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### length
具体的长度值：
- 绝对单位（如 `1px`, `2pt`, `0.5in`）
- 相对单位（如 `0.5em`, `2rem`）
- 必须为正值

### thin
细边框（约 1-2px，取决于浏览器）。

### medium
中等边框（约 3-4px，取决于浏览器，默认值）。

### thick
粗边框（约 4-6px，取决于浏览器）。

### 值数量说明
| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有四个边框使用相同宽度 |
| 2 个值 | 上下边框使用第一个值，左右边框使用第二个值 |
| 3 个值 | 上边框使用第一个值，左右边框使用第二个值，下边框使用第三个值 |
| 4 个值 | 上、右、下、左边框分别使用对应值（顺时针） |

## 注意
- 如果 `border-style` 为 `none` 或 `hidden`，边框不会显示
- `thin`, `medium`, `thick` 的具体像素值由浏览器决定
- 可以使用 `border-top-width`, `border-right-width`, `border-bottom-width`, `border-left-width` 分别设置
- 边框宽度不能为负值

## 示例

```css
/* 1 个值 - 所有边框相同宽度 */
.box {
  border-width: 2px;
  border-style: solid;
}

/* 2 个值 - 上下 / 左右 */
.box {
  border-width: 4px 2px;
  border-style: solid;
}

/* 3 个值 - 上 / 左右 / 下 */
.box {
  border-width: 4px 2px 1px;
  border-style: solid;
}

/* 4 个值 - 上 / 右 / 下 / 左 */
.box {
  border-width: 4px 2px 1px 3px;
  border-style: solid;
}

/* 使用关键字 */
.box {
  border-width: thin medium thick;
  border-style: solid;
}
```

```html
<!-- HTML 示例 -->
<div class="box1">单值边框</div>
<div class="box2">双值边框</div>
<div class="box3">三值边框</div>
<div class="box4">四值边框</div>
```

## 使用场景

```css
/* 1. 单边框强调 */
.highlight {
  border-width: 2px;
  border-style: solid;
  border-color: #0066cc;
}

/* 2. 上下边框装饰 */
.separator {
  border-width: 1px 0;
  border-style: solid;
  border-color: #ddd;
}

/* 3. 不对称边框设计 */
.asymmetric {
  border-width: 4px 0 0 0;
  border-style: solid;
  border-color: #0066cc;
}

/* 4. 卡片边框 */
.card {
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
  border-radius: 8px;
}

/* 5. 重点边框 */
.important {
  border-width: 3px;
  border-style: solid;
  border-color: #f57c00;
}
