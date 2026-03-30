# unicode-bidi

该属性与 `direction` 属性一起使用，设置或返回文本的双向算法。

## 语法

```css
unicode-bidi: normal | embed | bidi-override
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `normal`       |
| 适用 HTML 元素 | 内联元素     |
| 动画         | 否             |

## 值

### `normal`

元素不设置额外的双向算法。

### `embed`

如果元素是内联元素，则设置额外的双向算法。

### `bidi-override`

覆盖双向算法。

## 注意

- 用于多语言文本
- 与 `direction` 配合使用
- 处理 RTL 和 LTR 文本

## 示例

```css
/* 嵌入 */
.embed {
  unicode-bidi: embed;
}

/* 覆盖 */
.override {
  unicode-bidi: bidi-override;
}
```

```html
<!-- Unicode 双向算法示例 -->
<p>English <span class="override">العربية</span> English</p>
```

## 使用场景

```css
/* 正常双向算法 */
.normal-bidi {
  unicode-bidi: normal;
}

/* 嵌入双向算法 */
.embed-bidi {
  unicode-bidi: embed;
}

/* 覆盖双向算法 */
.override-bidi {
  unicode-bidi: bidi-override;
}

/* 从左到右 */
.ltr {
  direction: ltr;
  unicode-bidi: embed;
}

/* 从右到左 */
.rtl {
  direction: rtl;
  unicode-bidi: embed;
}

/* 阿拉伯语覆盖 */
.arabic-override {
  direction: rtl;
  unicode-bidi: bidi-override;
}

/* 希伯来语覆盖 */
.hebrew-override {
  direction: rtl;
  unicode-bidi: bidi-override;
}

/* 混合语言 */
.mixed-language {
  unicode-bidi: embed;
}

/* 内联覆盖 */
.inline-override {
  unicode-bidi: bidi-override;
  direction: rtl;
}

/* 多语言段落 */
.multilingual {
  unicode-bidi: embed;
}

/* 代码片段 */
.code-snippet {
  unicode-bidi: normal;
  direction: ltr;
}

/* 数学表达式 */
.math-expression {
  unicode-bidi: normal;
  direction: ltr;
}

/* 混合文本 */
.mixed-text {
  unicode-bidi: embed;
}

/* 内联嵌入 */
.inline-embed {
  unicode-bidi: embed;
}

/* 块级嵌入 */
.block-embed {
  unicode-bidi: embed;
  display: block;
}

/* 强制 LTR */
.force-ltr {
  unicode-bidi: bidi-override;
  direction: ltr;
}

/* 强制 RTL */
.force-rtl {
  unicode-bidi: bidi-override;
  direction: rtl;
}

/* 多语言标题 */
.multilingual-title {
  unicode-bidi: embed;
}

/* 多语言导航 */
.multilingual-nav {
  unicode-bidi: embed;
}

/* 多语言按钮 */
.multilingual-button {
  unicode-bidi: embed;
}

/* 多语言表单 */
.multilingual-form {
  unicode-bidi: embed;
}

/* 多语言表格 */
.multilingual-table {
  unicode-bidi: embed;
}

/* 多语言列表 */
.multilingual-list {
  unicode-bidi: embed;
}

/* 多语言引用 */
.multilingual-quote {
  unicode-bidi: embed;
}

/* 多语言代码 */
.multilingual-code {
  unicode-bidi: normal;
  direction: ltr;
}

/* 多语言注释 */
.multilingual-comment {
  unicode-bidi: normal;
  direction: ltr;
}

/* 多语言标题 */
.multilingual-header {
  unicode-bidi: embed;
}

/* 多语言页脚 */
.multilingual-footer {
  unicode-bidi: embed;
}

/* 多语言侧边栏 */
.multilingual-sidebar {
  unicode-bidi: embed;
}

/* 多语言主内容 */
.multilingual-main {
  unicode-bidi: embed;
}
