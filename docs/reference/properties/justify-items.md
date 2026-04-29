# justify-items

justify-items 属性定义 Grid 容器中 Grid 项目在行轴方向上的对齐方式。

## 语法

```css
justify-items: start | end | center | stretch | baseline | first baseline | last baseline | safe | unsafe;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `start` | 起始对齐 | `justify-items: start` |
| `end` | 结束对齐 | `justify-items: end` |
| `center` | 居中对齐 | `justify-items: center` |
| `stretch` | 拉伸对齐 | `justify-items: stretch` |
| `baseline` | 基线对齐 | `justify-items: baseline` |
| `first baseline` | 首基线对齐 | `justify-items: first baseline` |
| `last baseline` | 尾基线对齐 | `justify-items: last baseline` |

## 示例

### 基础用法

```css
/* 起始对齐 */
.start {
  justify-items: start;
}

/* 结束对齐 */
.end {
  justify-items: end;
}

/* 居中对齐 */
.center {
  justify-items: center;
}

/* 拉伸对齐 */
.stretch {
  justify-items: stretch;
}

/* 基线对齐 */
.baseline {
  justify-items: baseline;
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  justify-items: center;
}

/* 起始对齐 */
.start {
  justify-items: start;
}

/* 结束对齐 */
.end {
  justify-items: end;
}

/* 居中对齐 */
.center {
  justify-items: center;
}

/* 拉伸对齐 */
.stretch {
  justify-items: stretch;
}

/* 基线对齐 */
.baseline {
  justify-items: baseline;
}

/* 响应式布局 */
@media (min-width: 768px) {
  .grid-container {
    justify-items: center;
  }
}

/* 卡片布局 */
.card {
  display: grid;
  justify-items: center;
}

/* 表单布局 */
.form {
  display: grid;
  justify-items: start;
}

/* 图片画廊 */
.gallery {
  display: grid;
  justify-items: center;
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

- `justify-items` 只在 Grid 容器中有效
- `justify-items` 定义 Grid 容器中 Grid 项目在行轴方向上的对齐方式
- `stretch` 是默认值，表示拉伸对齐
- `baseline` 表示基线对齐

## 相关属性

- [`grid`](./grid)
- [`justify-content`](./justify-content)
- [`align-items`](./align-items)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: justify-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items)
- [CSS-Tricks: justify-items](https://css-tricks.com/almanac/properties/j/justify-items/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)