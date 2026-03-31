# line-clamp

`line-clamp` CSS 属性用于限制块级元素中显示的最大行数，超出部分会显示省略号。

## 语法

```css
/* 关键字值 */
line-clamp: none;

/* 行数 */
line-clamp: 2;
line-clamp: 3;
```

## 值

### `none`

不限制行数。这是默认值。

```css
line-clamp: none;
```

### 行数

指定要显示的最大行数。

```css
line-clamp: 1;
line-clamp: 2;
line-clamp: 3;
```

## 示例

### 基本用法

```css
/* 限制为 2 行 */
.clamp-2 {
  line-clamp: 2;
}

/* 限制为 3 行 */
.clamp-3 {
  line-clamp: 3;
}
```

### 传统方法（兼容性更好）

```css
/* 多行文本裁剪 */
.multi-line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 卡片描述

```css
/* 卡片文本描述 */
.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 新闻列表

```css
/* 新闻摘要 */
.news-summary {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
}
```

### 实际应用

```css
/* 产品描述 */
.product-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 评论预览 */
.comment-preview {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 文章摘要 */
.article-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 备注 |
|--------|------|------|
| Chrome | 122+ | 原生支持 |
| Edge | 122+ | 原生支持 |
| Firefox | 126+ | 原生支持 |
| Safari | 16.4+ | 原生支持 |
| 旧版浏览器 | - | 使用 `-webkit-line-clamp` |

## 注意事项

1. **需要配合使用**：传统方法需要配合 `display: -webkit-box`、`-webkit-box-orient: vertical` 和 `overflow: hidden`。

2. **浏览器支持**：原生 `line-clamp` 属性较新，建议使用 `-webkit-line-clamp` 以获得更好的兼容性。

3. **行高影响**：裁剪的行数受 `line-height` 影响。

4. **省略号**：超出部分会自动显示省略号。

5. **块级元素**：只适用于块级元素。

6. **可访问性**：被裁剪的内容对屏幕阅读器仍然可见。

## 相关属性

- [`text-overflow`](text-overflow.md) - 文本溢出
- [`overflow`](overflow.md) - 溢出处理
- [`display`](display.md) - 显示类型

## 规范

- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#line-clamp)