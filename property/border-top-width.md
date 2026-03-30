# border-top-width

该属性用于设置元素上边框的宽度。

## 语法

```css
border-top-width: width
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
- 如果 `border-top-style` 为 `none` 或 `hidden`，边框不会显示
- `thin`, `medium`, `thick` 的具体像素值由浏览器决定
- 可以使用 `border-width` 速记属性同时设置四个边框的宽度
- 边框宽度不能为负值

## 示例

```css
/* 基本用法 - 使用像素值 */
.box {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #333;
}

/* 使用关键字 */
.thin {
  border-top-width: thin;
  border-top-style: solid;
}

.medium {
  border-top-width: medium;
  border-top-style: solid;
}

.thick {
  border-top-width: thick;
  border-top-style: solid;
}

/* 使用相对单位 */
.relative {
  border-top-width: 0.25em;
  border-top-style: solid;
}
```

```html
<!-- HTML 示例 -->
<div class="box">4px 上边框</div>
<div class="thin">细上边框</div>
<div class="medium">中等上边框</div>
<div class="thick">粗上边框</div>
<div class="relative">0.25em 上边框</div>
```

## 使用场景

```css
/* 1. 卡片顶部装饰线 */
.card {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #0066cc;
}

/* 2. 导航栏顶部边框 */
.navbar {
  border-top-width: 3px;
  border-top-style: solid;
  border-top-color: #0066cc;
}

/* 3. 活动状态指示器 */
.tab {
  border-top-width: 0;
  border-top-style: solid;
  border-top-color: #0066cc;
  transition: border-top-width 0.2s ease;
}
.tab.active {
  border-top-width: 3px;
}

/* 4. 警告提示框 */
.warning {
  border-top-width: 6px;
  border-top-style: solid;
  border-top-color: #f57c00;
  padding-top: 15px;
}

/* 5. 成功提示框 */
.success {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #388e3c;
  padding-top: 15px;
}
