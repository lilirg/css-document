# text-rendering

该属性用于向浏览器提供关于渲染文本的性能、质量和功能方面的信息。

## 语法

```css
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `auto`
默认值。浏览器根据上下文自动选择渲染选项。

### `optimizeSpeed`
优先渲染速度，可能牺牲文本质量。

### `optimizeLegibility`
优先文本可读性，启用字距调整和连字。

### `geometricPrecision`
优先几何精度，文本形状更精确。

## 注意
- 主要用于 SVG 文本渲染
- 在 HTML 中支持有限
- 继承属性
- 性能影响因浏览器而异

## 示例
```css
.speed-priority {
  text-rendering: optimizeSpeed;
}

.legibility-priority {
  text-rendering: optimizeLegibility;
}
```

```html
<p class="speed-priority">
  这个文本优先渲染速度
</p>

<p class="legibility-priority">
  这个文本优先可读性，会启用字距调整和连字
</p>
```

## 使用场景
```css
/* 1. 大量文本快速渲染 */
大量文本 {
  text-rendering: optimizeSpeed;
}

/* 2. 高质量排版 */
高质量排版 {
  text-rendering: optimizeLegibility;
}

/* 3. SVG 文本精确渲染 */
svg-text {
  text-rendering: geometricPrecision;
}

/* 4. 自动选择（默认） */
自动选择 {
  text-rendering: auto;
}
