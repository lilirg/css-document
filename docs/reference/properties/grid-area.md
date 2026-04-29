# grid-area

grid-area 属性指定 Grid 项目在 Grid 容器中的位置和大小。

## 语法

```css
grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
grid-area: <name>;
grid-area: auto;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<row-start>` | 行起始线 | `grid-area: 1 / 1 / 2 / 2` |
| `<column-start>` | 列起始线 | `grid-area: 1 / 1 / 2 / 2` |
| `<row-end>` | 行结束线 | `grid-area: 1 / 1 / 2 / 2` |
| `<column-end>` | 列结束线 | `grid-area: 1 / 1 / 2 / 2` |
| `<name>` | 区域名称 | `grid-area: header` |
| `auto` | 自动 | `grid-area: auto` |

## 示例

### 基础用法

```css
/* 指定位置 */
.item {
  grid-area: 1 / 1 / 2 / 2;
}

/* 指定区域 */
.item {
  grid-area: header;
}

/* 自动位置 */
.item {
  grid-area: auto;
}
```

### 高级用法

```css
/* 页面布局 */
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "main main aside"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
}

/* 卡片布局 */
.card {
  display: grid;
  grid-template-areas: 
    "header header"
    "content content"
    "footer footer";
}

/* 表单布局 */
.form {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
}

/* 图片画廊 */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
}

/* 跨行跨列 */
.span {
  grid-area: 1 / 1 / 3 / 3;
}

/* 带命名的区域 */
.named-areas {
  display: grid;
  grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
}

.nav {
  grid-area: nav;
}

.content {
  grid-area: main;
}

.sidebar {
  grid-area: aside;
}

.footer {
  grid-area: footer;
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

- `grid-area` 只在 Grid 容器中有效
- `grid-area` 可以指定 Grid 项目的起始和结束位置
- 可以使用区域名称来指定位置
- `auto` 值表示自动放置

## 相关属性

- [`grid`](./grid)
- [`grid-area`](./grid-area)
- [`grid-column`](./grid-column)
- [`grid-row`](./grid-row)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-area](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-area)
- [CSS-Tricks: grid-area](https://css-tricks.com/almanac/properties/g/grid-area/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)