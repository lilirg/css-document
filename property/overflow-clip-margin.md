# overflow-clip-margin

`overflow-clip-margin` 属性定义当 `overflow` 设置为 `clip` 时，内容可以被裁剪的额外距离，控制裁剪区域的扩展范围。

## 语法

```css
overflow-clip-margin: <length> | <visual-box>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `<length>` | 指定裁剪距离 |
| `visual-box` | 使用视觉边界框 |
| `content-box` | 使用内容盒 |
| `padding-box` | 使用内边距盒 |
| `border-box` | 使用边框盒 |

## 示例

### 基本用法

```css
.clipped-element {
  overflow: clip;
  overflow-clip-margin: 10px;
  width: 200px;
  height: 100px;
}
```

### 使用视觉边界

```css
.visual-clip {
  overflow: clip;
  overflow-clip-margin: visual-box;
}
```

### 配合圆角

```css
.rounded-clip {
  overflow: clip;
  overflow-clip-margin: 5px;
  border-radius: 10px;
}
```

### HTML 示例

```html
<div class="clipped-element">
  <p>此元素的内容将在指定距离内被裁剪</p>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 111+ |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 111+ |
| Opera | 97+ |
| iOS Safari | 不支持 |
| Android Browser | 111+ |

## 注意事项

1. **实验性功能**：此属性仍处于实验阶段
2. **配合 clip**：仅当 `overflow` 为 `clip` 时生效
3. **裁剪扩展**：允许内容在边界外一定距离内可见
4. **性能**：`clip` 比 `hidden` 性能更好
5. **浏览器支持**：浏览器支持有限

## 相关属性

- [`overflow`](overflow.md) - 溢出
- [`overflow-block`](overflow-block.md) - 块溢出
- [`overflow-inline`](overflow-inline.md) - 行内溢出
- [`clip-path`](clip-path.md) - 裁剪路径

## 规范链接

- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#overflow-clip-margin)