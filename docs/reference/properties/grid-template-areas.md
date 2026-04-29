# grid-template-areas

grid-template-areas 属性定义 Grid 容器中的区域布局。

## 语法

```css
grid-template-areas: none | <string>...;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 没有区域 | `grid-template-areas: none` |
| `<string>` | 区域名称 | `grid-template-areas: "header header" "main aside"` |

## 示例

### 基础用法

```css
/* 2x2 网格 */
.grid-2x2 {
  grid-template-areas: 
    "header header"
    "main aside";
}

/* 3x3 网格 */
.grid-3x3 {
  grid-template-areas: 
    "header header header"
    "main main aside"
    "footer footer footer";
}

/* 带空区域 */
.grid-with-gap {
  grid-template-areas: 
    "header header header"
    "main . aside"
    "footer footer footer";
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

/* 响应式布局 */
.responsive {
  display: grid;
  grid-template-areas: 
    "header"
    "main"
    "aside"
    "footer";
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
  grid-template-areas: 
    "label input"
    "label input"
    "button button";
}

/* 图片画廊 */
.gallery {
  display: grid;
  grid-template-areas: 
    "image1 image2 image3"
    "image4 image5 image6";
}

/* 带命名的区域 */
.named-areas {
  grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
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

- `grid-template-areas` 只在 Grid 容器中有效
- `grid-template-areas` 定义 Grid 容器中的区域布局
- 区域名称必须是连续的矩形
- 可以使用点号 `.` 表示空区域
- 区域名称在所有行中必须对齐

## 相关属性

- [`grid`](./grid)
- [`grid-template-columns`](./grid-template-columns)
- [`grid-template-rows`](./grid-template-rows)
- [`grid-template`](./grid-template)
- [`display`](./display)

## 相关资源

- [MDN Web Docs: grid-template-areas](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)
- [CSS-Tricks: grid-template-areas](https://css-tricks.com/almanac/properties/g/grid-template-areas/)
- [W3C CSS Grid Layout](https://www.w3.org/TR/css-grid-1/)