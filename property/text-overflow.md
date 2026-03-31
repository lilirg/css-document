# text-overflow

`text-overflow` CSS 属性指定当文本溢出容器时如何显示，通常用于显示省略号或其他自定义内容。

## 语法

```css
/* 关键字值 */
text-overflow: clip;
text-overflow: ellipsis;

/* 字符串值 */
text-overflow: "...";
text-overflow: "更多";

/* 两个值 - 行首 | 行尾 */
text-overflow: ellipsis ellipsis;
text-overflow: clip ellipsis;
```

## 值

### `clip`

裁剪溢出的文本，不显示任何指示。这是默认值。

```css
text-overflow: clip;
```

### `ellipsis`

显示省略号（`…`）来表示文本被裁剪。

```css
text-overflow: ellipsis;
```

### 字符串

使用自定义字符串来表示文本被裁剪。

```css
text-overflow: "...";
text-overflow: "更多";
text-overflow: "→";
```

## 必要条件

`text-overflow` 要生效，元素必须满足以下条件：

1. **溢出隐藏**：`overflow` 必须不是 `visible`
2. **块级元素**：元素必须是块级或行内块级
3. **单行文本**：通常用于单行文本（配合 `white-space: nowrap`）

```css
.text-container {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## 示例

### 单行省略号

```css
/* 单行文本溢出显示省略号 */
.single-line {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### 自定义省略号

```css
/* 使用自定义字符串 */
.custom-ellipsis {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: "...";
}

/* 使用箭头 */
.arrow-ellipsis {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: "→";
}
```

### 多行省略号

```css
/* 多行文本溢出显示省略号 */
.multi-line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 两端省略号

```css
/* 两端都显示省略号 */
.both-ends {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis ellipsis;
}
```

### 实际应用

```css
/* 导航菜单项 */
.nav-item {
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 文件列表项 */
.file-name {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 表格单元格 */
.table-cell {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 1+ |
| Edge | 12+ |
| Firefox | 7+ |
| Safari | 1+ |
| Opera | 9+ |

## 注意事项

1. **必要条件**：必须同时设置 `overflow: hidden` 和 `white-space: nowrap` 才能生效。

2. **单行限制**：`text-overflow` 主要用于单行文本，多行需要配合 `-webkit-line-clamp`。

3. **宽度限制**：元素必须有明确的宽度限制（`width`、`max-width` 或父容器限制）。

4. **自定义字符串**：可以使用任何字符串作为省略号，包括 Unicode 字符。

5. **两端省略**：可以指定两个值来分别控制行首和行尾的省略方式。

## 相关属性

- [`white-space`](white-space.md) - 空白处理
- [`overflow`](overflow.md) - 溢出处理
- [`line-clamp`](line-clamp.md) - 行裁剪

## 规范

- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#text-overflow)
