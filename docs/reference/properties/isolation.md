# isolation

isolation 属性定义元素是否创建新的层叠上下文。

## 语法

```css
isolation: auto | isolate;
```

## 常见值

| 值 | 说明 | 示例 |
|----|------|------|
| `auto` | 自动 | `isolation: auto` |
| `isolate` | 隔离 | `isolation: isolate` |

## 示例

### 基础用法

```css
/* 自动 */
.auto {
  isolation: auto;
}

/* 隔离 */
.isolate {
  isolation: isolate;
}
```

### 高级用法

```css
/* 容器 */
.container {
  isolation: auto;
}

/* 静态 */
.static {
  isolation: auto;
}

/* 相对 */
.relative {
  isolation: auto;
}

/* 绝对 */
.absolute {
  isolation: auto;
}

/* 固定 */
.fixed {
  isolation: auto;
}

/* 粘性 */
.sticky {
  isolation: auto;
}

/* 响应式布局 */
.responsive {
  isolation: auto;
}

/* 卡片布局 */
.card {
  isolation: auto;
}

/* 表单布局 */
.form {
  isolation: auto;
}

/* 图片画廊 */
.gallery {
  isolation: auto;
}

/* 混合单位 */
.mixed-units {
  isolation: auto;
}

/* 带命名的项目 */
.named-items {
  isolation: auto;
}

/* 悬停效果 */
.card {
  transition: isolation 0.3s ease-in-out;
}

.card:hover {
  isolation: isolate;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 53+ |
| Firefox | 36+ |
| Safari | 9+ |
| Edge | 79+ |
| iOS Safari | 9+ |
| Android Browser | 53+ |
| Chrome for Android | 53+ |

## 注意事项

- `isolation` 可以用于任何元素
- `isolation` 定义元素是否创建新的层叠上下文
- `auto` 是默认值，表示自动

## 相关属性

- [`mix-blend-mode`](./mix-blend-mode)
- [`background-blend-mode`](./background-blend-mode)
- [`filter`](./filter)

## 相关资源

- [MDN Web Docs: isolation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/isolation)
- [CSS-Tricks: isolation](https://css-tricks.com/almanac/properties/i/isolation/)
- [W3C CSS Compositing](https://www.w3.org/TR/compositing-2/)