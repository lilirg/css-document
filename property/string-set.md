# string-set

`string-set` 属性定义字符串，用于在分页媒体中显示在页眉或页脚。

## 语法

```css
string-set: none | [ <content-list> [ , <content-list> ]* ]
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 不设置字符串 |
| `<content-list>` | 字符串内容列表 |

## 注意

- 仅适用于分页媒体（如打印）
- 与 `@page` 规则的 `string()` 函数配合使用
- 用于在页眉页脚显示动态内容

## 示例

```css
/* 设置章节标题字符串 */
h2 {
  string-set: chapter content();
}

/* 在页眉显示章节标题 */
@page {
  @top-center {
    content: string(chapter);
  }
}
```

## 使用场景

```css
/* 书籍章节标题在页眉显示 */
.chapter-title {
  string-set: title content(text);
}

@page {
  @top-left {
    content: string(title);
  }
  @top-right {
    content: counter(page);
  }
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 不支持 |
| Firefox | 部分支持 |
| Safari | 不支持 |
| Edge | 不支持 |

## 相关属性

- [`@page`](../rule/page.md) - 页面规则
- [`content`](content.md) - 内容

## 规范

- [CSS Generated Content for Paged Media Module](https://www.w3.org/TR/css-gcpm-3/#string-set)