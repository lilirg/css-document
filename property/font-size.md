# font-size

该属性用于设置元素的字体大小。

## 语法

```css
font-size: <absolute-size> | <relative-size> | <length-percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | medium |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<absolute-size>`
绝对大小关键字：
- `xx-small` - 极小
- `x-small` - 很小
- `small` - 小
- `medium` - 中等（默认）
- `large` - 大
- `x-large` - 很大
- `xx-large` - 极大
- `xxx-large` - 最大

### `<relative-size>`
相对大小关键字：
- `larger` - 比父元素大一级
- `smaller` - 比父元素小一级

### `<length-percentage>`
- `<length>` - 具体长度值（px, em, rem, pt 等）
- `<percentage>` - 相对于父元素的百分比

## 注意
1. 推荐使用相对单位（em, rem）而非绝对单位（px），便于响应式设计
2. 浏览器对小于 12px 的字体可能有最小限制
3. 使用百分比时，基于父元素的 font-size 计算
4. em 相对于父元素，rem 相对于根元素（html）

## 示例

```css
/* 关键字大小 */
p {
  font-size: large;
}

/* 像素值 */
h1 {
  font-size: 32px;
}

/* 相对单位 */
body {
  font-size: 1rem;
}

/* 百分比 */
.emphasis {
  font-size: 120%;
}
```

## 使用场景

```css
/* 1. 页面正文 - 使用 rem */
body {
  font-size: 16px;
}
p {
  font-size: 1rem;
}

/* 2. 响应式标题 - 使用 em */
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.25em;
}

/* 3. 小字说明 - 使用百分比 */
.caption {
  font-size: 87.5%;
}

/* 4. 移动端适配 - 使用 vw */
.responsive-title {
  font-size: 4vw;
}

/* 5. 辅助文本 - 较小字号 */
.footnote {
  font-size: 0.875rem;
}
