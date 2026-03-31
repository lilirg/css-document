# overflow-block

`overflow-block` 属性定义块方向（垂直方向）上内容溢出时的处理方式，控制当内容超出容器高度时的显示行为。

## 语法

```css
overflow-block: visible | hidden | scroll | auto | clip;
```

### 值

| 值 | 说明 |
| --- | --- |
| `visible` | 内容溢出时可见（默认） |
| `hidden` | 隐藏溢出内容 |
| `scroll` | 始终显示滚动条 |
| `auto` | 需要时显示滚动条 |
| `clip` | 裁剪溢出内容（无滚动条） |

## 示例

### 基本用法

```css
.container {
  overflow-block: auto;
  height: 200px;
  width: 300px;
}
```

### 隐藏溢出

```css
.no-overflow {
  overflow-block: hidden;
  height: 150px;
}
```

### 始终显示滚动条

```css
.always-scroll {
  overflow-block: scroll;
  height: 250px;
}
```

### 配合水平溢出

```css
.flex-container {
  overflow-block: auto;
  overflow-inline: hidden;
  height: 300px;
}
```

### HTML 示例

```html
<div class="container">
  <p>此容器在内容超出高度时显示垂直滚动条</p>
  <div style="height: 500px;">更多内容...</div>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 部分支持 |
| Edge | 支持 |
| Opera | 支持 |
| iOS Safari | 部分支持 |
| Android Browser | 部分支持 |

## 注意事项

1. **块方向**：控制块方向（通常垂直）的溢出
2. **逻辑属性**：是 `overflow-y` 的逻辑属性替代
3. **响应式**：在不同书写模式下自动调整方向
4. **性能**：`clip` 比 `hidden` 性能更好
5. **兼容性**：部分浏览器支持有限

## 相关属性

- [`overflow-inline`](overflow-inline.md) - 行内溢出
- [`overflow`](overflow.md) - 溢出简写
- [`overflow-y`](overflow-y.md) - 垂直溢出
- [`overflow-x`](overflow-x.md) - 水平溢出

## 规范链接

- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#overflow-block)