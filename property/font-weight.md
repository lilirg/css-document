# font-weight

该属性用于设置字体的粗细程度。

## 语法

```css
font-weight: normal | bold | bolder | lighter | <number>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | normal |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
正常粗细，等同于 400。

### `bold`
粗体，等同于 700。

### `bolder`
比父元素更粗。

### `lighter`
比父元素更细。

### `<number>`
数值粗细，范围 100 到 900：
- `100` - Thin（极细）
- `200` - Extra Light
- `300` - Light
- `400` - Normal（正常）
- `500` - Medium（中等）
- `600` - Semi Bold
- `700` - Bold（粗体）
- `800` - Extra Bold
- `900` - Black（黑体）

## 注意
1. 数值 400 等同于 normal，700 等同于 bold
2. 并非所有字体都提供所有粗细变体
3. 如果指定粗细不可用，浏览器会回退到最接近的可用粗细
4. 使用 `font-variation-settings` 可以进行更精细的粗细控制

## 示例

```css
/* 正常粗细 */
p {
  font-weight: normal;
}

/* 粗体 */
h1 {
  font-weight: bold;
}

/* 数值粗细 */
.emphasis {
  font-weight: 600;
}

/* 极细 */
.light-text {
  font-weight: 100;
}
```

## 使用场景

```css
/* 1. 正文文本 - 正常粗细 */
.body-text {
  font-weight: 400;
}

/* 2. 标题 - 粗体 */
h1 {
  font-weight: 700;
}
h2 {
  font-weight: 600;
}
h3 {
  font-weight: 500;
}

/* 3. 强调文本 - 半粗体 */
.emphasis {
  font-weight: 600;
}

/* 4. 细体文本 - 轻量 */
.light-text {
  font-weight: 300;
}

/* 5. 极粗强调 - 黑体 */
.strong-emphasis {
  font-weight: 900;
}
