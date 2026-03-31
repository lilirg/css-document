# size

`size` 属性定义打印页面的尺寸和方向，指定输出纸张的大小以及是否使用横向或纵向布局。

## 语法

```css
size: auto | <page-size> || [ portrait | landscape ];
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 使用默认页面尺寸（默认） |
| `<page-size>` | 预定义页面尺寸 |
| `A4` | A4 尺寸（210mm × 297mm） |
| `A3` | A3 尺寸（297mm × 420mm） |
| `A5` | A5 尺寸（148mm × 210mm） |
| `Letter` | 信纸尺寸（216mm × 279mm） |
| `Legal` | 法律用纸（216mm × 356mm） |
| `<length>` | 自定义尺寸 |
| `portrait` | 纵向（默认） |
| `landscape` | 横向 |

## 示例

### 基本用法

```css
@page {
  size: A4;
  margin: 20mm;
}

.print-content {
  width: 100%;
  height: 100%;
}
```

### 指定方向

```css
@page {
  size: A4 landscape;
  margin: 15mm;
}
```

### 纵向布局

```css
@page {
  size: A4 portrait;
  margin: 25mm;
}
```

### 自定义尺寸

```css
@page {
  size: 210mm 297mm;
  margin: 20mm;
}
```

### 不同页面类型

```css
@page:first {
  size: A4 landscape;
  margin: 15mm;
}

@page:odd {
  size: A4;
  margin: 20mm;
}

@page:even {
  size: A4;
  margin: 20mm;
}
```

### 使用 Letter 尺寸

```css
@page {
  size: Letter;
  margin: 1in;
}
```

### HTML 示例

```html
<div class="print-content">
  <h1>打印文档</h1>
  <p>此文档使用 A4 横向布局</p>
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
| iOS Safari | 部分支持 |
| Android Browser | 部分支持 |

## 注意事项

1. **打印专用**：此属性仅用于打印媒体类型
2. **页面尺寸**：预定义尺寸基于国际标准
3. **方向设置**：`portrait` 和 `landscape` 控制页面方向
4. **自定义尺寸**：可以使用长度值指定任意尺寸
5. **打印机设置**：实际输出受打印机设置影响
6. **@page 规则**：必须在 `@page` 规则中使用

## 相关属性

- [`bleed`](bleed.md) - 出血区域
- [`marks`](marks.md) - 裁剪标记
- [`margin`](margin.md) - 页面边距
- [`@page`](../rule/page.md) - 页面规则

## 规范链接

- [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/#size)