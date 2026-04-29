# justify-self

justify-self 属性定义单个 Grid 项目在行轴方向上的对齐方式。

## 语法

```css
justify-self: auto | start | end | center | stretch | baseline | first baseline | last baseline | safe | unsafe;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 继承父容器的 justify-items | `justify-self: auto` |
| `start` | 起始对齐 | `justify-self: start` |
| `end` | 结束对齐 | `justify-self: end` |
| `center` | 居中对齐 | `justify-self: center` |
| `stretch` | 拉伸对齐 | `justify-self: stretch` |
| `baseline` | 基线对齐 | `justify-self: baseline` |
| `first baseline` | 首基线对齐 | `justify-self: first baseline` |
| `last baseline` | 尾基线对齐 | `justify-self: last baseline` |

## 示例

### 基础用法

```css
/* 起始对齐 */
.start {
  justify-self: start;
}

/* 结束对齐 */
.end {
  justify-self: end;
}

/* 居中对齐 */
.center {
  justify-self: center;
}

/* 拉伸对齐 */
.stretch {
  justify-self: stretch;
}

/* 基线对齐 */
.baseline {
  justify-self: baseline;
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  justify-items: center;
}

/* 项目单独对齐 */
.item-1 {
  justify-self: start;
}

.item-2 {
  justify-self: center;
}

.item-3 {
  justify-self: end;
}

/* 响应式布局 */
@media (min-width: 768px) {
  .item {
    justify-self: center;
  }
}

/* 卡片布局 */
.card {
  display: grid;
  justify-items: center;
}

.card-header {
  justify-self: start;
}

.card-body {
  justify-self: center;
}

.card-footer {
  justify-self: end;
}

/* 表单布局 */
.form {
  display: grid;
  justify-items: start;
}

.form-group {
  display: grid;
  justify-items: center;
}

.form-label {
  justify-self: center;
}

.form-input {
  justify-self: stretch;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 57+ |
| Firefox | 52+ |
| Safari | 10.1+ |
| Edge | 16+ |
| iOS Safari | 10.3+ |
| Android Browser | 57+ |
| Chrome for Android | 57+ |

## 注意事项

- `justify-self` 只在 Grid 容器中有效
- `justify-self` 定义单个 Grid 项目在行轴方向上的对齐方式
- `auto` 是默认值，表示继承父容器的 justify-items
- `stretch` 表示拉伸对齐

## 相关属性

- [`grid`](./grid)
- [`justify-content`](./justify-content)
- [`justify-items`](./justify-items)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: justify-self](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-self)
- [CSS-Tricks: justify-self](https://css-tricks.com/almanac/properties/j/justify-self/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)