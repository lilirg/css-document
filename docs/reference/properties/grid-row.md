# grid-row

grid-row 属性指定 Grid 项目在 Grid 容器中的行位置和大小。

## 语法

```css
grid-row: <start> / <end>;
grid-row: auto;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<start>` | 行起始线 | `grid-row: 1 / 3` |
| `<end>` | 行结束线 | `grid-row: 1 / 3` |
| `auto` | 自动 | `grid-row: auto` |

## 示例

### 基础用法

```css
/* 指定行位置 */
.item {
  grid-row: 1 / 3;
}

/* 自动行 */
.item {
  grid-row: auto;
}
```

### 高级用法

```css
/* 页面布局 */
.page-layout {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}

/* 指定行位置 */
.item {
  grid-row: 1 / 3;
}

/* 跨行 */
.span {
  grid-row: 1 / 4;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
}

/* 卡片布局 */
.card {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}

/* 表单布局 */
.form {
  display: grid;
  grid-template-rows: auto 1fr;
}

/* 图片画廊 */
.gallery {
  display: grid;
  grid-template-rows: repeat(2, 200px);
}

/* 带命名的行 */
.named-rows {
  display: grid;
  grid-template-rows: [header-start] 1fr [header-end] 2fr [content-start] 1fr [content-end];
}

.header {
  grid-row: header-start / header-end;
}

.content {
  grid-row: content-start / content-end;
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

- `grid-row` 只在 Grid 容器中有效
- `grid-row` 可以指定 Grid 项目的行起始和结束位置
- 可以使用行名称来指定位置
- `auto` 值表示自动放置

## 相关属性

- [`grid`](./grid)
- [`grid-column`](./grid-column)
- [`grid-area`](./grid-area)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-row](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row)
- [CSS-Tricks: grid-row](https://css-tricks.com/almanac/properties/g/grid-row/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)