# box-decoration-break

`box-decoration-break` 属性定义元素片段在分页、行内或列断点处的渲染方式，控制边框、内边距、背景等装饰在断点处的表现。

## 语法

```css
box-decoration-break: slice | clone;
```

### 值

| 值 | 说明 |
| --- | --- |
| `slice` | 将元素视为单个盒子，装饰在断点处被切割（默认） |
| `clone` | 在每个片段上单独渲染装饰，每个片段都有完整的边框和内边距 |

## 示例

### 基本用法

```css
.paged-element {
  box-decoration-break: clone;
  padding: 20px;
  border: 2px solid #333;
  background-color: #f0f0f0;
}
```

### 行内元素断点

```css
.inline-break {
  box-decoration-break: clone;
  padding: 5px 10px;
  border-radius: 5px;
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
```

### 多列布局

```css
.multi-column {
  column-count: 3;
  column-gap: 20px;
}

.column-item {
  box-decoration-break: clone;
  padding: 15px;
  border: 1px solid #ccc;
}
```

### 分页媒体

```css
@page {
  size: A4;
  margin: 20mm;
}

.print-element {
  box-decoration-break: clone;
  padding: 20px;
  border: 2px solid #000;
  background-color: #fff;
}
```

### HTML 示例

```html
<div class="multi-column">
  <div class="column-item">
    <p>此内容在多列中显示，每列都有完整的边框和内边距</p>
  </div>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 22+ |
| Firefox | 32+ |
| Safari | 7+ |
| Edge | 支持 |
| Opera | 12.1+ |
| iOS Safari | 7+ |
| Android Browser | 4.4+ |

## 注意事项

1. **默认值**：默认值为 `slice`，装饰在断点处被切割
2. **clone 效果**：`clone` 使每个片段都有完整的装饰
3. **行内元素**：对行内元素特别有用，确保每行都有完整样式
4. **分页媒体**：在打印时控制内容断页时的表现
5. **多列布局**：在多列布局中控制内容跨列时的样式

## 相关属性

- [`break-before`](break-before.md) - 断点前控制
- [`break-after`](break-after.md) - 断点后控制
- [`break-inside`](break-inside.md) - 断点内控制
- [`column-count`](column-count.md) - 列数

## 规范链接

- [CSS Fragmentation Module Level 3](https://www.w3.org/TR/css-break-3/#box-decoration-break)