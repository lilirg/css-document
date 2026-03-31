# transform-box

`transform-box` 属性定义变换的参考框，指定 `transform` 属性使用的边界框类型。

## 语法

```css
transform-box: border-box | fill-box | view-box | content-box | padding-box;
```

### 值

| 值 | 说明 |
| --- | --- |
| `border-box` | 使用边框盒作为参考框（默认） |
| `fill-box` | 使用填充盒作为参考框（SVG） |
| `view-box` | 使用视口盒作为参考框（SVG） |
| `content-box` | 使用内容盒作为参考框 |
| `padding-box` | 使用内边距盒作为参考框 |

## 示例

### 基本用法

```css
.box {
  transform-box: content-box;
  transform: rotate(45deg);
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #333;
  background-color: #f0f0f0;
}
```

### 使用边框盒

```css
.border-box-transform {
  transform-box: border-box;
  transform: scale(1.2);
}
```

### 使用内边距盒

```css
.padding-box-transform {
  transform-box: padding-box;
  transform: rotate(30deg);
}
```

### SVG 元素

```css
svg text {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(45deg);
}
```

### HTML 示例

```html
<div class="box">
  <p>此元素使用内容盒作为变换参考框</p>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 66+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |
| Opera | 53+ |
| iOS Safari | 12+ |
| Android Browser | 66+ |

## 注意事项

1. **参考框**：定义变换操作的参考边界框
2. **默认值**：默认值为 `border-box`
3. **SVG 支持**：`fill-box` 和 `view-box` 主要用于 SVG 元素
4. **transform-origin**：与 `transform-origin` 配合使用
5. **布局影响**：不同的参考框会影响变换效果

## 相关属性

- [`transform`](transform.md) - 变换
- [`transform-origin`](transform-origin.md) - 变换原点
- [`transform-style`](transform-style.md) - 变换样式

## 规范链接

- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/#transform-box)