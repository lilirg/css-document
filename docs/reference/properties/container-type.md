# container-type

container-type 属性定义容器查询的类型。

## 语法

```css
container-type: none | normal | size | inline-size | block-size | layout | style | paint;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `none` | 无容器 | `container-type: none` |
| `normal` | 正常容器 | `container-type: normal` |
| `size` | 尺寸容器 | `container-type: size` |
| `inline-size` | 内联尺寸容器 | `container-type: inline-size` |
| `block-size` | 块尺寸容器 | `container-type: block-size` |
| `layout` | 布局容器 | `container-type: layout` |
| `style` | 样式容器 | `container-type: style` |
| `paint` | 绘制容器 | `container-type: paint` |

## 示例

### 基础用法

```css
/* 尺寸容器 */
.container {
  container-type: size;
}

/* 内联尺寸容器 */
.container {
  container-type: inline-size;
}

/* 块尺寸容器 */
.container {
  container-type: block-size;
}
```

### 高级用法

```css
/* 定义容器 */
.card-container {
  container-type: inline-size;
}

/* 查询容器 */
@container card-container (min-width: 600px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* 响应式布局 */
@container card-container (min-width: 800px) {
  .card {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* 卡片布局 */
@container card-container (min-width: 1000px) {
  .card {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 105+ |
| Firefox | 110+ |
| Safari | 16.1+ |
| Edge | 105+ |
| iOS Safari | 16.1+ |
| Android Browser | 105+ |
| Chrome for Android | 105+ |

## 注意事项

- `container-type` 属性用于定义容器查询的类型
- `size` 表示容器的尺寸可以用于查询
- `inline-size` 表示容器的内联尺寸可以用于查询
- `block-size` 表示容器的块尺寸可以用于查询
- `layout` 表示容器的布局可以用于查询
- `style` 表示容器的样式可以用于查询
- `paint` 表示容器的绘制可以用于查询

## 相关属性

- [`container`](./container)
- [`container-name`](./container-name)
- [`@container`](../rules/container)

## 相关资源

- [MDN Web Docs: container-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/container-type)
- [CSS-Tricks: Container Queries](https://css-tricks.com/snippets/css/a-guide-to-container-queries/)
- [W3C CSS Container Queries](https://www.w3.org/TR/css-contain-3/)