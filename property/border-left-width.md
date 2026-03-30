# border-left-width

该属性设置元素的左边框宽度。

## 语法

```css
border-left-width: <line-width>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `medium`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<line-width>`

定义左边框的宽度。可选值包括：

| 值 | 说明 |
|------|------|
| `thin` | 细边框（约 1px） |
| `medium` | 中等边框（约 3px，默认值） |
| `thick` | 粗边框（约 5px） |
| `<length>` | 具体长度值（如 `1px`、`2pt`、`0.5em`） |

## 注意

- 值不能为负数
- 必须与 `border-left-style` 配合使用才能显示边框
- 可以使用不同的单位（px、em、rem、pt 等）

## 示例

```css
/* 使用关键字 */
.el1 {
  border-left-width: thin;
  border-left-style: solid;
}

.el2 {
  border-left-width: medium;
  border-left-style: solid;
}

.el3 {
  border-left-width: thick;
  border-left-style: solid;
}

/* 使用长度值 */
.el4 {
  border-left-width: 1px;
  border-left-style: solid;
}

.el5 {
  border-left-width: 5px;
  border-left-style: solid;
}

.el6 {
  border-left-width: 0.5em;
  border-left-style: solid;
}

.el7 {
  border-left-width: 2rem;
  border-left-style: solid;
}

/* 零宽度 */
.el8 {
  border-left-width: 0;
  border-left-style: solid;
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
/* 细左侧线 */
.fine-left {
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: #ddd;
  padding-left: 15px;
}

/* 粗左侧强调 */
.thick-left {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #007bff;
  padding-left: 15px;
}

/* 中等左侧线 */
.medium-left {
  border-left-width: medium;
  border-left-style: solid;
  border-left-color: #333;
  padding-left: 15px;
}

/* 渐变左侧 */
.gradient-left {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: transparent;
  border-image: linear-gradient(0deg, #ff6b6b, #4ecdc4) 1;
  padding-left: 15px;
}

/* 隐藏左侧边框 */
.no-left {
  border-left-width: 0;
  border-left-style: solid;
  border-left-color: #333;
}

/* 动态宽度（配合动画） */
.animated-left {
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: #28a745;
  padding-left: 15px;
  animation: widthChange 2s infinite;
}

@keyframes widthChange {
  0%, 100% { border-left-width: 2px; }
  50% { border-left-width: 6px; }
}
