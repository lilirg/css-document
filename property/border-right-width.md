# border-right-width

该属性用于设置元素右边框的宽度。

## 语法

```css
border-right-width: width
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
- 如果 `border-right-style` 为 `none` 或 `hidden`，边框不会显示
- `thin`, `medium`, `thick` 的具体像素值由浏览器决定
- 可以使用 `border-width` 速记属性同时设置四个边框的宽度
- 边框宽度不能为负值

## 示例

```css
/* 基本用法 - 使用像素值 */
.box {
  border-right-width: 4px;
  border-right-style: solid;
  border-right-color: #333;
}

/* 使用关键字 */
.thin {
  border-right-width: thin;
  border-right-style: solid;
}

.medium {
  border-right-width: medium;
  border-right-style: solid;
}

.thick {
  border-right-width: thick;
  border-right-style: solid;
}

/* 使用相对单位 */
.relative {
  border-right-width: 0.25em;
  border-right-style: solid;
}
```

```html
<!-- HTML 示例 -->
<div class="box">4px 右边框</div>
<div class="thin">细右边框</div>
<div class="medium">中等右边框</div>
<div class="thick">粗右边框</div>
<div class="relative">0.25em 右边框</div>
```

## 使用场景

```css
/* 1. 侧边栏右侧装饰线 */
.sidebar {
  border-right-width: 4px;
  border-right-style: solid;
  border-right-color: #0066cc;
  padding-right: 20px;
}

/* 2. 活动状态指示器 */
.menu-item {
  border-right-width: 0;
  border-right-style: solid;
  border-right-color: #0066cc;
  padding-right: 15px;
  transition: border-right-width 0.2s ease;
}
.menu-item.active {
  border-right-width: 4px;
}

/* 3. 警告提示框 */
.warning {
  border-right-width: 6px;
  border-right-style: solid;
  border-right-color: #f57c00;
  padding-right: 15px;
}

/* 4. 成功提示框 */
.success {
  border-right-width: 4px;
  border-right-style: solid;
  border-right-color: #388e3c;
  padding-right: 15px;
}

/* 5. 错误提示框 */
.error {
  border-right-width: 4px;
  border-right-style: solid;
  border-right-color: #d32f2f;
  padding-right: 15px;
}
