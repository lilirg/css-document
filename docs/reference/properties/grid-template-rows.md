# grid-template-rows

grid-template-rows 属性定义 Grid 容器中行的大小和数量。

## 语法

```css
grid-template-rows: none | <track-size>... | <auto-repeat> | <auto-track> | subgrid <line-name-list>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 没有显式行 | `grid-template-rows: none` |
| `<track-size>` | 行大小 | `grid-template-rows: 100px 200px` |
| `fr` | 分数单位 | `grid-template-rows: 1fr 2fr` |
| `auto` | 自动大小 | `grid-template-rows: auto 100px` |
| `min-content` | 最小内容 | `grid-template-rows: min-content` |
| `max-content` | 最大内容 | `grid-template-rows: max-content` |
| `repeat()` | 重复 | `grid-template-rows: repeat(3, 1fr)` |
| `auto-fill` | 自动填充 | `grid-template-rows: repeat(auto-fill, 100px)` |
| `auto-fit` | 自动适应 | `grid-template-rows: repeat(auto-fit, 100px)` |

## 示例

### 基础用法

```css
/* 固定行高 */
.fixed-rows {
  grid-template-rows: 100px 200px 300px;
}

/* 弹性行高 */
.flex-rows {
  grid-template-rows: 1fr 2fr 1fr;
}

/* 混合行高 */
.mixed-rows {
  grid-template-rows: 100px 1fr auto;
}

/* 重复行 */
.repeat-rows {
  grid-template-rows: repeat(3, 1fr);
}

/* 自动填充 */
.auto-fill-rows {
  grid-template-rows: repeat(auto-fill, 100px);
}

/* 自动适应 */
.auto-fit-rows {
  grid-template-rows: repeat(auto-fit, 100px);
}
```

### 高级用法

```css
/* Grid 容器 */
.grid-container {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}

/* 响应式布局 */
.responsive {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
}

/* 卡片布局 */
.card {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
}

/* 表单布局 */
.form {
  display: grid;
  grid-template-rows: auto 1fr;
}

/* 图片画廊 */
.gallery {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
}

/* 混合单位 */
.mixed-units {
  grid-template-rows: 100px 1fr minmax(200px, 3fr);
}

/* 带命名的行 */
.named-rows {
  grid-template-rows: [header-start] 1fr [header-end] 2fr [content-start] 1fr [content-end];
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

- `grid-template-rows` 只在 Grid 容器中有效
- `grid-template-rows` 定义 Grid 容器中行的大小和数量
- `fr` 单位表示可用空间的分数
- `repeat()` 函数可以简化重复的行定义
- `auto-fill` 和 `auto-fit` 的区别在于空轨道的处理

## 相关属性

- [`grid`](./grid)
- [`grid-template-columns`](./grid-template-columns)
- [`grid-template-areas`](./grid-template-areas)
- [`grid-template`](./grid-template)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-template-rows](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows)
- [CSS-Tricks: grid-template-rows](https://css-tricks.com/almanac/properties/g/grid-template-rows/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)