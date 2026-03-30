# border-top-width

该属性设置元素的上边框宽度。

## 语法

```css
border-top-width: <line-width>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `medium`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<line-width>`

定义上边框的宽度。可选值包括：

| 值 | 说明 |
|------|------|
| `thin` | 细边框（约 1px） |
| `medium` | 中等边框（约 3px，默认值） |
| `thick` | 粗边框（约 5px） |
| `<length>` | 具体长度值（如 `1px`、`2pt`、`0.5em`） |

## 注意

- 值不能为负数
- 必须与 `border-top-style` 配合使用才能显示边框
- 可以使用不同的单位（px、em、rem、pt 等）

## 示例

```css
/* 使用关键字 */
.el1 {
  border-top-width: thin;
  border-top-style: solid;
}

.el2 {
  border-top-width: medium;
  border-top-style: solid;
}

.el3 {
  border-top-width: thick;
  border-top-style: solid;
}

/* 使用长度值 */
.el4 {
  border-top-width: 1px;
  border-top-style: solid;
}

.el5 {
  border-top-width: 5px;
  border-top-style: solid;
}

.el6 {
  border-top-width: 0.5em;
  border-top-style: solid;
}

.el7 {
  border-top-width: 2rem;
  border-top-style: solid;
}

/* 零宽度 */
.el8 {
  border-top-width: 0;
  border-top-style: solid;
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
/* 细顶部线 */
.fine-top {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #ddd;
  padding-top: 15px;
}

/* 粗顶部强调 */
.thick-top {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #007bff;
  padding-top: 15px;
}

/* 中等顶部线 */
.medium-top {
  border-top-width: medium;
  border-top-style: solid;
  border-top-color: #333;
  padding-top: 15px;
}

/* 渐变顶部 */
.gradient-top {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: transparent;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4) 1;
  padding-top: 15px;
}

/* 隐藏顶部边框 */
.no-top {
  border-top-width: 0;
  border-top-style: solid;
  border-top-color: #333;
}

/* 动态宽度（配合动画） */
.animated-top {
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: #28a745;
  padding-top: 15px;
  animation: widthChange 2s infinite;
}

@keyframes widthChange {
  0%, 100% { border-top-width: 2px; }
  50% { border-top-width: 6px; }
}
