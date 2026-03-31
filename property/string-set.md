# string-set

`string-set` 属性用于定义字符串变量，可在 `content` 属性中使用。

## 语法

```css
string-set: <string-name> <string-value> [, <string-name> <string-value>]*
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<string-name>` | 变量名称 |
| `<string-value>` | 变量值（文本或 `content()`） |

## 注意

- 此属性主要用于 CSS paged media（分页媒体）
- 常与 `@page` 规则配合使用
- 可用于页眉页脚显示章节标题
- 浏览器支持有限

## 示例

```css
/* 定义字符串变量 */
h1 {
  string-set: chapter-title content(text);
}

/* 定义多个变量 */
h2 {
  string-set: section-title content(text), section-number content(counter(section));
}
```

```css
/* 在页眉中使用 */
@page {
  @top-center {
    content: string(chapter-title);
  }
}
```

## 使用场景

```css
/* 1. 章节标题在页眉 */
.chapter {
  string-set: chapter content(text);
}

@page {
  @top-right {
    content: string(chapter);
  }
}

/* 2. 页脚显示页码 */
@page {
  @bottom-center {
    content: "Page " counter(page);
  }
}

/* 3. 显示章节编号 */
.section {
  string-set: section-num counter(section);
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 前缀 |
|--------|------|------|
| Chrome | 不支持 | - |
| Edge | 不支持 | - |
| Firefox | 不支持 | - |
| Safari | 不支持 | - |
| Opera | 不支持 | - |

## 相关属性

- [`content`](content.md) - 内容属性
- [`counter()`](counter.md) - 计数器函数

## 规范

- [CSS Paged Media Module Level 3](https://drafts.csswg.org/css-page-3/)