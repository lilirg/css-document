# cursor

cursor 属性定义鼠标指针在元素上的显示样式。

## 语法

```css
cursor: auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | all-scroll | col-resize | row-resize | n-resize | e-resize | s-resize | w-resize | ne-resize | nw-resize | se-resize | sw-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | zoom-in | zoom-out | grab | grabbing | custom;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `cursor: auto` |
| `default` | 默认 | `cursor: default` |
| `none` | 无 | `cursor: none` |
| `context-menu` | 上下文菜单 | `cursor: context-menu` |
| `help` | 帮助 | `cursor: help` |
| `pointer` | 指针 | `cursor: pointer` |
| `progress` | 进度 | `cursor: progress` |
| `wait` | 等待 | `cursor: wait` |
| `cell` | 单元格 | `cursor: cell` |
| `crosshair` | 十字准星 | `cursor: crosshair` |
| `text` | 文本 | `cursor: text` |
| `vertical-text` | 垂直文本 | `cursor: vertical-text` |
| `alias` | 别名 | `cursor: alias` |
| `copy` | 复制 | `cursor: copy` |
| `move` | 移动 | `cursor: move` |
| `no-drop` | 不能放置 | `cursor: no-drop` |
| `not-allowed` | 不允许 | `cursor: not-allowed` |
| `grab` | 抓取 | `cursor: grab` |
| `grabbing` | 抓取中 | `cursor: grabbing` |
| `all-scroll` | 全部滚动 | `cursor: all-scroll` |
| `col-resize` | 列调整 | `cursor: col-resize` |
| `row-resize` | 行调整 | `cursor: row-resize` |
| `n-resize` | 北部调整 | `cursor: n-resize` |
| `e-resize` | 东部调整 | `cursor: e-resize` |
| `s-resize` | 南部调整 | `cursor: s-resize` |
| `w-resize` | 西部调整 | `cursor: w-resize` |
| `ne-resize` | 东北部调整 | `cursor: ne-resize` |
| `nw-resize` | 西北部调整 | `cursor: nw-resize` |
| `se-resize` | 东南部调整 | `cursor: se-resize` |
| `sw-resize` | 西南部调整 | `cursor: sw-resize` |
| `ew-resize` | 东西调整 | `cursor: ew-resize` |
| `ns-resize` | 南北调整 | `cursor: ns-resize` |
| `nesw-resize` | 东北-西南调整 | `cursor: nesw-resize` |
| `nwse-resize` | 西北-东南调整 | `cursor: nwse-resize` |
| `zoom-in` | 放大 | `cursor: zoom-in` |
| `zoom-out` | 缩小 | `cursor: zoom-out` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  cursor: auto;
}

/* 默认 */
.default {
  cursor: default;
}

/* 无 */
.none {
  cursor: none;
}

/* 上下文菜单 */
.context-menu {
  cursor: context-menu;
}

/* 帮助 */
.help {
  cursor: help;
}

/* 指针 */
.pointer {
  cursor: pointer;
}

/* 进度 */
.progress {
  cursor: progress;
}

/* 等待 */
.wait {
  cursor: wait;
}

/* 单元格 */
.cell {
  cursor: cell;
}

/* 十字准星 */
.crosshair {
  cursor: crosshair;
}

/* 文本 */
.text {
  cursor: text;
}

/* 垂直文本 */
.vertical-text {
  cursor: vertical-text;
}

/* 别名 */
.alias {
  cursor: alias;
}

/* 复制 */
.copy {
  cursor: copy;
}

/* 移动 */
.move {
  cursor: move;
}

/* 不能放置 */
.no-drop {
  cursor: no-drop;
}

/* 不允许 */
.not-allowed {
  cursor: not-allowed;
}

/* 抓取 */
.grab {
  cursor: grab;
}

/* 抓取中 */
.grabbing {
  cursor: grabbing;
}

/* 全部滚动 */
.all-scroll {
  cursor: all-scroll;
}

/* 列调整 */
.col-resize {
  cursor: col-resize;
}

/* 行调整 */
.row-resize {
  cursor: row-resize;
}

/* 北部调整 */
.n-resize {
  cursor: n-resize;
}

/* 东部调整 */
.e-resize {
  cursor: e-resize;
}

/* 南部调整 */
.s-resize {
  cursor: s-resize;
}

/* 西部调整 */
.w-resize {
  cursor: w-resize;
}

/* 东北部调整 */
.ne-resize {
  cursor: ne-resize;
}

/* 西北部调整 */
.nw-resize {
  cursor: nw-resize;
}

/* 东南部调整 */
.se-resize {
  cursor: se-resize;
}

/* 西南部调整 */
.sw-resize {
  cursor: sw-resize;
}

/* 东西调整 */
.ew-resize {
  cursor: ew-resize;
}

/* 南北调整 */
.ns-resize {
  cursor: ns-resize;
}

/* 东北-西南调整 */
.nesw-resize {
  cursor: nesw-resize;
}

/* 西北-东南调整 */
.nwse-resize {
  cursor: nwse-resize;
}

/* 放大 */
.zoom-in {
  cursor: zoom-in;
}

/* 缩小 */
.zoom-out {
  cursor: zoom-out;
}
```

### 高级用法

```css
/* 容器 */
.container {
  cursor: auto;
}

/* 静态 */
.static {
  cursor: auto;
}

/* 相对 */
.relative {
  cursor: auto;
}

/* 绝对 */
.absolute {
  cursor: auto;
}

/* 固定 */
.fixed {
  cursor: auto;
}

/* 粘性 */
.sticky {
  cursor: auto;
}

/* 响应式布局 */
.responsive {
  cursor: auto;
}

/* 卡片布局 */
.card {
  cursor: pointer;
}

/* 表单布局 */
.form {
  cursor: auto;
}

/* 图片画廊 */
.gallery {
  cursor: auto;
}

/* 混合单位 */
.mixed-units {
  cursor: auto;
}

/* 带命名的项目 */
.named-items {
  cursor: auto;
}

/* 悬停效果 */
.card {
  transition: cursor 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Firefox | 1+ |
| Safari | 1+ |
| Edge | 12+ |
| iOS Safari | 1+ |
| Android Browser | 1+ |
| Chrome for Android | 18+ |

## 注意事项

- `cursor` 可以用于任何元素
- `cursor` 定义鼠标指针在元素上的显示样式
- `auto` 是默认值，表示自动

## 相关属性

- [`pointer-events`](./pointer-events)
- [`visibility`](./visibility)
- [`opacity`](./opacity)

## 相关资源

- [MDN Web Docs: cursor](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)
- [CSS-Tricks: cursor](https://css-tricks.com/almanac/properties/c/cursor/)
- [W3C CSS UI](https://www.w3.org/TR/css-ui-4/)