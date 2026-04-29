# container

container 属性定义容器查询的名称和类型。

## 语法

```css
container: <container-name> / <container-type>;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<container-name>` | 容器名称 | `container: my-container / size` |
| `<container-type>` | 容器类型 | `container: my-container / inline-size` |
| `none` | 无容器 | `container: none` |

## 示例

### 基础用法

```css
/* 定义容器名称和类型 */
.container {
  container: my-container / size;
}

/* 只定义容器名称 */
.container {
  container-name: my-container;
}

/* 只定义容器类型 */
.container {
  container-type: size;
}
```

### 高级用法

```css
/* 定义容器 */
.card-container {
  container: card / inline-size;
}

/* 查询容器 */
@container card (min-width: 600px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* 响应式布局 */
@container card (min-width: 800px) {
  .card {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* 卡片布局 */
@container card (min-width: 1000px) {
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

- `container` 属性用于定义容器查询的名称和类型
- 容器查询允许根据容器的大小而不是视口大小来调整布局
- `container-type` 可以是 `size`、`inline-size`、`block-size` 或 `normal`
- `container-name` 可以是任意标识符，用于在 `@container` 规则中引用

## 相关属性

- [`container-name`](./container-name)
- [`container-type`](./container-type)
- [`@container`](../rules/container)

## 相关资源

- [MDN Web Docs: container](https://developer.mozilla.org/zh-CN/docs/Web/CSS/container)
- [CSS-Tricks: Container Queries](https://css-tricks.com/snippets/css/a-guide-to-container-queries/)
- [W3C CSS Container Queries](https://www.w3.org/TR/css-contain-3/)