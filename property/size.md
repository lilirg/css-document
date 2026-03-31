# size

`size` 属性定义分页媒体（如打印）中的页面尺寸和方向。

## 语法

```css
size: auto | <page-size> || [ portrait | landscape ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 不适用（仅用于 `@page` 规则） |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 使用打印机默认页面尺寸 |
| `<page-size>` | 预定义尺寸：`A3`、`A4`、`A5`、`B4`、`B5`、`letter`、`legal` 等 |
| `<length>` | 自定义尺寸，如 `210mm 297mm` |
| `portrait` | 纵向（默认） |
| `landscape` | 横向 |

## 注意

- `size` 属性只能在 `@page` 规则中使用
- 可以指定宽度和高度，也可以只指定一个尺寸
- 尺寸值可以是预定义纸张名称或具体长度值

## 示例

```css
/* 使用 A4 纸张，纵向 */
@page {
  size: A4 portrait;
}

/* 使用 A4 纸张，横向 */
@page {
  size: A4 landscape;
}

/* 自定义尺寸 */
@page {
  size: 210mm 297mm;
}

/* 仅指定宽度，高度自动计算 */
@page {
  size: 8.5in;
}
```

## 使用场景

```css
/* 打印样式表：封面使用 A3 横向，正文使用 A4 纵向 */
@page cover {
  size: A3 landscape;
  margin: 2cm;
}

@page {
  size: A4;
  margin: 2.5cm;
}

/* 第一页使用封面样式 */
body {
  page: cover;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 支持 |
| Firefox | 支持 |
| Safari | 支持 |
| Edge | 支持 |

## 相关属性

- [`bleed`](bleed.md) - 出血设置
- [`marks`](marks.md) - 裁切标记
- [`@page`](../rule/page.md) - 页面规则

## 规范

- [CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/#page-size)