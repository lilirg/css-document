# border-bottom-width

该属性设置元素的下边框宽度。

## 语法

```css
border-bottom-width: <line-width>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `medium`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<line-width>`

定义下边框的宽度。可选值包括：

| 值 | 说明 |
|------|------|
| `thin` | 细边框（约 1px） |
| `medium` | 中等边框（约 3px，默认值） |
| `thick` | 粗边框（约 5px） |
| `<length>` | 具体长度值（如 `1px`、`2pt`、`0.5em`） |

## 注意

- 值不能为负数
- 必须与 `border-bottom-style` 配合使用才能显示边框
- 可以使用不同的单位（px、em、rem、pt 等）

## 示例

```css
/* 使用关键字 */
.el1 {
  border-bottom-width: thin;
  border-bottom-style: solid;
}

.el2 {
  border-bottom-width: medium;
  border-bottom-style: solid;
}

.el3 {
  border-bottom-width: thick;
  border-bottom-style: solid;
}

/* 使用长度值 */
.el4 {
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.el5 {
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.el6 {
  border-bottom-width: 0.5em;
  border-bottom-style: solid;
}

.el7 {
  border-bottom-width: 2rem;
  border-bottom-style: solid;
}

/* 零宽度 */
.el8 {
  border-bottom-width: 0;
  border-bottom-style: solid;
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
/* 细底部线 */
.fine-bottom {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ddd;
  padding-bottom: 15px;
}

/* 粗底部强调 */
.thick-bottom {
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: #007bff;
  padding-bottom: 15px;
}

/* 中等底部线 */
.medium-bottom {
  border-bottom-width: medium;
  border-bottom-style: solid;
  border-bottom-color: #333;
  padding-bottom: 15px;
}

/* 渐变底部 */
.gradient-bottom {
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  border-image: linear-gradient(90deg, #ff6b6b, #4ecdc4) 1;
  padding-bottom: 15px;
}

/* 隐藏底部边框 */
.no-bottom {
  border-bottom-width: 0;
  border-bottom-style: solid;
  border-bottom-color: #333;
}

/* 动态宽度（配合动画） */
.animated-bottom {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #28a745;
  padding-bottom: 15px;
  animation: widthChange 2s infinite;
}

@keyframes widthChange {
  0%, 100% { border-bottom-width: 2px; }
  50% { border-bottom-width: 6px; }
}
