# font-variant-numeric

`font-variant-numeric` 属性控制数字、分数和罗马数字的显示形式。

## 语法

```css
font-variant-numeric: normal | <numeric-value>#;
```

### 值

| 值 | 说明 |
| --- | --- |
| `normal` | 使用标准的数字和格式（默认） |
| `ordinal` | 使用序数形式（如 1ˢᵗ, 2ⁿᵈ） |
| `slashed-zero` | 使用带斜杠的零（0）以区别于字母 O |
| `lining-nums` | 使用等高数字（所有数字高度相同） |
| `oldstyle-nums` | 使用旧式数字（有上升部和下降部） |
| `proportional-nums` | 使用比例数字（每个数字宽度不同） |
| `tabular-nums` | 使用表格数字（所有数字等宽） |
| `diagonal-fractions` | 使用斜分数（如 1/2） |
| `stacked-fractions` | 使用堆叠分数（如 ½） |
| `superiors` | 使用上标数字 |
| `inferiors` | 使用下标数字 |
| `common-ligatures` | 使用常用连字 |
| `rare-ligatures` | 使用罕见连字 |

### 组合值

可以组合多个值，例如：
```css
font-variant-numeric: oldstyle-nums tabular-nums;
```

## 示例

### 表格数字（用于表格对齐）

```css
.table-data {
  font-family: "Georgia", serif;
  font-variant-numeric: tabular-nums;
}
```

### 旧式数字（用于正文）

```css
.body-text {
  font-family: "Georgia", serif;
  font-variant-numeric: oldstyle-nums;
}
```

### 斜杠零（用于技术文档）

```css
.code-value {
  font-family: "Consolas", monospace;
  font-variant-numeric: slashed-zero;
}
```

### 序数形式

```css
.ordinal-text {
  font-family: "Georgia", serif;
  font-variant-numeric: ordinal;
}
```

### 组合使用

```css
.prices {
  font-family: "Georgia", serif;
  font-variant-numeric: oldstyle-nums tabular-nums lining-nums;
}
```

### 分数显示

```css
.fraction {
  font-family: "Georgia", serif;
  font-variant-numeric: diagonal-fractions;
}
```

### HTML 示例

```html
<table class="table-data">
  <tr><td>123.45</td><td>678.90</td></tr>
  <tr><td>234.56</td><td>789.01</td></tr>
</table>

<p class="ordinal-text">1st place, 2nd place, 3rd place</p>
<p class="fraction">One half = 1/2</p>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 11+ |
| Firefox | 34+ |
| Safari | 9+ |
| Edge | 14+ |
| Opera | 11.1+ |
| iOS Safari | 9+ |
| Android Browser | 4.4+ |

## 注意事项

1. **字体支持**：效果取决于字体是否包含相应的数字字形
2. **表格数字**：`tabular-nums` 对于表格数据对齐非常重要
3. **旧式数字**：`oldstyle-nums` 在正文中更美观，但可能不适合表格
4. **斜杠零**：`slashed-zero` 在编程和科学文档中很有用
5. **组合使用**：可以组合多个值以达到最佳效果

## 相关属性

- [`font-variant`](font-variant.md) - 字体变体速记
- [`font-variant-caps`](font-variant-caps.md) - 字体变体大写字母
- [`font-variant-ligatures`](font-variant-ligatures.md) - 字体变体连字

## 规范链接

- [CSS Fonts Module Level 3](https://www.w3.org/TR/css-fonts-3/#font-variant-numeric-prop)