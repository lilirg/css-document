# font-size-adjust

该属性用于根据字体的 x-height 调整字体大小，确保在不同字体间切换时保持可读性。

## 语法

```css
font-size-adjust: none | <number>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | none |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `none`
不调整字体大小（默认值）。

### `<number>`
指定字体的 x-height 与 em-box 高度的比值，范围通常在 0 到 1 之间。

## 注意
1. x-height 是小写字母 x 的高度，影响字体的可读性
2. 不同字体的 x-height 不同，可能导致视觉大小不一致
3. 该属性主要用于确保备用字体与首选字体具有相似的视觉大小
4. 浏览器支持有限，需考虑兼容性

## 示例

```css
/* 基本用法 */
p {
  font-size: 16px;
  font-size-adjust: 0.5;
}

/* 使用备用字体时保持大小 */
.text {
  font-family: "Custom Font", "Fallback Font";
  font-size: 20px;
  font-size-adjust: 0.45;
}
```

## 使用场景

```css
/* 1. 自定义字体备用方案 */
.custom-font {
  font-family: "MyCustomFont", "Arial", sans-serif;
  font-size: 18px;
  font-size-adjust: 0.52;
}

/* 2. 确保跨字体一致性 */
.unified-text {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-size-adjust: 0.5;
}

/* 3. 衬线字体调整 */
.serif-text {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 20px;
  font-size-adjust: 0.45;
}

/* 4. 无衬线字体调整 */
.sans-text {
  font-family: "Segoe UI", "Roboto", sans-serif;
  font-size: 16px;
  font-size-adjust: 0.5;
}

/* 5. 不调整（默认） */
.no-adjust {
  font-family: "Font A", "Font B";
  font-size: 14px;
  font-size-adjust: none;
}
