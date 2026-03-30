# border-left-width

该属性用于设置元素左边框的宽度。

## 语法

```css
border-left-width: width
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
- 相对单位（如 `0.5em`, `2rem`, `10%`）
- 必须为正值

### thin
细边框（约 1-2px，取决于浏览器）。

### medium
中等边框（约 3-4px，取决于浏览器，默认值）。

### thick
粗边框（约 4-6px，取决于浏览器）。

## 注意
- 如果 `border-left-style` 为 `none` 或 `hidden`，边框不会显示
- `thin`, `medium`, `thick` 的具体像素值由浏览器决定
- 可以使用 `border-width` 速记属性同时设置四个边框的宽度
- 边框宽度不能为负值

## 示例

```css
/* 基本用法 - 使用像素值 */
.box {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #333;
}

/* 使用关键字 */
.thin {
  border-left-width: thin;
  border-left-style: solid;
}

.medium {
  border-left-width: medium;
  border-left-style: solid;
}

.thick {
  border-left-width: thick;
  border-left-style: solid;
}

/* 使用相对单位 */
.relative {
  border-left-width: 0.25em;
  border-left-style: solid;
}
```

```html
<!-- HTML 示例 -->
<div class="box">4px 左边框</div>
<div class="thin">细左边框</div>
<div class="medium">中等左边框</div>
<div class="thick">粗左边框</div>
<div class="relative">0.25em 左边框</div>
```

## 使用场景

```css
/* 1. 引用块左侧装饰线 */
blockquote {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #0066cc;
  padding-left: 20px;
  margin-left: 0;
}

/* 2. 活动状态指示器 */
.menu-item {
  border-left-width: 0;
  border-left-style: solid;
  border-left-color: #0066cc;
  padding-left: 15px;
  transition: border-left-width 0.2s ease;
}
.menu-item.active {
  border-left-width: 4px;
}

/* 3. 警告提示框 */
.warning {
  border-left-width: 6px;
  border-left-style: solid;
  border-left-color: #f57c00;
  padding-left: 15px;
}

/* 4. 成功提示框 */
.success {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #388e3c;
  padding-left: 15px;
}

/* 5. 错误提示框 */
.error {
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #d32f2f;
  padding-left: 15px;
}
