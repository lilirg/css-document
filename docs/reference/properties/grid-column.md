# grid-column

grid-column 属性指定 Grid 项目在 Grid 容器中的列位置和大小。

## 语法

```css
grid-column: <start> / <end>;
grid-column: auto;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<start>` | 列起始线 | `grid-column: 1 / 3` |
| `<end>` | 列结束线 | `grid-column: 1 / 3` |
| `auto` | 自动 | `grid-column: auto` |

## 示例

### 基础用法

```css
/* 指定列位置 */
.item {
  grid-column: 1 / 3;
}

/* 自动列 */
.item {
  grid-column: auto;
}
```

### 高级用法

```css
/* 页面布局 */
.page-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

/* 指定列位置 */
.item {
  grid-column: 1 / 3;
}

/* 跨列 */
.span {
  grid-column: 1 / 4;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* 卡片布局 */
.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* 表单布局 */
.form {
  display: grid;
  grid-template-columns: auto 1fr;
}

/* 图片画廊 */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* 带命名的列 */
.named-columns {
  display: grid;
  grid-template-columns: [header-start] 1fr [header-end] 2fr [content-start] 1fr [content-end];
}

.header {
  grid-column: header-start / header-end;
}

.content {
  grid-column: content-start / content-end;
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

- `grid-column` 只在 Grid 容器中有效
- `grid-column` 可以指定 Grid 项目的列起始和结束位置
- 可以使用列名称来指定位置
- `auto` 值表示自动放置

## 相关属性

- [`grid`](./grid)
- [`grid-row`](./grid-row)
- [`grid-area`](./grid-area)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-column](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-column)
- [CSS-Tricks: grid-column](https://css-tricks.com/almanac/properties/g/grid-column/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)