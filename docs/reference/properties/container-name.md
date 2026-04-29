# container-name

container-name 属性定义容器查询的名称。

## 语法

```css
container-name: <custom-ident> | none;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `<custom-ident>` | 容器名称 | `container-name: my-container` |
| `none` | 无容器 | `container-name: none` |

## 示例

### 基础用法

```css
/* 定义容器名称 */
.container {
  container-name: my-container;
}

/* 多个容器名称 */
.container {
  container-name: card sidebar;
}
```

### 高级用法

```css
/* 定义容器 */
.card-container {
  container-name: card;
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

- `container-name` 属性用于定义容器查询的名称
- 容器名称可以在 `@container` 规则中引用
- 可以定义多个容器名称，用空格分隔
- `none` 表示没有容器查询

## 相关属性

- [`container`](./container)
- [`container-type`](./container-type)
- [`@container`](../rules/container)

## 相关资源

- [MDN Web Docs: container-name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/container-name)
- [CSS-Tricks: Container Queries](https://css-tricks.com/snippets/css/a-guide-to-container-queries/)
- [W3C CSS Container Queries](https://www.w3.org/TR/css-contain-3/)