# border-right-width

该属性设置元素的右边框宽度。

## 语法

```css
border-right-width: <line-width>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `medium`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<line-width>`

定义右边框的宽度。可选值包括：

| 值 | 说明 |
|------|------|
| `thin` | 细边框（约 1px） |
| `medium` | 中等边框（约 3px，默认值） |
| `thick` | 粗边框（约 5px） |
| `<length>` | 具体长度值（如 `1px`、`2pt`、`0.5em`） |

## 注意

- 值不能为负数
- 必须与 `border-right-style` 配合使用才能显示边框
- 可以使用不同的单位（px、em、rem、pt 等）

## 示例

```css
/* 使用关键字 */
.el1 {
  border-right-width: thin;
  border-right-style: solid;
}

.el2 {
  border-right-width: medium;
  border-right-style: solid;
}

.el3 {
  border-right-width: thick;
  border-right-style: solid;
}

/* 使用长度值 */
.el4 {
  border-right-width: 1px;
  border-right-style: solid;
}

.el5 {
  border-right-width: 5px;
  border-right-style: solid;
}

.el6 {
  border-right-width: 0.5em;
  border-right-style: solid;
}

.el7 {
  border-right-width: 2rem;
  border-right-style: solid;
}

/* 零宽度 */
.el8 {
  border-right-width: 0;
  border-right-style: solid;
}
```

```html
<div class="el1">thin</div>
<div class="el2">medium</div>
<div class="el3">thick</div>
<div class="el4">1px</div>
<div class="el5">5px</div>
<div class="el6">0.5em</div>
<div class="el7">2rem</div>
<div class="el8">0</div>
```

## 使用场景

```css
/* 细右侧线 */
.fine-right {
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #ddd;
  padding-right: 15px;
}

/* 粗右侧强调 */
.thick-right {
  border-right-width: 4px;
  border-right-style: solid;
  border-right-color: #007bff;
  padding-right: 15px;
}

/* 中等右侧线 */
.medium-right {
  border-right-width: medium;
  border-right-style: solid;
  border-right-color: #333;
  padding-right: 15px;
}

/* 渐变右侧 */
.gradient-right {
  border-right-width: 4px;
  border-right-style: solid;
  border-right-color: transparent;
  border-image: linear-gradient(180deg, #ff6b6b, #4ecdc4) 1;
  padding-right: 15px;
}

/* 隐藏右侧边框 */
.no-right {
  border-right-width: 0;
  border-right-style: solid;
  border-right-color: #333;
}

/* 动态宽度（配合动画） */
.animated-right {
  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: #28a745;
  padding-right: 15px;
  animation: widthChange 2s infinite;
}

@keyframes widthChange {
  0%, 100% { border-right-width: 2px; }
  50% { border-right-width: 6px; }
}
