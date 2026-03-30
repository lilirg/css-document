# orphans

该属性设置元素在页面/列/框分割后，最少需要保留在分割前的行数。

## 语法

```css
orphans: <integer>
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
- 与 `widows` 配合使用
- 防止孤行出现在页面底部

## 示例

```css
/* 最少 2 行 */
.orphan-2 {
  orphans: 2;
}

/* 最少 3 行 */
.orphan-3 {
  orphans: 3;
}
```

```html
<!-- 孤行示例 -->
<p class="orphan-control">
  这是一段长文本，用于测试孤行控制。当文本被分割到不同页面时，
  该属性确保段落开头至少保留指定行数。
</p>
```

## 使用场景

```css
/* 基本孤行控制 */
.basic-orphans {
  orphans: 2;
}

/* 严格孤行控制 */
.strict-orphans {
  orphans: 3;
}

/* 宽松孤行控制 */
.loose-orphans {
  orphans: 1;
}

/* 打印样式 */
.print-orphans {
  orphans: 2;
  widows: 2;
}

/* 文档段落 */
.document-paragraph {
  orphans: 2;
  widows: 2;
}

/* 报告文本 */
.report-text {
  orphans: 3;
  widows: 3;
}

/* 书籍排版 */
.book-layout {
  orphans: 2;
  widows: 2;
}

/* 论文格式 */
.paper-format {
  orphans: 2;
  widows: 2;
}

/* 合同文本 */
.contract-text {
  orphans: 3;
  widows: 3;
}

/* 新闻文章 */
.news-article {
  orphans: 2;
  widows: 2;
}

/* 博客文章 */
.blog-post {
  orphans: 2;
  widows: 2;
}

/* 技术文档 */
.tech-doc {
  orphans: 2;
  widows: 2;
}

/* 用户手册 */
.user-manual {
  orphans: 2;
  widows: 2;
}

/* 白皮书 */
.whitepaper {
  orphans: 3;
  widows: 3;
}

/* 演示文稿 */
.presentation {
  orphans: 2;
  widows: 2;
}

/* 简历 */
.resume {
  orphans: 2;
  widows: 2;
}

/* 求职信 */
.cover-letter {
  orphans: 2;
  widows: 2;
}

/* 商业信函 */
.business-letter {
  orphans: 2;
  widows: 2;
}

/* 电子邮件模板 */
.email-template {
  orphans: 2;
  widows: 2;
}

/* 新闻通讯 */
.newsletter {
  orphans: 2;
  widows: 2;
}

/* 杂志文章 */
.magazine-article {
  orphans: 2;
  widows: 2;
}

/* 报纸文章 */
.newspaper-article {
  orphans: 2;
  widows: 2;
}

/* 学术文章 */
.academic-paper {
  orphans: 3;
  widows: 3;
}

/* 法律文档 */
.legal-document {
  orphans: 3;
  widows: 3;
}

/* 财务报告 */
.financial-report {
  orphans: 2;
  widows: 2;
}

/* 项目提案 */
.project-proposal {
  orphans: 2;
  widows: 2;
}

/* 研究论文 */
.research-paper {
  orphans: 3;
  widows: 3;
}

/* 案例研究 */
.case-study {
  orphans: 2;
  widows: 2;
}

/* 产品说明 */
.product-description {
  orphans: 2;
  widows: 2;
}

/* 规格说明 */
.specification {
  orphans: 2;
  widows: 2;
}

/* 用户指南 */
.user-guide {
  orphans: 2;
  widows: 2;
}

/* 帮助文档 */
.help-document {
  orphans: 2;
  widows: 2;
}

/* FAQ 页面 */
.faq-page {
  orphans: 2;
  widows: 2;
}

/* 条款和条件 */
.terms-conditions {
  orphans: 2;
  widows: 2;
}

/* 隐私政策 */
.privacy-policy {
  orphans: 2;
  widows: 2;
}

/* 响应式孤行 */
.responsive-orphans {
  orphans: 2;
}

@media print {
  .responsive-orphans {
    orphans: 3;
  }
}

/* 多列布局 */
.multicolumn {
  column-count: 3;
  orphans: 2;
  widows: 2;
}

/* 分页控制 */
.page-break {
  orphans: 2;
  widows: 2;
  page-break-inside: avoid;
}
