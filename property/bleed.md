# bleed

`bleed` 属性定义打印时页面内容的出血区域，指定内容超出页面边距的部分，确保打印时内容不会被裁剪。

## 语法

```css
bleed: auto | <length>;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 自动计算出血区域（默认） |
| `<length>` | 指定出血距离 |

## 示例

### 基本用法

```css
@page {
  bleed: 10mm;
  size: A4;
  margin: 20mm;
}

.print-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, red, blue);
}
```

### 自动计算

```css
@page {
  bleed: auto;
  size: letter;
}
```

### 不同页面设置

```css
@page:first {
  bleed: 15mm;
  margin: 25mm;
}

@page:odd {
  bleed: 10mm;
  margin: 20mm;
}

@page:even {
  bleed: 10mm;
  margin: 20mm;
}
```

### HTML 示例

```html
<div class="print-content">
  <h1>打印文档</h1>
  <p>此内容将使用出血设置打印</p>
</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |
| Opera | 支持 |
| iOS Safari | 支持 |
| Android Browser | 部分支持 |

## 注意事项

1. **打印专用**：此属性仅用于打印媒体类型
2. **出血区域**：出血区域超出页面边距
3. **背景扩展**：允许背景色/图像延伸到出血区域
4. **打印质量**：确保打印内容不被裁剪
5. **页面设置**：通常与 `@page` 规则配合使用

## 相关属性

- [`size`](size.md) - 页面尺寸
- [`marks`](marks.md) - 裁剪标记
- [`margin`](margin.md) - 页面边距
- [`@page`](../rule/page.md) - 页面规则

## 规范链接

- [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/#bleed)