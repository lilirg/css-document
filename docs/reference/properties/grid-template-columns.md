# grid-template-columns

grid-template-columns 属性定义 Grid 容器中列的大小和数量。

## 语法

```css
grid-template-columns: none | <track-size>... | <auto-repeat> | <auto-track> | subgrid <line-name-list>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 没有显式列 | `grid-template-columns: none` |
| `<track-size>` | 列大小 | `grid-template-columns: 100px 200px` |
| `fr` | 分数单位 | `grid-template-columns: 1fr 2fr` |
| `auto` | 自动大小 | `grid-template-columns: auto 100px` |
| `min-content` | 最小内容 | `grid-template-columns: min-content` |
| `max-content` | 最大内容 | `grid-template-columns: max-content` |
| `repeat()` | 重复 | `grid-template-columns: repeat(3, 1fr)` |
| `auto-fill` | 自动填充 | `grid-template-columns: repeat(auto-fill, 100px)` |
| `auto-fit` | 自动适应 | `grid-template-columns: repeat(auto-fit, 100px)` |

## 示例

### 基础用法

```css
/* 固定列宽 */
.fixed-columns {
  grid-template-columns: 100px 200px 300px;
}

/* 弹性列宽 */
.flex-columns {
  grid-template-columns: 1fr 2fr 1fr;
}

/* 混合列宽 */
.mixed-columns {
  grid-template-columns: 100px 1fr auto;
}

/* 重复列 */
.repeat-columns {
  grid-template-columns: repeat(3, 1fr);
}

/* 自动填充 */
.auto-fill-columns {
  grid-template-columns: repeat(auto-fill, 100px);
}

/* 自动适应 */
.auto-fit-columns {
  grid-template-columns: repeat(auto-fit, 100px);
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* 卡片布局 */
.card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

/* 表单布局 */
.form {
  display: grid;
  grid-template-columns: auto 1fr;
}

/* 图片画廊 */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* 混合单位 */
.mixed-units {
  grid-template-columns: 100px 1fr minmax(200px, 3fr);
}

/* 带命名的列 */
.named-columns {
  grid-template-columns: [header-start] 1fr [header-end] 2fr [content-start] 1fr [content-end];
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

- `grid-template-columns` 只在 Grid 容器中有效
- `grid-template-columns` 定义 Grid 容器中列的大小和数量
- `fr` 单位表示可用空间的分数
- `repeat()` 函数可以简化重复的列定义
- `auto-fill` 和 `auto-fit` 的区别在于空轨道的处理

## 相关属性

- [`grid`](./grid)
- [`grid-template-rows`](./grid-template-rows)
- [`grid-template-areas`](./grid-template-areas)
- [`grid-template`](./grid-template)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-template-columns](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns)
- [CSS-Tricks: grid-template-columns](https://css-tricks.com/almanac/properties/g/grid-template-columns/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)