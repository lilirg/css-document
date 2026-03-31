# overflow-anchor

`overflow-anchor` 属性定义是否启用自动锚点定位，控制当内容溢出时浏览器是否自动调整滚动位置以保持可见元素的位置。

## 语法

```css
overflow-anchor: auto | none;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 启用自动锚点定位（默认） |
| `none` | 禁用自动锚点定位 |

## 示例

### 基本用法

```css
.scroll-container {
  overflow-y: auto;
  height: 300px;
}

.anchor-element {
  overflow-anchor: auto;
}
```

### 禁用锚点

```css
.no-anchor {
  overflow-anchor: none;
}

.content {
  overflow-y: auto;
  height: 400px;
}
```

### 动态内容

```css
.dynamic-content {
  overflow-anchor: none;
}

.sticky-anchor {
  overflow-anchor: auto;
  position: sticky;
  top: 0;
}
```

### HTML 示例

```html
<div class="scroll-container">
  <div class="anchor-element">锚点元素</div>
  <div style="height: 1000px;">更多内容...</div>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 79+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 79+ |
| Opera | 66+ |
| iOS Safari | 不支持 |
| Android Browser | 79+ |

## 注意事项

1. **自动定位**：`auto` 允许浏览器自动保持元素可见
2. **内容变化**：当内容动态添加/删除时影响滚动位置
3. **性能考虑**：可能影响动态内容更新的性能
4. **兼容性**：浏览器支持有限
5. **滚动容器**：仅在溢出容器上生效

## 相关属性

- [`overflow`](overflow.md) - 溢出
- [`overflow-y`](overflow-y.md) - 垂直溢出
- [`overflow-x`](overflow-x.md) - 水平溢出
- [`position`](position.md) - 定位

## 规范链接

- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#overflow-anchor)