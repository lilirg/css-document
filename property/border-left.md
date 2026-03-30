# border-left

该属性设置元素的左边框的所有属性（宽度、样式、颜色）的速记属性。

## 语法

```css
border-left: <line-width> || <line-style> || <color>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | 见各个独立属性 |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### 组合值

`border-left` 可以设置以下属性的组合：

| 属性 | 说明 |
|------|------|
| `border-left-width` | 左边框宽度 |
| `border-left-style` | 左边框样式 |
| `border-left-color` | 左边框颜色 |

### 顺序

值的顺序不固定，但通常按以下顺序书写：

```css
border-left: <宽度> <样式> <颜色>
```

## 注意

- 必须指定 `border-left-style` 才能显示边框（`none` 除外）
- 如果未指定颜色，默认为元素的 `color` 值
- 如果未指定宽度，默认为 `medium`

## 示例

```css
/* 基本用法 */
.el1 {
  border-left: 2px solid #333;
  padding: 20px;
}

/* 指定宽度、样式、颜色 */
.el2 {
  border-left: 3px dashed red;
  padding: 20px;
}

/* 使用关键字宽度 */
.el3 {
  border-left: thick double blue;
  padding: 20px;
}

/* 仅样式和颜色（使用默认宽度） */
.el4 {
  border-left: solid green;
  padding: 20px;
}

/* 仅宽度和样式（使用默认颜色） */
.el5 {
  border-left: 2px dotted;
  padding: 20px;
  color: purple;
}

/* 无边框 */
.el6 {
  border-left: none;
  padding: 20px;
}

/* 透明边框 */
.el7 {
  border-left: 2px solid transparent;
  padding: 20px;
}

/* 使用 RGBA 颜色 */
.el8 {
  border-left: 2px solid rgba(255, 0, 0, 0.5);
  padding: 20px;
}

/* 使用 HSL 颜色 */
.el9 {
  border-left: 2px solid hsl(120, 100%, 50%);
  padding: 20px;
}

/* 渐变边框 */
.el10 {
  border-left: 4px solid transparent;
  border-image: linear-gradient(0deg, #ff6b6b, #4ecdc4) 1;
  padding: 20px;
}
```

```html
<div class="el1">2px solid #333</div>
<div class="el2">3px dashed red</div>
<div class="el3">thick double blue</div>
<div class="el4">solid green</div>
<div class="el5">2px dotted</div>
<div class="el6">none</div>
<div class="el7">transparent</div>
<div class="el8">rgba</div>
<div class="el9">hsl</div>
<div class="el10">渐变</div>
```

## 使用场景

```css
/* 左侧强调线 */
.left-highlight {
  border-left: 4px solid #007bff;
  padding-left: 20px;
  background-color: #f8f9fa;
}

/* 警告左侧 */
.warning-left {
  border-left: 3px dashed #ffc107;
  padding-left: 15px;
  background-color: #fff3cd;
}

/* 成功左侧 */
.success-left {
  border-left: 3px solid #28a745;
  padding-left: 15px;
  background-color: #d4edda;
}

/* 错误左侧 */
.error-left {
  border-left: 3px solid #dc3545;
  padding-left: 15px;
  background-color: #f8d7da;
}

/* 信息左侧 */
.info-left {
  border-left: 3px solid #17a2b8;
  padding-left: 15px;
  background-color: #d1ecf1;
}

/* 引用块效果 */
.blockquote {
  border-left: 4px solid #6f42c1;
  padding-left: 20px;
  margin-left: 0;
  font-style: italic;
}

/* 分隔线效果 */
.separator {
  border-left: 1px solid #dee2e6;
  padding-left: 20px;
  margin-left: 20px;
}

/* 虚线左侧 */
.dashed-left {
  border-left: 2px dashed #6c757d;
  padding-left: 20px;
}

/* 渐变左侧 */
.gradient-left {
  border-left: 4px solid transparent;
  border-image: linear-gradient(0deg, #ff6b6b, #4ecdc4, #45b7d1) 1;
  padding-left: 20px;
}

/* 粗左侧边框 */
.thick-left {
  border-left: 6px double #333;
  padding-left: 20px;
}
