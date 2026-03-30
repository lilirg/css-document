# column-rule

该属性是多列布局中列分隔线的速记属性。

## 语法

```css
column-rule: <width> || <style> || <color>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 各子属性的初始值 |
| 适用 HTML 元素 | 块级元素 |
| 动画 | 是 |

## 子属性

| 属性 | 说明 |
| :--- | :--- |
| `column-rule-width` | 分隔线宽度 |
| `column-rule-style` | 分隔线样式 |
| `column-rule-color` | 分隔线颜色 |

## 值

### `<width>`
分隔线宽度，同 `border-width`。

### `<style>`
分隔线样式，同 `border-style`。

### `<color>`
分隔线颜色，同 `border-color`。

## 注意

- 分隔线显示在列之间，不占用列宽
- `column-rule-style` 必须设置才能显示分隔线
- 分隔线高度等于列的高度

## 示例

```css
/* CSS 示例 */
.columns {
  column-count: 3;
  column-rule: 1px solid #ccc;
}
```

```html
<!-- HTML 示例 -->
<div class="columns">
  <p>列之间有分隔线...</p>
</div>
```

## 使用场景

```css
/* 1. 细实线分隔 */
.thin-rule {
  column-count: 2;
  column-rule: 1px solid #ddd;
}

/* 2. 粗虚线分隔 */
.thick-dashed {
  column-count: 3;
  column-rule: 3px dashed #999;
}

/* 3. 双线分隔 */
.double-rule {
  column-count: 2;
  column-rule: 2px double #333;
}

/* 4. 彩色点线分隔 */
.colored-dotted {
  column-count: 3;
  column-rule: 2px dotted #007bff;
}
