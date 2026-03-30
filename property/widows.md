# widows

该属性设置元素在页面/列/框分割后，最少需要保留在分割后的行数。

## 语法

```css
widows: <integer>
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `2`            |
| 适用 HTML 元素 | 块级元素     |
| 动画         | 是             |

## 值

### `<integer>`

使用正整数指定最少行数。

## 注意

- 用于打印布局
- 与 `orphans` 配合使用
- 防止孤行出现在页面顶部

## 示例

```css
/* 最少 2 行 */
.widow-2 {
  widows: 2;
}

/* 最少 3 行 */
.widow-3 {
  widows: 3;
}
```

```html
<!-- 孤行示例 -->
<p class="widow-control">
  这是一段长文本，用于测试孤行控制。当文本被分割到不同页面时，
  该属性确保段落结尾至少保留指定行数。
</p>
```

## 使用场景

```css
/* 基本孤行控制 */
.basic-widows {
  widows: 2;
}

/* 严格孤行控制 */
.strict-widows {
  widows: 3;
}

/* 宽松孤行控制 */
.loose-widows {
  widows: 1;
}

/* 打印样式 */
.print-widows {
  widows: 2;
  orphans: 2;
}

/* 文档段落 */
.document-paragraph {
  widows: 2;
  orphans: 2;
}

/* 报告文本 */
.report-text {
  widows: 3;
  orphans: 3;
}

/* 书籍排版 */
.book-layout {
  widows: 2;
  orphans: 2;
}

/* 论文格式 */
.paper-format {
  widows: 2;
  orphans: 2;
}

/* 合同文本 */
.contract-text {
  widows: 3;
  orphans: 3;
}

/* 新闻文章 */
.news-article {
  widows: 2;
  orphans: 2;
}

/* 博客文章 */
.blog-post {
  widows: 2;
  orphans: 2;
}

/* 技术文档 */
.tech-doc {
  widows: 2;
  orphans: 2;
}

/* 用户手册 */
.user-manual {
  widows: 2;
  orphans: 2;
}

/* 白皮书 */
.whitepaper {
  widows: 3;
  orphans: 3;
}

/* 演示文稿 */
.presentation {
  widows: 2;
  orphans: 2;
}

/* 简历 */
.resume {
  widows: 2;
  orphans: 2;
}

/* 求职信 */
.cover-letter {
  widows: 2;
  orphans: 2;
}

/* 商业信函 */
.business-letter {
  widows: 2;
  orphans: 2;
}

/* 电子邮件模板 */
.email-template {
  widows: 2;
  orphans: 2;
}

/* 新闻通讯 */
.newsletter {
  widows: 2;
  orphans: 2;
}

/* 杂志文章 */
.magazine-article {
  widows: 2;
  orphans: 2;
}

/* 报纸文章 */
.newspaper-article {
  widows: 2;
  orphans: 2;
}

/* 学术文章 */
.academic-paper {
  widows: 3;
  orphans: 3;
}

/* 法律文档 */
.legal-document {
  widows: 3;
  orphans: 3;
}

/* 财务报告 */
.financial-report {
  widows: 2;
  orphans: 2;
}

/* 项目提案 */
.project-proposal {
  widows: 2;
  orphans: 2;
}

/* 研究论文 */
.research-paper {
  widows: 3;
  orphans: 3;
}

/* 案例研究 */
.case-study {
  widows: 2;
  orphans: 2;
}

/* 产品说明 */
.product-description {
  widows: 2;
  orphans: 2;
}

/* 规格说明 */
.specification {
  widows: 2;
  orphans: 2;
}

/* 用户指南 */
.user-guide {
  widows: 2;
  orphans: 2;
}

/* 帮助文档 */
.help-document {
  widows: 2;
  orphans: 2;
}

/* FAQ 页面 */
.faq-page {
  widows: 2;
  orphans: 2;
}

/* 条款和条件 */
.terms-conditions {
  widows: 2;
  orphans: 2;
}

/* 隐私政策 */
.privacy-policy {
  widows: 2;
  orphans: 2;
}

/* 响应式孤行 */
.responsive-widows {
  widows: 2;
}

@media print {
  .responsive-widows {
    widows: 3;
  }
}

/* 多列布局 */
.multicolumn {
  column-count: 3;
  widows: 2;
  orphans: 2;
}

/* 分页控制 */
.page-break {
  widows: 2;
  orphans: 2;
  page-break-inside: avoid;
}

/* 段落优化 */
.paragraph-optimize {
  widows: 2;
  orphans: 2;
  hyphens: auto;
}

/* 文本对齐 */
.text-justify {
  widows: 2;
  orphans: 2;
  text-align: justify;
}

/* 打印优化 */
.print-optimize {
  widows: 2;
  orphans: 2;
  color: #000;
  background: transparent;
}
