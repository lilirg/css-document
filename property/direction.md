# direction

该属性设置文本的书写方向。

## 语法

```css
direction: ltr | rtl
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `ltr` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `ltr`
从左到右的书写方向（默认），适用于英文、中文等语言。

### `rtl`
从右到左的书写方向，适用于阿拉伯语、希伯来语等语言。

## 注意

- 该属性主要影响块级元素的文本方向
- 与 `unicode-bidi` 属性配合使用可控制内联文本方向
- 不影响已存在的文本，只影响新插入的内容

## 示例

```css
/* CSS 示例 */
.arabic-text {
  direction: rtl;
}

.english-text {
  direction: ltr;
}
```

```html
<!-- HTML 示例 -->
<div class="arabic-text">مرحبا بالعالم</div>
<div class="english-text">Hello World</div>
```

## 使用场景

```css
/* 1. 阿拉伯语内容 */
.arabic {
  direction: rtl;
  text-align: right;
}

/* 2. 希伯来语内容 */
.hebrew {
  direction: rtl;
  text-align: right;
}

/* 3. 混合内容 - 英文部分 */
.english-part {
  direction: ltr;
}

/* 4. 多语言表单 */
.form-rtl {
  direction: rtl;
}

/* 5. 双向文本 */
.bidi-text {
  direction: ltr;
  unicode-bidi: bidi-override;
}
