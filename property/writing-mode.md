# writing-mode

该属性用于设置文本的书写方向，定义块级元素的行如何水平或垂直排列。

## 语法

```css
writing-mode: horizontal-tb;
writing-mode: vertical-rl;
writing-mode: vertical-lr;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `horizontal-tb` |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 值

### `horizontal-tb`
默认值。水平书写，行从上到下排列（TB = Top to Bottom）。

### `vertical-rl`
垂直书写，行从右到左排列（RL = Right to Left），用于中文、日文等。

### `vertical-lr`
垂直书写，行从左到右排列（LR = Left to Right），用于蒙古文等。

## 注意
- 与 `text-orientation` 配合使用控制垂直文本方向
- 继承属性
- 影响元素的布局方向
- 主要用于东亚语言的垂直排版

## 示例
```css
.horizontal {
  writing-mode: horizontal-tb;
}

.vertical-rl {
  writing-mode: vertical-rl;
}

.vertical-lr {
  writing-mode: vertical-lr;
}
```

```html
<p class="horizontal">
  水平书写模式，默认方向
</p>

<p class="vertical-rl">
  垂直书写模式，从右到左
</p>

<p class="vertical-lr">
  垂直书写模式，从左到右
</p>
```

## 使用场景
```css
/* 1. 传统中文竖排 */
.chinese-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* 2. 侧边栏垂直文本 */
.sidebar-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* 3. 诗歌竖排 */
.poetry {
  writing-mode: vertical-rl;
  letter-spacing: 0.5em;
}

/* 4. 水平排版（默认） */
.horizontal-text {
  writing-mode: horizontal-tb;
}
