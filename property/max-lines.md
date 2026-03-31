# max-lines

`max-lines` 属性定义多列布局中每列允许显示的最大行数，控制内容在达到指定行数后的行为。

## 语法

```css
max-lines: none | <integer>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 无限制（默认） |
| `<integer>` | 指定最大行数（必须为正整数） |

## 示例

### 基本用法

```css
.multi-column {
  column-count: 3;
  max-lines: 10;
}
```

### 限制行数

```css
.limited-lines {
  column-count: 2;
  max-lines: 5;
  break-before: column;
}
```

### 配合分页

```css
@page {
  size: A4;
  margin: 20mm;
}

.print-content {
  column-count: 2;
  max-lines: 20;
  break-after: page;
}
```

### HTML 示例

```html
<div class="multi-column">
  <p>此内容在多列中显示，每列最多显示 10 行</p>
  <p>更多内容...</p>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 不支持 |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 不支持 |
| Opera | 不支持 |
| iOS Safari | 不支持 |
| Android Browser | 不支持 |

## 注意事项

1. **实验性功能**：此属性仍处于实验阶段，浏览器支持有限
2. **多列布局**：主要用于多列布局场景
3. **分页控制**：可与分页媒体配合使用
4. **正整数**：值必须为正整数
5. **内容溢出**：超过最大行数的内容会溢出或分页

## 相关属性

- [`column-count`](column-count.md) - 列数
- [`column-width`](column-width.md) - 列宽
- [`columns`](columns.md) - 列简写
- [`break-before`](break-before.md) - 断点前控制
- [`break-after`](break-after.md) - 断点后控制

## 规范链接

- [CSS Multi-column Layout Module](https://www.w3.org/TR/css-multicol-1/#max-lines)