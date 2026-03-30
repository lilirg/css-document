# border-width

该属性设置元素的边框宽度。

## 语法

```css
border-width: <line-width>{1,4}
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `medium`       |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<line-width>`

定义边框的宽度。可选值包括：

| 值 | 说明 |
|------|------|
| `thin` | 细边框（约 1px） |
| `medium` | 中等边框（约 3px，默认值） |
| `thick` | 粗边框（约 5px） |
| `<length>` | 具体长度值（如 `1px`、`2pt`、`0.5em`） |

### 多值语法

可以指定 1 到 4 个值，分别设置不同边的宽度：

```css
border-width: 1px;              /* 所有边 */
border-width: 1px 2px;          /* 上下，左右 */
border-width: 1px 2px 3px;      /* 上，左右，下 */
border-width: 1px 2px 3px 4px;  /* 上，右，下，左 */
```

## 注意

- 值不能为负数
- 必须与 `border-style` 配合使用才能显示边框
- 可以使用不同的单位（px、em、rem、pt 等）

## 示例

```css
/* 使用关键字 */
.el {
  border-width: thin;
  border-style: solid;
}

.el2 {
  border-width: medium;
  border-style: solid;
}

.el3 {
  border-width: thick;
  border-style: solid;
}

/* 使用长度值 */
.el4 {
  border-width: 1px;
  border-style: solid;
}

.el5 {
  border-width: 5px;
  border-style: solid;
}

.el6 {
  border-width: 0.5em;
  border-style: solid;
}

/* 多值设置 */
.el7 {
  border-width: 2px 4px;
  border-style: solid;
}

.el8 {
  border-width: 1px 2px 3px;
  border-style: solid;
}

.el9 {
  border-width: 1px 2px 3px 4px;
  border-style: solid;
}

/* 单边设置 */
.el10 {
  border-top-width: 2px;
  border-right-width: 4px;
  border-bottom-width: 2px;
  border-left-width: 4px;
  border-style: solid;
}
```

```html
<div class="el">thin</div>
<div class="el2">medium</div>
<div class="el3">thick</div>
<div class="el4">1px</div>
<div class="el5">5px</div>
<div class="el6">0.5em</div>
<div class="el7">2px 4px</div>
<div class="el8">1px 2px 3px</div>
<div class="el9">1px 2px 3px 4px</div>
<div class="el10">单边设置</div>
```

## 使用场景

```css
/* 细边框 */
.fine-border {
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
  padding: 15px;
}

/* 粗边框强调 */
.emphasized {
  border-width: 3px;
  border-style: solid;
  border-color: #ff6b6b;
  padding: 15px;
}

/* 上边框突出 */
.top-highlight {
  border-width: 3px 0 0 0;
  border-style: solid;
  border-color: #007bff;
  padding: 15px;
}

/* 左右边框 */
.side-borders {
  border-width: 0 4px;
  border-style: solid;
  border-color: #28a745;
  padding: 15px;
}

/* 不对称边框 */
.asymmetric {
  border-width: 2px 4px 2px 4px;
  border-style: solid;
  border-color: #6c757d;
  padding: 15px;
}

/* 底部边框线 */
.bottom-line {
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: #333;
  padding: 10px 0;
}

/* 渐变边框效果 */
.gradient-border {
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
  padding: 15px;
}
