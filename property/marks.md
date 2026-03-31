# marks

`marks` 属性定义打印时页面边缘的裁剪标记和套准标记，用于印刷时的精确定位和裁剪参考。

## 语法

```css
marks: none | [ crop || cross ];
```

### 值

| 值 | 说明 |
| --- | --- |
| `none` | 不显示任何标记（默认） |
| `crop` | 显示裁剪标记 |
| `cross` | 显示套准标记 |
| `crop cross` | 同时显示两种标记 |

## 示例

### 基本用法

```css
@page {
  size: A4;
  margin: 20mm;
  marks: crop;
}

.print-content {
  width: 100%;
  height: 100%;
}
```

### 显示套准标记

```css
@page {
  size: A4;
  margin: 25mm;
  marks: cross;
}
```

### 同时显示两种标记

```css
@page {
  size: A4;
  margin: 20mm;
  marks: crop cross;
}
```

### 无标记

```css
@page {
  size: A4;
  margin: 20mm;
  marks: none;
}
```

### 不同页面类型

```css
@page:first {
  size: A4 landscape;
  margin: 15mm;
  marks: crop;
}

@page:odd {
  size: A4;
  margin: 20mm;
  marks: crop cross;
}

@page:even {
  size: A4;
  margin: 20mm;
  marks: crop cross;
}
```

### HTML 示例

```html
<div class="print-content">
  <h1>印刷文档</h1>
  <p>此文档将包含裁剪标记</p>
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
| iOS Safari | 不支持 |
| Android Browser | 部分支持 |

## 注意事项

1. **印刷专用**：此属性主要用于专业印刷场景
2. **裁剪标记**：`crop` 标记指示页面裁剪位置
3. **套准标记**：`cross` 标记用于颜色套准
4. **页面边距**：标记显示在页面边距之外
5. **打印设置**：需要打印机支持才能生效

## 相关属性

- [`bleed`](bleed.md) - 出血区域
- [`size`](size.md) - 页面尺寸
- [`margin`](margin.md) - 页面边距
- [`@page`](../rule/page.md) - 页面规则

## 规范链接

- [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/#marks)