# scrollbar-gutter

`scrollbar-gutter` CSS 属性控制滚动条的预留空间，防止内容在滚动条显示/隐藏时发生布局偏移。

## 语法

```css
/* 关键字值 */
scrollbar-gutter: auto;
scrollbar-gutter: stable;
scrollbar-gutter: always;

/* 组合值 */
scrollbar-gutter: stable both-edges;
scrollbar-gutter: always both-edges;
```

## 值

### `auto`

滚动条在需要时显示，不预留空间。这是默认值。

```css
scrollbar-gutter: auto;
```

### `stable`

始终预留滚动条空间，即使滚动条当前不可见。

```css
scrollbar-gutter: stable;
```

**效果**：
- 防止滚动条显示/隐藏时的布局偏移
- 内容宽度保持稳定

### `always`

始终显示滚动条并预留空间。

```css
scrollbar-gutter: always;
```

**效果**：
- 滚动条始终显示
- 预留滚动条空间

### `both-edges`

在两侧都预留滚动条空间。

```css
scrollbar-gutter: stable both-edges;
```

**效果**：
- 即使只有一侧有滚动条，也预留两侧空间
- 防止两侧布局偏移

## 示例

### 防止布局偏移

```css
/* 内容容器 */
.content {
  overflow-y: auto;
  scrollbar-gutter: stable;
  /* 即使没有滚动条，也预留空间 */
}
```

### 始终显示滚动条

```css
/* 始终显示滚动条 */
.sidebar {
  overflow-y: auto;
  scrollbar-gutter: always;
  width: 300px;
}
```

### 两侧预留空间

```css
/* 两侧都预留滚动条空间 */
.container {
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}
```

### 实际应用

```css
/* 固定宽度的侧边栏 */
.sidebar {
  width: 250px;
  overflow-y: auto;
  scrollbar-gutter: stable;
  /* 防止滚动条出现时内容跳动 */
}

/* 内容区域 */
.main-content {
  flex: 1;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

/* 模态框 */
.modal {
  overflow: auto;
  scrollbar-gutter: stable;
  max-width: 80vw;
  max-height: 80vh;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 94+ |
| Edge | 94+ |
| Firefox | 97+ |
| Safari | 不支持 |
| Opera | 80+ |

## 注意事项

1. **布局稳定**：主要用于防止滚动条显示/隐藏时的布局偏移。

2. **overflow 要求**：元素必须有 `overflow` 设置为 `auto` 或 `scroll`。

3. **性能考虑**：预留空间可能会影响可用内容宽度。

4. **浏览器支持**：Safari 目前不支持此属性。

5. **与 scrollbar-width 的区别**：`scrollbar-gutter` 控制空间预留，`scrollbar-width` 控制滚动条宽度。

## 相关属性

- [`overflow`](overflow.md) - 溢出处理
- [`scrollbar-width`](scrollbar-width.md) - 滚动条宽度
- [`scrollbar-color`](scrollbar-color.md) - 滚动条颜色

## 规范

- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#scrollbar-gutter)