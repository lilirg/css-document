# font-stretch

该属性用于选择字体的压缩或扩展变体，即字体的宽度。

## 语法

```css
font-stretch: <font-stretch-absolute>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | normal |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<font-stretch-absolute>`
- `ultra-condensed` - 极度压缩 (50%)
- `extra-condensed` - 额外压缩 (62.5%)
- `condensed` - 压缩 (75%)
- `semi-condensed` - 半压缩 (87.5%)
- `normal` - 正常 (100%)
- `semi-expanded` - 半扩展 (112.5%)
- `expanded` - 扩展 (125%)
- `extra-expanded` - 额外扩展 (150%)
- `ultra-expanded` - 极度扩展 (200%)

## 注意
1. 并非所有字体都提供多种宽度变体
2. 如果指定的宽度变体不可用，浏览器会回退到正常宽度
3. 该属性仅适用于具有多个宽度变体的字体
4. 现代字体通常使用 `font-variation-settings` 进行更精细的控制

## 示例

```css
/* 压缩字体 */
.compact {
  font-stretch: condensed;
}

/* 扩展字体 */
.wide {
  font-stretch: expanded;
}

/* 正常宽度 */
.normal {
  font-stretch: normal;
}
```

## 使用场景

```css
/* 1. 紧凑标题 - 节省空间 */
.compact-title {
  font-stretch: condensed;
  font-family: "Arial Narrow", Arial, sans-serif;
}

/* 2. 强调文本 - 扩展宽度 */
.emphasized {
  font-stretch: expanded;
  font-family: "Helvetica", sans-serif;
}

/* 3. 标签文字 - 极度压缩 */
.tag {
  font-stretch: ultra-condensed;
  font-family: "Arial Narrow", sans-serif;
}

/* 4. 正常显示 - 默认宽度 */
.body-text {
  font-stretch: normal;
  font-family: "Segoe UI", sans-serif;
}

/* 5. 半扩展 - 轻微强调 */
.subtle-emphasis {
  font-stretch: semi-expanded;
  font-family: "Helvetica", sans-serif;
}
