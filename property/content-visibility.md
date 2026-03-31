# content-visibility

`content-visibility` CSS 属性控制元素是否渲染其内容，以及是否跳过渲染以优化性能。

## 语法

```css
/* 关键字值 */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;
```

## 值

### `visible`

元素及其内容正常渲染。这是默认值。

```css
content-visibility: visible;
```

### `hidden`

元素及其内容被隐藏，类似于 `visibility: hidden`，但具有更好的性能优化。

```css
content-visibility: hidden;
```

**效果**：
- 元素不可见
- 布局空间保留
- 内容不渲染
- 比 `visibility: hidden` 性能更好

### `auto`

元素的内容根据视口可见性进行优化渲染。当元素不在视口内时，浏览器可以跳过渲染。

```css
content-visibility: auto;
```

**效果**：
- 元素根据视口位置智能渲染
- 不在视口内的内容不渲染
- 布局空间保留
- 显著提升长列表性能

## 示例

### 长列表优化

```css
/* 列表项使用 content-visibility: auto */
.list-item {
  content-visibility: auto;
  height: 100px;
  padding: 16px;
}

/* 只有可见的列表项会被渲染 */
```

### 大型组件优化

```css
/* 大型图表组件 */
.chart {
  content-visibility: auto;
  height: 400px;
}

/* 当图表不在视口内时，不渲染其内容 */
```

### 与 contain 配合使用

```css
/* 组合使用以获得最佳性能 */
.optimized-component {
  contain: content;
  content-visibility: auto;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 85+ |
| Edge | 85+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Opera | 71+ |

## 注意事项

1. **性能优化**：`content-visibility` 主要用于性能优化，特别适用于长列表和大型组件。

2. **布局保留**：与 `display: none` 不同，`content-visibility` 保留元素的布局空间。

3. **视口检测**：`content-visibility: auto` 需要浏览器检测元素是否在视口内。

4. **浏览器支持**：目前主要在 Chromium 浏览器中支持。

5. **与 visibility 的区别**：
   - `visibility: hidden` - 隐藏但渲染
   - `content-visibility: hidden` - 隐藏且不渲染
   - `content-visibility: auto` - 智能渲染

## 相关属性

- [`contain`](contain.md) - 包含
- [`visibility`](visibility.md) - 可见性
- [`display`](display.md) - 显示类型

## 规范

- [CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/#content-visibility)