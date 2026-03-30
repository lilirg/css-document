# cursor

该属性设置鼠标指针在元素上的显示样式。

## 语法

```css
cursor: auto | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | s-resize | w-resize | ne-resize | nw-resize | se-resize | sw-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | grab | grabbing | zoom-in | zoom-out | default
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### 基本指针

| 值 | 说明 |
| :--- | :--- |
| `auto` | 默认值，浏览器决定指针样式 |
| `default` | 默认指针（通常是箭头） |
| `none` | 不显示指针 |
| `context-menu` | 上下文菜单指针 |
| `help` | 帮助指针 |
| `pointer` | 指针（通常用于链接） |
| `progress` | 进度指针 |
| `wait` | 等待指针 |

### 选择指针

| 值 | 说明 |
| :--- | :--- |
| `cell` | 单元格指针 |
| `crosshair` | 十字光标 |
| `text` | 文本指针 |
| `vertical-text` | 垂直文本指针 |

### 调整大小指针

| 值 | 说明 |
| :--- | :--- |
| `alias` | 别名指针 |
| `copy` | 复制指针 |
| `move` | 移动指针 |
| `no-drop` | 不可放置指针 |
| `not-allowed` | 不允许指针 |

### 方向指针

| 值 | 说明 |
| :--- | :--- |
| `e-resize` | 东（右）调整 |
| `n-resize` | 北（上）调整 |
| `s-resize` | 南（下）调整 |
| `w-resize` | 西（左）调整 |
| `ne-resize` | 东北调整 |
| `nw-resize` | 西北调整 |
| `se-resize` | 东南调整 |
| `sw-resize` | 西南调整 |
| `ew-resize` | 东西调整 |
| `ns-resize` | 南北调整 |
| `nesw-resize` | 东北 - 西南调整 |
| `nwse-resize` | 西北 - 东南调整 |
| `col-resize` | 列调整 |
| `row-resize` | 行调整 |

### 其他指针

| 值 | 说明 |
| :--- | :--- |
| `all-scroll` | 滚动指针 |
| `grab` | 抓取指针 |
| `grabbing` | 正在抓取指针 |
| `zoom-in` | 放大指针 |
| `zoom-out` | 缩小指针 |

## 注意

- 可以使用自定义图像：`cursor: url("image.png"), auto;`
- 自定义图像尺寸通常限制在 32x32 或 128x128 像素
- 指针图像应包含热点坐标
- 移动端上该属性可能无效

## 示例

```css
/* 链接指针 */
.link {
  cursor: pointer;
}

/* 文本选择 */
.text {
  cursor: text;
}

/* 移动元素 */
.draggable {
  cursor: grab;
}

.draggable:active {
  cursor: grabbing;
}

/* 自定义指针 */
.custom {
  cursor: url("custom.cur"), auto;
}
```

```html
<!-- 指针示例 -->
<div class="link">链接</div>
<div class="text">文本</div>
<div class="draggable">可拖动</div>
```

## 使用场景

```css
/* 链接 */
a {
  cursor: pointer;
}

/* 按钮 */
button {
  cursor: pointer;
}

/* 可编辑文本 */
[contenteditable] {
  cursor: text;
}

/* 可拖动元素 */
.draggable {
  cursor: grab;
}

.draggable:active {
  cursor: grabbing;
}

/* 调整大小 */
.resizer {
  cursor: se-resize;
}

/* 禁用元素 */
.disabled {
  cursor: not-allowed;
}

/* 加载状态 */
.loading {
  cursor: wait;
}

/* 图片缩放 */
.zoom-image {
  cursor: zoom-in;
}

.zoom-image:hover {
  cursor: zoom-out;
}

/* 表格行 */
table tr {
  cursor: pointer;
}

/* 表格列调整 */
.col-resizer {
  cursor: col-resize;
}

/* 表格行调整 */
.row-resizer {
  cursor: row-resize;
}

/* 画布 */
.canvas {
  cursor: crosshair;
}

/* 选择区域 */
.selection-area {
  cursor: cell;
}

/* 帮助提示 */
.help-tip {
  cursor: help;
}

/* 不可放置 */
.invalid-drop {
  cursor: no-drop;
}

/* 自定义指针 */
.custom-cursor {
  cursor: url("cursor-pointer.png") 16 16, pointer;
}

/* 响应式指针 */
.responsive-cursor {
  cursor: pointer;
}

@media (hover: none) {
  .responsive-cursor {
    cursor: auto;
  }
}

/* 动画指针 */
.animated-cursor {
  cursor: pointer;
  animation: cursorChange 3s infinite;
}

@keyframes cursorChange {
  0%, 100% { cursor: pointer; }
  25% { cursor: wait; }
  50% { cursor: help; }
  75% { cursor: crosshair; }
}
