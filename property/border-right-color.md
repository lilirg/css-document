# border-right-color

该属性用于设置元素右边框的颜色。

## 语法

```css
border-right-color: color
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 元素的 `color` 值 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

### color
颜色值：
- 颜色关键字（如 `red`, `blue`, `transparent`）
- 十六进制颜色（如 `#ff0000`, `#f00`）
- RGB/RGBA（如 `rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)`）
- HSL/HSLA（如 `hsl(0, 100%, 50%)`, `hsla(0, 100%, 50%, 0.5)`）
- `currentColor`（继承自元素的 `color` 属性）
- `inherit`（从父元素继承）

## 注意
- 如果 `border-right-style` 为 `none`，边框不会显示
- 默认颜色是元素的文本颜色（`color` 属性值）
- 可以使用 `border-color` 速记属性同时设置四个边框的颜色
- 颜色值不区分大小写

## 示例

```css
/* 基本用法 - 使用颜色关键字 */
.box {
  border-right-color: red;
  border-right-style: solid;
  border-right-width: 2px;
}

/* 使用十六进制颜色 */
.hex {
  border-right-color: #0066cc;
  border-right-style: solid;
  border-right-width: 2px;
}

/* 使用 RGB 颜色 */
.rgb {
  border-right-color: rgb(0, 128, 0);
  border-right-style: solid;
  border-right-width: 2px;
}

/* 使用半透明颜色 */
.transparent {
  border-right-color: rgba(255, 0, 0, 0.5);
  border-right-style: solid;
  border-right-width: 2px;
}

/* 使用 currentColor */
.current {
  color: blue;
  border-right-color: currentColor;
  border-right-style: solid;
  border-right-width: 2px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">红色右边框</div>
<div class="hex">蓝色右边框</div>
<div class="rgb">绿色右边框</div>
<div class="transparent">半透明红色右边框</div>
<div class="current">蓝色文字和边框</div>
```

## 使用场景

```css
/* 1. 时间轴右侧连接线 */
.timeline-item {
  border-right-color: #e0e0e0;
  border-right-style: solid;
  border-right-width: 2px;
  padding-right: 20px;
  position: relative;
}

/* 2. 代码块右侧装饰 */
.code-block {
  border-right-color: #0066cc;
  border-right-style: solid;
  border-right-width: 4px;
  padding-right: 15px;
  background: #f5f5f5;
}

/* 3. 引用块右侧装饰 */
.quote {
  border-right-color: #999;
  border-right-style: solid;
  border-right-width: 3px;
  padding-right: 15px;
  font-style: italic;
}

/* 4. 活动状态指示器 */
.nav-item {
  border-right-color: transparent;
  border-right-style: solid;
  border-right-width: 2px;
  transition: border-right-color 0.2s ease;
}
.nav-item.active {
  border-right-color: #0066cc;
}

/* 5. 警告提示框 */
.warning {
  border-right-color: #f57c00;
  border-right-style: solid;
  border-right-width: 4px;
  padding-right: 15px;
}
